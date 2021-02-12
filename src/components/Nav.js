import React, { Component } from 'react'
import * as api from "../api"
import {Link} from "@reach/router"
import logo from '../img/logo.png'
import "./Nav.css"

export default class Nav extends Component {
  state ={
      username:null,
      topics : []
    }

    componentDidMount() {
      this.fetchTopics()

    }

  render() {
    const {topics}= this.state
    return (
      <div className="nav">
      <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
     {this.state.username && (
        <>
      <p>logged in as {this.state.username}</p>  
      <button className="logout" onClick={this.logOut}>log out</button>
      </>
      )}
      {!this.state.username && (
        <>
        <form  action="submit" className="login">
        <input type="text" onChange={(e)=>{this.props.handleUsername(e.target.value)}}/>
        <button onClick={this.setUsername}>log in</button>
      </form>
        </>
      )}
      
      <div className="topic">
      {topics.map((topic)=>{
       return <Link key={topic.slug} to={`/${topic.slug}/articles`}>{topic.slug}</Link>
      })}
      </div>
     

      </div>
    )
  }
  setUsername =(e)=>{
    e.preventDefault()
    this.setState({username:this.props.username})
  }
  fetchTopics(){
    api.getTopics().then((topics)=>{
      this.setState({topics})
    })
  }
  logOut=()=>{
    this.setState({username:null})
  }
}
