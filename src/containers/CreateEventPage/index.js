import React, { Component, useState } from 'react';

import styled from 'styled-components';



import {
    Col,
    Row,
    Form,
    DatePicker,
    TimePicker,
    Button,
    Radio,
    Input,
    Select
} from 'antd';



/*

const Form = styled.form`
    min-width: 100%;
    border: 1px solid grey;
    margin-top: 20px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    input {
        width: 100%;
        margin: 5px 5px 5px 5px;
    }
    input[type=text] {
        border: none;
        border-bottom: 1px solid blue;
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
*/


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};


class CreateEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const onFinish = (fieldsValue) => {
            const values = {
                ...fieldsValue,
                'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss')
            }
        }
        return (
            <div>
                {/*
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
                */}
                <Form
                    {...formItemLayout}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onFinish}
                >
                    <Form.Item label="Arrangementnavn">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Sted">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Antall deltagere">
                        <Input rules={[{ type: 'number' }]} />
                    </Form.Item>

                    <Form.Item label="Type fylla" name="dagsfylla">
                        <Radio.Group>
                            <Radio.Button value="Dagsfylla">Dagsfylla</Radio.Button>
                            <Radio.Button value="Kveldsfylla">Kveldsfylla</Radio.Button>
                            <Radio.Button value="Annen">Annen</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            xs: { span: 24, offset: 0 },
                            sm: { span: 16, offset: 8 },
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CreateEventPage;