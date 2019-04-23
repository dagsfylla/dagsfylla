import React from 'react';

import { Bar } from 'grommet-icons';

import { Heading } from 'grommet';
import BigClock from '../../components/BigClock/index';

import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';

import { Card, CardText, CardTitle, Col, Container, Row, CardBody, Alert } from 'reactstrap';
import { StyledCardBody } from './style';

class ListView extends React.Component {
    render() {
        let {
            events,
            match: { url },
        } = this.props;

        if (events.length === 0) {
            return (
                <Container>
                    <Row style={{ margin: 20 }}>
                        <Col style={{ textAlign: 'center' }}>
                            <Heading>Kjære dagsfylla-menneske</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Card>
                                <CardTitle style={{ textAlign: 'center', marginTop: 20 }}>
                                    <h4>Velkommen til din fyllareise</h4>
                                </CardTitle>
                                <hr />
                                <CardBody>
                                    <CardText>
                                        Dagsfylla.no er for deg som vil gjøre det lille ekstra når du skal på fylla.
                                    </CardText>
                                    <CardText>
                                        Vi kan se du ikke har laget noen arrangementer, så derfor passer det seg med en
                                        liten introduksjon.
                                    </CardText>
                                    <Alert color="danger">ALARM ALARM ALLE MAN TIL PUMPENE DET ER TID FOR DAGSFYLLA</Alert>
                                    <CardText>
                                        Man lager et arrangement ved å trykke "Opprett arrangement" oppe til høyre på
                                        siden. Etter at et arrangement er laget så kan du kopiere linken og sende til
                                        dine venner, gjerne gjennom populære medier som messenger.
                                    </CardText>
                                    <CardText>
                                        Dersom du synes dette er et lættis konsept, eller har andre innspill, send oss
                                        gjerne en mail på post@dagsfylla.no.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        }

        return (
            <Container>
                <div style={{ marginBottom: 25 }}>
                    <Row style={{ margin: 10 }}>
                        <Col sm="12" md={{ size: 6, offset: 3 }} style={{ textAlign: 'center' }}>
                            <Heading>Tid til neste dagsfylla</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ textAlign: 'center' }}>
                            <BigClock date={events[0].starttime} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }} style={{ textAlign: 'center' }}>
                            <i>Det er intenst</i>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} style={{ textAlign: 'center' }}>
                        <h4>En oversikt over fremtidige dagsfylla</h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        {events.map((event, i) => (
                            <Card
                                style={{ margin: 10 }}
                                key={i}
                                onClick={() => this.props.history.push(`${url}/${event.ref}`)}
                            >
                                <StyledCardBody>
                                    <Row>
                                        <Col sm="3">
                                            <Bar />
                                        </Col>
                                        <Col sm="9">
                                            <CardTitle>
                                                <h6>{event.name}</h6>
                                            </CardTitle>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="4">
                                            <CardText>
                                                Antall: <i>{event.participantCount}</i>
                                            </CardText>
                                        </Col>
                                        <Col sm="4">
                                            <CardText>
                                                {event.description && event.description.substring(0, 15) + '..'}
                                            </CardText>
                                        </Col>
                                        <Col>
                                            <CardText>
                                                Dager til:{' '}
                                                {differenceInCalendarDays(new Date(event.starttime), new Date())}
                                            </CardText>
                                        </Col>
                                    </Row>
                                </StyledCardBody>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ListView;
