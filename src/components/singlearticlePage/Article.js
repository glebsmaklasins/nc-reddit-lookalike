import React, { Component } from 'react'
import * as api from "../../api"

export default class Article extends Component {
  state={
    article:{},
    isLoading:true
  }
  componentDidMount() {
    this.fetchSingleArticle()
  }
  
  render() {
    const {article}=this.state
    return (
      <div className="article__single">
      <header>
      <p>{article.author}</p>
        <p>/{article.topic}</p>
        <p>{article.created_at}</p>
      </header>
     
        <p>{article.body}</p>
         <div className="votes">
      <p>{article.votes}</p>
      <img src="img/upvote.png" alt="up" />
      <img src="img/downvote.png" alt="down" />
      </div>
      <p>{article.comment_count}</p>
      </div>
      
    )
  }
  fetchSingleArticle(){
    api.getSingleArticle(this.props.props.article_id).then((article)=>{
      this.setState({article,isLoading:false})
    })
  }
}
