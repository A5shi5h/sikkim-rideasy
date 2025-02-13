"use client";

import TagLine from "@/components/TagLine";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GangtokNamchiPackage = () => {

  const destination = "Gangtok-Namchi";

  const cars = [
    {
      type: "Hatchback",
      price: 20000,
      seats: "4 seater",
      image: "./images/hatchback1.jpg", 
    },
    {
      type: "Sedan",
      price: 22500,
      seats: "4 seater",
      image: "./images/sedan1.jpg", 
    },
    {
      type: "SUV",
      price: 27500,
      seats: "6 seater",
      image: "./images/suv1.jpg", 
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
     <img src="./images/namchi.jpg" className="h-64 w-full object-cover rounded-lg mb-4"/>
      {/* Header Section */}
      <h1 className="text-xl font-bold text-red-600">
        GTK004 Gangtok-Namchi | 4 Nights 5 Days
      </h1>

      {/* Package Inclusions */}
      <div className="bg-white p-4 mt-6 shadow-md rounded-lg">
        <h2 className="font-bold text-lg">My Package Inclusions:</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {['Vehicle', 'Sightseeing', 'Transfer'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={`./icons/${item.toLowerCase()}.png`} alt={item} className="w-12 h-12" />
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
        <div className="grid md:grid-cols-3 gap-5 mt-4">
        {cars.map((car, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md p-4 text-center">
              <img src={car.image} alt={car.type} className="w-full h-40 object-contain mb-4" />
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
            <p className="mt-2"><strong>Bagdogra/Pakyong/New Jalpaiguri Station/Siliguri to Gangtok</strong></p>
            <p className="text-md font-light">Overnight stay at Gangtok</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 2</h3>
            <p className="mt-2 font-bold">Full day Tsomgo Lake Sightseeing</p>
            <ul className="list-disc pl-5 font-light">
              <li>Tsomgo Lake</li>
              <li>New Baba Mandir</li>
              <li>Optional: Nathula Pass (extra charges apply)</li>
            </ul>
            <p className="font-light">Overnight stay at Gangtok.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 3</h3>
            <p className="mt-2 font-bold">Gangtok Sighseeing and drop to Namchi</p>
            <ul className="list-disc pl-5 font-light">
              <li>Namgyal Institute of Tibetology</li>
              <li>Ropeway</li>
              <li>Flower Show (Orchid)</li>
              <li>Do-Drul Chorten</li>
              <li>Directorate of Handicraft & Handloom</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 4</h3>
            <p className="mt-2 font-bold">Namchi Sightseeing</p>
            <ul className="list-disc pl-5 font-light">
              <li>Samdruptse Monastry</li>
              <li>Char Dham</li>
              <li>Optional: Ravangla (extra charges apply)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold bg-yellow-500 text-white inline-block px-3 py-1 rounded">DAY 5</h3>
            <p className="mt-2 font-bold">NJP , Bagdogra , Darjeeling drop</p>
            <ul className="list-disc pl-5 font-light">
              <li>End of tour</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <TagLine/>
      <Footer/>
    </>
  );
};

export default GangtokNamchiPackage;
