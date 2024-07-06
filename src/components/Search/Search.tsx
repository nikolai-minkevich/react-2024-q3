import { Component } from "react";
import "./index.css";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
