import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import InformationPage from "./pages/InformationPage";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={HomePage}></Route>
          <Route path="/informasjon" element={InformationPage}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
