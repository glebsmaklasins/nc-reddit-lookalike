import React from 'react'
import "./AddArticle.css"
import submit from "../../img/send_article.png"
export default function AddArticle(props) {
  return (
    <div className="add">
    <form action="submit" className="article__sumbit">
             <p>add a dogedit </p>
      <textarea  className="addTopic" type="text" placeholder="title" onChange={(e)=>{props.setArticleState("title",{title:e.target.value})}} />

        <select name="topic" id="" onChange={(e)=>{props.setArticleState("topic",{topic:e.target.value})}}>
        <option value=""></option>
          <option value="coding">coding</option>
          <option value="cooking">cooking</option>
          <option value="football">football</option>
        </select>
            <textarea className="maintext" type="text" placeholder="body" onChange={(e)=>{props.setArticleState("body",{body:e.target.value})}}/>
      <button onClick={props.sendArticle}><img src={submit} alt=""/></button>
    </form>

      </div>
  )
}
