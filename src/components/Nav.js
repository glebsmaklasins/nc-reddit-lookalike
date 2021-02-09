import React, { Component } from 'react'
import * as api from "../api"

export default class Nav extends Component {
  state ={
      username:"weegembump"
    }

    componentDidMount() {
      
    }
    
  render() {
    
    return (
      <div className="nav">
      <img className="logo" src="img/logo.png" alt="logo"/>
      <p>logged in as {this.state.username}</p>  
      </div>
    )
  }
}
