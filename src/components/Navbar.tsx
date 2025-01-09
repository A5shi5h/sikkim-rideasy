'use client';

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={cn("fixed top-0 inset-x-0 lg:inset-x-20 z-50 p-4 bg-black shadow-md text-white rounded-md", className)}>
      <div className="container mx-auto px-4 lg:py-3 py-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Sikkim RidEasy
        </Link>

        {/* Hamburger Button */}
        <button
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
        <div className="hidden lg:flex space-x-6">
          <Link href="/" className="hover:text-slate-500">
            Home
          </Link>
          <Link href="/packages" className="hover:text-slate-500">
            Taxi Packages
          </Link>
          <Link href="/gallery" className="hover:text-slate-500">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-slate-500">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-slate-500">
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
                href="/packages"
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
