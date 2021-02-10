import React, { Component } from 'react'
import * as api from "../api"
export default class ArticleVotes extends Component {
  state ={
    voteChange:0
  }

  render() {
const {votes}= this.props
const {voteChange} = this.state
 
    return (
      <div className="articleVotes">
      <p>{votes + voteChange }</p>
      <button disabled={voteChange===1} onClick={()=>{this.handleClick(1)}}><img src="img/upvote.png" alt="" /></button>
      <button disabled={voteChange===-1} onClick={()=>{this.handleClick(-1)}}><img src="img/downvote.png" alt="" /></button>
      
      </div>
    )
  }
  handleClick =(voteChange)=>{
    this.setState((cs)=>{
      return{voteChange:cs.voteChange + voteChange}
    })
    api.patchArticleVotes(this.props.article_id,voteChange).catch(console.log)
  }
}

