
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Reliable Service:',
      description:
        ' Always on time, ensuring you never miss your destination.',
    },
    {
      title: 'Affordable Pricing:',
      description:
        'Transparent and competitive rates with no hidden charges.',
    },
    {
      title: 'Experienced Drivers:',
      description:
        'Professional and courteous drivers with in-depth knowledge of Sikkim’s routes.',
    },
    {
      title: 'Comfortable Rides:',
      description:
        'A modern fleet of well-maintained vehicles for a smooth and enjoyable journey.',
    },
    {
      title: '24/7 Availability and Safety and Security',
      description:
        'Round-the-clock service to cater to your travel needs anytime, anywhere.Prioritizing your safety with regular vehicle inspections and experienced drivers.',
    },
    {
      title: 'Local Expertise:',
      description:
        ' Tailored routes and suggestions for exploring the scenic beauty of Sikkim.',
    },
  ];

function WhyChooseUs() {
  return (
    <>
      <div>
          <StickyScroll content={musicSchoolContent} />
      </div>
    </>
  )
}

export default WhyChooseUs