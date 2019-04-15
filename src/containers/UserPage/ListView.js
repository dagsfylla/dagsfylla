import React from 'react';

import { Bar } from 'grommet-icons';

import { Heading } from 'grommet';
import BigClock from '../../components/BigClock/index';

import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'

import { Row, Container, Col, Card, CardTitle, CardText } from 'reactstrap';
import { StyledCardBody } from './style';

class ListView extends React.Component {
    render() {
        let {
            events,
            match: { url },
        } = this.props;

        if (events.length === 0) {
            return (
                <div>
                    There is no events
                </div>
            )
        }

        let closestEvent = events.sort((a,b) => a.starttime - b.starttime)[0];

        return (
            <Container>
                <div style={{marginBottom: 25}}>
                    <Row style={{margin: 10}}>
                        <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign: "center"}}>
                            <Heading>Tid til neste dagsfylla</Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{textAlign: "center"}}>
                            <BigClock date={closestEvent.starttime} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign: "center"}}>
                            <i>Det er intenst</i>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} style={{textAlign: "center"}}>
                        <h4>En oversikt over fremtidige dagsfylla</h4>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                {events.map((event, i) => (
                    <Card
                        style={{margin: 10}}
                        key={i}
                        onClick={() => this.props.history.push(`${url}${event.ref}`)}>
                        <StyledCardBody>
                            <Row>
                                <Col sm="3">
                                    <Bar />
                                </Col>
                                <Col sm="9">
                                    <CardTitle><h6>{event.name}</h6></CardTitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="4">
                                    <CardText>Antall: <i>{event.participantCount}</i></CardText>
                                </Col>
                                <Col sm="4">
                                    <CardText>{event.description.substring(0,15) + ".."}</CardText>
                                </Col>
                                <Col>
                                    <CardText>Dager til: {differenceInCalendarDays(new Date(event.starttime), new Date())}</CardText>
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
