import React, {Component} from 'react';
import {Box, Grommet, Heading} from 'grommet';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import UserPage from "./containers/UserPage";
import TestForm from "./containers/TestPage";
import TestGetUsername from "./containers/TestPage/TestGetUsername";

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
            <Router>
                <Grommet theme={theme} full>
                    <Box fill align="center" height="100vh">
                        <Switch>
                            <Route exact path={'/'} component={LandingPage} />
                            <Route exact path={'/test-fauna'} component={TestForm} />
                            <Route path={'/test-fauna/:username'} component={TestGetUsername} />
                            <Route path={'/:username'} component={UserPage} />
                        </Switch>
                    </Box>

                    <Box height="medium" background="neutral-2" fill="horizontal">
                        <Heading level="3" textAlign="center">
                            This is the footer
                        </Heading>
                    </Box>
                </Grommet>
            </Router>
        );
    }
}

export default App;
