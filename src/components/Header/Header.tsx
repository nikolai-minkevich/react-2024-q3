import { Component } from "react";
import "./index.css";
import Logo from "../Logo";
import Search from "../Search";
import ThrowErrorButton from "../ThrowErrorButton";

type THeaderProps = {
  searchAction: (term: string | null) => void;
};

class Header extends Component<THeaderProps> {
  render() {
    return (
      <section className="header">
        <Logo />
        <div className="right-side">
          <Search searchAction={this.props.searchAction} />
          <ThrowErrorButton />
        </div>
      </section>
    );
  }
}

export default Header;
