import { FC, ReactElement, useState } from "react";
import "./index.css";

type TSearchProps = {
  searchAction: (term: string | null) => void;
  defaulTerm: string;
  inputElementRef: React.RefObject<HTMLInputElement>;
};

const Search: FC<TSearchProps> = ({
  searchAction,
  defaulTerm,
  inputElementRef,
}): ReactElement => {
  const [term, setTerm] = useState<string>(defaulTerm);

  const handleSearch = (): void => {
    searchAction(term);
  };

  return (
    <div className="search">
      <input
        type="text"
        ref={inputElementRef}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
