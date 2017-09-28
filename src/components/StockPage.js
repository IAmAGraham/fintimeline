import React, { Component } from 'react';
import StockProfile from './StockProfile';
import StockChart from './StockChart';

export default class StockPage extends Component(props){

  componentDidMount(){
    fetch('https://www.alphavantage.co/query?function=HT_TRENDLINE&symbol=MSFT&interval=daily&series_type=close&apikey=MWQ2U4K8HU6D7VU')
      .then( res => res.json() )
      .then( data => this.setState({ stocks: data}) )
  }

  render(){
    return (
      <div>
        <div>
          <StockProfile />
          <StockChart />
        </div>
      </div>
    )
  }
}
