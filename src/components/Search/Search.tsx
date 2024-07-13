import { ChangeEvent, FC, ReactElement, useState } from "react";
import "./index.css";
import useLocalStorage from "../../hooks/useLocalStorage";

type TSearchProps = {
  searchAction: (term: string | null) => void;
};

type TSearchState = {
  term: string;
};

const Search: FC<TSearchProps> = ({ searchAction }): ReactElement => {
  const [state, setState] = useState<TSearchState>({ term: '' });
  useLocalStorage({ term: state.term, searchAction })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({
      term: event.target.value,
    });
  };

  const handleSearch = (): void => {
    searchAction(state.term);
  };

  return (
    <div className="search">
      <input
        type="text"
        defaultValue={state.term}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
