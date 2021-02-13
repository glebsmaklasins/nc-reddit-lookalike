import React, { Component } from 'react'
import * as api from "../api"
import {Link} from "@reach/router"
import logo from '../img/logo.png'
import "./Nav.css"
import AvailabeUsernames from "./AvailableUsernames"

export default class Nav extends Component {
  state ={
      username:"",
      topics : [],
      usernameInput:""
    }

    componentDidMount() {
      this.fetchTopics()

    }

  render() {
    console.log(this.props)
    const {usernameInput}= this.state
    const {topics}= this.state
    return (
      <div className="nav">
      <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
     {this.props.username && (
        <>
      <p>logged in as {this.props.username}</p>  
      <button className="logout" onClick={this.props.logOut}>log out</button>
      </>
      )}
      {!this.props.username && (
        <>
        <AvailabeUsernames/>
        <form  action="#" className="login">
        <input type="text" onChange={(e)=>{this.setUsernameInput(e,e.target.value)}}/>
        <button onClick={(e)=>{this.props.handleUsername(e,usernameInput)}}>log in</button>
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
  setUsernameInput =(e,usernameInput)=>{
    e.preventDefault()
    this.setState({usernameInput})
  }
  fetchTopics(){
    api.getTopics().then((topics)=>{
      this.setState({topics})
    })
  }
  
}
