import React from 'react';
import { Box, Button, Heading } from 'grommet/es6';
import { Link } from 'react-router-dom';
import { List } from 'grommet-icons';
import { UncontrolledTooltip } from 'reactstrap';

export default function NavBar(props) {
    return (
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
        >
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
            <Link
                to={`${props.url}/create-event`}
                style={{
                    textDecoration: 'none',
                    color: 'white',
                }}
            >
                <Heading level="4" margin="none">
                    Opprett arrangement
                </Heading>
            </Link>
            <Link to={props.url}>
                <Button id='listview-button' icon={<List />} />
            </Link>
            <UncontrolledTooltip placement='bottom' target='listview-button'>
                Gå tilbake til oversikten
            </UncontrolledTooltip>
        </Box>
    );
}
