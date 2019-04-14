import React from 'react';
import { Box, Button, Calendar, Text } from 'grommet/es6';
import { FormNextLink, FormPreviousLink } from 'grommet-icons/es6';

class DatePicker extends React.Component {
    render() {
        return (
            <Calendar
                date={this.props.value}
                onSelect={e => {
                    this.props.onChange({ value: e.split('T')[0] });
                }}
                size="small"
                bounds={[new Date(), '2100-01-01']}
                header={({ date: currentDate, locale, onPreviousMonth, onNextMonth, previousInBound, nextInBound }) => (
                    <Box direction="row" align="center" justify="between">
                        <Button disabled={!previousInBound} onClick={onPreviousMonth}>
                            <Box>
                                <FormPreviousLink />
                            </Box>
                        </Button>
                        <Text size="small">
                            <strong>
                                {currentDate.toLocaleDateString(locale, {
                                    month: 'long',
                                    year: 'numeric',
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
        );
    }
}

export default DatePicker;
