import React from 'react';
import {Box, Button, Heading, Paragraph} from 'grommet';
import { BrowserRouter as Route, Switch, Link } from 'react-router-dom';
import ListView from './ListView';
import DetailView from './DetailView';
import {Notification} from "grommet-icons";

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
    render() {
        let { match } = this.props;
        console.log('in user page');
        console.log(match.path);
        return (
            <Box fill>
                <AppBar>
                    <Link to='/' style={{
                        textDecoration: 'none',
                        color: 'white',
                    }}>
                        <Heading level='3' margin='none'>
                            Dagsfylla.no
                        </Heading>
                    </Link>
                    <Button icon={<Notification />} onClick={() => {}} />
                </AppBar>
                <Box fill align="center">
                    <Heading textAlign="center">{match.params.username}</Heading>
                    <Paragraph>Dette skal bli din dagsfyllaplanlegger, {match.params.username}</Paragraph>
                </Box>
                <Switch>
                    <Route path={match.url} component={ListView} />
                    <Route path={`${match.url}/:id`} component={DetailView} />
                </Switch>
            </Box>
        );
    }
}

export default UserPage;
