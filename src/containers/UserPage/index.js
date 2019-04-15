import React from 'react';
import { Box } from 'grommet';
import { Route, Switch } from 'react-router-dom';

import * as Service from './service';

import ListView from './ListView';
import DetailView from './DetailView';
import getUserIfAbsent from '../../utils/getUserIfAbsent';
import NavBar from '../../components/NavBar';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        let username = props.match.params.username;

        // Check if current user is already stored in local storage and get if it is not
        getUserIfAbsent(username).then(userRef =>
            Service.getEventsForUser(userRef).then(events => this.setState({ events }))
        );
    }

    state = {
        openNotification: false,
        events: [],
    };

    render() {
        let {
            match,
            match: { path, url },
        } = this.props;
        let { openNotification, events } = this.state;

        return (
            <Box fill>
                <NavBar url={url} />
                <Switch>
                    <Route
                        exact
                        path={match.url}
                        render={props => <ListView {...props} openNotification={openNotification} events={events} />}
                    />
                    <Route path={`${path}/:id`} render={props => <DetailView {...props} events={events} />} />
                </Switch>
            </Box>
        );
    }
}

export default UserPage;
