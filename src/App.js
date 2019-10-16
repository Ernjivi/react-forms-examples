import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    firstName: ''
  }

  onChange = (evt) => {

    this.setState({
      [evt.target.name]: evt.target.value
    })

  } 
  
  onSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="firstName" onChange={this.onChange} value={this.state.firstName} />
        <input type="submit" value="enviar" />
      </form>
    );
  }
}

export default App;
