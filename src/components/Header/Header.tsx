import "./index.css";
import Logo from "../Logo";
import Search from "../Search";
import ThrowErrorButton from "../ThrowErrorButton";
import { FC, ReactElement } from "react";

type THeaderProps = {
  searchAction: (term: string | null) => void;
};

const Header: FC<THeaderProps> = ({ searchAction }): ReactElement => {
  return (
    <section className="header">
      <Logo />
      <div className="right-side">
        <Search searchAction={searchAction} />
        <ThrowErrorButton />
      </div>
    </section>
  );
};

export default Header;
