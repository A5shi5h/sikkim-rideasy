"use client";

import React, { lazy, Suspense } from "react";

// Lazy load components
const Footer = lazy(() => import("@/components/Footer"));
const TagLine = lazy(() => import("@/components/TagLine"));

const WestSikkim = () => {
  const placesToVisit = [
    { name: "Pelling", image: "/images/pelling.jpg", description: "A quaint town known for its panoramic views of the Himalayas and the Kanchenjunga range." },
    { name: "Yuksom", image: "/images/yuksom.jpg", description: "The first capital of Sikkim, rich in historical and cultural significance." },
    { name: "Khecheopalri Lake", image: "/images/khecheopalri-lake.jpg", description: "A sacred lake revered by both Buddhists and Hindus, surrounded by dense forest." },
    { name: "Pemayangtse Monastery", image: "/images/pemayangtse-monastery.jpg", description: "One of the oldest monasteries in Sikkim, showcasing stunning architecture and spiritual significance." },
    { name: "Kanchenjunga Falls", image: "/images/kanchenjunga-falls.jpg", description: "A majestic waterfall offering a refreshing retreat amidst nature." },
    { name: "Rabdentse Ruins", image: "/images/rabdentse-ruins.jpg", description: "The Rabdentse ruins are part of Buddhist religious pilgrimage circuit starting with the first monastery at Yuksom known as the Dubdi Monastery." },
  ];

  return (
    <>
      <div className="container mx-auto p-6 space-y-8 pt-28">
        {/* First Grid: Slider and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Photo Slider */}
          <div className="bg-transparent shadow rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Photos of West Sikkim</h1>
            <div className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg">
              <Suspense fallback={<div>Loading Image...</div>}>
                <img
                  src="/images/west sikkim.jpg"
                  alt="West Sikkim"
                  loading="lazy"  // 👈 Lazy loading the main image
                  className="w-full h-full object-cover"
                />
              </Suspense>
            </div>
          </div>

          {/* Right: Map, Weather, and Distance */}
          <div className="bg-white shadow rounded-lg p-4 space-y-6">
            {/* Map Section */}
            <div>
              <h1 className="text-2xl font-bold mb-4">Map of West Sikkim</h1>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.476856791366!2d88.2022592221875!3d27.269899900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6298d0f372db9%3A0x580bb08d2452f9e7!2sWest%20Sikkim!5e0!3m2!1sen!2sin!4v1686485002711!5m2!1sen!2sin"
                loading="lazy"  // 👈 Lazy loading the map
              ></iframe>
            </div>

            {/* Weather Report */}
            <div>
              <h1 className="text-xl font-bold mb-2">Current Weather</h1>
              <p className="text-gray-600">Partly Cloudy, 12°C</p>
            </div>

            {/* Distance from Siliguri */}
            <div>
              <h1 className="text-xl font-bold mb-2">Distance from Siliguri</h1>
              <p className="text-gray-600">Approximately 120 km</p>
            </div>
          </div>
        </div>

        {/* Second Grid: Places to Visit and About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Right: About Section */}
          <div className="rounded-lg p-4 text-white">
            <h1 className="text-2xl font-bold mb-4">About West Sikkim</h1>
            <p>
              Gyalshing District or Geyzing District is a district of the Indian state of Sikkim. Its headquarter is Geyzing, also known as Gyalshing. The district is a favourite with trekkers due to the high elevations. Other important towns include Pelling and Yuksom. Local people also call it as Pallo-Sikkim and Sano-Sikkim commonly.<br/><br/>
              Gyalshing district covers an area of 1,166 square kilometres (450 sq mi). Attractions include the Khecheopalri Lake, where, according to legend, not a leaf is allowed to fall on the surface of the lake and the Dubdi Monastery, the first monastery of the state.
            </p>
          </div>

          {/* Left: Places to Visit */}
          <div className="bg-transparent shadow rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">Places to Visit</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {placesToVisit.map((place, index) => (
                <div key={index} className="p-4 border rounded-lg shadow bg-white">
                  <Suspense fallback={<div>Loading Image...</div>}>
                    <img
                      src={place.image}
                      alt={place.name}
                      loading="lazy"  // 👈 Lazy loading place images
                      className="w-full h-32 object-cover rounded-md mb-2"
                    />
                  </Suspense>
                  <h2 className="text-lg font-semibold">{place.name}</h2>
                  <p className="text-gray-600">{place.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lazy load Footer and TagLine */}
      <Suspense fallback={<div>Loading TagLine...</div>}>
        <TagLine />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default WestSikkim;
