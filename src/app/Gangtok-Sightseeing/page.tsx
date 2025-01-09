"use client"
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import { useRouter } from "next/navigation";
import React from "react";

const GangtokSightseeing = () => {

  const router = useRouter();

  const places = [
    "Banjhakri Falls",
    "Ropeway",
    "Do-Drul Chorten",
    "Namgyal Institute of Tibetology",
    "Directorate of Handicraft & Handloom (Sunday Closed)",
    "Flower Show (Orchid)",
    "Tashi view point",
    "Ganesh Tok",
    "Hanuman Tok",
    "Bakthang Waterfalls"
  ];

  const handleBookNow = (placeName:any, carType:any , image:any) => {
    router.push(`/reviewBooking?place=${placeName}&vehicle=${carType}&image=${image}`);
  };


  const cars = [
    {
      vehicles: [
        { name: "Hatchback (max 4 seater)", price: "₹2500" , image: "/images/hatchback1.jpg" },
      ],
    },
    {
      vehicles: [
        { name: "Sedan (max 4 seater)", price: "₹2800", image: "/images/sedan1.jpg" },
      ],
    },
    {
      vehicles: [
        { name: "SUV (max 7 seater)", price: "₹4500", image: "/images/suv1.jpg" },
      ],
    },
  ];

  return (
    <>
     <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6 mt-24">
      <div className="w-full">
        {/* Included Section */}
        <h1 className="text-white text-3xl font-semibold">GANGTOK SIGHTSEEING</h1>
        <img src="./images/east sikkim.jpg" className="rounded-md p-2"/>

        {/* Left: Places to Visit */}
        <div className="bg-white shadow rounded-lg p-4">
          <h1 className="text-2xl font-bold mb-4">City Itinerary</h1>
          <ul className="list-disc list-inside text-gray-700">
            {places.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Cars */}
      <div className="h-1/2 lg:w-1/2 bg-transparent shadow rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-white">Available Cars</h1>
        {cars.map((category, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 gap-4 bg-slate-100">
              {category.vehicles.map((car, idx) => (
                <div key={idx} className="p-4 rounded-lg w-full flex flex-col justify-center items-center">
                   <img src={car.image} className="p-4"/>
                  <h3 className="text-lg font-semibold text-black">{car.name}</h3>
                  <p className="text-gray-600">{car.price}</p>
                  <div className="mt-4 flex gap-2">
                    <button onClick={() => handleBookNow(car.name, car.price , car.image)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Instructors/>
    <Footer/>
    </>
  );
};

export default GangtokSightseeing;
