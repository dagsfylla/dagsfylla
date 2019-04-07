import React from 'react';
import { 
    Box,
    Heading,
    Paragraph,
    Button,
} from 'grommet';
import {Bar} from "grommet-icons";
import { Route, Switch, Link } from 'react-router-dom';
import ListView from './ListView';
import DetailView from './DetailView';

const AppBar = props => (
    <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        style={{ zIndex: '1' }}
        {...props}
    />
);
        
class UserPage extends React.Component {

    state = {
        openNotification: false
    };

    render() {    

        let { match } = this.props;
        let { openNotification } = this.state;

        let {
            match: { url, path, params },
        } = this.props;

        return (
            <Box fill>
                <AppBar>
                    <Link
                        to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                        }}
                    >
                        <Heading level="3" margin="none">
                            Dagsfylla.no
                        </Heading>
                    </Link>
                    <Link to='/create-event' style={{
                        textDecoration: 'none',
                        color: 'white',
                    }}>
                        <Heading level='4' margin='none'>
                            Opprett arrangement
                        </Heading>
                    </Link>
                    <Button icon={<Bar />} onClick={() => {
                        this.setState({ openNotification: !openNotification })
                    }} />
                </AppBar>
                <Switch>
                    <Route 
                        exact path={match.url} 
                        component={() => <ListView openNotification={openNotification} />} />
                    <Route path={`${path}/:id`} render={
                        props => <DetailView {...props} />
                    } />
                </Switch>
            </Box>
        );
    }
}

export default UserPage;
