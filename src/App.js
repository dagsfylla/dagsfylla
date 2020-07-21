import React, { Component } from 'react';
import { Box, Grommet } from 'grommet';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './containers/LandingPage';
import UserPage from './containers/UserPage';
import DayDrunkForm from './components/DayDrunkForm/index';
import Blogg from './containers/BlogPage/index';

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
                    <Box fill align="center" style={{minHeight: '100vh'}}>
                        <Switch>
                            <Route exact path={'/'} component={LandingPage} />
                            <Route exact path={'/:username/create-event'} component={DayDrunkForm} />
                            <Route exact path={'/:username/blogg'} component={Blogg} />
                            <Route strict path={'/:username'} component={UserPage} />
                        </Switch>
                    </Box>
                </Grommet>
            </Router>
        );
    }
}

export default App;
