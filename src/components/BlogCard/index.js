import React, { Component } from 'react';

import { Bar, Article, Announce, Achievement, Up, Down } from 'grommet-icons';

import { StyledCardBody } from './/style';

import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';

import { CardBodyScroll } from '../../containers/UserPage/style';

import { Col, Row, CardText, CardTitle, Collapse, Card } from 'reactstrap';

class BlogCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    };

    handleUp = () => {};

    handleDown = () => {};

    render() {
        let icons = [<Article />, <Bar />, <Announce />, <Achievement />];

        let { post, filters } = this.props;

        let distance = differenceInCalendarDays(new Date(), new Date(post.date.split('-')));

        return (
            <Card style={{ margin: 10 }}>
                <StyledCardBody onClick={this.toggle}>
                    <Row>
                        <Col sm="3">{icons[filters.type.indexOf(post.type)]}</Col>
                        <Col sm="9">
                            <CardTitle>
                                <h6>{post.title}</h6>
                            </CardTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4">
                            <CardText>
                                <i>{post.author}</i>
                            </CardText>
                        </Col>
                        <Col sm="4">
                            <CardText>{post.text.substring(0, 10) + '..'}</CardText>
                        </Col>
                        <Col>
                            <CardText>Dager siden: {distance}</CardText>
                        </Col>
                    </Row>
                </StyledCardBody>
                <Collapse isOpen={this.state.collapse}>
                    <CardBodyScroll style={{ maxHeight: 400 }}>
                        <Row>
                            <Col md="10">{post.text}</Col>
                            <Col md="2">
                                <Row>
                                    <Col>
                                        <Up onClick={this.handleUp} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ marginLeft: 5 }}>
                                        <CardText>{post.votes}</CardText>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Down onClick={this.handleDown} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBodyScroll>
                </Collapse>
            </Card>
        );
    }
}

export default BlogCard;
