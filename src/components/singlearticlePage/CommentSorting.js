import React from 'react'

export default function CommentSorting(props) {
  return (
    <div className="comment__sorting">
      <button>Most upvotes</button>
      <button>Date</button>
      <p>add a comment </p>
      <input type="text" placeholder="your comment" onChange={props.setCommentBody}/>
      <button onClick={props.sendComment}>+++</button>
    </div>
  )
}
