import React from "react";
import { useState } from "react";
import MapComponent from "../components/MapComponent";
import { Link } from "react-router-dom";

function ProgramPage() {
  const [position] = useState({
    lat: 58.72162647476835,
    lng: 9.231217022141747,
  });

  const MarkerPosition = useState({
    lat: 58.72162647476835,
    lng: 9.231217022141747,
  });

  const SundetPos = useState({
    lat: 58.72235613911463,
    lng: 9.205497255192213,
  });

  return (
    <div className="App-parent-container">
      <div className="App-container">
        <h1 className="App-header">Program Fredag</h1>
        <h3 className="App-header2">Meet and Greet Kl.19-22</h3>
        <h4 className="App-program-beskrivelse">
          Albert og Kjersti, onkelen og tanten til brudgommen inviterer til
          grilling på deres landsted på Engholmen i nærheten av
          bryllupslokasjonen. <br />
          Her kan alle bli litt kjent på kryss og tvers før den store dagen på
          lørdag. <br />
          Dresscode: Sexy&cool
        </h4>
        <h1 className="App-header">Program Lørdag</h1>
        <h3 className="App-header2">Vielse Kl.15</h3>
        <h4 className="App-program-beskrivelse">
          Vielsen finner sted i Den Hellige Ånds Kirke
        </h4>

        <h1 className="App-header">Mottakelse på Sundet</h1>
        <h3 className="App-header2">Fra Kl.16.30 og utover</h3>
        <h4 className="App-program-beskrivelse">
          Familien ønsker velkommen til Sundet. Les mer om eiendommen{" "}
          <Link to={"/huset"} className="App-link">
            HER.
          </Link>
        </h4>
        <h1 className="App-header">Middag</h1>
        <h3 className="App-header2">Kl.18.30</h3>
        <h4 className="App-program-beskrivelse">
          {" "}
          Treretters middag av Risørkokken blir servert. Kontakt toastmaster{" "}
          <Link to={"/informasjon"} className="App-link">
            HER
          </Link>{" "}
          for å melde inn tale eller andre innslag. <br /> Dersom du har noen
          allergier eller dietter, gjerne meld fra i god tid til brudgommens mor
          Anne{" "}
          <Link to={"/informasjon"} className="App-link">
            HER.
          </Link>
        </h4>
        <h1 className="App-header">Fest i Biljarden</h1>
        <h3 className="App-header2"> Fra Kl.22 og utover</h3>
        <h4 className="App-program-beskrivelse-siste">
          Det blir fest og underholdning på Sundet
        </h4>
      </div>
    </div>
  );
}

export default ProgramPage;

/*    <MapComponent center={position} MarkerPosition={MarkerPosition} /> */
