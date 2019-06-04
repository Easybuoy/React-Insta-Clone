import React from "react";

export default function NewComment({ handleClick, index }) {
  return (
    <div className="newComment">
      <input placeholder="Add a comment..." onKeyUp={(e) => {handleClick(e, index)}} />
      <i className="fas fa-ellipsis-h" />
    </div>
  );
}
