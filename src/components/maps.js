import { APIProvider } from "@vis.gl/react-google-maps";
import React from "react";

<APIProvider
  apiKey={"AIzaSyA9dIVo6YHybhdF0wtWH05v8qLvEW3GteM"}
  onLoad={() => console.log("Maps API has loaded.")}
></APIProvider>;

function map() {
  return <div>test</div>;
}

export default map;
