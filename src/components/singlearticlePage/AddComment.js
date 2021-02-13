import React from 'react'
import "./AddComment.css"
import send from "../../img/send_article.png"
export default function AddComment(props) {
  return (
    <div className="add">
    <form action="submit" className="comment__submit">
      <p>add a comment </p>
      <textarea type="text" placeholder="your comment" onChange={props.setCommentBody}/>
      <button onClick={props.sendComment}><img src={send} alt=""/></button>
    </form>
    </div>
  )
}
