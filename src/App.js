import React, { Component } from 'react';
import { Box, Grommet, Heading } from 'grommet';

const theme = {
    global: {
        colors: {
            brand: '#e62256',
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        },
    },
};

class App extends Component {
    render() {
        return (
            <Grommet theme={theme} full>
                <Box
                    fill
                    align="center"
                    height="100vh"
                    animation={{
                        type: 'slideDown',
                        delay: 0,
                        duration: 1000,
                        size: 'large',
                    }}
                >
                    <Heading
                        size="xlarge"
                        color="#0645ad"
                        margin={{
                            vertical: 0,
                            horizontal: 0,
                            bottom: '-0.2em',
                        }}
                    >
                        CHALLENGE
                    </Heading>
                    <Heading size="xlarge" margin="0">
                        DAGSFYLLA
                    </Heading>
                </Box>
            </Grommet>
        );
    }
}

export default App;
