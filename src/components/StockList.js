import React from 'react';

export default function StockList(props){
  return(
    <div>
      <h2>Stock List</h2>
      <ul>
        {props.stocks.map(stock => <li key={stock.id}> {stock.name}</li>)}
      </ul>
    </div>
  )
}
