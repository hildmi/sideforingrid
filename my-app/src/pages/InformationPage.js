import React from "react";
import bilde from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/bilde.JPG";

function InformationPage() {
  return (
    <div className="App-parent-container">
      <div className="App-img-container">
        <img src={bilde} className="App-bilde" alt="bilde" />
      </div>
      <div className="App-img-container">
        <img src={bilde} className="App-bilde" alt="bilde" />
      </div>
      <div className="App-img-container">
        <img src={bilde} className="App-bilde" alt="bilde" />
      </div>
      <div className="App-img-container">
        <img src={bilde} className="App-bilde" alt="bilde" />
      </div>
    </div>
  );
}

export default InformationPage;
