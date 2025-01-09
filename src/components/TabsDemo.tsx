"use client"; 
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import PickNDrop from "./PickNDrop";
import SightSeeing from "./SightSeeing";


export function TabsDemo() {

  const tabs = [
    {
      title: "Pick N Drop",
      value: "Pick N Drop",
      content: (
        <div className="w-1/2 overflow-hidden relative h-full rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <PickNDrop />
        </div>
      ),
    },
    {
      title: "Sightseeing",
      value: "Sightseeing",
      content: (
        <div className="w-1/2 overflow-hidden relative h-full rounded-md p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <SightSeeing />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
      <img className="h-full w-1/2 absolute right-0 top-[2rem] p-5" src="./images/map.jpg"/>
    </div>
  );
}


