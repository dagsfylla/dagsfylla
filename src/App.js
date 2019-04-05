import React, {Component} from 'react';
import {
    Box, 
    Grommet, 
    Heading,
    Button,
} from 'grommet';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import LandingPage from './containers/LandingPage';
import UserPage from "./containers/UserPage";
import DayDrunkForm from "./components/DayDrunkForm/index";

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
    constructor(props){
        super(props);
    }

    render() {


        return (
            <Router>
                <Grommet theme={theme} full>
                    
                    <Box fill align="center" height="100vh">
                        <Switch>
                            <Route exact path={'/'} component={LandingPage} />
                            <Route exact path={'/create-event'} component={DayDrunkForm} />
                            <Route path={'/:username'} component={UserPage} />
                        </Switch>
                    </Box>
                    <Box height="small" background="neutral-2" fill="horizontal">
                        <Heading level="3" textAlign="center">
                            All rights reserved
                        </Heading>
                    </Box>
                </Grommet>
            </Router>
        );
    }
}

export default App;
