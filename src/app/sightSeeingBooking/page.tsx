"use client"
import Footer from '@/components/Footer';
import Instructors from '@/components/Instructors';
import Link from 'next/link';
import React from 'react'

const page = () => {

  const places = [
    {
      name: 'Gangtok-Sightseeing',
      image: '/images/gangtok.jpg',
      cars: [
        { type: 'Hatchback(Max 4 Seater)', image: '/hatchback.jpg', price: '₹2500.00/day' },
        { type: 'Sedan(Max 4 Seater)', image: '/sedan.jpg', price: '₹2800.00/day' },
        { type: 'SUV(Max 7 Seater)', image: '/suv.jpg', price: '₹4500.00/day' },
      ],
    },
    {
      name: 'Namchi-Sightseeing',
      image: '/images/namchi.jpg',
      cars: [
        { type: 'Hatchback(Max 4 Seater)', image: '/hatchback.jpg', price: '₹4000.00/day' },
        { type: 'Sedan(Max 4 Seater)', image: '/sedan.jpg', price: '₹4300.00/day' },
        { type: 'SUV(Max 7 Seater)', image: '/suv.jpg', price: '₹4800.00/day' },
      ],
    },
    {
      name: 'Nathula-Sightseeing',
      image: 'images/nathula-pass.jpg',
      cars: [
        { type: 'Hatchback(Max 4 Seater)', image: '/hatchback.jpg', price: '₹3500.00/day' },
        { type: 'Sedan(Max 4 Seater)', image: '/sedan.jpg', price: '₹3800/day' },
        { type: 'SUV(Max 7 Seater)', image: '/suv.jpg', price: '₹4500.00/day' },
      ],
    },
  ];

  return (
    <>
     <div className="space-y-10 p-10 mt-28">
      {places.map((place, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center p-6 shadow-xl shadow-slate-400 rounded-xl"
        >
          {/* Left Section - Image */}
          <div className="flex justify-center items-center">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Middle Section - Car Types */}
          <div className="flex flex-col space-y text-white">
            <h2 className="text-2xl font-bold border-b">{place.name}</h2>
            {place.cars.map((car, carIndex) => (
              <div
                key={carIndex}
                className="flex items-center space-x-4 p-4 rounded-lg shadow-sm"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{car.type}</h3>
                  <p className="text-sm text-gray-500">{car.price}</p>
                </div>
                <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
                  Book Now
                </button>
              </div>
            ))}
          </div>

          {/* Right Section - Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <Link href={"/"+place.name} className="w-1/3 bg-blue-500 text-center text-white py-2 rounded-lg hover:bg-blue-400">
              View Details
            </Link>
            <Link href={"/enquire"} className="w-1/3 bg-yellow-500 text-center text-white py-2 rounded-lg hover:bg-yellow-600">
              Send Enquiry
            </Link>
          </div>
        </div>
      ))}
    </div>
    <Instructors/>
    <Footer/>
    </>
  )
}

export default page
