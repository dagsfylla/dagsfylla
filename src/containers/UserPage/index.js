import React from 'react';
import {Box, Button, Heading, Paragraph, Collapsible, Text} from 'grommet';
import { Route, Switch, Link } from 'react-router-dom';
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
    state = {
        openNotification: false
    };
    render() {
        console.log(`${this.props.match.url}/:id`);

        let { match } = this.props;
        const { openNotification } = this.state;
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
                    <Button icon={<Notification />} onClick={() => {
                        this.setState({ openNotification: !openNotification })
                    }} />
                </AppBar>
                <Box flex direction="row">
                    <Box fill align="center">

                        <Heading textAlign="center">{match.params.username}</Heading>
                        <Paragraph>Dette skal bli deres dagsfyllaplanlegger, {match.params.username}</Paragraph>
                    </Box>
                    <Collapsible direction="horizontal" open={openNotification}>
                        <Box
                            flex
                            width="medium"
                            background="light-2"
                            pad="small"
                            elevation="small"
                        >
                            <Text size="xlarge">MYE dagsfylla her</Text>
                        </Box>
                    </Collapsible>
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
