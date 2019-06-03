import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <div className="logo">
        <i className="fab fa-instagram fa-3x" />
        <hr />
        <p>Instagram</p>
      </div>

      <div className="searchInput">
        <i class="fas fa-search" />
        <input placeholder="Search" />
      </div>

      <div className="searchContent">
        <i class="far fa-compass fa-2x" />
        <i class="far fa-heart fa-2x" />
        <i class="far fa-user fa-2x" />
      </div>
    </div>
  );
}
