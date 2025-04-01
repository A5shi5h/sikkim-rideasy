"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

//Sightseeing tab
const SightSeeing = () => {

    const [destination, setDestinatiopn] = useState("");
    const [date, setDate] = useState("");

    const router = useRouter();
  

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(destination == "gangtok"){
          router.push(`/Gangtok-Sightseeing?destination=${destination}&date=${date}`);
        }else if(destination == "namchi"){
          router.push(`/Namchi-Sightseeing?destination=${destination}&date=${date}`);
        }else if(destination == "tsomgo"){
          router.push(`/Nathula-Sightseeing?destination=${destination}&date=${date}`);
        }else{
          router.push("/enquire")
        }
      };

    

  return (
   <>
    <section className="max-w-lg mx-auto my-10 p-6 bg-gray-100 rounded-lg shadow-lg shadow-slate-900">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Book Your Ride</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className='text-black text-xl'>Destinations</label><br/>
            <select title="sightseeing form"
                className='text-black text-sm p-2 w-full'
                value={destination}
                onChange={(e) => setDestinatiopn(e.target.value)}
                required
            >
                <option value="">Select Location</option>
                <option value="gangtok">Gangtok</option>
                <option value="rumtek-monastry">Rumtek Monastry</option>
                <option value="ranka-monastry">Ranka Monastry</option>
                <option value="tsomgo">Tsomgo-Baba Mandir</option>
                <option value="namchi">Namchi</option>
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
            className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-600 text-lg shadow-md shadow-gray-700"
          >
            Let<span>&apos;</span>s Goo
          </button>
        </form>
      </section>
   </>
  );
};

export default SightSeeing;