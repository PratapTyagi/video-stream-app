import "./Recommends.css";
import VideoCard from "./VideoCard";
const Recommends = () => {
  return (
    <div className="recommends">
      <h2>Recommends</h2>
      <div className="recommends__videos">
        <VideoCard
          thumbnail="https://mrcryptodude.com/wp-content/uploads/2018/10/bitcoin-storage-thumbnail.png"
          profileImage="https://avatars.githubusercontent.com/u/45279411?v=4"
          title="Youtube Inspired Stream Tube"
          channel="Pratap Tube"
          views={20}
          timestamp={`2:30pm`}
        />
        <VideoCard
          thumbnail="https://www.dailydot.com/wp-content/uploads/1d9/53/8fbf11e1e73a05de-2048x1024.png"
          profileImage="https://avatars.githubusercontent.com/u/45279411?v=4"
          title="Youtube Inspired Stream Tube"
          channel="Pratap Tube"
          views={20}
          timestamp={`2:30pm`}
        />
        <VideoCard
          thumbnail="https://mrcryptodude.com/wp-content/uploads/2018/10/bitcoin-storage-thumbnail.png"
          profileImage="https://avatars.githubusercontent.com/u/45279411?v=4"
          title="Youtube Inspired Stream Tube"
          channel="Pratap Tube"
          views={20}
          timestamp={`2:30pm`}
        />
        <VideoCard
          thumbnail="https://www.dailydot.com/wp-content/uploads/1d9/53/8fbf11e1e73a05de-2048x1024.png"
          profileImage="https://avatars.githubusercontent.com/u/45279411?v=4"
          title="Youtube Inspired Stream Tube"
          channel="Pratap Tube"
          views={20}
          timestamp={`2:30pm`}
        />
        <VideoCard
          thumbnail="https://mrcryptodude.com/wp-content/uploads/2018/10/bitcoin-storage-thumbnail.png"
          profileImage="https://avatars.githubusercontent.com/u/45279411?v=4"
          title="Youtube Inspired Stream Tube"
          channel="Pratap Tube"
          views={20}
          timestamp={`2:30pm`}
        />
        <VideoCard
          thumbnail="https://www.dailydot.com/wp-content/uploads/1d9/53/8fbf11e1e73a05de-2048x1024.png"
          profileImage="https://avatars.githubusercontent.com/u/45279411?v=4"
          title="Youtube Inspired Stream Tube"
          channel="Pratap Tube"
          views={20}
          timestamp={`2:30pm`}
        />
      </div>
    </div>
  );
};

export default Recommends;
