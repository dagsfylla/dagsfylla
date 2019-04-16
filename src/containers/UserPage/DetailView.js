import React from 'react';
import { format } from 'date-fns';

import BigClock from '../../components/BigClock/index';
import { CardBodyScroll } from './style';

import { Heading, Button } from 'grommet';
import { Card, CardHeader, CardText, Col, Container, Row } from 'reactstrap';
import { LinkPrevious } from 'grommet-icons';

class DetailView extends React.Component {
    render() {
        let {
            match: {
                params: { id },
                url,
            },
        } = this.props;

        let event = this.props.events.find(e => e.ref === id);

        if (!event) {
            return null;
        }
        let [date, time] = format(new Date(event.starttime), 'DD-MM-YYYY HH:mm').split(' ');

        return (
            <div>
                <Row style={{width: '100vw'}}>
                    <Container>
                        <Button
                            label={'Tilbake til oversikt'}
                            icon={<LinkPrevious />}
                            margin={'small'}
                            onClick={() => this.props.history.push(`${url.split('/')[0]}/${url.split('/')[1]}`)}
                        />
                    </Container>
                </Row>
                <Row style={{ marginTop: 20, marginLeft: 0, marginRight: 0 }}>
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
                            {/* Commented out because it is not yet implemented */}
                            {/*<Col lg="3" sm="6">*/}
                            {/*<Card style={{ height: 400 }}>*/}
                            {/*<CardHeader>*/}
                            {/*<h4>Deltagere</h4>*/}
                            {/*</CardHeader>*/}
                            {/*<Row>*/}
                            {/*<Col style={{ paddingRight: 0 }}>*/}
                            {/*<Input type="text" name="participants" placeholder="skriv navn her .." />*/}
                            {/*</Col>*/}
                            {/*<Col xs="auto" style={{ paddingLeft: 0 }}>*/}
                            {/*<Button>Legg til</Button>*/}
                            {/*</Col>*/}
                            {/*</Row>*/}
                            {/*<CardBodyScroll>*/}
                            {/*{event.participants*/}
                            {/*? event.participants.map(participant => (*/}
                            {/*<Row key={participant}>*/}
                            {/*<p>{participant}</p>*/}
                            {/*</Row>*/}
                            {/*))*/}
                            {/*: null}*/}
                            {/*</CardBodyScroll>*/}
                            {/*</Card>*/}
                            {/*</Col>*/}
                            <Col lg="6" sm="6">
                                <Card style={{ height: 400 }}>
                                    <CardHeader>
                                        <h4>Praktisk info</h4>
                                    </CardHeader>
                                    <CardBodyScroll>
                                        <CardText>
                                            Sted: <i>{event.location}</i>
                                        </CardText>
                                        <CardText>
                                            Type fylla: <i>{event.type}</i>
                                        </CardText>
                                        <CardText>
                                            Dato: <i>{date}</i>
                                        </CardText>
                                        <CardText>
                                            Tidspunkt: <i>{time}</i>
                                        </CardText>
                                        <CardText>
                                            Antall: <i>{event.participantCount}</i>
                                        </CardText>
                                    </CardBodyScroll>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}

export default DetailView;
