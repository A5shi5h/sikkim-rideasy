'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";  // Correct import for client-side routing

const PickNDrop = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    router.push(`/cars?pickup=${pickup}&dropoff=${dropoff}&date=${date}&time=${time}`);
  };

  return (
    <section className="max-w-lg mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg shadow-slate-900">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">Book Your Ride</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className='text-black text-xl'>Pickup Location</label><br/>
          <select
            className='text-black text-sm p-2 w-full'
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          >
            <option value="">Select Pickup Location</option>
            <option value="Bagdogra">Bagdogra</option>
            <option value="NJP">NJP</option>
            <option value="Siliguri">Siliguri</option>
            <option value="Darjeeling">Darjeeling</option>
            <option value="Pelling">Pelling</option>
            <option value="Gangtok">Gangtok</option>
          </select>
        </div>

        <div>
          <label className='text-black text-xl'>Dropoff Location</label><br/>
          <select
            className='text-black text-sm p-2 w-full'
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            required
          >
            <option value="">Select Dropoff Location</option>
            <option value="Bagdogra">Bagdogra</option>
            <option value="NJP">NJP</option>
            <option value="Siliguri">Siliguri</option>
            <option value="Darjeeling">Darjeeling</option>
            <option value="Pelling">Pelling</option>
            <option value="Gangtok">Gangtok</option>
          </select>
        </div>

        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg text-black text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-xl"
        >
          Request Ride
        </button>
      </form>
    </section>
  );
}

export default PickNDrop;
