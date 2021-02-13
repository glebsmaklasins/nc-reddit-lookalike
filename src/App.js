
import './App.css';
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import ArticlePage from "./components/ArticlePage"
import {Router} from "@reach/router"
import React, { Component } from 'react'


export default class App extends Component {
  state = {
    username:""
  }
  render() {  
 
    return (
       <div className="App">
    <Nav logOut={this.logOut} handleUsername={this.handleUsername} {...this.state}/>
    <Router >
      <Landing path="/" {...this.state}/>
      <Landing path="/:topic/articles" {...this.state}/>
      <ArticlePage path="articles/:article_id" {...this.state}/>
    </Router>
    </div>
    )
  }
  handleUsername =(e,username)=>{
    e.preventDefault()
    this.setState({username})
  }
  logOut=()=>{
    this.setState({username:""})
  }
}
