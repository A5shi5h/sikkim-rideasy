import React, { Suspense, lazy } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Lazy load the heavy components
const Footer = lazy(() => import("@/components/Footer"));
const TagLine = lazy(() => import("@/components/TagLine"));

const Page = () => {
  const owner = [
    {
      quote:
        "Alisha Bhusal is a visionary entrepreneur and the dynamic Co founder of Sikkim Rideasy, a premier cab service business based in the serene Himalayan state of Sikkim, India. Under Alisha’s leadership, Sikkim Rideasy has redefined the transportation experience in the region by prioritizing reliability, safety, and customer satisfaction. With a deep understanding of the unique challenges of operating in Sikkim’s rugged terrain, Alisha has successfully built a fleet of modern vehicles equipped to handle the state's winding roads while ensuring comfort and convenience for passengers. Their services cater to both locals and tourists, offering seamless pick-and-drop services, sightseeing tours, and custom travel packages.",
      name: "Alisha Bhusal",
      designation: "Co founder of Sikkim RidEasy",
      src: "/images/owner.jpeg",
    },
  ];

  return (
    <>
      {/* Lazy load BackgroundLines */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            ABOUT
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            At Sikkim Rideasy, we are committed to transforming your travel experiences into seamless and memorable journeys. Founded with the vision of offering safe, reliable, and comfortable transportation across the picturesque landscapes of Sikkim, we pride ourselves on being your trusted travel companion.<br/><br/>

            We believe in affordability without compromising on quality. From airport pickups to sightseeing tours and local commutes, we provide personalized travel solutions to suit your preferences.

            Choose Sikkim Rideasy for exceptional service, round-the-clock availability, and a commitment to safety and customer satisfaction. With us, your journey is as beautiful as the destination.<br/><br/>

            Let’s make travel easy—let’s Rideasy!
          </p>
        </BackgroundLines>
      </Suspense>

      {/* Lazy load AnimatedTestimonials */}
      <Suspense fallback={<div className="text-center py-10">Loading Testimonials...</div>}>
        <AnimatedTestimonials testimonials={owner} />
      </Suspense>

      <TagLine />
      <Footer />
    </>
  );
};

export default Page;
