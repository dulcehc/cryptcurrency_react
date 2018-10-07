import React, { Component } from 'react';
import './Ticker.css';
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency';
import axios from 'axios';

class Ticker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "bitcoin",
          rank: "1",
          name: "Bitcoin",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        },
        {
          id: "ethereum",
          rank: "2",
          name: "Ethereum",
          symbol: "ETH",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        },
        {
          id: "litecoin",
          rank: "3",
          name: "Litecoin",
          symbol: "LTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0",
        }
      ]
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60 * 1000);
  }

  fetchCryptocurrencyData() {
    axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
      .then(response => {
        let result = response.data.filter((currency, i) => i <= 3);
        console.log(JSON.stringify(result));
        this.setState({ data: result});
      })
      .catch(err => console.log(err));
  }

  render() {
    let tickers = this.state.data.map((currency) =>
      <Cryptocurrency data={currency} key={currency.id} />
    );
    return (
      <div className="tickers-container">
        <ul className="tickers">{tickers}</ul>
        <p>Information updated every minute courtesy of coinmarketcap.com</p>
      </div>
    );
  }
}

export default Ticker;