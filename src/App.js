import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Recomends from "./components/recommends/Recommends";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Recomends />
      </div>
    </div>
  );
}

export default App;
