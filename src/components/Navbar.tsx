'use client';

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});


function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
        className={cn(
          `${poppins.variable} font-sans`,
          "fixed top-0 inset-x-0 z-50 p-2 bg-black shadow-md text-white rounded-md",
          className
        )}
    >
      <div className="container mx-auto px-4 lg:py-3 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 text-xl font-bold ">
          Sikkim RidEasy
        </Link>

        {/* Hamburger Button */}
        <button title="hamburger button"
          className="lg:hidden block text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 px-6">
          <Link href="/"className="hover:bg-gray-400 p-3 rounded-lg hover:text-black">
            Home
          </Link>
          <Link href="/taxi-packages" className="hover:bg-gray-400 p-3 rounded-lg hover:text-black">
            Taxi Packages
          </Link>
          <Link href="/gallery" className="hover:bg-gray-400 p-3 rounded-lg hover:text-black">
            Gallery
          </Link>
          <Link href="/about" className="hover:bg-gray-400 p-3 rounded-lg hover:text-black">
            About Us
          </Link>
          <Link href="/contact" className="hover:bg-gray-400 p-3 rounded-lg hover:text-black">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black shadow-md">
          <ul className="space-y-2 p-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-white hover:bg-gray-100 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/taxi-packages"
                className="block px-4 py-2 text-white hover:bg-gray-100 rounded-md"
              >
                Taxi Packages
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="block px-4 py-2 text-white hover:bg-gray-100 rounded-md"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-white hover:bg-gray-100 rounded-md"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 text-white hover:bg-gray-100 rounded-md"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
