import React from 'react';

import {
    Box,
    Clock,
    Text,
    Heading,
    Button,
    Grid,
    Paragraph,
} from 'grommet';
import DayDrunkForm from '../../components/DayDrunkForm';



class ListView extends React.Component {

    state = {
        dagsFylla: [
            {
                "name": "Guttakrutt",
                "address": "Klostergata 37B",
                "maxPeople": 150,
                "type": "DAGSFYLLA",
                "public": true,
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

    /*
    Function to get a list over all dagsfylla
     */
    getAllFylla = () => {

    }


    render() {
        return (
            <Grid
                fill
                rows={["flex"]}
                columns={["flex", "medium"]}
                areas={[
                    { name: "sidebar", start: [1, 0], end: [1, 0] },
                    { name: "main", start: [0, 0], end: [0, 0] }
                ]}
                gap="small"
            >
                <Box
                    align="center"
                    justify="start"
                    gridarea="main"
                    pad="large"
                >
                    <Heading>
                        Tid til neste dagsfylla
                    </Heading>
                    <Clock type="digital" />
                    <Text>Det er intenst</Text>
                </Box>
                <Box
                    gridarea="sidebar"
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
            </Grid>
        );
    }
}

export default ListView;
