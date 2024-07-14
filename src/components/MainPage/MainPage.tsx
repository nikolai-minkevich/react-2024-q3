import { FC, ReactElement, useState, useEffect } from "react";
import Header from "../Header";
import Content from "../Content";
import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { getEpisodes } from "../../services/stapi";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Outlet } from "react-router-dom";
import IPage from "../../interfaces/IPage";

type TMainPageState = {
  items: IEpisode[] | undefined | null;
  page: IPage | undefined | null;
};

const MainPage: FC = (): ReactElement => {
  const [state, setState] = useState<TMainPageState>({
    items: null,
    page: null,
  });

  const [pageNumber, setPageNumber] = useState<number>(0);

  const [defaulTerm, inputElementRef] = useLocalStorage();
  const fetchItems = async (term: string | null, pageNumber: number) => {
    setState({
      items: null,
      page: null,
    });
    const response = await getEpisodes(term, pageNumber);
    setState({
      items: response.episodes,
      page: response.page,
    });
  };
  // First time fetch
  useEffect(() => {
    console.log("pageNumber", pageNumber);

    fetchItems(defaulTerm, pageNumber);
  }, [defaulTerm, pageNumber]);

  return (
    <>
      <Header
        searchAction={fetchItems}
        defaulTerm={defaulTerm}
        inputElementRef={inputElementRef}
      ></Header>
      <div className="content-container">
        <Content
          items={state.items}
          page={state.page}
          setPageNumber={setPageNumber}
        ></Content>
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
