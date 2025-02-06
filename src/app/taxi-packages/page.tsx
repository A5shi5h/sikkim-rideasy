import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const packages = [
  {
    id: "GTK001",
    title: "Gangtok",
    nights: 2,
    days: 3,
    image: "./images/gangtok.jpg", // Replace with actual image URL
    hatchback: 13000,
    suvPrice: 14500,
    sedanPrice: 16000,
  },
  {
    id: "GTK002",
    title: "Gangtok",
    nights: 3,
    days: 4,
    image: "./images/gangtok2.jpg", // Replace with actual image URL
    hatchback: 16000,
    suvPrice: 18000,
    sedanPrice: 22000,
  },
  {
    id: "GTK003",
    title: "Gangtok-Namchi",
    nights: 4,
    days: 5,
    image: "./images/namchi2.jpg", // Replace with actual image URL
    hatchback: 20000,
    suvPrice: 22500,
    sedanPrice: 27500,
  },
  {
    id: "GTK004",
    title: "Gangtok-Namchi-Pelling",
    nights: 5,
    days: 6,
    image: "./images/pelling2.jpg", // Replace with actual image URL
    hatchback: 24000,
    suvPrice: 33000,
    sedanPrice: 27000,
  },
  {
    id: "GTK005",
    title: "Lachung",
    nights: 1,
    days: 2,
    image: "./images/lachung.jpg", // Replace with actual image URL
    suvPrice: 13000,
    muvPrice: 12000,
  },
  {
    id: "GTK006",
    title: "Lachen-Lachung",
    nights: 2,
    days: 3,
    image: "./images/lachen.jpg", // Replace with actual image URL
    suvPrice: 19500,
    muvPrice: 18000,
  },
  {
    id: "GTK007",
    title: "Super North",
    nights: 4,
    days: 5,
    image: "./images/north sikkim.jpg", // Replace with actual image URL
    suvPrice: 30500,
    muvPrice: 28000,
  },
  {
    id: "GTK008",
    title: "Combo North",
    nights: 6,
    days: 7,
    image: "./images/north sikkim2.jpg", // Replace with actual image URL
    suvPrice: 41500,
    muvPrice: 40000,
  },
];

const TaxiPackages = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-28">
      {packages.map((pkg) => (
        <div key={pkg.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-600">
            {pkg.id} {pkg.title} | {pkg.nights} Nights {pkg.days} Days
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <p className="text-gray-700 font-semibold">
                {pkg.title} ({pkg.nights}N{pkg.days}D)
              </p>
              <div className="mt-3 space-y-2">
                {pkg.hatchback && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600 ">Hatchback(4 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">₹{pkg.hatchback}</span>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
                      Book Now
                    </button>
                  </div>
                )}
                {pkg.suvPrice && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600">Sedan(4 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">₹{pkg.sedanPrice}</span>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
                      Book Now
                    </button>
                  </div>
                )}
                {pkg.sedanPrice && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600">SUV(4 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">₹{pkg.suvPrice}</span>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
                      Book Now
                    </button>
                  </div>
                )}
                {pkg.muvPrice && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600">MUV (6-7 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">₹{pkg.muvPrice}</span>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600">
                      Book Now
                    </button>
                  </div>
                )}
              </div>
              <div className="flex space-x-2 mt-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md">View Details</button>
                <Link href={"enquire"}><button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Send Enquiry</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaxiPackages;