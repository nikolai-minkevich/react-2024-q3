import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";
import { FC, ReactElement } from "react";
import { useLoaderData } from "react-router-dom";

type TLoaderData = {
  item: IEpisode;
};

const DetailedView: FC = (): ReactElement => {
  const { item } = useLoaderData() as TLoaderData;
  return (
    <>
      {item && (
        <div className="detailed-view">
          <Item content={item} detailed={true} />
        </div>
      )}
    </>
  );
};

export default DetailedView;
