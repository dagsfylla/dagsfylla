import React from 'react';

import { Box, Clock, Text, Heading, Button, Grid, Paragraph, Collapsible } from 'grommet';
import { format } from 'date-fns';

class ListView extends React.Component {
    render() {
        let {
            events,
            openNotification,
            match: { url },
        } = this.props;

        return (
            <div>
                <Box align="center" justify="center" pad="large">
                    <Heading>Tid til neste dagsfylla</Heading>
                    <Clock type="digital" />
                    <Text>Det er intenst</Text>
                </Box>
                <Collapsible direction="horizontal" open={openNotification}>
                    <Box align="center" justify="start" pad="large">
                        <Heading level={3}>Kommende dagsfylla</Heading>
                        {events.map((event, index) => (
                            <Grid
                                key={event.ref}
                                columns={{
                                    count: 2,
                                    size: 'auto',
                                }}
                                gap="small"
                            >
                                <Box align="center" justify="start" pad="small">
                                    <Button
                                        key={index}
                                        primary
                                        label={`${event.name}`}
                                        onClick={() => this.props.history.push(`${url}/${event.ref}`)}
                                    />
                                </Box>
                                <Box align="center" justify="start">
                                    <Paragraph>{format(new Date(event.starttime), 'dddd DD-MM-YYYY HH:mm')}</Paragraph>
                                    <Paragraph>{event.location}</Paragraph>
                                </Box>
                            </Grid>
                        ))}
                    </Box>
                </Collapsible>
            </div>
        );
    }
}

export default ListView;
