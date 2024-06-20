import React from "react";
import bilde from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/bilde.JPG";

function HomePage() {
  return (
    <div>
      <h1 className="App-navy">Vi gifter oss i 2025 TBA</h1>
      <h1 className="App-navy">Ingrid og Rasmus</h1>
      <img src={bilde} className="App-bilde" alt="bilde" />
    </div>
  );
}

export default HomePage;
