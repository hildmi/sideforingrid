import "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/App.css";
import HomePage from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/pages/HomePage.js";
import InformationPage from "./pages/InformationPage";
import HusetPage from "./pages/HusetPage";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import OvernattingPage from "./pages/Overnatting";
import ProgramPage from "./pages/ProgramPage";
import ØnskelistePage from "./pages/ØnskelistePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/hjem" element={<HomePage />}></Route>
          <Route path="/informasjon" element={<InformationPage />}></Route>
          <Route path="/overnatting" element={<OvernattingPage />}></Route>
          <Route path="/huset" element={<HusetPage />}></Route>
          <Route path="/program" element={<ProgramPage />}></Route>
          <Route path="/ønskeliste" element={<ØnskelistePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
