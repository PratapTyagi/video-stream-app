import { TuneOutlined } from "@material-ui/icons";

import ChannelRow from "./channel/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search_filter">
        <TuneOutlined />
        <h3>Filters</h3>
      </div>
      <hr />

      <ChannelRow
        image="https://avatars.githubusercontent.com/u/45279411?v=4"
        channel="Pratap Tube"
        verified
        subs={2121}
        noOfVideos={111}
        description="React build and firebase deploy"
      />

      <hr />

      <VideoRow
        thumbnail="https://th.bing.com/th/id/OIP.ZOhBKmU2bn2j7QsLyhLZPQHaEJ?w=321&h=180&c=7&o=5&pid=1.7"
        title="Inspired youtube clone"
        views={200}
        time="2 years"
        image="https://avatars.githubusercontent.com/u/45279411?v=4"
        channel="Pratap Tube"
        verified
        description="This is youtube video "
      />
      <VideoRow
        thumbnail="https://i2.wp.com/iot.do/wp-content/uploads/sites/2/2017/12/GettyImages-701167058.jpg?fit=2309%2C1299&ssl=1"
        title="BlockChain Inspired"
        views={100}
        time="1 years"
        image="https://avatars.githubusercontent.com/u/45279411?v=4"
        channel="Pratap Tube"
        description="This is blockchain video"
      />
      <VideoRow
        thumbnail="https://i2.wp.com/iot.do/wp-content/uploads/sites/2/2017/12/GettyImages-701167058.jpg?fit=2309%2C1299&ssl=1"
        title="BlockChain Inspired"
        views={100}
        time="1 years"
        image="https://avatars.githubusercontent.com/u/45279411?v=4"
        channel="Pratap Tube"
        description="This is blockchain video"
      />
    </div>
  );
};

export default Search;
