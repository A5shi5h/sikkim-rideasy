'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const PickNDrop = () => {

  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");

  const router = useRouter();

  const calculateAmount = (pickup: string, dropoff: string, carType: string) => {
    // Example pricing logic based on locations
    const basePrices: Record<string, Record<string, number>> = {
      Bagdogra: { Gangtok: 4000, Darjeeling: 4000 },
      NJP: { Gangtok: 4000, Pelling: 3500 },
      Siliguri: { Gangtok: 4000, Darjeeling: 4000 , Pelling: 4000},
      Darjeeling: { Gangtok: 3500, Siliguri: 4000 },
      Pelling: { NJP: 4000 },
      Gangtok: { Bagdogra: 4000, NJP: 4000 , Darjeeling: 3500 , Siliguri: 4000 , Pelling: 3500},
    };

    const baseAmount = basePrices[pickup]?.[dropoff] || 0;

    // Adjust price based on car type
    const sedanExtraCharge = carType === "sedan" ? 500 : 0; // Add 500 only for sedan
    const carTypeMultiplier = carType === "sedan" ? 1 : 1; 
    const basePrice = baseAmount * carTypeMultiplier;
    return basePrice + sedanExtraCharge; // Add the extra charge for sedan
};

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Calculate amounts for both car types
    const hatchbackAmount = calculateAmount(pickup, dropoff, "hatchback");
    const sedanAmount = calculateAmount(pickup, dropoff, "sedan");

    // Pass both amounts to the next page
    if(pickup === 'Pelling' && dropoff === 'Gangtok'){
      router.push("/contact")
    }else{
      router.push(
        `/cars?pickup=${pickup}&dropoff=${dropoff}&date=${date}&hatchbackPrice=${hatchbackAmount}&sedanPrice=${sedanAmount}`
      );
    }
  };

  return (
    <section className="max-w-lg mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg shadow-slate-900">
      <h1 className="text-2xl font-bold text-center mb-6 text-black">Book Your Ride</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-black text-xl">Pickup Location</label>
          <br />
          <select title="pick n drop form"
            className="text-black text-sm p-2 w-full"
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
          <label className="text-black text-xl">Dropoff Location</label>
          <br />
          <select title="pick n drop form"
            className="text-black text-sm p-2 w-full"
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
          <input title="date input"
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
};

export default PickNDrop;
