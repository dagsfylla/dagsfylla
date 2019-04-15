import React, { Component } from 'react';

import {
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    Label,
    Input,
    Container,
    CardText,
    Button,
 } from 'reactstrap';


import BlogPostForm from '../../components/BlogPostForm/index';
import BlogCards from './BlogCards';
import { Route, Switch } from 'react-router-dom';

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

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts : [
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
                    "author": "Andre",
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
                    "text": "heiaheia",
                    "type": "Fanmail",
                    "id": 232464732563,
                    "votes": 6,
                    "date": "2019-03-12",
                },
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
                activeFilters:  arr,
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
                });
            } else {
                item.checked = false
            }
        })
    };


    render() { 

        let { posts, activeFilters, activeSort } = this.state;

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
                        <BlogCards posts={posts} filters={filters} activeFilters={activeFilters} activeSort={activeSort} />
                    </Col>
                    <Col lg="3" sm="9">
                        <Card style={{margin: 10}}>
                            <CardTitle style={{margin: 10}}><h4>Lag bloggpost</h4></CardTitle>
                            <CardBody>
                                <CardText>Noe viktig å tenke over</CardText>
                                <ul>
                                    <li>blabla</li>
                                    <li>blabla</li>
                                </ul>
                                {/*<Button
                                    color="primary"
                                    onClick={() => this.props.history.push(`${this.props.url}/create-post`)}
                                >
                                    Lag post
                                </Button>*/}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Switch>
                    <Route exact path={"/create-post"} component={BlogPostForm} />
                </Switch>
            </Container>

        );
    }
}
 
export default Blog;