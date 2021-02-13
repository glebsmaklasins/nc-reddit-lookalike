import React from "react";
import { Link } from "@reach/router";
import ArticleVotes from "../ArticleVotes";
import dayjs from "dayjs";
import "./ArticleCard.css";
import deleteimg from "../../img/delete.png";

export default function ArticleCard(props) {
  const date = dayjs(props.created_at);
  const formatedDate = String(date.$d).slice(0, 25);
  console.log(props.author,props)
  return props.author === props.username ? (
    <li className="article__card">
      <Link to={`/articles/${props.article_id}`}>
        <p className="articleAuthor">{props.author}</p>
        <p className="articleBody">{props.title}</p>
        <p className="articleDate">{formatedDate} </p>
      </Link>
      <button
        className="delete"
        onClick={() => {
          props.removeArticle(props.article_id);
        }}
      >
        <img className="deleteImg" src={deleteimg} alt="" />{" "}
      </button>
      <ArticleVotes {...props} />
    </li>
  ) : (
    <li className="article__card">
      <Link to={`/articles/${props.article_id}`}>
        <p className="articleAuthor">{props.author}</p>
        <p className="articleBody">{props.title}</p>
        <p className="articleDate">{formatedDate} </p>
      </Link>

      <ArticleVotes {...props} />
    </li>
  );
}
