'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { lazy, Suspense } from "react";

const Footer = lazy(() => import("@/components/Footer"));
const TagLine = lazy(() => import("@/components/TagLine"));


const CarsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Form details
  const pickup = searchParams ? searchParams.get('pickup') : null;
  const dropoff = searchParams ?searchParams.get('dropoff') : null;
  const date = searchParams ? searchParams.get('date') : null;
  const hatchbackAmount = searchParams ? searchParams.get('hatchbackPrice') : null; 
  const sedanAmount = searchParams ? searchParams.get('sedanPrice') : null;

  const cars = [
    { name: 'Hatchback', image: '/images/hatchback1.jpg', price: hatchbackAmount },
    { name: 'Sedan', image: '/images/sedan1.jpg', price: sedanAmount },
  ];

  const handleBookNow = (carName: any, carImage: any) => {
    router.push(
      `/pickndropBooking?pickup=${pickup}&dropoff=${dropoff}&date=${date}&car=${carName}&image=${carImage}&price=${
        carName === 'Hatchback' ? hatchbackAmount : sedanAmount
      }`
    );
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen pt-24">
        <main className="container mx-auto py-10 px-6">
          {cars.map((car, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 mb-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Left Column - Car Image */}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-black mb-4">{car.name}</h2>
                <Image
                  src={car.image}
                  alt={car.name}
                  height={400}
                  width={400}
                  className="object-cover rounded-lg"
                  loading='lazy'
                />
              </div>

              {/* Middle Column - Ride Details */}
              <div className="text-center flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">RIDE DETAILS</h3>
                <p className="text-gray-600"><strong>Pickup:</strong> {pickup || 'Not specified'}</p>
                <p className="text-gray-600"><strong>Dropoff:</strong> {dropoff || 'Not specified'}</p>
                <p className="text-gray-600"><strong>Date:</strong> {date || 'Not specified'}</p>
                <p className="text-gray-600"><strong>Amount:</strong> ₹{car.price || 'Not specified'}</p>
              </div>

              {/* Right Column - Book Now Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleBookNow(car.name, car.image)}
                  className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors 
                  duration-300 text-sm"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </main>

        <Suspense fallback={<div>Loading TagLine...</div>}>
        <TagLine />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>

      </div>
    </>
  );
};

export default CarsPage;
