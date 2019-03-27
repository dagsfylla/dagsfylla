import React from 'react';

import {
    Box,
    Clock,
    Text,
} from 'grommet';



class ListView extends React.Component {



    getAllFylla = () => {

    }


    render() {
        return (
            <Box align="center" justify="start" pad="large">
                <Clock type="digital" />
                <Text>Skriver noe her</Text>
            </Box>
        );
    }
}

export default ListView;
