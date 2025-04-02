"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
const MenuItem = ({ item, children, onHover, isActive }: { 
  item: string; 
  children?: React.ReactNode; 
  onHover: (item: string | null) => void; 
  isActive: boolean; 
}) => {
  return (
    <div onMouseEnter={() => onHover(item)} onMouseLeave={() => onHover(null)}>
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-90 dark:text-white text-sm"
      >
        {item}
      </motion.p>
      {isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-lg overflow-hidden border border-black/20 dark:border-white/20 shadow-lg"
          >
            <motion.div layout className="w-max h-full p-3">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// Menu Component
const Menu = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="relative border border-transparent dark:bg-black dark:border-white/20 bg-white shadow-md flex justify-between items-center px-4 py-3 rounded-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/images/sikkim rideasy.jpg"
          alt="Sikkim Rideasy Logo"
          width={120} // Adjusted for a slimmer navbar
          height={50}
          className="object-contain"
        />
      </Link>

      {/* Navigation Items */}
      <div className="flex space-x-3">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<{
                onHover: (item: string | null) => void;
                isActive: boolean;
              }>,
              {
                onHover: setActive,
                isActive: active === child.props.item,
              }
            );
          }
          return child;
        })}
      </div>
    </nav>
  );
};

// ProductItem Component
const ProductItem = ({ title, description, href, src }: { 
  title: string; 
  description: string; 
  href: string; 
  src: string; 
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={120}
        height={60}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-lg"
      />
      <div>
        <h4 className="text-md font-semibold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-xs max-w-[9rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// HoveredLink Component
const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black text-sm">
      {children}
    </Link>
  );
};

export default Menu;
