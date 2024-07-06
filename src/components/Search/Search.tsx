import { ChangeEvent, Component } from "react";
import "./index.css";

type TSearchProps = {
  searchAction: (term: string | null) => void;
};

type TSearchState = {
  term: string;
};

class Search extends Component<TSearchProps, TSearchState> {
  state: TSearchState = {
    term: "",
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSearch = (): void => {
    console.log("handleSearch");
    this.props.searchAction(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <input type="text" onChange={this.handleInputChange} />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
