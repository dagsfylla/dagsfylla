import React from 'react';

import {
    Box,
    Clock,
    Text,
    Heading,
    Button,
    Grid,
    Paragraph,
    Collapsible,
} from 'grommet';

class ListView extends React.Component {
    
    state = {
        openNotification: this.props.openNotification
    }

    state = {
        dagsFylla: [
            {
                "name": "Guttakrutt",
                "address": "Klostergata 37B",
                "maxPeople": 150,
                "type": "DAGSFYLLA",
                "public": true,
                "date": "",
            },
            {
                "name": "DAGSFYLLA",
                "address": "Klostergata 37B",
                "maxPeople": 150,
                "type": "DAGSFYLLA",
                "public": true,
            },
            {
                "name": "Lystgutta",
                "address": "Klostergata 37B",
                "maxPeople": 150,
                "type": "DAGSFYLLA",
                "public": true,
            }
        ]
    }

    componentWillMount() {
        this.setState({
            openNotification: this.props.openNotification
        })
    }

    /*
    Function to get a list over all dagsfylla
     */
    getAllFylla = () => {

    }


    render() {

        const { openNotification } = this.state;

        return (
            <div>
                <Box
                    align="center"
                    justify="center"
                    pad="large"
                >
                    <Heading>
                        Tid til neste dagsfylla
                    </Heading>
                    <Clock type="digital" />
                    <Text>Det er intenst</Text>
                </Box> 
                <Collapsible direction="horizontal" open={openNotification}>
                <Box
                    align="center"
                    justify="start"
                    pad="large"
                >
                    <Heading level={3}>Kommende dagsfylla</Heading>
                    {this.state.dagsFylla.map((fylla, index) => (
                        <Grid
                            columns={{
                                count: 2,
                                size: "auto"
                            }}
                            gap="small"
                            >
                            <Box
                                align="center"
                                justify="start"
                                pad="small"
                            >
                                <Button key={index} primary label={`${fylla.name}`} onClick={() => (
                                    this.props.history.push(`${fylla.name}`)
                                )}
                                />
                            </Box>
                            <Box
                                align="center"
                                justify="start"
                            >
                                <Paragraph>Date</Paragraph>
                            </Box>
                        </Grid>
                    ))}
                </Box>
                </Collapsible>
            </div>
        );
    }
}

export default ListView;
