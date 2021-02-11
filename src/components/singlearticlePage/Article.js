import React, { Component } from 'react'
import * as api from "../../api"
import ArticleVote from "../ArticleVotes"

export default class Article extends Component {
  state={
    article:{},
    isLoading:true,
    username:null
  }
  componentDidMount() {
    this.fetchSingleArticle()
  }
  componentDidUpdate(prevProps, prevState) {
    const {username}=this.props
    if(username !==prevState.username){
      this.setUsername()
    }
  }
  
  
  render() {
    console.log(this.state.username)
    const {article}=this.state
    return (
      <div className="article__single">
      <header>
      <p>{article.author}</p>
        <p>/{article.topic}</p>
        <p>{article.created_at}</p>
      </header>
     
        <p>{article.body}</p>
        {this.state.username && (
          <>
           <ArticleVote {...this.state.article}/>
          </>
        )}
       
      <p>{article.comment_count}</p>
      </div>
      
    )
  }
  fetchSingleArticle(){
    api.getSingleArticle(this.props.article_id).then((article)=>{
      this.setState({article,isLoading:false})
    })
  }
  setUsername = ()=>{
    this.setState({username:this.props.username})
  }
}
