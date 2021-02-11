import React, { Component } from 'react'
import * as api from "../api"
import {Link} from "@reach/router"

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
      <img className="logo" src="img/logo.png" alt="logo"/>
     {this.state.username && (
        <>
      <p>logged in as {this.state.username}</p>  
      <button onClick={this.logOut}>log out</button>
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
      
      
      {topics.map((topic)=>{
       return <Link key={topic.slug} to={`/${topic.slug}/articles`}>{topic.slug}</Link>
      })}
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
