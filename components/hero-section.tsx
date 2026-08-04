'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { basePath, cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroImages = [
  `${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-1.webp`,
  `${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-2.webp`,
  `${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-3.webp`,
  `${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-4.webp`,
  `${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-5.webp`,
  `${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-6.webp`,
]

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Background Image Slider */}
      {heroImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Margossa Residence hero image ${index + 1}`}
          fill
          priority={index === 0}
          sizes="100vw"
          className={cn(
            "w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          )}
        />
      ))}

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-5xl">
        <span className="text-[10px] sm:text-xs tracking-[0.2em] mb-2 text-center text-white/90 uppercase font-medium">
          Boutique Hillside Residence
        </span>
        <h1 className="max-w-4xl text-2xl sm:text-4xl md:text-6xl font-serif text-center leading-tight mb-4 text-white font-normal uppercase tracking-wide">
          Margossa Residence Kandy
        </h1>
        <div className="my-6 flex items-center gap-2 sm:gap-4 text-white/70">
          <span className="h-px w-6 sm:w-12 bg-current" />
          <span className="text-xs sm:text-sm uppercase tracking-widest text-center">
            Your Hillside Retreat Begins Here
          </span>
          <span className="h-px w-6 sm:w-12 bg-current" />
        </div>
        <a
          href="#residence"
          className="w-full max-w-xs sm:w-auto px-6 py-3 text-xs tracking-widest uppercase rounded-none border border-white/70 text-white transition-all hover:bg-white hover:text-gray-900 text-center"
        >
          Discover The Residence
        </a>
      </div>

      {/* Pagination dots & navigation controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 sm:gap-4">
        <button
          onClick={handlePrev}
          className="text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-black/20 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <div className="flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus:outline-none",
                index === currentIndex ? "w-6 sm:w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-black/20 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  )
}

