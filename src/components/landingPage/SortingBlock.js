import React from 'react'

export default function SortingBlock(props) {
  return (
    <div>
      <button onClick={()=>props.fetchArticles("votes")}>by votes</button>
      <button onClick={()=>props.fetchArticles("created_at")}>by date</button>
    </div>
  )
}
