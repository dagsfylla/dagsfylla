import React, { Component } from 'react';

import { Bar, Article, Announce, Achievement } from 'grommet-icons';

import { 
    Col,
    Row,
    Card,
    CardBody,
    CardText,
    CardTitle,
    Label,
    Input,
    Container
 } from 'reactstrap';

class Blogg extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories : [
                {
                    "author": "Martin Egeli",
                    "title": "The best quote in the world",
                    "text": "Pils er pils",
                    "type": "Sitater",
                    "id": 232464732564,
                },
                {
                    "author": "Lars Ankile",
                    "title": "Best drinking game ever",
                    "text": "Woop woop - også drikker vi",
                    "type": "Drikkeleker",
                    "id": 232464732563,
                },
                {
                    "author": "Christian BV",
                    "title": "Da jeg bæsja på dt",
                    "text": "Det var så jævlig lang dokø, og jeg bare kunne ikke holde meg",
                    "type": "Historier",
                    "id": 232464732563,
                }
            ],
            filters :
                {
                "type": [
                    "Historier", 
                    "Drikkeleker", 
                    "Fanmail", 
                    "Sitater"
                ],
                "sorting": [
                    "Populært",
                    "Nyeste",
                    "Eldst"
                ]
            }
        }
    }




    render() { 

        let icons = [<Article />, <Bar />, <Announce />, <Achievement />]

        let { stories, filters } = this.state;

        return (
            <Container>
            <Row>
                <Col lg="3" sm="9">
                    <Card style={{margin: 10}}>
                        <CardTitle style={{margin: 10}}><h4>Velg filtrering</h4></CardTitle>
                        <CardBody>
                            <h6>Typer</h6>
                            <ul>
                            {filters.type.map((item, i) => (
                                <li>
                                    <Label check key={i}>
                                        <Input type="checkbox" id="checkbox2" />{' '}
                                        {item}
                                    </Label>
                                </li>
                            ))}
                            </ul>
                            <h6>Sortering</h6>
                            <ul>
                            {filters.sorting.map((item, i) => (
                                <li>
                                    <Label check key={i}>
                                        <Input type="checkbox" id="checkbox2" />{' '}
                                        {item}
                                    </Label>
                                </li>
                            ))}
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="6" sm="9">
                    {stories.map((item, i ) => (
                        <Card key={i} style={{margin: 10}}>
                            <Container style={{margin: 10}}>
                                <Row>
                                    <Col sm="3">
                                        {icons[filters.type.indexOf(item.type)]}
                                    </Col>
                                    <Col sm="9">
                                        <CardTitle><h6>{item.title}</h6></CardTitle>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="4">
                                        <CardText><i>{item.author}</i></CardText>
                                    </Col>
                                    <Col sm="8">
                                        <CardText>{item.text.substring(0,20) + ".."}</CardText>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                    ))}
                </Col>
            </Row>
            </Container> 

        );
    }
}
 
export default Blogg;