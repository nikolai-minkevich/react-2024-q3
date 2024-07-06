import { Component } from "react";
import "./index.css";
import Logo from "../Logo";
import Search from "../Search";

type THeaderProps = {
  searchAction: (term: string | null) => void;
};

class Header extends Component<THeaderProps> {
  render() {
    return (
      <div className="header">
        <Logo />
        <Search searchAction={this.props.searchAction} />
      </div>
    );
  }
}

export default Header;
