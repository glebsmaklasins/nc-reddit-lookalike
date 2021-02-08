import axios from "axios"

export const getAllArticles = ()=> {
  return axios.get("https://ncnews-server.herokuapp.com/api/articles")
  .then(({data})=>{
    return data.articles
  })
}

export const getFeaturedArticle = ()=>{
  return axios.get(`https://ncnews-server.herokuapp.com/api/articles/${Math.floor(Math.random() * 10)}`).then(({data})=>{
    return data.article
  })
}