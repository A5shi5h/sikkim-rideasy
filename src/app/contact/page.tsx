
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";

const page = () => {
    return (
      <>
        <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Contact Us At
          </h2>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Address : Tadong , Gangtok , Sikkim 737101
          </p>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            Email Address : sikkimrideasy@gmail.com
          </p>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            For Booking And Enquiry :<br/>
            +91 8918655889 or +91 7478913770
          </p>
          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
            For Technical Support : +91 7478913770
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          </div>
        </Vortex>
      </div>
      <Instructors/>
      <Footer/>
      </>
      
      );
}

export default page
