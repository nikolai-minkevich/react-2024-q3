import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { FC, ReactElement } from "react";

type TItemProps = {
  content: IEpisode;
};

const Item: FC<TItemProps> = ({ content }): ReactElement => {
  return (
    <div className="item">
      <h4>{content.title}</h4>
      <p>{content.usAirDate}</p>
    </div>
  );
};

export default Item;
