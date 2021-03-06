import React from 'react'

export default function NavBar(props){

  return (
    <nav className= {`navbar navbar-${props.style}`}>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>{props.title}</a>
        </div>
      </div>
    </nav>
  )
}
