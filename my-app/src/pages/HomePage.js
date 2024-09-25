import React from "react";
import bilde from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/bilde.JPG";
import sundet from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/sundet.jpeg";
import begge from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/begge.jpg";
import fisketur from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/IMG_3680.jpg";

function HomePage() {
  return (
    <div>
      <h1 className="App-header-frontpage">Velkommen til Bryllup i Risør</h1>
      <h2 className="App-frontpage2">
        Vi gifter oss i Risør Kirke 14 Juni 2025. Denne nettsiden <br />
        inneholder informasjon om bryllupshelgen. Vi gleder oss!
      </h2>

      <div className="App-parent-container">
        <div className="App-img-container">
          <img src={bilde} className="App-bilde" alt="bilde" />
        </div>
        <div className="App-img-container">
          <img src={sundet} className="App-bilde" alt="sundet" />
        </div>
        <div className="App-img-container">
          <img src={fisketur} className="App-bilde" alt="fisketur" />
        </div>
        <div className="App-img-container">
          <img src={begge} className="App-bilde" alt="begge" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
