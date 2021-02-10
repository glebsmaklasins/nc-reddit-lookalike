import axios from "axios"

export const getAllArticles = (sorted)=> {
  return axios.get("https://ncnews-server.herokuapp.com/api/articles",{params:{sort_by:sorted}})
  .then(({data})=>{
    return data.articles
  })
}

export const getFeaturedArticle = ()=>{
  return axios.get(`https://ncnews-server.herokuapp.com/api/articles/${Math.floor(Math.random() * 10)}`).then(({data})=>{
    return data.article
  })
}

export const getCommentsByID =(id,sorted)=>{
  return axios.get(`https://ncnews-server.herokuapp.com/api/articles/${id}/comments`,{params:{sort_by:sorted}}).then(({data})=>{
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


export const patchCommentVotes = (id,voteChange) =>{
  return axios.patch(`https://ncnews-server.herokuapp.com/api/comments/${id}`,{inc_votes:voteChange})
}

export const patchArticleVotes = (id,voteChange) =>{
  return axios.patch(`https://ncnews-server.herokuapp.com/api/articles/${id}`,{inc_votes:voteChange})
}

export const deleteComment = (id) =>{
  return axios.delete (`https://ncnews-server.herokuapp.com/api/comments/${id}`)
}
export const deleteArticle = (id) =>{
  return axios.delete (`https://ncnews-server.herokuapp.com/api/articles/${id}`)
}