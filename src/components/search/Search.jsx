import { TuneOutlined } from "@material-ui/icons";

import ChannelRow from "./channel/ChannelRow";
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
    </div>
  );
};

export default Search;
