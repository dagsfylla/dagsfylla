import React from 'react';

import {
    Box,
    Anchor,
    Button,
    Text,
    Paragraph
} from 'grommet';


class DetailView extends React.Component {

    state = {

    }

    render() {
        {console.log(this.props.match)}
        let { match } = this.props;
        return (
            <Box>
                <Box
                    pad="large"
                    align="center"
                    background={{ color: "light-2", opacity: "strong" }}
                    round
                    gap="small"
                >
                    <Text>Party</Text>
                    <Anchor href="" label="Link" />
                    <Button label="Button" onClick={() => {}} />
                </Box>
                <Box pad="large" align="center" background="dark-3" round gap="small">
                    <Text>Travel</Text>
                    <Anchor href="" label="Link" />
                    <Button label="Button" onClick={() => {}} />
                </Box>
                <Paragraph>HEIHEIHEI</Paragraph>
            </Box>
        );
    }
}

export default DetailView;
