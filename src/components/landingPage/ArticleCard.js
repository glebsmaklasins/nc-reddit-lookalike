import React from 'react'
export default function ArticleCard(props) {
  return (
    <li className="article__card">
     <p>{props.created_at}</p>
      <p>{props.author}</p>
       <p>{props.title}</p>
      
      <div className="votes">
      <p>{props.votes}</p>
      <img src="img/upvote.png" alt="" onClick={props.upVote}/>
      <img src="img/downvote.png" alt="" onClick={props.upVote}/>
      </div>
     
    </li>
  )
}
