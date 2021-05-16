import { Avatar } from "@material-ui/core";
import { CheckCircleRounded } from "@material-ui/icons";

import "./VideoRow.css";
const VideoRow = ({
  thumbnail,
  title,
  views,
  time,
  image,
  channel,
  verified,
  description,
}) => {
  return (
    <div className="videoRow">
      <img src={thumbnail} alt="Thumbnail" />
      <div className="videoRow__body">
        <h3>{title}</h3>
        <div className="videoRow__videoInfo">
          {views} views * {time} ago
          <p className="videoRow__channel__info">
            <Avatar src={image} alt="Avatar Image" />
            <p>
              {channel}
              {verified && (
                <CheckCircleRounded
                  style={{ height: "30px", marginLeft: "10px" }}
                />
              )}
            </p>
          </p>
          <p className="videoRow__desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
