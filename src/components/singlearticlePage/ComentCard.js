import React from 'react'
import CommentVotes from "../CommentVotes"
import dayjs from 'dayjs'
import "./CommentCard.css"
import deleteimg from "../../img/delete.png"

export default function ComentCard(props) {
  const date = dayjs(props.created_at)
  const formatedDate = String(date.$d).slice(0,25)
  return (
     props.author === props.username ?
     <div className="comment__card">

      <p className="commentAuthor">{props.author}</p>
      <p className="commentDate">{formatedDate}</p>
      <p className="commentBody">{props.body}</p>
   <button className="delete" onClick={()=>{props.removeComment(props.comment_id)}}><img className="deleteImg" src={deleteimg} alt=""/></button>
      <CommentVotes {...props}/>

    </div> :<div className="comment__card">
 
      <p className="commentAuthor">{props.author}</p>
      <p className="commentDate">{formatedDate}</p>
      <p className="commentBody">{props.body}</p>
   
      <CommentVotes {...props}/>

    </div>
     
  )
}
