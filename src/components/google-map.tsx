import React, { useMemo, useEffect } from "react";
import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { ScatterplotLayer } from "@deck.gl/layers";
import { DeckProps } from "@deck.gl/core";
import { GoogleMapsOverlay } from "@deck.gl/google-maps";

type DataPoint = {
  longitude: number;
  latatitude: number;
};

function DeckGLOverlay(props: DeckProps) {
  const map = useMap();
  const overlay = useMemo(() => new GoogleMapsOverlay(), []);

  useEffect(() => {
    overlay.setMap(map);
    return () => overlay.setMap(null);
  }, [map]);

  overlay.setProps(props);
  return null;
}

export function GoogleBaseMap() {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const GOOGLE_MAPS_MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const radiusScale = 0.4

  const layers = [
    new ScatterplotLayer({
      id: "drives",
      data: "/test.json",
      getPosition: (d) => [d[0], d[1], 0],
      getFillColor: [23, 184, 190],
      stroked: false,
      getRadius: 20,
      radiusUnits: "pixels",
      radiusScale: radiusScale,
      antialiasing: true,
    }),
  ];

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 39, lng: -101 }}
        defaultZoom={4}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={GOOGLE_MAPS_MAP_ID}
      >
        <DeckGLOverlay layers={layers} />
      </Map>
    </APIProvider>
  );
}
