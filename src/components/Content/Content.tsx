import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

type TContentProps = {
  items: IEpisode[] | undefined | null;
};

const Content: FC<TContentProps> = ({ items }): ReactElement => {
  return (
    <>
      <div className="content-container">

        {items ? (
          items.length ? (<Link to="/">
            <section className="content">

              {items.map((item, i) => {
                return <Item content={item} key={i} />;
              })}

            </section>
          </Link>
          ) : (
            <p>No items found. Try 'Matter' for example.</p>
          )
        ) : (
          <p>Content is loading...</p>
        )}
      </div>
    </>
  );
};

export default Content;
