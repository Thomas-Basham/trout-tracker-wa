import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useApiDataContext } from "@/contexts/DataContext";
import { formatDate } from "@/utils";

const customIcon = L.icon({
  iconUrl: "point-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface MapProps {
  selectedDateRange: DateRange;
  stockedLakesData: StockedLake[] | null;
  loading: boolean;
}

const Map: React.FC<MapProps> = ({ stockedLakesData, loading }) => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [47.6062, -122.3321], // Default center (Seattle)
        zoom: 8,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    if (stockedLakesData && mapRef.current) {
      const markersGroupedByCoordinates: { [key: string]: StockedLake[] } = {};

      stockedLakesData.forEach((data) => {
        const coordinateKey: string = `${data.latitude},${data.longitude}`;
        if (!markersGroupedByCoordinates[coordinateKey]) {
          markersGroupedByCoordinates[coordinateKey] = [];
        }
        markersGroupedByCoordinates[coordinateKey].push(data);
      });

      Object.entries(markersGroupedByCoordinates).forEach(
        ([key, groupData]) => {
          const [latitude, longitude] = key.split(",").map(Number);
          const popupContent = `
            <div class="scrollable-popup">
              <strong><h2>${groupData[0].lake}</h2></strong>
              <a href="${
                groupData[0].directions
              }" target="_blank" rel="noopener noreferrer">Get Directions</a>
              <hr>
              ${groupData
                .map(
                  (data) => `
                    <div>
                      <p>Release Date: ${formatDate(data.date)}</p>
                      <p>Species: ${data.species}</p>
                      <p>Amount Produced: ${data.stocked_fish}</p>
                      <p>Fish Per Pound: ${data.weight}</p>
                      <hr>
                    </div>
                  `
                )
                .join("")}
            </div>
          `;

          const marker = L.marker([latitude, longitude], {
            icon: customIcon,
          }).addTo(mapRef.current!);
          marker.bindPopup(popupContent);
        }
      );
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [stockedLakesData]);

  return <div id="map" className="w-full h-full" style={{ height: "500px" }} />;
};

export default Map;
