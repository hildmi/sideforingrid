import logo from "./logo.svg";
import bilde from "./bilde.JPG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={HomePage}></Route>
        </Routes>
        <h4 className="App-navy">Vi gifter oss i 2025 TBA</h4>
        <h2 className="App-navy">Ingrid og Rasmus</h2>
        <img src={bilde} className="App-bilde" alt="bilde" />
      </header>
    </div>
  );
}

export default App;
