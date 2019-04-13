import React from 'react';

import BigClock from '../../components/BigClock/index';
import { CardBodyScroll } from './style';

import {
    Heading
} from 'grommet';
import { 
    Container, Row, Col, Card, CardText, Input, CardHeader, Button
 } from 'reactstrap';

class DetailView extends React.Component {
    state = {
        detail:
        {
            "name": "Byen med gutta",
            "address": "Stovnerfaret 42",
            "maxPeople": 100,
            "type": "Kveldsfylla",
            "public": true,
            "date": "2019-04-13",
            "time": "19:00",
            "description": "Gutta! \n\n I morgen er det fylla. Finn frem smirnoff ice, breezer og pils."
        },
        participants: ["Martin", "Håvard", "André", "Tanigan", "Robin", "Boye", "Patrik", "Tobias"],
        events: []
    }

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
            <Row style={{marginTop: 20, marginLeft: 0, marginRight: 0}}>
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
                        <Col lg="6" sm="12">
                            <Card style={{height: 400}}>
                                <CardHeader><h4>Beskrivelse</h4></CardHeader>
                                <CardBodyScroll>
                                    <CardText style={{textAlign: "center"}}><i>{detail.description}</i></CardText>
                                </CardBodyScroll>
                            </Card>
                        </Col>
                        <Col lg="3" sm="6">
                            <Card style={{height: 400}}>
                                <CardHeader><h4>Deltagere</h4></CardHeader>
                                <Row>
                                    <Col style={{paddingRight: 0}}>
                                        <Input type="text" name="participants" placeholder="skriv navn her .." />
                                    </Col>
                                    <Col xs="auto" style={{paddingLeft: 0}}>
                                        <Button>Legg til</Button>
                                    </Col>
                                </Row>
                                <CardBodyScroll>
                                    {participants.map((participant, i) => (
                                        <Row>
                                            <p>{participant}</p>
                                        </Row>
                                    ))}
                                </CardBodyScroll>
                            </Card>
                        </Col>
                        <Col lg="3" sm="6">
                            <Card style={{height: 400}}>
                                <CardHeader><h4>Praktisk info</h4></CardHeader>
                                <CardBodyScroll>
                                    <CardText>Adresse: <i>{detail.address}</i></CardText>
                                    <CardText>Type fylla: <i>{detail.type}</i></CardText>
                                    <CardText>Dato: <i>{detail.date}</i></CardText>
                                    <CardText>Tidspunkt: <i>{detail.time}</i></CardText>
                                    <CardText>Antall: <i>{detail.maxPeople}</i></CardText>
                                    <CardText>Byensjef: <i>Tanigan</i></CardText>
                                </CardBodyScroll>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default DetailView;
