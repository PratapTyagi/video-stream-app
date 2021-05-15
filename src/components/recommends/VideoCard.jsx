import { Avatar } from "@material-ui/core";
import "./VideoCard.css";
const VideoCard = ({
  thumbnail,
  profileImage,
  title,
  channel,
  views,
  timestamp,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={thumbnail} alt="Thumbnail" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={profileImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views * {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
