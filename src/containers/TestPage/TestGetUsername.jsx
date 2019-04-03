import React from 'react';
import update from 'immutability-helper';
import styled from 'styled-components';
import * as Service from './service';
import { Heading } from 'grommet';
import CreateEventForm from './CreateEventForm';
import getRef from "../../utils/getRef";


const StyledTr = styled.td`
  padding: 1em;
`;


class TestGetUsername extends React.Component {
    state = {
        events: [],
        user: {},
        createOpen: false,
    };

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        Service.getUserByUsername(this.getUsername()).then(user => {
            this.setState({
                user,
            });
            this.getEvents(getRef(user));
        });
    };

    getEvents = userRef => {
        Service.getEventsForUser(userRef).then(response =>
            this.setState({
                events: response.data,
            })
        );
    };

    getUsername = () => {
        return this.props.match.params.username;
    };

    updateEvent = event => {
        let eventRef = getRef(event);
        let data = {};
        Service.updateEvent(eventRef, data).then(event => {
            let { events } = this.state;
            let index = events.findIndex(e => getRef(e) === eventRef);
            this.setState(
                update(this.state, {
                    events: {
                        $splice: [[index, 1, event]],
                    },
                })
            );
        });
    };

    createEvent = data => {
        data.user = getRef(this.state.user);
        Service.createEvent(data)
            .then(event => this.setState(update(this.state, {
                events: {
                    $splice: [[0, 0, event]]
                }
            })));
    };

    deleteEvent = (event, i) => {
        let eventRef = getRef(event);
        Service.deleteEvent(eventRef)
            .then(() => this.setState(update(this.state, {
                events: {
                    $splice: [[i, 1]]
                }
            })))
    };



    render() {
        let username = this.getUsername();
        let { events, createOpen } = this.state;
        return (
            <div>
                <Heading level="1">Hello, {username}</Heading>
                <Heading level="3">Upcoming events</Heading>
                <button onClick={() => this.setState(state => ({ createOpen: !state.createOpen }))}>
                    Create new event
                </button>
                {createOpen ? <CreateEventForm onSubmit={this.createEvent} /> : null}
                <table width="100%">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, i) => (
                            <tr key={event.ref}>
                                <StyledTr>{event.data.starttime}</StyledTr>
                                <StyledTr>{event.data.name}</StyledTr>
                                <StyledTr>{event.data.location}</StyledTr>
                                <StyledTr>
                                    <button onClick={() => this.deleteEvent(event, i)}>Delete</button>
                                </StyledTr>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TestGetUsername;
