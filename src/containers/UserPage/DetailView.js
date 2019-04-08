import React from 'react';

import BigClock from '../../components/BigClock/index';

import {
    Heading
} from 'grommet';
import { 
    Container, Row, Col, Card, CardText, Input, CardHeader, Button, CardBody
 } from 'reactstrap';

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

    events = []

    render() {
        let { detail, participants } = this.state

        let date = this.state.detail.date.split('-').concat(this.state.detail.time.split(':'))

        /*
        let {
            match: { params },
            events,
        } = this.props;

        let event = events.find(({ id }) => id === parseInt(params.id, 10));

        if (!event) {
            return <h3>No event found</h3>;
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
                        <Row style={{margin: 25}}>
                            <Col style={{textAlign: "center"}}>
                                <BigClock date={date} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="9">
                                <Card style={{height: 338}}>
                                    <CardHeader><h4>Beskrivelse</h4></CardHeader>
                                    <CardBody>
                                        <CardText style={{textAlign: "center"}}><i>{detail.description}</i></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="3">
                                <Card style={{height: 338}}>
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
                    <Card style={{margin: 20, height: 600}}>
                        <CardHeader><h4>Praktisk info</h4></CardHeader>
                        <CardBody>
                            <CardText>Adresse: <i>{detail.address}</i></CardText>
                            <CardText>Type fylla: <i>{detail.type}</i></CardText>
                            <CardText>Dato: <i>{detail.date}</i></CardText>
                            <CardText>Tidspunkt: <i>{detail.date}</i></CardText>
                            <CardText>Antall: <i>{detail.maxPeople}</i></CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default DetailView;
