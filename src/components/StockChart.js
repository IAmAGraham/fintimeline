import React, { Component } from 'react'

// Here, I need to render a form with one input for the students name
// I need to keep track of what the value is in that input at any given time
// Whenever the form is submitted, I need some way to tell the StudentPage to add that name to the state

export default class StudentForm extends Component {

  constructor(){
    super()
    this.state = {
      stockTicker: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const name = `${this.state.stockTicker}`
    this.props.onSubmit(name)
    this.setState({
      stockTicker: ''
    })
  }

  render(){
    console.log("Rendering the Stock Form!")
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder="Stock Ticker" name="stockTicker" value={this.state.stockTicker} onChange={this.handleChange}/>
          <input type='submit' value="Add a Stock" />
        </form>
      </div>

    )
  }

}
