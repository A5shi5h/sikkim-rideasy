"use client"; 

import React, { lazy, Suspense } from "react";

// Lazy load components
const Footer = lazy(() => import("@/components/Footer"));
const TagLine = lazy(() => import("@/components/TagLine"));

const EastSikkim = () => {
  const placesToVisit = [
    { name: "Tsomgo Lake", image: "/images/changu.jpeg", description: "A glacial lake surrounded by breathtaking scenery." },
    { name: "Nathula Pass", image: "/images/nathula-pass.jpg", description: "A historic mountain pass on the Indo-China border." },
    { name: "Zuluk", image: "/images/zuluk.png", description: "A quaint village offering panoramic views of mountain ranges." },
    { name: "Aritar Lake", image: "/images/aritar-lake.jpg", description: "A serene lake perfect for boating and nature walks." },
    { name: "Kupup Lake", image: "/images/kupup-lake.jpg", description: "Known as Elephant Lake for its unique shape." },
    { name: "Baba Harbhajan Singh Temple", image: "/images/baba-temple.jpg", description: "A temple dedicated to a legendary Indian soldier." },
  ];

  return (
    <>
      <div className="container mx-auto p-10 space-y-8 pt-28">
        {/* First Grid: Slider and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: Photo Slider */}
          <div className="bg-transparent rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">East Sikkim</h1>
            <div className="relative w-full h-64 bg-gray-200 overflow-hidden rounded-lg">
              <Suspense fallback={<div>Loading Image...</div>}>
                <img
                  src="/images/east sikkim.jpg"
                  alt="East Sikkim"
                  loading="lazy"  // 👈 Add lazy loading attribute
                  className="w-full h-full object-cover"
                />
              </Suspense>
            </div>
          </div>

          {/* Right: Map, Weather, and Distance */}
          <div className="bg-white shadow rounded-lg p-4 space-y-6">
            {/* Map Section */}
            <div>
              <h1 className="text-2xl font-bold mb-4">Map of East Sikkim</h1>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14237.636064727116!2d88.61084176218749!3d27.33893822259167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e61dddfbd8326d%3A0xefa98769ec4dbff8!2sEast%20Sikkim!5e0!3m2!1sen!2sin!4v1616583914722!5m2!1sen!2sin"
                loading="lazy"  // 👈 Add lazy loading to map iframe
              ></iframe>
            </div>

            {/* Weather Report */}
            <div>
              <h1 className="text-xl font-bold mb-2">Current Weather</h1>
              <p className="text-gray-600">Sunny, 15°C</p>
            </div>

            {/* Distance from Siliguri */}
            <div>
              <h1 className="text-xl font-bold mb-2">Distance from Siliguri</h1>
              <p className="text-gray-600">Approximately 120 km</p>
            </div>
          </div>
        </div>

        {/* Second Grid: Places to Visit and About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left: About East Sikkim */}
          <div className="rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-4 text-white">About East Sikkim</h1>
            <p className="text-white">
              Gangtok District is an administrative district of the Indian state of Sikkim. It was renamed in 2021 as a result of administrative reorganisation of the state, which also saw three subdivisions of the East Sikkim district spawned off as a separate Pakyong district.<br/><br/>
              The headquarters of the Gangtok district is Gangtok, which is also the state capital. Gangtok is the hub of all administrative activity in the state.
            </p>
          </div>

          {/* Right: Places of Interest */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <div className="bg-transparent shadow rounded-lg p-4">
              <h1 className="text-2xl font-bold mb-4 text-white">PLACES OF INTEREST</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {placesToVisit.map((place, index) => (
                  <div key={index} className="p-4 border rounded-lg shadow bg-white">
                    <Suspense fallback={<div>Loading Image...</div>}>
                      <img
                        src={place.image}
                        alt={place.name}
                        loading="lazy"  // 👈 Lazy loading the image
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
      </div>

      {/* Lazy load Footer and TagLine */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <TagLine />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default EastSikkim;
