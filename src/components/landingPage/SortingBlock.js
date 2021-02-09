import React from 'react'

export default function SortingBlock(props) {
  return (
    <div>
      <button>Votes</button>
      <button>Date</button>
       <p>add an Article </p>
      <input type="text" placeholder="title" onChange={(e)=>{props.setArticleState("title",{title:e.target.value})}} />

        <select name="topic" id="" onChange={(e)=>{props.setArticleState("topic",{topic:e.target.value})}}>
        <option value=""></option>
          <option value="coding">coding</option>
          <option value="cooking">cooking</option>
          <option value="football">football</option>
        </select>
            <input type="text" placeholder="body" onChange={(e)=>{props.setArticleState("body",{body:e.target.value})}}/>
      <button onClick={props.sendArticle}>+++</button>
    </div>
  )
}
