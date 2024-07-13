import { FC, ReactElement, useState } from "react";
import "./index.css";

type TThrowErrorButtonState = {
  counter: number;
};

const ThrowErrorButton: FC = (): ReactElement => {
  const [state, setState] = useState<TThrowErrorButtonState>({
    counter: 0,
  });

  const handleClick = () => {
    setState({
      counter: 1,
    });
  };

  if (state.counter === 1) {
    throw new Error("Dummy error");
  }

  return (
    <div className="throw-error-button">
      <button onClick={handleClick}>Throw an error!</button>
    </div>
  );
};

export default ThrowErrorButton;
