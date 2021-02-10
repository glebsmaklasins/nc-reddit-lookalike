import React from 'react'

export default function AddComment(props) {
  return (
    <form action="submit" className="comment__submit">
      <p>add a comment </p>
      <input type="text" placeholder="your comment" onChange={props.setCommentBody}/>
      <button onClick={props.sendComment}>+++</button>
    </form>
  )
}
