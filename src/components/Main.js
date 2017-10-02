import React from 'react'

import NavBar from './NavBar'
import StockPage from './StockPage'

export default function Main(){
  return (
    <div>
      <NavBar title="FinTimeline" style="inverse"/>
      <StockPage />
    </div>
  )
}
