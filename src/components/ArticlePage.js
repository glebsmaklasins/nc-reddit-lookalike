
import CommentSection from './singlearticlePage/CommentSection'
import Article from './singlearticlePage/Article'



import React, { Component } from 'react'

export default class ArticlePage extends Component {
  render() {
    return (
    
        <div>
       <Article  props={this.props}/>
       <CommentSection  props={this.props}/>
      </div>
        
    )
  }
}

