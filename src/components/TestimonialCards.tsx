'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const serviceTestimonials = [
  {
    testimony:
      "Sikkim Rideasy made our trip stress-free and comfortable. The driver was courteous and the vehicle was in excellent condition. Highly recommend their services!",
    name: "Priya Sharma",
    title: "Tourist from Delhi",
  },
  {
    testimony:
      "I regularly use Sikkim Rideasy for airport pickups and local travel. Their punctuality and professionalism are commendable. A reliable cab service in Sikkim!",
    name: "Rohit Gupta",
    title: "Business Traveler",
  },
  {
    testimony:
      "We booked Sikkim Rideasy for a family sightseeing tour. The driver was knowledgeable about the local attractions and made our experience memorable.",
    name: "Anjali Mehta",
    title: "Family Traveler",
  },
  {
    testimony:
      "The best part of Sikkim Rideasy is their transparent pricing and courteous drivers. No hidden charges, just smooth rides. Will definitely book again!",
    name: "Vikas Jain",
    title: "Frequent Traveler",
  },
  {
    testimony:
      "Hired Sikkim Rideasy for an office team outing. The cab was clean, spacious, and arrived on time. Excellent service with friendly staff!",
    name: "Neha Verma",
    title: "Corporate Client",
  },
  {
    testimony:
      "As a solo traveler, safety is my priority. Sikkim Rideasy provided me with a safe and comfortable ride. The driver was friendly and helpful.",
    name: "Pooja R.",
    title: "Solo Traveler",
  },
];

function ServiceTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">
        Hear From Our Happy Riders
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={serviceTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceTestimonials;
