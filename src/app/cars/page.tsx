'use client';

import Footer from '@/components/Footer';
import Instructors from '@/components/Instructors';
import { useRouter, useSearchParams } from 'next/navigation';

const CarsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Form details
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');
  const date = searchParams.get('date');
  const hatchbackAmount = searchParams.get('hatchbackPrice'); 
  const sedanAmount = searchParams.get('sedanPrice');

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
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-60 object-cover rounded-lg"
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

        <Instructors />
        <Footer />
      </div>
    </>
  );
};

export default CarsPage;
