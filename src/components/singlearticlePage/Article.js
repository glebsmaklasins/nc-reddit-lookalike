import React, { Component } from 'react'
import * as api from "../../api"
import ArticleVote from "../ArticleVotes"

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
       <ArticleVote {...this.state.article}/>
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
