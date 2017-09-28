import React from 'react';
import ReactDOM from 'react-dom';


import NavBar from './components/NavBar';
import StockPage from './components/StockPage';

function App(){
  return (
    <div>
      <NavBar title="FinTimeline" style="inverse"/>
      <StockPage />
    </div>

  )
}

const api = 'https://www.alphavantage.co/query?function=HT_TRENDLINE&symbol=MSFT&interval=daily&series_type=close&apikey=MWQ2U4K8HU6D7VU'


// const API_Key = 'MWQ2U4K8HU6D7VUK'

ReactDOM.render(<App />, document.getElementById('root'))
