'use client';
import { useState, useEffect } from 'react';
import { wildlifeData } from '@/data/wildlifeData';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { motion, AnimatePresence } from 'framer-motion';
import { feature } from 'topojson-client';

export interface WildlifeLocation {
  id: number;
  name: string;
  coordinates: [number, number];
  animal: string;
  description: string;
  imageUrl: string;
  population: string;
  status: 'Endangered' | 'Threatened' | 'Stable';
  animalEmoji: string;
  funFact?: string;
}


export default function USAMap() {
  const [selectedLocation, setSelectedLocation] = useState<WildlifeLocation | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [geoData, setGeoData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  useEffect(() => {
    const loadMapData = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"
        );
        
        if (!response.ok) {
          throw new Error(`Failed to load map data: ${response.status} ${response.statusText}`);
        }
        
        const topology = await response.json();
        const geoJson = {
          type: "FeatureCollection",
          features: (feature(topology, topology.objects.states) as any).features
        };
        
        setGeoData(geoJson);
        setMapLoaded(true);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred loading map data';
        setError(errorMessage);
        console.error("Error loading map data:", errorMessage);
      }
    };

    loadMapData();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-red-50/50 backdrop-blur-sm rounded-lg">
        <div className="text-center">
          <p className="text-red-500 font-semibold mb-2">Error loading map:</p>
          <p className="text-red-600">{error}</p>
          <p className="text-sm text-gray-500 mt-2">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  if (!geoData || !mapLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-emerald-50/50 backdrop-blur-sm rounded-lg">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-600">Loading wildlife map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-t from-emerald-900 to-gray-900 p-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8 text-white"
      >
        Discover America's Wildlife Sanctuaries
      </motion.h2>
      
      <div className="relative">
        <div className="w-full h-[80vh] bg-emerald-900/30 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <ComposableMap
            projection="geoAlbersUsa"
            className="w-full h-full"
            projectionConfig={{
              scale: 1000
            }}
          >
            <ZoomableGroup 
              zoom={1}
              minZoom={0.8}
              maxZoom={4}
              translateExtent={[
                [-200, -100],
                [1000, 600]
              ]}
            >
              <Geographies geography={geoData}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1F3B2B"
                      stroke="#34D399"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#2D5A40", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {wildlifeData.map((location) => (
                <Marker
                  key={location.id}
                  coordinates={location.coordinates}
                  onClick={() => setSelectedLocation(location)}
                >
                  <motion.g
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => setHoveredLocation(location.id)}
                    onHoverEnd={() => setHoveredLocation(null)}
                    className="cursor-pointer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: hoveredLocation === location.id ? 1.2 : 1,
                      y: hoveredLocation === location.id ? -5 : 0
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20 
                    }}
                  >
                    <circle
                      r={8}
                      fill={selectedLocation?.id === location.id ? "#34D399" : "#10B981"}
                      stroke="#ffffff"
                      strokeWidth={2}
                    />
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{ fontSize: "16px", userSelect: "none" }}
                    >
                      {location.animalEmoji}
                    </text>
                    {hoveredLocation === location.id && (
                      <motion.text
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="pointer-events-none"
                        textAnchor="middle"
                        y={16}
                        style={{ 
                          fontSize: "12px",
                          fill: "#ffffff",
                          fontWeight: "bold"
                        }}
                      >
                        {location.animal}
                      </motion.text>
                    )}
                  </motion.g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>

        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="absolute top-0 right-0 w-96 h-full bg-emerald-900/80 backdrop-blur-md rounded-l-2xl shadow-2xl overflow-y-auto"
            >
              <div className="sticky top-0 z-10 bg-emerald-900/90 backdrop-blur-md p-4 border-b border-emerald-700">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-emerald-800 text-white hover:bg-emerald-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-6">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  src={selectedLocation.imageUrl}
                  alt={selectedLocation.animal}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{selectedLocation.animalEmoji}</span>
                    <h3 className="text-2xl font-bold text-white">{selectedLocation.animal}</h3>
                  </div>
                  <p className="text-lg text-emerald-300">{selectedLocation.name}</p>
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                    selectedLocation.status === 'Endangered' ? 'bg-red-500' :
                    selectedLocation.status === 'Threatened' ? 'bg-yellow-500' : 'bg-emerald-500'
                  } text-white mt-2`}>
                    {selectedLocation.status}
                  </span>
                </motion.div>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/80 leading-relaxed"
                >
                  {selectedLocation.description}
                </motion.p>

                {selectedLocation.funFact && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="bg-emerald-800/50 backdrop-blur-sm p-4 rounded-lg border border-emerald-700"
                  >
                    <p className="text-emerald-300 font-medium">Fun Fact!</p>
                    <p className="text-white/80">{selectedLocation.funFact}</p>
                  </motion.div>
                )}

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-emerald-800/50 rounded-lg p-4"
                >
                  <p className="text-emerald-300 font-medium">Current Population</p>
                  <p className="text-2xl font-bold text-white">{selectedLocation.population}</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}