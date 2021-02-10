import React from 'react'
import {Link} from "@reach/router"
import ArticleVotes from "../ArticleVotes"
export default function ArticleCard(props) {
  return (
    props.author === "weegembump" ? <li className="article__card">
    <Link to={`articles/${props.article_id}`}>
     <p>{props.created_at}</p>
      <p>{props.author}</p>
       <p>{props.title}</p>
    </Link>
       <button onClick={()=>{props.removeArticle(props.article_id)}}>X</button>
  <ArticleVotes {...props}/>
     
    </li> :<li className="article__card">
    <Link to={`articles/${props.article_id}`}>
     <p>{props.created_at}</p>
      <p>{props.author}</p>
       <p>{props.title}</p>
    </Link>
    
  <ArticleVotes {...props}/>
     
    </li> 
    
    
  )
}
