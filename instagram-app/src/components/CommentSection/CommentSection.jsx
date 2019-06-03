import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

export default function CommentSection({ commentData }) {
  return (
    <div className="commentSection">
      <p className="commentUsername">
        <b>{commentData.username}</b>
        {commentData.text}
      </p>
    </div>
  );
}

CommentSection.propTypes = {
  commentData: PropTypes.object.isRequired
};
