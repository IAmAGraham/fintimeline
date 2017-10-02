import React, { Component } from 'react';
// import StockProfile from './StockProfile';
import StockCount from './StockCount';
import StockChart from './StockChart';
import StockList from './StockList';

export default class StockPage extends Component{

  constructor(){
    super();
    this.state = {
      stocks: ['MSFT', 'GOOGL']
    }
    this.searchStock = this.searchStock.bind(this)
  }

  // componentDidMount(){
  //   fetch('https://www.alphavantage.co/query?function=HT_TRENDLINE&symbol=MSFT&interval=daily&series_type=close&apikey=MWQ2U4K8HU6D7VU')
  //     .then( res => res.json() )
  //     .then( data => this.setState({ stocks: data}) )
  // }

  searchStock(name){
    this.setState(function(previousState){
      return {
        stocks: [...previousState.stocks, name]
      }
    })
  }

  render(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          < StockList stocks={this.state.stocks} />
        </div>

        <div className='col-md-8'>
          < StockChart onSubmit={this.searchStock} />
          < StockCount count={this.state.stocks.length}/>
        </div>
      </div>
    )
  }
}
