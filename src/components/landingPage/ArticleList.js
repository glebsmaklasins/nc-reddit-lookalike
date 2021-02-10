import React, { Component } from 'react'
import * as api from "../../api"
import ArticleCard from "./ArticleCard"
import SortingBlock from "./SortingBlock"
import AddArticle from "./AddArticle"


export default class ArticleList extends Component {
  state ={
    articles:[],
    isLoading:true,
    newArticle:{
      votes:0,
  
      author:"weegembump",
      
    },
    deleted:0
  }
    componentDidMount() {
    this.fetchArticles()
  }
  
  render() {
    const {articles} = this.state
   
   
    return (
      <>
      <SortingBlock {...articles} fetchArticles={this.fetchArticles} />
      <AddArticle sendArticle={this.sendArticle} setArticleState={this.setArticleState}/>
      <ul className="article__list">
     { articles.map((article)=>{
        return <ArticleCard key={article.article_id} {...article} removeArticle={this.removeArticle}/>
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
 
  sendArticle= (e)=>{
    e.preventDefault()
    api.postArticle(this.state.newArticle).then((article)=>{
      this.setState(currentState=>{
        return {articles:[article,...currentState.articles]}
      })
    })
  }
    fetchArticles (sort){
      console.log(sort)
    api.getAllArticles(sort).then((articles)=>{
      this.setState({articles ,isLoading:false})
    })
  }
  removeArticle= (id)=>{
      api.deleteArticle(id).then((res)=>{
        this.fetchArticles()
      })
    
  }




   
}
