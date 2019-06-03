import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

import CommentSection from "../CommentSection/CommentSection";
import NewComment from "../CommentSection/NewComment";

import "./PostContainer.css";

export default function PostContainer({ data }) {
  console.log(data.timestamp);
  console.log(Date.parse(data.timestamp))
  console.log(moment('LLL'))
  return (
    <div className="postContainer">
      <div className="card">
        <div className="card-user-detail">
          <img src={data.thumbnailUrl} alt={data.username} />
          <h3>{data.username}</h3>
        </div>
        <div className="card-image">
          <img src={data.imageUrl} alt={data.username} />
        </div>

        <div className="card-footer">
          <i className="far fa-heart fa-2x" />
          <i className="far fa-comment fa-2x" />
          <p>{data.likes} likes</p>
        </div>
        {data.comments.map(comment => {
          return <CommentSection key={comment.text} commentData={comment} />;
        })}
        <div className="card-time">
          <p>23 hrs ago</p>
        </div>
        <NewComment />
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  data: PropTypes.object.isRequired
};
