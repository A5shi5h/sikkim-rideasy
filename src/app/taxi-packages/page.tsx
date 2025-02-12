"use client";

import Footer from "@/components/Footer";
import TagLine from "@/components/TagLine";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const packages = [
  {
    id: "GTK001",
    destination: "Gangtok",
    nights: 2,
    days: 3,
    image: "./images/gangtok.jpg", 
    hatchback : {
       name : "hatchback",
       price : 13000,
       image : "./images/hatchback1.jpg"
    },
    sedan: {
      name : "sedan",
      price : 14500,
      image : "./images/sedan1.jpg",
    },
    suv: {
      name : "suv",
      price : 16000,
      image : "./images/suv1.jpg"
    },
  },
  {
    id: "GTK002",
    destination: "Gangtok2",
    nights: 3,
    days: 4,
    image: "./images/gangtok2.jpg", 
    hatchback : {
      name : "hatchback",
      price : 16000,
      image : "./images/hatchback1.jpg"
   },
   sedan: {
     name : "sedan",
     price : 18000,
     image : "./images/sedan1.jpg",
   },
   suv: {
     name : "suv",
     price : 22000,
     image : "./images/suv1.jpg"
   },
  },
  {
    id: "GTK003",
    destination: "Gangtok-Zuluk",
    nights: 4,
    days: 5,
    image: "./images/zuluk1.jpeg", 
    hatchback : {
      name : "hatchback",
      price : 17000,
      image : "./images/hatchback1.jpg"
   },
   sedan: {
     name : "sedan",
     price : 19000,
     image : "./images/sedan1.jpg",
   },
   suv: {
     name : "suv",
     price : 23000,
     image : "./images/suv1.jpg"
   },
  },
  {
    id: "GTK004",
    destination: "Gangtok-Namchi",
    nights: 4,
    days: 5,
    image: "./images/namchi2.jpg", 
    hatchback : {
      name : "hatchback",
      price : 20000,
      image : "./images/hatchback1.jpg"
   },
   sedan: {
     name : "sedan",
     price : 22500,
     image : "./images/sedan1.jpg",
   },
   suv: {
     name : "suv",
     price : 27500,
     image : "./images/suv1.jpg"
   },
  },
  {
    id: "GTK005",
    destination: "Gangtok-Namchi-Pelling",
    nights: 5,
    days: 6,
    image: "./images/pelling2.jpg",
    hatchback : {
      name : "hatchback",
      price : 24000,
      image : "./images/hatchback1.jpg"
   },
   sedan: {
    name : "sedan",
     price : 27000,
     image : "./images/sedan1.jpg",
   },
   suv: {
    name : "suv",
     price : 33000,
     image : "./images/suv1.jpg"
   },
  },
  {
    id: "GTK006",
    destination: "Lachung",
    nights: 1,
    days: 2,
    image: "./images/lachung.jpg", 
    suv: {
      name : "suv",
      price : 13000,
      image : "./images/suv1.jpg"
    },
    muv: {
      name : "muv",
      price : 12000,
      image : "./images/muv1.jpg"
    },
  },
  {
    id: "GTK007",
    destination: "Lachen-Lachung",
    nights: 2,
    days: 3,
    image: "./images/lachen.jpg", 
    suv: {
      name : "suv",
      price : 19500,
      image : "./images/suv1.jpg"
    },
    muv: {
      name : "muv",
      price : 18000,
      image : "./images/muv1.jpg"
    },
  },
  {
    id: "GTK008",
    destination: "Super-North",
    nights: 4,
    days: 5,
    image: "./images/north sikkim.jpg", 
    suv: {
      name : "suv",
      price : 30500,
      image : "./images/suv1.jpg"
    },
    muv: {
      name : "muv",
      price : 28000,
      image : "./images/muv1.jpg"
    },
  },
  {
    id: "GTK009",
    destination: "Combo-North",
    nights: 6,
    days: 7,
    image: "./images/north sikkim2.jpg", 
    suv: {
      name : "suv",
      price : 41500,
      image : "./images/suv1.jpg"
    },
    muv: {
      name : "muv",
      price : 40000,
      image : "./images/muv1.jpg"
    },
  },
];

const TaxiPackages = () => {
  
  const router = useRouter();

  const handleBookNow = (destination : any, price : any , carType : any , image : any) => {
    router.push(`/packagesBooking?destination=${destination}&price=${price}&vehicle=${carType}&image=${image}`);
  };

  return (
    <>
     <div className="p-6 bg-gray-100 min-h-screen pt-28">
      {packages.map((pkg) => (
        <div key={pkg.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-blue-600">
            {pkg.id} {pkg.destination} | {pkg.nights} Nights {pkg.days} Days
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <img
              src={pkg.image}
              alt={pkg.destination}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <p className="text-gray-700 font-semibold">
                {pkg.destination} ({pkg.nights}N{pkg.days}D)
              </p>
              <div className="mt-3 space-y-2">
                {pkg.hatchback && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600 text-sm">Hatchback (4 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">
                      ₹{pkg.hatchback.price}
                    </span>
                    <button
                      onClick={() =>
                        handleBookNow(pkg.destination, pkg.hatchback.price , pkg.hatchback.name , pkg.hatchback.image)
                      }
                      className="bg-orange-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-orange-600 text-sm md:text-base"
                    >
                      Book Now
                    </button>
                  </div>
                )}
                {pkg.sedan && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600">Sedan (4 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">
                      ₹{pkg.sedan.price}
                    </span>
                    <button
                      onClick={() => handleBookNow(pkg.destination, pkg.sedan.price , pkg.sedan.name , pkg.sedan.image)}
                      className="bg-orange-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-orange-600 text-sm md:text-base"
                    >
                      Book Now
                    </button>
                  </div>
                )}
                {pkg.suv && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600">SUV (6 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">
                      ₹{pkg.suv.price}
                    </span>
                    <button
                      onClick={() => handleBookNow(pkg.destination, pkg.suv.price , pkg.suv.name , pkg.suv.image)}
                     className="bg-orange-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-orange-600 text-sm md:text-base"
                    >
                      Book Now
                    </button>
                  </div>
                )}
                {pkg.muv && (
                  <div className="flex justify-between items-center border p-2 rounded-md">
                    <span className="text-gray-600">MUV (6-7 Seater)</span>
                    <span className="text-red-600 font-bold text-center flex-1">
                      ₹{pkg.muv.price}
                    </span>
                    <button
                      onClick={() => handleBookNow(pkg.destination, pkg.muv.price , pkg.muv.name , pkg.muv.image)}
                      className="bg-orange-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-md hover:bg-orange-600 text-sm md:text-base"
                    >
                      Book Now
                    </button>
                  </div>
                )}
              </div>
              <div className="flex space-x-2 mt-4">
                <Link href={pkg.destination.toLowerCase()}><button className="bg-gray-800 text-white px-4 py-2 rounded-md">
                  View Details
                </button></Link>
                <Link href={"enquire"}><button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
                  Send Enquiry
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <TagLine/>
    <Footer/>
    </>
  );
};

export default TaxiPackages;