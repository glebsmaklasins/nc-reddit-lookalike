import React from 'react'
import {Link} from "@reach/router"
export default function ArticleCard(props) {
  return (
    props.author === "weegembump" ? <li className="article__card">
    <Link to={`articles/${props.article_id}`}>
     <p>{props.created_at}</p>
      <p>{props.author}</p>
       <p>{props.title}</p>
    </Link>
       <button onClick={props.deleteArticle}>X</button>
      <div className="votes">
      <p>{props.votes}</p>
      <img src="img/upvote.png" alt="" onClick={props.upVote}/>
      <img src="img/downvote.png" alt="" onClick={props.upVote}/>
      </div>
     
    </li> :<li className="article__card">
    <Link to={`articles/${props.article_id}`}>
     <p>{props.created_at}</p>
      <p>{props.author}</p>
       <p>{props.title}</p>
    </Link>
    
      <div className="votes">
      <p>{props.votes}</p>
      <img src="img/upvote.png" alt="" onClick={props.upVote}/>
      <img src="img/downvote.png" alt="" onClick={props.upVote}/>
      </div>
     
    </li> 
    
    
  )
}
