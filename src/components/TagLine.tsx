'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const tag = [
    {
      id: 1,
      name: 'Sikkim RidEasy',
      designation: 'Cab Services',
      image:
        '/images/logo.jpeg',
    },
  ];

function TagLine() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Sikkim RidEasy</h2>
            <p className="text-base md:text-xl text-white text-center mb-4">Don't be slow ! Our prices are low</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={tag} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default TagLine;