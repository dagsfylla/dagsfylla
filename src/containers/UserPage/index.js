import React from 'react';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Route, Switch, Link } from 'react-router-dom';
import ListView from './ListView';
import DetailView from './DetailView';
import { Notification } from 'grommet-icons';

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

const exampleEvents = [
    { id: 1, name: 'dagsfylla1' },
    { id: 2, name: 'dagsfylla2' },
    { id: 3, name: 'dagsfylla3' },
    { id: 4, name: 'dagsfylla4' },
];

class UserPage extends React.Component {
    render() {
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
                    <Button icon={<Notification />} onClick={() => {}} />
                </AppBar>
                <Box fill align="center" height="100vh">
                    <Heading textAlign="center">{params.username}</Heading>
                    <Paragraph>Dette skal bli din dagsfyllaplanlegger, {params.username}</Paragraph>

                    <ul>
                        {exampleEvents.map(({ id, name }) => (
                            <li>
                                <Link to={`${url}/${id}`}>{name}</Link>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Switch>
                    <Route exact path={path} component={ListView} />
                    <Route path={`${path}/:id`} render={
                        props => <DetailView {...props} events={exampleEvents} />
                    } />
                </Switch>
            </Box>
        );
    }
}

export default UserPage;
