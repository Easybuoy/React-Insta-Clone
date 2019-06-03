import React from "react";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <div className="App">
      <SearchBar />
      {dummyData.map(data => {
        return <PostContainer key={data.username} data={data} />;
      })}
    </div>
  );
}

export default App;
