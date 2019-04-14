import React from 'react';

import BigClock from '../../components/BigClock/index';
import { CardBodyScroll } from './style';

import { Heading } from 'grommet';
import { Container, Row, Col, Card, CardText, Input, CardHeader, Button, CardBody } from 'reactstrap';

class DetailView extends React.Component {
    render() {
        let {
            match: {
                params: { id },
            },
        } = this.props;

        console.log('id', id);
        console.log('events', this.props.events);

        let event = this.props.events.find(e => e.ref === id);

        return (
            <Row style={{ marginTop: 20, marginLeft: 0, marginRight: 0 }}>
                {event ? (
                    <Container>
                        <Row style={{ margin: 25 }}>
                            <Col sm="12" md={{ size: 6, offset: 3 }} style={{ textAlign: 'center' }}>
                                <Heading>{event.name}</Heading>
                            </Col>
                        </Row>
                        <Row style={{ margin: 25 }}>
                            <Col style={{ textAlign: 'center' }}>
                                <BigClock date={event.starttime} />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" sm="12">
                                <Card style={{ height: 400 }}>
                                    <CardHeader>
                                        <h4>Beskrivelse</h4>
                                    </CardHeader>
                                    <CardBodyScroll>
                                        <CardText style={{ textAlign: 'center' }}>
                                            <i>{event.description}</i>
                                        </CardText>
                                    </CardBodyScroll>
                                </Card>
                            </Col>
                            <Col lg="3" sm="6">
                                <Card style={{ height: 400 }}>
                                    <CardHeader>
                                        <h4>Deltagere</h4>
                                    </CardHeader>
                                    <Row>
                                        <Col style={{ paddingRight: 0 }}>
                                            <Input
                                                type="text"
                                                name="participants"
                                                placeholder="skriv navn her .."
                                            />
                                        </Col>
                                        <Col xs="auto" style={{ paddingLeft: 0 }}>
                                            <Button>Legg til</Button>
                                        </Col>
                                    </Row>
                                    <CardBodyScroll>
                                        {event.participants
                                            ? event.participants.map((participant, i) => (
                                                  <Row>
                                                      <p>{participant}</p>
                                                  </Row>
                                              ))
                                            : null}
                                    </CardBodyScroll>
                                </Card>
                            </Col>
                            <Col lg="3" sm="6">
                                <Card style={{ height: 400 }}>
                                    <CardHeader>
                                        <h4>Praktisk info</h4>
                                    </CardHeader>
                                    <CardBodyScroll>
                                        <CardText>
                                            Adresse: <i>{event.address}</i>
                                        </CardText>
                                        <CardText>
                                            Type fylla: <i>{event.type}</i>
                                        </CardText>
                                        <CardText>
                                            Dato: <i>{event.date}</i>
                                        </CardText>
                                        <CardText>
                                            Tidspunkt: <i>{event.time}</i>
                                        </CardText>
                                        <CardText>
                                            Antall: <i>{event.maxPeople}</i>
                                        </CardText>
                                        <CardText>
                                            Byensjef: <i>Tanigan</i>
                                        </CardText>
                                    </CardBodyScroll>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                ) : null}
            </Row>
        );
    }
}

export default DetailView;
