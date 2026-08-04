'use client'

import { useState } from 'react'
import { basePath } from '@/lib/utils'

const EXPERIENCES = [
  {
    title: "Temple of the Sacred Tooth Relic",
    description: "One of Sri Lanka's most sacred Buddhist temples, the Temple of the Sacred Tooth Relic houses the revered tooth relic of the Buddha. A UNESCO World Heritage Site, it is renowned for its beautiful Kandyan architecture, rich history, and daily prayer ceremonies accompanied by traditional drumming.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (36).webp`
  },
  {
    title: "Kandyan Cultural Dance Show",
    description: "Experience the vibrant traditions of Sri Lanka through an energetic performance of Kandyan dance, rhythmic drumming, colourful costumes, and thrilling fire-walking displays, showcasing the island's rich cultural heritage.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (37).webp`
  },
  {
    title: "Kandy Gem Museum",
    description: "Discover Sri Lanka's world-famous gemstones and witness the traditional process of gem cutting and polishing.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (38).webp`
  },
  {
    title: "Hanthana Mountain",
    description: "A popular hiking destination offering breathtaking views of Kandy, lush tea plantations, and the surrounding hill country.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (39).webp`
  },
  {
    title: "Udawattakele Forest Sanctuary",
    description: "A tranquil forest reserve rich in wildlife, walking trails, and ancient meditation hermitages, just minutes from Kandy city.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (40).webp`
  },
  {
    title: "Ceylon Tea Museum",
    description: "Learn about Sri Lanka's renowned tea industry through historic exhibits, vintage machinery, and a complimentary tea tasting.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (41).webp`
  },
  {
    title: "Bahirawakanda Buddha Statue",
    description: "One of Kandy's most iconic landmarks, offering panoramic views of the city from the base of the towering white Buddha statue.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (42).webp`
  },
  {
    title: "Kandy Lake",
    description: "A scenic lake in the heart of Kandy, perfect for a peaceful stroll while enjoying views of the surrounding hills and the Temple of the Tooth.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (43).webp`
  },
  {
    title: "Millennium Elephant Foundation",
    description: "An ethical elephant sanctuary dedicated to the rescue, care, and conservation of elephants, offering educational and interactive experiences.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (44).webp`
  },
  {
    title: "Kandy Museum",
    description: "Located within the Royal Palace complex beside the Temple of the Sacred Tooth Relic, the Kandy Museum showcases the rich heritage of the Kandyan Kingdom. Its exhibits include royal artifacts, traditional costumes, jewelry, weapons, manuscripts, and household items that offer visitors a glimpse into the lifestyle, customs, and history of Sri Lanka's last royal kingdom.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (45).webp`
  },
  {
    title: "Wax Museum - Ehelepola Walauwwe",
    description: "Step back into the Kandyan Kingdom at Sri Lanka's first wax museum, housed within the historic Ehelepola Walawwa. The museum features lifelike wax figures of kings, queens, monks, national heroes, and other influential figures, bringing centuries of Sri Lankan history and culture to life through immersive displays.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (46).webp`
  },
  {
    title: "Kandy Spice Gardens",
    description: "Discover Sri Lanka's famous spices and medicinal herbs while learning about their culinary and Ayurvedic uses.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (47).webp`
  },
  {
    title: "Royal Botanical Gardens",
    description: "Explore beautifully landscaped gardens featuring over 4,000 species of tropical plants, towering palm avenues, and vibrant orchid collections.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (48).webp`
  }
]

export function ExperiencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length)
  }

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + EXPERIENCES.length) % EXPERIENCES.length
  }

  const activeItem = EXPERIENCES[currentIndex]
  const prevItem = EXPERIENCES[getSlideIndex(-1)]
  const nextItem = EXPERIENCES[getSlideIndex(1)]

  return (
    <section 
      id="experiences" 
      className="relative w-full py-16 md:py-24 bg-[#FAF9F6] block clear-both"
      suppressHydrationWarning
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 1. TOP HEADER CONTENT */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#92400e] font-semibold mb-3">
            EXPERIENCES
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-gray-900 uppercase tracking-wide mb-4">
            DISCOVER THE SOUL OF KANDY
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed font-light">
            Step beyond the ordinary and immerse yourself in the timeless charm of Sri Lanka's cultural capital. Wander through ancient temples, discover vibrant local markets, savour authentic cuisine, visit renowned tea plantations, and uncover breathtaking landscapes—all while returning to the comfort and tranquillity of Margossa Residence.
          </p>
        </div>

        {/* 2. RESPONSIVE CAROUSEL IMAGES CONTAINER */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          
          <div className="flex items-center justify-center relative w-full">
            
            {/* Left Preview Image (Hidden on Mobile) */}
            <div className="hidden md:block w-[28%] max-w-[280px] aspect-square opacity-40 rounded-2xl overflow-hidden shadow-md -mr-[40px] z-1 shrink-0">
              <img src={prevItem.image} alt={prevItem.title} className="w-full h-full object-cover" />
            </div>

            {/* CENTER ACTIVE IMAGE - 1:1 RESPONSIVE SQUARE CONTAINER WITH ROUNDED-2XL & SHADOW-2XL */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.22)] z-10 bg-gray-900 shrink-0">
              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                className="w-full h-full object-cover block" 
              />

              {/* Left Arrow Button */}
              <button
                onClick={prevSlide}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-white/95 border-none shadow-md cursor-pointer flex items-center justify-center text-lg text-gray-900 z-30 transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Previous slide"
              >
                ←
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextSlide}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-white/95 border-none shadow-md cursor-pointer flex items-center justify-center text-lg text-gray-900 z-30 transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="Next slide"
              >
                →
              </button>
            </div>

            {/* Right Preview Image (Hidden on Mobile) */}
            <div className="hidden md:block w-[28%] max-w-[280px] aspect-square opacity-40 rounded-2xl overflow-hidden shadow-md -ml-[40px] z-1 shrink-0">
              <img src={nextItem.image} alt={nextItem.title} className="w-full h-full object-cover" />
            </div>

          </div>

        </div>

        {/* 3. BOTTOM ACTIVE TEXT CONTENT */}
        <div className="min-h-[130px] flex flex-col justify-start items-center text-center mt-6 max-w-[700px] mx-auto px-2">
          <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">
            {activeItem.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            {activeItem.description}
          </p>
        </div>

      </div>
    </section>
  )
}