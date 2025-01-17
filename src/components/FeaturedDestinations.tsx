'use client'
import Link from "next/link"
import destinationData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Destination{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image : string,
        
}

function FeaturedDestinations() {
    const featuredDestinations = destinationData.destinations.filter((destination:Destination) => destination.isFeatured)


  return (
    <div className="py-12 bg-gray-900 relative">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">POPULAR PLACES IN SIKKIM</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">DESTINATIONS</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
                {featuredDestinations.map((destination:Destination)=> (
                    <div key={destination.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{destination.title}</p>
                                <img src={destination.image} className="p-2"/>
                                <Link href={"/" + destination.slug} className="text-white text-sm font-thin">
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FeaturedDestinations