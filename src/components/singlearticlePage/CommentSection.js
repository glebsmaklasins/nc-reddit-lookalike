
import CommentSorting from "../singlearticlePage/CommentSorting"
import CommentCard from "../singlearticlePage/ComentCard"
import * as api from "../../api"
import {upVote,downVote} from "../../utils/votes"
import React, { Component } from 'react'


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
    console.log(this.state.newComment)
    return (
       <div>
    <CommentSorting sendComment={this.sendComment} setCommentBody={this.setCommentBody}/>
    {comments.map((comment)=>{
      return <CommentCard key={comment.comment_id} {...comment} upVote={upVote} downVote={downVote}/>
    })}
    
    </div>
    )
  }
  setCommentBody = (value)=>{
    this.setState({newComment:{body:value.target.value,author:"weegembump"}})
  }
  sendComment=()=>{
    api.postCommentByArticleID(this.props.props.article_id,this.state.newComment).then((comment)=>{
      this.setState((currentState)=>{
        console.log(currentState)
        return {comments:[comment,...currentState.comments ]}
      })
    })
  }
  fetchComments(){
  api.getCommentsByID(this.props.props.article_id).then((comments)=>{
    this.setState({comments,isLoading:false})
  })
}
 
}


