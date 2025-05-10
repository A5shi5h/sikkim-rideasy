"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import PickNDrop from "./PickNDrop";
import SightSeeing from "./SightSeeing";
import { motion } from "framer-motion";

export function TabsDemo() {
  const tabs = [
    {
      title: "Pick N Drop",
      value: "Pick N Drop",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-1/2 max-sm:w-full overflow-hidden relative h-auto sm:h-full rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 shadow-lg"
        >
          <PickNDrop />
        </motion.div>
      ),
    },
    {
      title: "Sightseeing",
      value: "Sightseeing",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-1/2 max-sm:w-full overflow-hidden relative h-auto sm:h-full rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 shadow-lg"
        >
          <SightSeeing />
        </motion.div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="h-[26rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40"
    >
      <Tabs tabs={tabs} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        className="h-full w-1/2 absolute right-0 top-[2rem] p-5 max-sm:hidden"
      >
        <Image
          src="/images/map.jpg"
          alt="Sikkim Map"
          height={400}
          width={400}
          className="h-full w-full object-cover rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
