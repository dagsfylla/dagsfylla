import { Box, Clock, Heading, Text } from 'grommet/es6';
import React from 'react';

class LandingPage extends React.Component {
    render() {
        return (
            <Box fill align="center" height="100vh">
                <Box
                    margin={{
                        bottom: '2em',
                    }}
                    animation={{
                        type: 'slideDown',
                        delay: 0,
                        duration: 1000,
                        size: 'large',
                    }}
                >
                    <Heading
                        style={{
                            fontFamily: 'open sans',
                        }}
                        textAlign="center"
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
                    <Heading
                        size="xlarge"
                        margin="0"
                        textAlign="center"
                        style={{
                            fontFamily: 'open sans',
                        }}
                    >
                        DAGSFYLLA
                    </Heading>
                </Box>

                <Box
                    animation={{
                        type: 'fadeIn',
                        delay: 1000,
                        duration: 1000,
                        size: 'large',
                    }}
                >
                    <Clock type="digital" size="xlarge" />
                </Box>

                <Box
                    margin="1em"
                    animation={{
                        type: 'fadeIn',
                        delay: 1000,
                        duration: 1000,
                        size: 'large',
                    }}
                >
                    <Text>Velkommen til dagsfylla.no.</Text>
                </Box>
            </Box>
        );
    }
}

export default LandingPage;
