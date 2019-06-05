import React from "react";
import PropTypes from "prop-types";

import "./SearchBar.css";

export default function SearchBar({ handleSearch }) {
  return (
    <div className="searchBar">
      <div className="logo">
        <i className="fab fa-instagram fa-3x" />
        <hr />
        <p>Instagram</p>
      </div>

      <div className="searchInput">
        <i className="fas fa-search" />
        <input placeholder="Search" onKeyUp={handleSearch} />
      </div>

      <div className="searchContent">
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
