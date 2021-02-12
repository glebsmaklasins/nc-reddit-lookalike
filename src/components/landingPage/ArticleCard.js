import React from 'react'
import {Link} from "@reach/router"
import ArticleVotes from "../ArticleVotes"
import dayjs from 'dayjs'
import "./ArticleCard.css"

export default function ArticleCard(props) {
 const date = dayjs(props.created_at)
const formatedDate = String(date.$d).slice(0,25)
  return (
    props.author === props.username ? <li className="article__card">
    <Link to={`/articles/${props.article_id}`}>
      <p>{props.author}</p>
       <p>{props.title}</p>
        <p>{formatedDate} </p>
    </Link>
       <button onClick={()=>{props.removeArticle(props.article_id)}}>X</button>
  <ArticleVotes {...props}/>
     
    </li> :<li className="article__card">
    <Link to={`/articles/${props.article_id}`}>
      <p>{props.author}</p>
       <p>{props.title}</p>
        <p>{formatedDate} </p>
    </Link>
    
  <ArticleVotes {...props}/>
     
    </li> 
    
    
  )
}
