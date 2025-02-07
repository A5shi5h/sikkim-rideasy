import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Footer from "@/components/Footer";
import Instructors from "@/components/TagLine";
import TagLine from "@/components/TagLine";

const page = () => {

  const owner = [
    {
      quote:
        "Alisha Bhusal is a visionary entrepreneur and the dynamic Co founder of Sikkim Rideasy, a premier cab service business based in the serene Himalayan state of Sikkim, India. Under Alisha’s leadership, Sikkim Rideasy has redefined the transportation experience in the region by prioritizing reliability, safety, and customer satisfaction.With a deep understanding of the unique challenges of operating in Sikkim’s rugged terrain, Alisha has successfully built a fleet of modern vehicles equipped to handle the state's winding roads while ensuring comfort and convenience for passengers. Their services cater to both locals and tourists, offering seamless pick-and-drop services, sightseeing tours, and custom travel packages.",
      name: "Alisha Bhusal",
      designation: "Co founder of Sikkim RidEasy",
      src: "/images/owner.jpeg",
    },
  ];

  return (
    <>
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
    <AnimatedTestimonials testimonials={owner}/>;
    <TagLine />
    <Footer/>
    </>
  )
}

export default page
