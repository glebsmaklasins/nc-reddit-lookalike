import React from 'react'

export default function ComentCard(props) {
  return (
    <div className="comment__card">
    <img src="#" alt="icon"/>
      <p>{props.author}</p>
      <p>{props.created_at}</p>
      <p>{props.body}</p>
   
      <div className="votes">
      <p>{props.votes}</p>
      <img src="img/upvote.png" alt="up" onClick={props.upVote}/>
      <img src="img/downvote.png" alt="down" onClick={props.upVote}/>
      </div>

    </div>
  )
}
