import { FC, ReactElement } from "react";
import "./index.css";

const Logo: FC = (): ReactElement => {
  return (
    <div className="logo">
      <p>🌍 React 2024 Q3 task</p>
      <p>Author: Nikolai Minkevich</p>
    </div>
  );
};

export default Logo;
