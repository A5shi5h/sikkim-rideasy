"use client";

import React, { lazy, Suspense } from "react";
import { Vortex } from "@/components/ui/vortex";

// Lazy load components
const Footer = lazy(() => import("@/components/Footer"));
const TagLine = lazy(() => import("@/components/TagLine"));

const Page = () => {
  return (
    <>
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden">
        <Suspense fallback={<div className="text-center text-white">Loading Vortex...</div>}>
          <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
            <div className="p-6 rounded-lg backdrop-blur-md">
              <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                Contact Us At
              </h2>
              <br />
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                Address: Tadong, Gangtok, Sikkim 737101
              </p>
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                Email Address: sikkimrideasy@gmail.com
              </p>
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                For Booking And Enquiry:<br />
                +91 8918655889 or +91 7478913770
              </p>
              <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                For Technical Support: +91 7478913770
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6"></div>
            </div>
          </Vortex>
        </Suspense>
      </div>

      {/* Lazy loading Footer and TagLine */}
      <Suspense fallback={<div className="text-center text-white">Loading TagLine...</div>}>
        <TagLine />
      </Suspense>

      <Suspense fallback={<div className="text-center text-white">Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Page;
