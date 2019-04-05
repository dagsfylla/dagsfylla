import React from 'react';

import {
    Box, Heading, Text
} from 'grommet';


class DetailView extends React.Component {

    state = {
        detail: 
        {
            "name": "Guttakrutt",
            "address": "Klostergata 37B",
            "maxPeople": 150,
            "type": "DAGSFYLLA",
            "public": true,
        }
    }

    render() {
        let { detail } = this.state
        return (
            <Box>
                <Box
                    pad="large"
                    align="center"
                    round
                    gap="small"
                >
                    <Heading>{detail.name}</Heading>
                    <Text size={"large"}>{detail.address}</Text>
                </Box>
                <Box 
                    pad="large" 
                    align="center" 
                    round 
                    gap="small"
                >
                    
                </Box>
            </Box>
        );
    }
}

export default DetailView;
