import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";
import { FC, ReactElement } from "react";
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";

type TContentProps = {
  items: IEpisode[] | undefined | null;
};

const Content: FC<TContentProps> = ({ items }): ReactElement => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <>
      {items ? (
        items.length ? (
          <>
            <div className="content" onClick={handleClick}>
              <Pagination />
              <section className="content-items">
                {items.map((item, i) => {
                  return <Item content={item} key={i} />;
                })}
              </section>
            </div>
          </>
        ) : (
          <p>No items found. Try 'Matter' for example.</p>
        )
      ) : (
        <p>Content is loading...</p>
      )}
    </>
  );
};

export default Content;
