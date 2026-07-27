'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  Square, 
  Waves, 
  Droplets, 
  Bath, 
  Utensils, 
  Compass, 
  Sparkles, 
  Smile, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react'
import { cn, basePath } from '@/lib/utils'

const CARDS = [
  {
    title: 'Sky Pavilion Villa',
    image: `${basePath}/room-sky-pavilion.png`,
    features: [
      { text: '90 sqm Total', icon: Square },
      { text: 'Outdoor Jacuzzi', icon: Waves },
      { text: 'Plunge Pool', icon: Droplets },
    ],
  },
  {
    title: 'Sky Tented Villa',
    image: `${basePath}/room-sky-tented.png`,
    features: [
      { text: '85 sqm Total', icon: Square },
      { text: 'Outdoor Bathtub', icon: Bath },
      { text: 'Plunge Pool', icon: Droplets },
    ],
  },
  {
    title: 'Dining Experience',
    image: `${basePath}/hero-3.png`,
    features: [
      { text: 'Personalised Cuisine', icon: Utensils },
      { text: 'Panoramic Views', icon: Compass },
      { text: 'Fine Dining', icon: Sparkles },
    ],
  },
  {
    title: 'Sol Sanctuary & Living Space',
    image: `${basePath}/room-sol-sanctuary.png`,
    features: [
      { text: 'Spacious Lounge', icon: Smile },
      { text: 'Contemporary Comfort', icon: Sparkles },
      { text: 'Relaxation', icon: Compass },
    ],
  },
]

export function ResidenceSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [isTranslating, setIsTranslating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const totalItems = CARDS.length

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3)
      } else if (window.innerWidth >= 640) {
        setVisibleItems(2)
      } else {
        setVisibleItems(1)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('next')
    setIsTranslating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
      setIsTranslating(false)
      setIsAnimating(false)
    }, 500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection('prev')
    setIsTranslating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
      setIsTranslating(false)
      setIsAnimating(false)
    }, 500)
  }

  const getVisibleCards = () => {
    // Render visibleItems + 2 buffer cards (one before, one after the visible range)
    const offsets = Array.from({ length: visibleItems + 2 }, (_, i) => i - 1)
    return offsets.map((offset) => {
      const index = (currentIndex + offset + totalItems) % totalItems
      return CARDS[index]
    })
  }

  const getTranslation = () => {
    if (!isTranslating) {
      return `translateX(calc(-1 * (100% + 24px) / ${visibleItems}))`
    }
    if (direction === 'next') {
      return `translateX(calc(-2 * (100% + 24px) / ${visibleItems}))`
    }
    return `translateX(0)`
  }

  return (
    <section id="residence" className="relative py-24 md:py-32 w-full overflow-hidden bg-[#FAF9F6]">
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wide uppercase mb-3">
            A Residence Designed for Relaxation
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Thoughtfully designed interiors and inviting spaces that blend contemporary comfort with the timeless charm of Kandy.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative group/carousel px-4">
          
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-2 md:-left-6 top-[35%] -translate-y-1/2 z-20 flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-800 shadow-sm transition-all hover:bg-white hover:text-black focus:outline-none cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Scrolling Window Wrapper */}
          <div className="overflow-hidden w-full">
            <div
              className={cn(
                'flex gap-6 pb-4 w-full',
                isTranslating ? 'transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)' : 'transition-none'
              )}
              style={{
                transform: getTranslation(),
              }}
            >
              {getVisibleCards().map((card, idx) => (
                <div
                  key={`${card.title}-${idx}`}
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 pb-6 group"
                >
                  {/* Image Wrapper */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content Under Card */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-gray-900 tracking-wide mb-3">
                      {card.title}
                    </h3>
                    
                    {/* Features with icons */}
                    <ul className="flex flex-col gap-2.5 mb-4 text-gray-600 text-xs tracking-wider">
                      {card.features.map((feat, idx) => {
                        const Icon = feat.icon
                        return (
                          <li key={idx} className="flex items-center gap-2">
                            <Icon className="size-3.5 text-gray-500" />
                            <span>{feat.text}</span>
                          </li>
                        )
                      })}
                    </ul>

                    <div className="mt-auto">
                      <a
                        href="#contact"
                        className="inline-block text-xs font-medium uppercase tracking-widest text-gray-900 underline hover:text-amber-800 transition-colors mt-4"
                      >
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-2 md:-right-6 top-[35%] -translate-y-1/2 z-20 flex size-12 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-800 shadow-sm transition-all hover:bg-white hover:text-black focus:outline-none cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded-none mt-10"
          >
            Explore The Residence
          </a>
        </div>

      </div>
    </section>
  )
}
