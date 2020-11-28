import React from 'react';

import styled from 'styled-components';

//import Form from "../../components/Form/index";

import { Row, Col } from 'reactstrap';


const Form = styled.form`
    min-width: 100%;
    border: 1px solid grey;
    margin-top: 20px;
    padding: 10px 10px 10px 10px;
    &:hover {
        border: 3px solid grey;
    }
    border-radius: 5px;
    input {
        width: 100%;
        margin: 5px 5px 5px 5px;
    }
    input[type=text] {
        border: none;
        border-bottom: 3px solid blue;
    }
    input[type=text]:focus {
        border: 3px solid #555;
    }
    input[type=submit] {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
    }
`

class CreateEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    handleSubmit = () => {
        //tbd
        return;
    };


    render() {
        return (
            <div>
                <Form>
                    <Col>
                        <Row>
                            <label> Arrangementnavn
                        <input type="text" name="eventName" />
                            </label>
                        </Row>
                        <Row>
                            <label> Sted
                        <input type="text" name="place" />
                            </label>
                        </Row>
                        <Row>
                            <label> Antall deltagere
                        <input type="number" name="participants" />
                            </label>
                        </Row>
                        <Row>
                            <label> Hvordan type fylla?
                            <select>
                                    <option value="Dagsfylla">Dagsfylla</option>
                                    <option value="Kveldsfylla">Kveldsfylla</option>
                                    <option value="Den magiske timen">Den magiske timen</option>
                                </select>
                            </label>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                <input type="submit" name="submitEvent" value="Start ditt eventyr!" />
                            </Col>
                        </Row>
                    </Col>
                </Form>
            </div>
        );
    }
}

export default CreateEventPage;