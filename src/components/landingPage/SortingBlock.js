import React from 'react'

export default function SortingBlock(props) {
  return (
    <div>
      <button onClick={()=>props.fetchArticles("votes")}>Hot Memdits</button>
      <button onClick={()=>props.fetchArticles("created_at")}>Recent Memdits</button>
    </div>
  )
}
