import React, { Component } from 'react'
import * as api from "../../api"
import ArticleVote from "../ArticleVotes"
import "./Article.css"
import dayjs from 'dayjs'

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
    const date = dayjs(article.created_at)
  const formatedDate = String(date.$d).slice(0,25)
    return (
      <div className="article__single">
      <header>
      <p>{article.author}</p>
        <p>/{article.topic}</p>
        <p>{formatedDate}</p>
      </header>
    
        <p className="singleArticle_body">{article.body}</p>
        {this.state.username !== article.author && (
          <>
           <ArticleVote {...this.state.article}/>
          </>
        )}
       
     
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
