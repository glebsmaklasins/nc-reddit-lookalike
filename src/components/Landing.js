import React, { Component } from 'react'
import * as api from "../api"
import Featured from "./landingPage/Featured"
import SortingBlock from "./landingPage/SortingBlock"
import ArticleList from "./landingPage/ArticleList"

export default class Landing extends Component {


  render() {

    return (
      <div>
      <Featured />
      <SortingBlock/>
      <ArticleList/>


        
      </div>
    )
  }


  
}
