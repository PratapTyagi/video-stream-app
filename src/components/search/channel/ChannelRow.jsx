import { Avatar, Button } from "@material-ui/core";
import { NotificationsActive, CheckCircleRounded } from "@material-ui/icons";
import "./ChannelRow.css";
const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) => {
  //   <VideoRow
  //   thumbnail="https://th.bing.com/th/id/OIP.ZOhBKmU2bn2j7QsLyhLZPQHaEJ?w=321&h=180&c=7&o=5&pid=1.7"
  //   title="Inspired youtube clone"
  //   views={200}
  //   time={2}
  //   image="https://avatars.githubusercontent.com/u/45279411?v=4"
  //   channel="Pratap Tube"
  //   verified
  //   description="This is blockchain video"
  // />
  return (
    <div className="channelRow">
      <div className="channelRow__avatar">
        <Avatar className="avatar" src={image} />
      </div>
      <div className="channelRow__desc">
        <h2>
          {channel}{" "}
          {verified && (
            <CheckCircleRounded
              style={{ height: "30px", marginLeft: "10px" }}
            />
          )}
        </h2>
        <p>
          {subs} subscribers * {noOfVideos} videos
        </p>
        <p className="channelRow__desc__desc">{description}</p>
        <Button
          className="channelRow__desc__button"
          variant="contained"
          color="primary"
        >
          SUBSCRIBE
        </Button>
      </div>
      <div className="channelRow__right">
        <Button
          className="channelRow__right__button"
          variant="contained"
          color="primary"
        >
          SUBSCRIBE
        </Button>
        <NotificationsActive />
      </div>
    </div>
  );
};

export default ChannelRow;
