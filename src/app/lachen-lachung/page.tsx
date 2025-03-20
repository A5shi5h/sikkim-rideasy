"use client";

import TagLine from "@/components/TagLine";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LachenLachungPackage = () => {

  const destination = "Lachung-Lachen";

  const cars = [
    {
      type: "SUV (Innova)",
      price: 19500,
      seats: "6 seater",
      image: "/images/suv1.jpg", 
    },
    {
      type: "MUV (Xylo)",
      price: 18000,
      seats: "6 seater",
      image: "/images/muv1.jpg", 
    },
  ];

  const router = useRouter();

  const handleBookNow = (destination:any , vehicle:any , price:any , image:any) => 
    router.push(
    `/packagesBooking?destination=${destination}&vehicle=${vehicle}&price=${price}&image=${image}`
  );

  return (
    <>
     <div className="p-6 bg-gray-100 min-h-screen pt-32">
     <Image 
     src="/images/lachen.jpg"
     alt="lachen"
     height={400}
     width={400} 
     className="h-64 w-full object-cover rounded-lg mb-4"/>
      {/* Header Section */}
      <h1 className="text-xl font-bold text-red-600">
        GTK007 Lachen-Lachung | 2 Nights 3 Days
      </h1>

      {/* Package Inclusions */}
      <div className="bg-white p-4 mt-6 shadow-md rounded-lg">
        <h2 className="font-bold text-lg">My Package Inclusions:</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {['Vehicle', 'Sightseeing', 'Transfer'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image src={`/icons/${item.toLowerCase()}.png`} 
              alt={item}
              height={100}
              width={100} 
              className="w-12 h-12" />
              <span className="text-sm font-semibold text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Package Details */}
      <div className="bg-white p-4 mt-6 shadow-md rounded-lg">
        <h2 className="font-bold text-lg">Gangtok Tour Package</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-semibold">INCLUDED IN THE PACKAGE:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Driver’s food, accommodation & daily allowance</li>
              <li>Fuel charges</li>
              <li>Parking charges</li>
            </ul>
          </div>
          <br/>
          <div>
            <h3 className="font-semibold">EXCLUDED FROM THE PACKAGE:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>Air Fare / Train fare</li>
              <li>A/C Charges extra</li>
              <li>Nathula Pass (extra charge applicable)</li>
              <li>Entrance Fees & Guide charges</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Car Selection & Booking */}
      <div className="bg-white p-4 mt-6 shadow-md rounded-lg">
        <h2 className="font-bold text-lg">Car Availability:</h2>
        <div className="grid md:grid-cols-2 gap-5 mt-4">
        {cars.map((car, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md p-4 text-center">
              <Image 
              src={car.image} 
              alt={car.type}
              height={100}
              width={100} 
              className="w-full h-40 object-contain mb-4" />
              <h4 className="font-semibold text-lg">{car.type}</h4>
              <p className="text-gray-600">{car.seats}</p>
              <p className="text-lg font-bold text-blue-600">₹{car.price}</p>
              <div className="flex justify-center mt-4 gap-2">
                <button onClick={() => handleBookNow(destination , car.type , car.price , car.image)}
                  className="bg-yellow-500 hover:bg-yellow-600 p-4 text-sm rounded-lg">Book Now</button>
                <Link href={"enquire"}>
                    <button className="bg-red-500 hover:bg-red-600 p-4 text-sm rounded-lg text-white">Send Enquiry</button>
                </Link>
              </div>
            </div>
          ))}
        </div>

         {/* Package Itinerary */}
        <h2 className="text-2xl font-bold mt-8">Package Itinerary</h2>
        <div className="mt-4 p-4 border rounded-lg shadow">
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 1</h3>
            <p className="mt-2"><strong>Gangtok to Lachung</strong></p>
            <p className="text-md font-light">Overnight stay at Lachung</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 2</h3>
            <p className="mt-2 font-bold">Yumthang Valley and drop to Lachen</p>
            <ul className="list-disc pl-5 font-light">
              <li>Yumthang Valley</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 3</h3>
            <p className="mt-2 font-bold">Lachen Sightseeing and back to Gangtok</p>
            <ul className="list-disc pl-5 font-light">
              <li>Gurudongmar Lake</li>
            </ul>
            <p className="text-md font-light">End of tour</p>
          </div>
        </div>
        </div>
      </div>
      <TagLine/>
      <Footer/>
    </>
  );
};

export default LachenLachungPackage;
