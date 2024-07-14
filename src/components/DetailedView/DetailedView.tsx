import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";
import { FC, ReactElement } from "react";
import { Link, useLoaderData } from "react-router-dom";

type TLoaderData = {
  item: IEpisode;
};

const DetailedView: FC = (): ReactElement => {
  const { item } = useLoaderData() as TLoaderData;
  return (
    <>
      <div className="detailed-view">
        <div className="close">
          <Link to="/">Close ✖️</Link>
        </div>

        {item && (
          <div className="detailed-view">
            <Item content={item} detailed={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default DetailedView;
