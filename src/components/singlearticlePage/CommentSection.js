
import CommentSorting from "../singlearticlePage/CommentSorting"
import CommentCard from "../singlearticlePage/ComentCard"
import * as api from "../../api"

import React, { Component } from 'react'
import AddComment from "./AddComment"


export default class CommentSection extends Component {
   state = {
    comments:[],
    isLoading:true,
    newComment:{}
  }
  componentDidMount() {
    this.fetchComments()
  }
  
  render() {

    const {comments}=this.state
    return (
       <div>
    <CommentSorting fetchComments={this.fetchComments} id={this.props.props.article_id}/>
    <AddComment sendComment={this.sendComment} setCommentBody={this.setCommentBody}/>
    {comments.map((comment)=>{
      return <CommentCard removeComment={this.removeComment} key={comment.comment_id} {...comment} />
    })}
    
    </div>
    )
  }
  setCommentBody = (value)=>{
    this.setState({newComment:{body:value.target.value,author:"weegembump"}})
  }
  sendComment=(e)=>{
    e.preventDefault()
    api.postCommentByArticleID(this.props.props.article_id,this.state.newComment).then((comment)=>{
      this.setState((currentState)=>{
        console.log(comment)
        return {comments:[comment,...currentState.comments ]}
      })
    })
  }
  fetchComments(sort){
  api.getCommentsByID(this.props.props.article_id,sort).then((comments)=>{
    console.log(comments)
    this.setState({comments,isLoading:false})
  })
}
removeComment=(id)=>{
  api.deleteComment(id).then((res)=>{
        this.fetchComments()
      })

}
 
}


