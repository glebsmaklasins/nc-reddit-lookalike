import React from "react";
import { Link } from "@reach/router";
import ArticleVotes from "../ArticleVotes";
import dayjs from "dayjs";
import "./ArticleCard.css";
import deleteimg from "../../img/delete.png";

export default function ArticleCard(props) {
  const date = dayjs(props.created_at);
  const formatedDate = String(date.$d).slice(0, 25);

  return props.author === props.username ? (
    <div className="article__card">
      <div className="article__userinfo">
        <p className="articleAuthor">{props.author}</p>
        <p className="articleDate">{formatedDate} </p>
      </div>
      <div className="votes__block">
        <ArticleVotes {...props} />
      </div>
      <div className="articleBody">
      <Link to={`/articles/${props.article_id}`}>
        <p >{props.title}</p>
      </Link>
      </div>
          <div className="delete_block">
        <button
          className="delete"
          onClick={() => {
            props.removeArticle(props.article_id);
          }}
        >
          <img className="deleteImg" src={deleteimg} alt="" />
        </button>
      

    
    </div>
    </div>
    

  ) : (
    <div className="article__card">
      <div className="article__userinfo">
        <p className="articleAuthor">{props.author}</p>
        <p className="articleDate">{formatedDate} </p>
      </div>
      <div className="votes__block">
        <ArticleVotes {...props} />
      </div>
      <div className="articleBody">
      <Link to={`/articles/${props.article_id}`}>
        <p >{props.title}</p>
      </Link>
      </div>
    
    </div>
  );
}
