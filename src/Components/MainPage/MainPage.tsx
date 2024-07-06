import { Component } from 'react';
import Header from "../Header";
import Content from "../Content";
import "./index.css";

class MainPage extends Component {
    render() {
        return <>
            <Header></Header>
            <Content></Content>
        </>
    }
}

export default MainPage;
