import React from 'react';

import Form from "../../components/Form/index";

import { Row, Col } from 'reactstrap';


class CreateEventPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Form />
            </div>
        );
    }
}

export default CreateEventPage;