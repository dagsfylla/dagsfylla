import React from 'react';

import { Box, Button, CheckBox, Form, FormField, MaskedInput, RadioButton, TextArea } from 'grommet';
import { getTime } from 'date-fns';

import * as Service from '../../containers/UserPage/service';

import getUserIfAbsent from '../../utils/getUserIfAbsent';
import DatePicker from '../DatePicker';
import { Redirect } from 'react-router-dom';
import getRef from '../../utils/getRef';

const RadioButtonGroup = ({ name, onChange, options, value }) => (
    <Box gap="small">
        {options.map(option => (
            <Box key={option}>
                <RadioButton
                    name={name}
                    value={option}
                    label={option}
                    checked={value === option}
                    onChange={() => onChange({ value: option })}
                />
            </Box>
        ))}
    </Box>
);

const TimePicker = ({ name, onChange, options, value }) => (
    <MaskedInput
        mask={[
            {
                length: 2,
                options: Array.apply(null, { length: 24 }).map((elem, i) => (i < 10 ? `0${i}` : `${i}`)),
                placeholder: 'hh',
                regexp: /^1[1-2]$|^[0-9]$/,
            },
            { fixed: ':' },
            {
                length: 2,
                options: Array.apply(null, { length: 60 }).map((elem, i) => (i < 10 ? `0${i}` : `${i}`)),
                placeholder: 'mm',
                regexp: /^[0-5][0-9]$|^[0-9]$/,
            },
        ]}
        value={value}
        onChange={onChange}
    />
);

class DayDrunkForm extends React.Component {
    state = {
        checked: false,
        createdEventRef: null,
    };

    constructor(props) {
        super(props);
        let username = props.match.params.username;
        // Check if current user is already stored in local storage and get if it is not
        getUserIfAbsent(username);
    }

    handleSubmit = ({ value }) => {
        value.user = JSON.parse(localStorage.getItem('user')).ref;
        value.starttime = getTime(new Date(`${value.date}T${value.time}`));
        delete value.date;
        delete value.time;
        Service.createEvent(value).then(event => this.setState({ createdEventRef: getRef(event) }));
    };

    render() {
        if (this.state.createdEventRef) {
            return <Redirect to={`/${this.props.match.params.username}/${this.state.createdEventRef}`} />;
        }
        return (
            <Box fill align="center" justify="center" pad="large">
                <Box width="medium">
                    <Form onSubmit={this.handleSubmit}>
                        <FormField label="Arrangementnavn" name="name" required />
                        <FormField label="Sted" name="location" />
                        <FormField
                            label="Antall deltagere"
                            name="participantCount"
                            required
                            validate={{ regexp: /^[0-9]{1,6}$/, message: '1-5 digits' }}
                        />
                        <FormField
                            label="Type"
                            name="type"
                            component={RadioButtonGroup}
                            pad
                            required
                            options={['Dagsfylla', 'Kveldsfylla', 'Annen']}
                        />
                        <FormField name="privateEvent" component={CheckBox} pad label="Privat arrangement?" />
                        <FormField label="Dato" name="date" required component={DatePicker} />
                        <FormField label="Tid" name="time" required component={TimePicker} />
                        <FormField label="Beskrivelse" name="beskrivelse" component={TextArea} />
                        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                            <Button label="Avbryt" />
                            <Button type="reset" label="Nullstill" />
                            <Button type="submit" label="Opprett" primary />
                        </Box>
                    </Form>
                    <p style={{ visibility: 'hidden' }}>Herro</p>
                </Box>
            </Box>
        );
    }
}

export default DayDrunkForm;
