import React from "react";
import bilde from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/bilde.JPG";

function HomePage() {
  return (
    <div>
      <header className="App-header">
        <h4 className="App-navy">Vi gifter oss i 2025 TBA</h4>
        <h2 className="App-navy">Ingrid og Rasmus</h2>
        <img src={bilde} className="App-bilde" alt="bilde" />
      </header>
    </div>
  );
}

export default HomePage;
