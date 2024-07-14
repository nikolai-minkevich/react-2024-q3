import { FC, ReactElement, useState, useEffect } from "react";
import Header from "../Header";
import Content from "../Content";
import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { getEpisodes } from "../../services/stapi";
import useLocalStorage from "../../hooks/useLocalStorage";

type TMainPageState = {
  items: IEpisode[] | undefined | null;
};

const MainPage: FC = (): ReactElement => {
  const [state, setState] = useState<TMainPageState>({ items: null });

  const [defaulTerm, inputElementRef] = useLocalStorage();
  const fetchItems = async (term: string | null) => {
    setState({
      items: null,
    });
    const response = await getEpisodes(term);
    setState({
      items: response.episodes,
    });
  };
  // First time fetch
  useEffect(() => {
    fetchItems(defaulTerm);
  }, [defaulTerm]);

  return (
    <>
      <Header
        searchAction={fetchItems}
        defaulTerm={defaulTerm}
        inputElementRef={inputElementRef}
      ></Header>
      <Content items={state.items}></Content>
    </>
  );
};

export default MainPage;
