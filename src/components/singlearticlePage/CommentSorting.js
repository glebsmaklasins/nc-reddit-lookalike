import React from 'react'

export default function CommentSorting(props) {
  console.log(props)
  return (
    <div className="comment__sorting">
      <button onClick={()=>{props.fetchComments("votes")}}>Most Comments</button>
      <button onClick={()=>{props.fetchComments("created_at")}}>Date</button>
    </div>
  )
}
