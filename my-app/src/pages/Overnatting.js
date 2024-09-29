import React from "react";
import sjoen from "/Users/hildemikaelsen/Desktop/sideforingrid/sideforingrid/my-app/src/IMG_3545.jpeg";

function OvernattingPage() {
  return (
    <div>
      <h1 className="App-header-frontpage">Overnatting</h1>
      <h2 className="App-frontpage2">
        Vi antar at de fleste som kommer trenger et sted å overnatte. <br />
        Her er noen alternativer, men gi oss gjerne beskjed om du trenger hjelp!
      </h2>
      <h3 className="App-overnatting3">
        Vi har reservert rom på Det Lille Hotell i Risør sentrum. Gi oss beskjed
        om du ønsker ett av disse.
        <br />
        <a
          href="https://www.detlillehotel.no"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.detlillehotel.no
        </a>
      </h3>
      <h3 className="App-overnatting3">
        AirBnB. Det er flere som leier ut feriebolig i byen, <br />
        så det bør være muligheter her om man er ute i litt god tid. <br />
        <a href="https://airbnb.no" target="_blank" rel="noopener noreferrer">
          https://airbnb.no
        </a>
      </h3>
      <h3 className="App-overnatting3">
        Risør Pensjonat har rimelige rom, og ligger ca 10-15 minutter <br /> fra
        Sundet hvor bryllupet avholdes <br />
        <a
          href="https://www.risorpensjonat.no/kontakt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.risorpensjonat.no/kontakt/
        </a>
      </h3>
    </div>
  );
}

export default OvernattingPage;
