import { Component } from "react";
import Header from "../Header";
import Content from "../Content";
import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { getEpisodes } from "../../services/stapi";

type TMainPageState = {
  items: IEpisode[] | undefined | null;
};

class MainPage extends Component<Record<string, never>, TMainPageState> {
  state: TMainPageState = {
    items: null,
  };

  fetchItems = async (term: string | null) => {
    this.setState({
      items: null,
    });
    const response = await getEpisodes(term);
    this.setState({
      items: response.episodes,
    });
  };

  render() {
    return (
      <>
        <Header searchAction={this.fetchItems}></Header>
        <Content items={this.state.items}></Content>
      </>
    );
  }
}

export default MainPage;
