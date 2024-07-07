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
    localStorage.setItem("term", this.state.term);
    this.props.searchAction(this.state.term);
  };

  componentDidMount(): void {
    const term = localStorage.getItem("term");
    if (term) {
      this.setState({
        term: term,
      });
      this.props.searchAction(term);
    }
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          defaultValue={this.state.term}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
