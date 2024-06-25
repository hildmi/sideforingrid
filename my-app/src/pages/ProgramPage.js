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
        <h3 className="App-header2">Meet and Greet Kl.TBA</h3>
        <h4 className="App-program-beskrivelse">
          Albert og Kjersti, onkelen og tanten til brudgommen inviterer til
          cocktails og småretter på deres landsted i nærheten av
          bryllupslokasjonen. <br />
          Her kan alle bli litt kjent på kryss og tvers før den store dagen på
          lørdag.
        </h4>

        <h1 className="App-header">Program Lørdag</h1>
        <h3 className="App-header2">Vielse Kl.15.00-16.00</h3>
        <h4 className="App-program-beskrivelse">Vielsen er i Risør Kirke</h4>
        <MapComponent center={position} MarkerPosition={MarkerPosition} />
        <h1 className="App-header">Mottakelse på Sundet</h1>
        <h3 className="App-header2">Fra Kl.16 og utover</h3>
        <h4 className="App-program-beskrivelse">
          Familien ønsker velkommen til Sundet. Det blir servert noe fingermat
          mens brudeparet blir fotografert. Les mer om eiendommen{" "}
          <Link to={"/huset"} className="App-link">
            HER.
          </Link>
        </h4>

        <h1 className="App-header">Middag</h1>
        <h3 className="App-header2">Kl.18.00</h3>
        <h4 className="App-program-beskrivelse-siste">
          Kontakt toastmaster{" "}
          <Link to={"/informasjon"} className="App-link">
            HER
          </Link>{" "}
          for å melde inn tale eller andre innslag.
        </h4>
      </div>
    </div>
  );
}

export default ProgramPage;
