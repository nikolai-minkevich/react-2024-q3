import "./index.css";
import Logo from "../Logo";
import Search from "../Search";
import ThrowErrorButton from "../ThrowErrorButton";
import { FC, ReactElement } from "react";

type THeaderProps = {
  searchAction: (term: string | null) => void;
  defaulTerm: string;
  inputElementRef: React.RefObject<HTMLInputElement>;
};

const Header: FC<THeaderProps> = ({
  searchAction,
  defaulTerm,
  inputElementRef,
}): ReactElement => {
  return (
    <section className="header">
      <Logo />
      <div className="right-side">
        <Search
          searchAction={searchAction}
          defaulTerm={defaulTerm}
          inputElementRef={inputElementRef}
        />
        <ThrowErrorButton />
      </div>
    </section>
  );
};

export default Header;
