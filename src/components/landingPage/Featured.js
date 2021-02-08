
import React, { Component } from 'react'
import * as api from "../../api"

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
        <p>Featured pepe</p>
        <p>/{article.topic}</p>
        <p>{article.title}</p>
         <p>{article.author}</p>
      </div>
    )
  }
  fetchFeaturedArticle (){
    api.getFeaturedArticle().then((article)=>{
      this.setState({article,isLoading:false})
    })
  }
}
