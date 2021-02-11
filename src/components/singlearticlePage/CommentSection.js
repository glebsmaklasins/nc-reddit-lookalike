
import CommentSorting from "../singlearticlePage/CommentSorting"
import CommentCard from "../singlearticlePage/ComentCard"
import * as api from "../../api"

import React, { Component } from 'react'
import AddComment from "./AddComment"


export default class CommentSection extends Component {
   state = {
    comments:[],
    isLoading:true,
    newComment:{},
    username:null

  }
  componentDidMount() {

    this.fetchComments()
  }
    componentDidUpdate(prevProps, prevState) {
    const {username}=this.props
    if(username !==prevState.username){
      this.setUsername()
    }
  }
  
  render() {

    const {comments}=this.state
    return (
       <div>
    <CommentSorting fetchComments={this.fetchComments} article_id={this.props.article_id} />
    {this.state.username && (
      <>
       <AddComment sendComment={this.sendComment} setCommentBody={this.setCommentBody}/>
      </>
    )}
   
    {comments.map((comment)=>{
      return <CommentCard removeComment={this.removeComment} key={comment.comment_id} {...comment} {...this.state}/>
    })}
    
    </div>
    )
  }
  setCommentBody = (value)=>{
    this.setState({newComment:{body:value.target.value,author:this.props.username}})
  }
  sendComment=(e)=>{
    e.preventDefault()
    api.postCommentByArticleID(this.props.article_id,this.state.newComment).then((comment)=>{
      this.setState((currentState)=>{
        console.log(comment)
        return {comments:[comment,...currentState.comments ]}
      })
    })
  }
  fetchComments=(sort)=>{
    const {article_id}= this.props
  api.getCommentsByID(article_id,sort).then((comments)=>{
    console.log(comments)
    this.setState({comments,isLoading:false})
  })
}
removeComment=(id)=>{
  api.deleteComment(id).then((res)=>{
        this.fetchComments()
      })

}
setUsername = ()=>{
  this.setState({username : this.props.username})
}
 
}


