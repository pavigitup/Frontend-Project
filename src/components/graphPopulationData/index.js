import React, { Component } from 'react';
import { Container, Typography, Grid, Card } from '@mui/material';
import AreaCharts from '../Charts/AreaCharts';
import LineCharts from '../Charts/LineCharts';
import BarCharts from '../Charts/BarCharts';

class GraphPopulationData extends Component {
state = {
populationData: []
};

componentDidMount() {
this.getPopulationData();
}

componentWillUnmount() {
this.getPopulationData();
}

getPopulationData = async () => {
try {
    const apiUrl = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    const response = await fetch(apiUrl);
    const data = await response.json();
    this.setState({ populationData: data.data });
} catch (error) {
    console.error('Error fetching population data:', error);
}
};

render() {
const { populationData } = this.state;
return (
    <Container maxWidth="lg">
    <Typography variant="h4" align="center" className='fs-5 fs-md-4 fs-lg-3 fs-xl-2' style={{ marginTop: '50px', color: '#ffffff' }}>
        Population Data
    </Typography>
    <Grid container spacing={5} style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
        <Card sx={{ marginBottom: 10 ,backgroundColor:"#060D20"}}>
            <AreaCharts populationData={populationData} />
        </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card sx={{ marginBottom: 10,backgroundColor:"#060D20"}}>
            <LineCharts populationData={populationData} />
        </Card>
        </Grid>
        <Grid item xs={12} md={12}>
        <Card sx={{ marginBottom: 10,backgroundColor:"#060D20" }}>
            <BarCharts populationData={populationData} />
        </Card>
        </Grid>
    </Grid>
    </Container>
);
}
}

export default GraphPopulationData;
