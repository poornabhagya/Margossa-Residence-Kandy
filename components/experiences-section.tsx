'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const CARDS = [
  {
    id: 0,
    title: 'Cultural Journeys',
    image: '/exp-temple.png',
    description: "Explore sacred temples, historic architecture, and Kandy's rich artistic traditions.",
    linkText: 'Explore Culture',
  },
  {
    id: 1,
    title: 'Hillside Discovery',
    image: '/exp-tea.png',
    description: "Wander through rolling tea estates, waterfalls, and breathtaking mountain vistas.",
    linkText: 'Explore Nature',
  },
  {
    id: 2,
    title: 'Culinary Heritage',
    image: '/hero-3.png',
    description: "Savour local flavours, authentic curries, and curated high-tea experiences.",
    linkText: 'Explore Dining',
  },
]

export function ExperiencesSection() {
  const [activeIndex, setActiveIndex] = useState(1) // Default to Card 2 (index 1)

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length)
  }

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length)
  }

  return (
    <section id="experiences" className="bg-white pt-20 pb-24 px-4 text-center w-full">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Section Header Content */}
        <div className="text-center mb-16">
          <span className="block text-xs tracking-[0.25em] text-gray-500 uppercase mb-2">
            EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6 font-normal uppercase">
            Discover the Soul of Kandy
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Step beyond the ordinary and immerse yourself in the timeless charm of Sri Lanka&apos;s cultural capital. Wander through ancient temples, discover vibrant local markets, savour authentic cuisine, visit renowned tea plantations, and uncover breathtaking landscapes—all while returning to the comfort and tranquillity of Margossa Residence.
          </p>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest text-gray-900 underline hover:text-amber-800 transition-colors mb-12 inline-block"
          >
            Explore Experiences
          </a>
        </div>

        {/* Center-Focused Carousel */}
        <div className="relative group/carousel max-w-5xl mx-auto h-[400px] sm:h-[430px] md:h-[480px] lg:h-[500px] flex items-center justify-center">
          
          {/* Left Hover Control */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 md:left-10 lg:left-20 top-[35%] -translate-y-1/2 z-40 flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white/85 text-gray-800 shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none"
            aria-label="Previous experience"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Cards Mapping */}
          {CARDS.map((card) => {
            let position = 'center'
            if (card.id === activeIndex) {
              position = 'center'
            } else if (card.id === (activeIndex - 1 + CARDS.length) % CARDS.length) {
              position = 'left'
            } else {
              position = 'right'
            }

            return (
              <div
                key={card.id}
                onClick={() => setActiveIndex(card.id)}
                className={cn(
                  'absolute w-[70vw] sm:w-[42vw] lg:w-[30vw] transition-all duration-500 ease-in-out cursor-pointer flex flex-col',
                  position === 'center' && 'z-30 scale-[1.03] opacity-100 translate-x-0',
                  position === 'left' && 'z-10 scale-[0.97] opacity-60 -translate-x-[65%] sm:-translate-x-[55%] lg:-translate-x-[75%]',
                  position === 'right' && 'z-10 scale-[0.97] opacity-60 translate-x-[65%] sm:translate-x-[55%] lg:translate-x-[75%]'
                )}
              >
                {/* Image Wrapper */}
                <div className={cn(
                  "relative aspect-[4/3] w-full overflow-hidden transition-all duration-500 rounded-xl",
                  position === 'center' ? 'shadow-lg border border-gray-200/50 bg-white' : 'shadow-sm bg-gray-100'
                )}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 42vw, 30vw"
                    className="object-cover"
                  />
                </div>

                {/* Content (Visible only for center card) */}
                <div className={cn(
                  'transition-all duration-500 mt-6 text-center px-4',
                  position === 'center' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
                )}>
                  <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto mb-4 leading-relaxed">
                    {card.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-xs uppercase tracking-wider font-semibold text-gray-900 underline hover:text-amber-800 transition-colors"
                  >
                    {card.linkText}
                  </a>
                </div>
              </div>
            )
          })}

          {/* Right Hover Control */}
          <button
            type="button"
            onClick={next}
            className="absolute right-2 md:right-10 lg:right-20 top-[35%] -translate-y-1/2 z-40 flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white/85 text-gray-800 shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white hover:text-black focus:outline-none"
            aria-label="Next experience"
          >
            <ChevronRight className="size-5" />
          </button>

        </div>

      </div>
    </section>
  )
}
