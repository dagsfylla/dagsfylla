import React from 'react';

import { Box, Heading, Text } from 'grommet';

class DetailView extends React.Component {
    state = {
        events: [],
    };

    render() {
        let { detail } = this.state;

        let {
            match: { params },
            events,
        } = this.props;

        let event = events.find(({ id }) => id === parseInt(params.id, 10));

        if (!event) {
            return <h3>No event found</h3>;
        }
        return (
            <Box>
                <Box pad="large" align="center" round gap="small">
                    <Heading>{detail.name}</Heading>
                    <Text size={'large'}>{detail.address}</Text>
                </Box>
                <Box pad="large" align="center" round gap="small" />
            </Box>
        );
    }
}

export default DetailView;
