import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
type TItemProps = {
  content: IEpisode;
  detailed?: boolean | undefined | null;
};

const Item: FC<TItemProps> = ({ content, detailed }): ReactElement => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    navigate(`/item/${content.uid}`);
  };

  return (
    <div className="item" onClick={handleClick}>
      <h4>{content.title}</h4>
      <p>{content.usAirDate}</p>

      {detailed && (
        <>
          <h3>Additional info:</h3>
          <ul>
            {content.titleGerman && <li>🇩🇪 {content.titleGerman}</li>}
            {content.titleJapanese && <li>🇯🇵 {content.titleJapanese}</li>}
            {content.titleItalian && <li>🇮🇹 {content.titleItalian}</li>}
            {content.yearFrom && content.yearTo && (
              <li>
                Years in Star Trek universe: {content.yearFrom} -{" "}
                {content.yearTo}
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Item;
