import { FC, ReactElement, useState } from "react";
import Header from "../Header";
import Content from "../Content";
import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { getEpisodes } from "../../services/stapi";

type TMainPageState = {
  items: IEpisode[] | undefined | null;
};

const MainPage: FC = (): ReactElement => {
  const [state, setState] = useState<TMainPageState>({ items: null });

  const fetchItems = async (term: string | null) => {
    setState({
      items: null,
    });
    const response = await getEpisodes(term);
    setState({
      items: response.episodes,
    });
  };

  return (
    <>
      <Header searchAction={fetchItems}></Header>
      <Content items={state.items}></Content>
    </>
  );
};

export default MainPage;
