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

    state = {};

    onSelect = nextDate => {
        const { date } = this.state;
        this.setState({ date: nextDate !== date ? nextDate : undefined });
    };

    render() {
        const { date } = this.state;

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
                            label="Max deltagere"
                            name="deltagere"
                            required
                            validate={{ regexp: /^[0-9]{4,6}$/, message: "4-6 digits" }}
                        />
                        <FormField
                            label="Fylla når?"
                            name="ampm"
                            component={RadioButtonGroup}
                            pad
                            options={["DAGSFYLLA", "kveldsfylla"]}
                        />
                        <FormField label="Label" htmlFor="check-box">
                            <Box pad={{ horizontal: "small", vertical: "xsmall" }}>
                                <CheckBox id="check-box" label="Public?" />
                            </Box>
                        </FormField>
                        <FormField label="Date">
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
                        <Box direction="row" justify="between" margin={{ top: "medium" }}>
                            <Button label="Cancel" />
                            <Button type="reset" label="Reset" />
                            <Button type="submit" label="Update" primary />
                        </Box>
                    </Form>
                </Box>
            </Box>
        )
    }

}

export default DayDrunkForm;