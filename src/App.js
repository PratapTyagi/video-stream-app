import "./App.css";
import Header from "./components/Heder/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Recomends from "./components/Recomends/Recomends";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Recomends />
    </div>
  );
}

export default App;
