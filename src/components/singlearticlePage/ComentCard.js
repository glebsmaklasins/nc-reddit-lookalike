import React from 'react'
import CommentVotes from "../CommentVotes"
export default function ComentCard(props) {
  return (
     props.author === "weegembump" ?
     <div className="comment__card">
    <img src="#" alt="icon"/>
      <p>{props.author}</p>
      <p>{props.created_at}</p>
      <p>{props.body}</p>
   <button onClick={()=>{props.removeComment(props.comment_id)}}>x</button>
      <CommentVotes {...props}/>

    </div> :<div className="comment__card">
    <img src="#" alt="icon"/>
      <p>{props.author}</p>
      <p>{props.created_at}</p>
      <p>{props.body}</p>
   
      <CommentVotes {...props}/>

    </div>
     
  )
}
