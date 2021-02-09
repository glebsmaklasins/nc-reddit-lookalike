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

export const getCommentsByID =(id)=>{
  return axios.get(`https://ncnews-server.herokuapp.com/api/articles/${id}/comments`).then(({data})=>{
    return data.comments
  })
}

export const getSingleArticle = (id)=>{
  return axios.get(`https://ncnews-server.herokuapp.com/api/articles/${id}`).then(({data})=>{
    return data.article
  })
}

export const postArticle = (article) =>{
  return axios.post("https://ncnews-server.herokuapp.com/api/articles",article)
  .then(({data})=>{
    
    return data.article
  }).catch(res=>{
    console.log(res)
  })
}
export const postCommentByArticleID = (id,body) =>{
  return axios.post(`https://ncnews-server.herokuapp.com/api/articles/${id}/comments`,body)
  .then(({data})=>{

    return data.comment
  }).catch(res=>{
    console.log(res)
  })
}