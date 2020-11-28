import React from 'react';

import { StyledForm } from './style.js';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <StyledForm>
                <label>
                    <input type="text" name="" />
                </label>
            </StyledForm>
        );
    }
}

export default Form;