import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Recomends from "./components/recommends/Recommends";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchText">
            <div className="app__page">
              <Sidebar />
              <Search />
            </div>
          </Route>
          <Route path="/" exact>
            <div className="app__page">
              <Sidebar />
              <Recomends />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
