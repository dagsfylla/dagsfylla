import React from 'react';

import BigClock from '../../components/BigClock/index';

import {
    Heading
} from 'grommet';
import { 
    Container, Row, Col, Card, CardText, Input, CardHeader, Button, CardBody
 } from 'reactstrap';
 import differenceInSeconds from 'date-fns/difference_in_seconds'

const second = 1,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      /*
let countDown = new Date('Sep 30, 2019 00:00:00').getTime(),
x = setInterval(function() {
    let now = new Date().getTime(),
        distance = countDown - now;
*/

class DetailView extends React.Component {

    state = {
        detail: 
        {
            "name": "Proggenach",
            "address": "Klostergata 37B",
            "maxPeople": 2,
            "type": "Kveldsfylla",
            "public": true,
            "date": "2019-04-07",
            "time": "23:00",
            "description": "Lets get the MVP"
        },
        participants: ["Martin", "Lars"],
    }

    getSeconds = () => {
        let date = this.state.detail.date.split('-').concat(this.state.detail.time.split(':'))
        var results = differenceInSeconds(new Date(date[0], date[1], date[2], date[3], date[4], 0), new Date());
        return results
    }

    

    render() {
        let { detail, participants } = this.state

        let distance = this.getSeconds()

        let date = this.state.detail.date.split('-').concat(this.state.detail.time.split(':'))

        /*
        let {
            match: {
                params
            },
            events,
        } = this.props;

        let event = events.find(({ id }) => id === parseInt(params.id));

        if (!event) {
            return <h3>No event found</h3>
        }
        */
        return (
            <Row style={{marginTop: 20}}>
                <Col xs="9">
                    <Container>
                        <Row style={{margin: 25}}>
                            <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign: "center"}}>
                                <Heading>{detail.name}</Heading>
                            </Col>
                        </Row>
                        <Row >
                            <BigClock date={date} />
                        </Row>
                        <Row>
                            <Col sm="9">
                                <Card>
                                    <CardHeader><h4>Beskrivelse</h4></CardHeader>
                                    <CardText style={{textAlign: "center"}}><i>{detail.description}</i></CardText>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card>
                                    <CardHeader><h4>Deltagere</h4></CardHeader>
                                    <Row>
                                        <Col>
                                            <Input type="text" name="participants" placeholder="skriv navn her .." />
                                        </Col>
                                        <Col sm="auto">
                                            <Button>Legg til</Button>
                                        </Col>
                                    </Row>
                                    <CardBody>
                                        {participants.map((participant, i) => (
                                            <Row>
                                                <p>{participant}</p>
                                            </Row>
                                        ))}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs="3">
                    <Card style={{margin: 20}}>
                        <CardHeader><h4>Praktisk info</h4></CardHeader>
                        <CardText>{detail.address}</CardText>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default DetailView;
