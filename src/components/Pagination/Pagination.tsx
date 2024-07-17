import "./index.css";
import { Dispatch, FC, ReactElement, SetStateAction, useCallback } from "react";
import IPage from "../../interfaces/IPage";

type TPaginationProps = {
  page: IPage | undefined | null;
  setPageNumber: Dispatch<SetStateAction<number>>;
};

const Pagination: FC<TPaginationProps> = ({
  page,
  setPageNumber,
}): ReactElement => {

  const handlePrev = useCallback(() => {
    setPageNumber((prevCount?: number) => {
      if (prevCount && prevCount > 1) {
        return prevCount - 1;
      }
      return 0;
    });
  }, [setPageNumber]);

  const handleNext = useCallback(() => {
    setPageNumber((prevCount?: number) => {
      if (!prevCount) {
        return 1;
      }
      return prevCount + 1;
    });
  }, [setPageNumber]);

  return (
    <>
      {page && (
        <div className="pagination">
          <button disabled={page.firstPage} onClick={handlePrev}>
            {" "}
            {"<"}{" "}
          </button>
          <span>
            Page {page.pageNumber + 1} of {page.totalPages}
          </span>
          <button disabled={page.lastPage} onClick={handleNext}>
            {" "}
            {">"}{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default Pagination;
