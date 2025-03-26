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
const MenuItem = ({
  item,
  children,
  onHover,
  isActive,
}: {
  item: string;
  children?: React.ReactNode;
  onHover: (item: string | null) => void;
  isActive: boolean;
}) => {
  return (
    <div onMouseEnter={() => onHover(item)} onMouseLeave={() => onHover(null)}>
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// Menu Component with Type Assertion
const Menu = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6">
      {React.Children.map(children, (child) => {
        // ✅ Use Type Assertion to inform TypeScript about onHover and isActive props
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
    </nav>
  );
};

// ProductItem Component
const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// HoveredLink Component
const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};

export default Menu;
