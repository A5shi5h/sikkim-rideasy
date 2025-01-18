"use client"

import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const NamchiSightseeing = () => {

  const router = useRouter();
  
  const places = [
    "Temi tea Garden",
    "Samdruptse",
    "Siddheswar Dham (replica of Char-Dham)"
  ];

  const searchParams = useSearchParams();

  const destination = searchParams.get('destination');
  const date = searchParams.get('date');

  const handleBookNow = (carType:any, price:any, image:any, date:any , destination:any) => {
    router.push(`/reviewBooking?vehicle=${carType}&price=${price}&image=${image}&date=${date}&destination=${destination}&price=${price}`);
  };

  const cars = [
    {
      vehicles: [
        { name: "Hatchback", price: 4000 , image: "/images/hatchback1.jpg" },
      ],
    },
    {
      vehicles: [
        { name: "Sedan", price: 4300 , image: "/images/sedan1.jpg" },
      ],
    },
    {
      vehicles: [
        { name: "SUV", price: 4800 , image: "/images/suv1.jpg" },
      ],
    },
  ];

  return (
    <>
     <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6 mt-16">
        <div className="w-full">
          {/* Included Section */}
          <h1 className="text-white text-4xl font-bold mb-6">Namchi Sightseeing</h1>
          <img src="./images/south sikkim.jpg" className="rounded-md shadow-lg mb-6 w-full" alt="Gangtok Sightseeing" />

          {/* Left: Places to Visit */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">City Itinerary</h1>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {places.map((place, index) => (
                <li key={index} className="text-lg">{place}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Cars */}
        <div className="h-full lg:w-1/2 bg-transparent shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">Available Cars</h1>
          {cars.map((category, index) => (
            <div key={index} className="mb-6">
              <div className="grid grid-cols-1 gap-6">
                {category.vehicles.map((car, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
                  >
                    <img src={car.image} alt={car.name} className="rounded-md mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{car.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">₹{car.price}</p>
                    <button
                      onClick={() => handleBookNow(car.name, car.price, car.image , date , destination)}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Instructors />
      <Footer />
    </>
  );
};

export default NamchiSightseeing;
