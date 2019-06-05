import React from "react";
import PropTypes from "prop-types";

export default function NewComment({ handleClick, index }) {
  return (
    <div className="newComment">
      <input
        placeholder="Add a comment..."
        onKeyUp={e => {
          handleClick(e, index);
        }}
      />
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}

NewComment.propTypes = {
  handleClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};
