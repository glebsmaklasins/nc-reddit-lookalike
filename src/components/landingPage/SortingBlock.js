import React from 'react'
import "./SortingBlock.css"
import votes from "../../img/doge_cool.png"
import time from "../../img/doge_time.png"

export default function SortingBlock(props) {
  return (
    <div className="sortingArticles">
    <p>such sorting ,much wow</p>
      <button  className="sortVote" onClick={()=>props.fetchArticles("votes")}><img src={votes} alt=""/></button>
      <button className="sortTime" onClick={()=>props.fetchArticles("created_at")}><img src={time} alt=""/></button>
    </div>
  )
}
