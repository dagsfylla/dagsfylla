import { Box, Clock, Heading, Text } from 'grommet/es6';
import React from 'react';
import { Button, Form, FormField } from 'grommet';
import { Redirect } from 'react-router-dom';

class LandingPage extends React.Component {
    state = {
        redirectUsername: '',
    };

    render() {
        let { redirectUsername } = this.state;
        if (redirectUsername && redirectUsername.length > 0) {
            return <Redirect to={`/${redirectUsername}`} />;
        }
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
                            marginBottom: '-0.25em',
                        }}
                        textAlign="center"
                        size="xlarge"
                        color="#0645ad"
                        margin={{
                            vertical: 'xsmall',
                            horizontal: 'xsmall',
                        }}
                    >
                        CHALLENGE
                    </Heading>
                    <Heading
                        size="xlarge"
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
                <Box
                    margin="1em"
                    animation={{
                        type: 'fadeIn',
                        delay: 1000,
                        duration: 1000,
                        size: 'large',
                    }}
                >
                    <Text>For å komme igang, skriv inn ditt ønskede brukernavn under:</Text>
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
                    <Form onSubmit={e => this.props.history.push(e.value.username.replace(/ /g, '-'))}>
                        <FormField name="username" label="Brukernavn" />
                        <Button type="submit" primary label="Gå" />
                    </Form>
                </Box>
            </Box>
        );
    }
}

export default LandingPage;
