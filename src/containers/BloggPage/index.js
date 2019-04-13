import React, { Component } from 'react';

import BloggCard from '../../components/BloggCard/index';

import differenceInCalendarDays from 'date-fns/difference_in_calendar_days'

import { 
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    Label,
    Input,
    Container,
 } from 'reactstrap';

let filters =
    {
        "type": [
            "Historie",
            "Drikkelek",
            "Fanmail",
            "Sitat"
        ],
        "sorting": [
            {
                name: "Nyeste",
                checked: true
            },
            {
                name: "Eldst",
                checked: false
            },
            {
                name: "Populært",
                checked: false

            }
        ]
    };

class Blogg extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories : [
                {
                    "author": "Martin Egeli",
                    "title": "The best quote in the world",
                    "text": "Pils er pils",
                    "type": "Sitat",
                    "id": 232464732564,
                    "votes": 5,
                    "date": "2019-03-20",
                },
                {
                    "author": "Lars Ankile",
                    "title": "Best drinking game ever",
                    "text": "Woop woop - også drikker vi",
                    "type": "Drikkelek",
                    "id": 232464732563,
                    "votes": 23,
                    "date": "2019-04-12",
                },
                {
                    "author": "Christian BV",
                    "title": "Da jeg bæsja på dt",
                    "text": "Det var så jævlig lang dokø, og jeg bare kunne ikke holde meg",
                    "type": "Historie",
                    "id": 232464732563,
                    "votes": -2,
                    "date": "2019-01-27",
                },
                {
                    "author": "Andre Egeli",
                    "title": "Jeg elsker dere!!",
                    "text": "Fyfaen dere er rå",
                    "type": "Fanmail",
                    "id": 232464732563,
                    "votes": 3,
                    "date": "2017-03-12",
                },
                {
                    "author": "Mamma",
                    "title": "God drikkelek",
                    "text": "Lambo lambo",
                    "type": "Drikkelek",
                    "id": 232464732563,
                    "votes": 80,
                    "date": "2018-04-08",
                },
                {
                    "author": "Pappa",
                    "title": "Dette er bra gutta",
                    "text": "",
                    "type": "Fanmail",
                    "id": 232464732563,
                    "votes": 6,
                    "date": "2019-03-12",
                }
            ],
            activeFilters: [],
            activeSort: ["Nyeste"],
        }
    }

    handleFilter = (e) => {
        let { activeFilters } = this.state;
        let filter = e.target.name;
        if (activeFilters.find(o => o === filter)) {
            let arr = [...this.state.activeFilters];
            arr.splice(arr.indexOf(filter), 1);
            this.setState({
                activeFilters:  arr
            })
        } else {
            this.setState(prevState => (
                { activeFilters: [...prevState.activeFilters, filter] }
            ))
        }
    };

    handleSort = (e) => {
        filters.sorting.forEach((item) => {
            if (item.name === e.target.name) {
                item.checked = true;
                this.setState({
                    activeSort: item.name,
                })
            } else {
                item.checked = false
            }
        })
    };

    render() { 

        let { stories, activeFilters, activeSort } = this.state;

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
                                    <li key={i}>
                                        <Label check>
                                            <Input type="checkbox"
                                                   id={`checkbox${i}`}
                                                   onChange={this.handleFilter}
                                                   name={item}
                                            />
                                            {item}
                                        </Label>
                                    </li>
                                ))}
                                </ul>
                                <h6>Sortering</h6>
                                <ul>
                                    {filters.sorting.map((item, i) => (
                                        <li key={i}>
                                            <Label check>
                                                <Input
                                                    type="radio"
                                                    id={`radio${i}`}
                                                    onChange={this.handleSort}
                                                    name={item.name}
                                                    checked={item.checked}
                                                />
                                                {item.name}
                                            </Label>
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6" sm="9">
                        {stories
                            .filter(o => activeFilters.includes(o.type) || !(activeFilters.some(r=> filters.type.includes(r))))
                            .sort((a,b) => {
                                if (activeSort.includes("Populært")) {
                                    return (b.votes - a.votes)
                                } else if (activeSort.includes("Eldst")){
                                    return (differenceInCalendarDays(
                                        new Date(),
                                        new Date(b.date.split('-'))
                                    )) - differenceInCalendarDays(
                                        new Date(),
                                        new Date(a.date.split('-'))
                                    )
                                } else if (activeSort.includes("Nyeste")){
                                    return (differenceInCalendarDays(
                                        new Date(),
                                        new Date(a.date.split('-'))
                                    )) - differenceInCalendarDays(
                                        new Date(),
                                        new Date(b.date.split('-'))
                                    )
                                }
                                return a - b;
                            })
                            .map((item, i) => (
                            <BloggCard item={item} filters={filters} key={i} />
                        ))}
                    </Col>
                </Row>
            </Container> 

        );
    }
}
 
export default Blogg;