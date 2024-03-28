import React, { Component } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@mui/material';

class CurrencyCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyData: []
        };
    }

    componentDidMount() {
        this.getCurrencyData();
    }

    componentWillUnmount() {
        // Cleanup code (if any)
    }

    getCurrencyData = async () => {
        try {
            const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
            const response = await fetch(apiUrl);
            const data = await response.json();
            this.setState({ currencyData: Object.values(data.bpi) });
        } catch (error) {
            console.error('Error fetching currency data:', error);
        }
    };

    getCurrencyImage = (code) => {
        switch (code) {
            case 'USD':
                return 'https://cdn.vectorstock.com/i/preview-1x/99/72/usd-coin-digital-stablecoin-banner-vector-38039972.jpg';
            case 'GBP':
                return 'https://www.shutterstock.com/image-illustration/gbp-against-background-japanese-candlesticks-260nw-2045699435.jpg';
            case 'EUR':
                return 'https://responsive.fxempire.com/v7/_fxempire_/2023/05/shutterstock_2186056123-1.jpg?width=1201';
            default:
                return '';
        }
    }

    render() {
        const { currencyData } = this.state;
        return (
            <Container maxWidth="lg">
                <Typography variant='h4' align='center' className='fs-5 fs-md-4 fs-lg-3 fs-xl-2' style={{ marginTop: "50px", color: "#ffffff" }}>
                    CryptoCurrencyPrices
                </Typography>
                <Grid container spacing={5} style={{ marginTop: "20px" }}>
                    {currencyData.map((currency, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={this.getCurrencyImage(currency.code)}
                                        alt={currency.description}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {currency.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Rate: {currency.rate}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default CurrencyCards;
