import IEpisode from "../../interfaces/IEpisode";
import "./index.css";
import Item from "../Item";
import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import Pagination from "../Pagination";
import { useNavigate } from "react-router-dom";
import IPage from "../../interfaces/IPage";

type TContentProps = {
  items: IEpisode[] | undefined | null;
  page: IPage | undefined | null;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Content: FC<TContentProps> = ({
  items,
  page,
  setPageNumber,
}): ReactElement => {
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
              <Pagination page={page} setPageNumber={setPageNumber} />
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
