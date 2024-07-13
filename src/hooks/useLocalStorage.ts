import { useEffect, FC, useRef } from "react";

type TuseLocalStorageProps = {
  term: string;
  searchAction: (term: string | null) => void;
};

const useLocalStorage: FC<TuseLocalStorageProps> = ({ term, searchAction }) => {
  const loadedTerm = useRef("");

  useEffect(() => {
    loadedTerm.current = localStorage.getItem("term") ?? "";
    searchAction(loadedTerm.current);
    return () => {
      localStorage.setItem("term", term);
    };
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loadedTerm.current;
};

export default useLocalStorage;
