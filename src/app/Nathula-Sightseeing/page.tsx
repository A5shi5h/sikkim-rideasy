import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import React from "react";

const NathulaSightseeing = () => {
  
  const includedItems = [
    "Driver’s food, accommodation & daily allowance",
    "Fuel charges",
  ];

  const excludedItems = [
    "Air Fare / Train fare",
    "A/c Charges are extra",
    "Nathula Pass, which is ₹3000/vehicle extra depending upon the permit.",
    "Additional sightseeing or extra usage of vehicle, other than mentioned in the itinerary.",
    "Entrance Fees, Parking charges & Guide charges.",
    "Any cost arising due to natural calamities like landslides, road blockage, political disturbances etc. (Such cost is to be borne by the client and directly payable on the spot).",
    "Zero Point in North Sikkim will be charged ₹3000/- per vehicle which can be paid directly to the driver.",
  ];

  const places = [
    "Tsomgo Lake",
    "New Baba Mandir",
    "Optional: Nathula Pass (The Indo-China border) depends upon the availability of permit which costs an additional of Rs. 5000 per vehicle (Monday and Tuesday the pass is closed)."
  ];

  const cars = [
    {
      vehicles: [
        { name: "Hatchback", price: "₹5500.00" , image: "/images/hatchback1.jpg" },
      ],
    },
    {
      vehicles: [
        { name: "Sedan", price: "₹4500.00", image: "/images/sedan1.jpg" },
      ],
    },
    {
      vehicles: [
        { name: "SUV", price: "₹4000.00", image: "/images/suv1.jpg" },
      ],
    },
  ];

  return (
    <>
     <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6 mt-24">
      <div className="w-full">
        {/* Included Section */}
        <h1 className="text-white text-3xl font-semibold">NATHULA SIGHTSEEING</h1>
        <img src="./images/nathula.jpg" className="rounded-md p-2"/>

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
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 bg-slate-100">
              {category.vehicles.map((car, idx) => (
                <div key={idx} className="p-4 rounded-lg flex flex-col justify-center items-center">
                  <img src={car.image} className="p-4"/>
                  <h3 className="text-lg font-semibold text-black">{car.name}</h3>
                  <p className="text-gray-600">{car.price}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
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

export default NathulaSightseeing;
