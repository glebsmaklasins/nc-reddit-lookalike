import React, { Component } from 'react'
import * as api from "../../api"
import ArticleCard from "./ArticleCard"

export default class ArticleList extends Component {
  state ={
    articles:[],
    isLoading:true
  }
    componentDidMount() {
    this.fetchArticles()
  }
  
  render() {
    console.log(this.state.articles[0])
    const {articles} = this.state
    return (
      <ul className="article__list">
     { articles.map((article)=>{
        return <ArticleCard key={article.article_id} {...article} upVote= {this.upVote} downVote={this.downVote}/>
      })}
        
      </ul>
    )
  }
  upVote= ()=>{
    this.setState(currentState=>{
      return {votes: currentState++}
    })
  }
    downVote = ()=>{
    this.setState(currentState=>{
      return {currentState:{ votes:currentState--}}
    })
  }
    fetchArticles (){
    api.getAllArticles().then((articles)=>{
      this.setState({articles ,isLoading:false})
    })
  }
}
