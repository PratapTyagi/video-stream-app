import {
  Home,
  TrendingUp,
  Subscriptions,
  VideoLibrary,
  History,
  Schedule,
  ThumbUp,
} from "@material-ui/icons";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.jsx";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow Item={Home} active text="Home" />
      <SidebarRow Item={TrendingUp} text="Trending" />
      <SidebarRow Item={Subscriptions} text="Subscriptions" />
      <hr />
      <SidebarRow Item={VideoLibrary} text="Library" />
      <SidebarRow Item={History} text="History" />
      <SidebarRow Item={Schedule} text="Watch Later" />
      <SidebarRow Item={ThumbUp} text="Liked" />
      <hr />
    </div>
  );
};

export default Sidebar;
