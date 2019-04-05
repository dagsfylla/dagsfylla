import React from "react";


import {
    Box,
    Button,
    Form,
    FormField,
    RadioButton,
    CheckBox,
    Calendar,
    Text,
    TextArea,
} from "grommet";

import { FormPreviousLink, FormNextLink } from "grommet-icons";


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

class DayDrunkForm extends React.Component {

    state = {
        checked: false,
    };

    onSelect = nextDate => {
        const { date } = this.state;
        this.setState({ date: nextDate !== date ? nextDate : undefined });
    };

    onChange = event => this.setState({ checked: event.target.checked });


    render() {
        const { date, checked } = this.state;
        console.log(date);
        return(
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Form
                        onReset={event => console.log(event)}
                        onSubmit={({ value }) => console.log("Submit", value)}
                    >
                        <FormField
                            label="Gruppenavn"
                            name="gruppenavn"
                            required
                            validate={{ regexp: /^[a-z]/i }}
                        />
                        <FormField
                            label="Adresse"
                            name="adresse"
                            required
                            validate={{ regexp: /^[a-z]/i }}
                        />
                        <FormField
                            label="Antall deltagere"
                            name="deltagere"
                            required
                            validate={{ regexp: /^[0-9]{1,6}$/, message: "1-5 digits" }}
                        />
                        <FormField
                            label="Fylla når?"
                            name="døgntid"
                            component={RadioButtonGroup}
                            pad
                            options={["DAGSFYLLA", "kveldsfylla"]}
                        />
                        <FormField
                            name="privat"
                            component={CheckBox}
                            pad
                            label="Privat arrangement?"
                        />
                        <FormField 
                            label="Dato" 
                            name="dato"
                        >
                            <Calendar
                                date={date}
                                onSelect={this.onSelect}
                                size="small"
                                bounds={["2019-03-03", "2019-12-31"]}
                                header={({
                                date: currentDate,
                                locale,
                                onPreviousMonth,
                                onNextMonth,
                                previousInBound,
                                nextInBound
                                }) => (
                                <Box direction="row" align="center" justify="between">
                                    <Button disabled={!previousInBound} onClick={onPreviousMonth}>
                                    <Box>
                                        <FormPreviousLink />
                                    </Box>
                                    </Button>
                                    <Text size="small">
                                    <strong>
                                        {currentDate.toLocaleDateString(locale, {
                                        month: "long",
                                        year: "numeric"
                                        })}
                                    </strong>
                                    </Text>
                                    <Button disabled={!nextInBound} onClick={onNextMonth}>
                                    <Box>
                                        <FormNextLink />
                                    </Box>
                                    </Button>
                                </Box>
                                )}
                            />
                        </FormField>
                        <FormField label="Beskrivelse" name="beskrivelse" component={TextArea} />
                        <Box direction="row" justify="between" margin={{ top: "medium" }}>
                            <Button label="Avbryt" />
                            <Button type="reset" label="Nullstill" />
                            <Button type="submit" label="Opprett" primary />
                        </Box>
                    </Form>
                </Box>
            </Box>
        )
    }

}

export default DayDrunkForm;