import "./index.css";
import IEpisode from "../../interfaces/IEpisode";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

type TItemProps = {
  content: IEpisode;
  detailed: boolean | undefined | null;
};

const Item: FC<TItemProps> = ({ content, detailed }): ReactElement => {
  return (
    <div className="item">
      <Link to={`/item/${content.uid}`}>
        <h4>{content.title}</h4>
        <p>{content.usAirDate}</p>
      </Link>
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
