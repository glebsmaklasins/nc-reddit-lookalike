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
    },
    deleted:0,
    username:""
  }
    componentDidMount() {
    this.fetchArticles()
  }
  componentDidUpdate(prevProps,prevState) {
    const{topic}= this.props
    const {username} = this.props
    if(topic !==prevProps.topic){
      this.fetchArticles(this.sort,topic)
    }else if(username !==prevState.username){
      this.setUsername()
    }
  }
  
  
  render() {
    
    const {articles} = this.state
    const {username} =this.state
        /* articles.filter((article)=> return article.topic === this.props.topic) */
    return (
      <>
      <SortingBlock {...articles} fetchArticles={this.fetchArticles} />
      {this.state.username && (
        <>
         <AddArticle sendArticle={this.sendArticle} setArticleState={this.setArticleState}/>
        </>
      )}
     
      
      
       
      <ul className="article__list">
     { articles.map((article)=>{
        return <ArticleCard key={article.article_id} {...article} {...this.state} removeArticle={this.removeArticle}/>
      })}
        
      </ul>
      </>
    )
  }


  setArticleState =(field,inputFields) =>{
 
    const newArticle = {...this.state.newArticle,author:this.props.username}
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
    fetchArticles = (sort="votes")=> {
    
    api.getAllArticles(sort,this.props.topic).then((articles)=>{
     
      this.setState({articles ,isLoading:false})
    })
  }
  removeArticle= (id)=>{
      api.deleteArticle(id).then((res)=>{
        this.fetchArticles()
      })
    
  }   
  setUsername= ()=>{
    this.setState({username:this.props.username})
  }
}
