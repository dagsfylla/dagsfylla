import React from 'react';
import { Box, Button, Heading, Paragraph, Menu } from 'grommet';
import { Route, Switch, Link } from 'react-router-dom';
import ListView from './ListView';
import DetailView from './DetailView';
import {Notification} from "grommet-icons";
import DayDrunkForm from "../../components/DayDrunkForm/index";

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
                    <Menu
                        label="Menu"
                        items={[
                            { label: 'See event', onClick: () => {
                                this.props.history.push(``)
                            } },
                            { label: 'Create event', onClick: () => {
                                /*<Redirect to='/create-event' />*/
                                this.props.history.push(`${match.path}/create-event`)
                            } },
                        ]}
                        />
                    <Button icon={<Notification />} onClick={() => {
                        this.setState({ openNotification: !openNotification })
                    }} />
                </AppBar>
                <Box flex direction="row">
                    <Box fill align="center">
                        <Heading textAlign="center">{match.params.username}</Heading>
                        <Paragraph>Velkommen til deres helt egne dagsfyllaplanlegger</Paragraph>
                    </Box>
                </Box>
                <Switch>
                    <Route path={match.url} component={ListView} />
                    <Route path={`${match.url}/:id`} component={DetailView} />
                    <Route path={`${match.url}/create-event`} component={DayDrunkForm} />
                </Switch>
            </Box>
        );
    }
}

export default UserPage;
