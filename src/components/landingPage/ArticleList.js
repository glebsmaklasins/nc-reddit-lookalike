import React, { Component } from 'react'
import * as api from "../../api"
import ArticleCard from "./ArticleCard"
import SortingBlock from "./SortingBlock"

export default class ArticleList extends Component {
  state ={
    articles:[],
    isLoading:true,
    newArticle:{
      votes:0,
  
      author:"weegembump",
      
    }
  }
    componentDidMount() {
    this.fetchArticles()
  }
  
  render() {
    const {articles} = this.state
    console.log(this.state.newArticle)
    return (
      <>
      <SortingBlock sendArticle={this.sendArticle} setArticleState={this.setArticleState} />
      <ul className="article__list">
     { articles.map((article)=>{
        return <ArticleCard key={article.article_id} {...article} upVote= {this.upVote} downVote={this.downVote}/>
      })}
        
      </ul>
      </>
    )
  }
  setArticleState =(field,inputFields) =>{
    const newArticle = {...this.state.newArticle}
    newArticle[field] = inputFields[field]
    this.setState((currentState)=>{
      return {...currentState.newArticle,newArticle}
    })
   
  }
 
  sendArticle= ()=>{
    api.postArticle(this.state.newArticle).then((article)=>{
      this.setState(currentState=>{
        return {articles:[article,...currentState.articles]}
      })
    })
  }
    fetchArticles (){
    api.getAllArticles().then((articles)=>{
      this.setState({articles ,isLoading:false})
    })
  }




   
}
