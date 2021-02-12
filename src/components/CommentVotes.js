import React, { Component } from 'react'
import * as api from "../api"
import upvote from "../img/reallike.png"
import downvote from "../img/dislike.png"

export default class CommentVotes extends Component {

  state ={
    voteChange:0
  }

  render() {
const {votes}= this.props
const {voteChange} = this.state
    return (
      <div className="commentVotes">
   
      <button disabled={voteChange===1} onClick={()=>{this.handleClick(1)}}><img src={upvote} alt="" /></button>
         <p>{votes + voteChange }</p>
      <button disabled={voteChange===-1} onClick={()=>{this.handleClick(-1)}}><img src={downvote} alt="" /></button>
      
      </div>
    )
  }
  handleClick =(voteChange)=>{
    this.setState((cs)=>{
      return{voteChange:cs.voteChange + voteChange}
    })
    api.patchCommentVotes(this.props.comment_id,voteChange).catch(console.log)
  }
}
