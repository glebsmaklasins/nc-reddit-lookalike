import React from "react";
import CommentVotes from "../CommentVotes";
import dayjs from "dayjs";
import "./CommentCard.css";
import deleteimg from "../../img/delete.png";

export default function ComentCard(props) {
  const date = dayjs(props.created_at);
  const formatedDate = String(date.$d).slice(0, 25);
  return props.author === props.username ? (
    <div className="comment__card">
      <div className="comment__userinfo">
        <p className="commentAuthor">Bork from : {props.author}</p>
        <p className="commentDate">Date Added : {formatedDate}</p>
      </div>
      <div className="votes__block">
          <CommentVotes {...props} />
      </div>
     
    <div className="commentBody">
        <p >{props.body}</p>
    </div>
      
      <div className="delete_block">
     
        <button
                className="delete"
                onClick={() => {
                  props.removeComment(props.comment_id);
                }}
              >
                <img className="deleteImg" src={deleteimg} alt="" />
              </button>
      </div>
      
      
    </div>
  ) : (
    <div className="comment__card">
      <div className="comment__userinfo">
        <p className="commentAuthor">Bork from : {props.author}</p>
        <p className="commentDate">Date Added : {formatedDate}</p>
      </div>
       <div className="votes__block">
          <CommentVotes {...props} />
      </div>
        <div className="commentBody">
        <p >{props.body}</p>
    </div>

    </div>
  );
}
