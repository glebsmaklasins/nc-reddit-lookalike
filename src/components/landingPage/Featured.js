
import React, { Component } from 'react'
import * as api from "../../api"
import "./Featured.css"
import {Link} from "@reach/router"


export default class Featured extends Component {
   state ={
    article :{
    },
    isLoading:true
  }

  componentDidMount() {
    this.fetchFeaturedArticle()
  }
  
  render() {
    const {article} = this.state
    return (
      <div className="featured" >
      <h1>Featured Doge</h1>
      <p>{article.author}</p>
      <Link to={`/${article.topic}/articles`}><p>/{article.topic}</p></Link>
        <p>{article.title}</p>
      </div>
    )
  }
  fetchFeaturedArticle (){
    api.getFeaturedArticle().then((article)=>{
      this.setState({article,isLoading:false})
    })
  }
}
