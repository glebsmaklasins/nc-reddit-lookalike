import React from 'react'
import "./CommentSorting.css"
import votes from "../../img/sort_comments.png"
import time from "../../img/doge_time.png"

export default function CommentSorting(props) {
  console.log(props)
  return (
    <div className="comment__sorting">
    <p>such comments , sort wow</p>
      <button className="sortCommentsByVotes" onClick={()=>{props.fetchComments("votes")}}><img src={votes} alt=""/></button>
      <button className="sortCommentsByDate" onClick={()=>{props.fetchComments("created_at")}}><img src={time} alt=""/></button>
    </div>
  )
}
