'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import { cn, basePath } from '@/lib/utils'

const REVIEWS = [
  {
    quote: "As a seasoned traveler and vacationer, one could say that not many things can wow me. However, the team at Margossa Residence is nothing short of exceptional! From the very day we arrived till the day we left, they took care of our every need, providing custom meals and warm hospitality.",
    author: "Alfred from Singapore",
    rating: 5,
    source: "REVIEW FROM TRIPADVISOR",
  },
  {
    quote: "A breathtaking hillside sanctuary. The infinity pool views, sunrise Ceylon tea, and contemporary teak design make it the perfect place to unwind in luxury. We cannot wait to return for a longer stay.",
    author: "Sarah from United Kingdom",
    rating: 5,
    source: "REVIEW FROM TRIPADVISOR",
  },
  {
    quote: "The perfect blend of seclusion and modern comfort. The staff provided incredibly personalized service. Located just minutes away from Kandy's historic temples, yet it feels like a peaceful world of its own.",
    author: "Thomas from Germany",
    rating: 5,
    source: "REVIEW FROM TRIPADVISOR",
  },
]

const TripAdvisorLogo = () => (
  <svg className="size-5 text-[#00AF87] inline-block" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.649.5.5 5.649.5 12c0 6.352 5.149 11.5 11.5 11.5s11.5-5.148 11.5-11.5c0-6.352-5.149-11.5-11.5-11.5zm-5.75 15.525c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm11.5 5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm-5.75-2.225c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" />
  </svg>
)

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [playing, setPlaying] = useState(false)

  const handleSlideChange = (nextIndex: number) => {
    setIsFading(true)
    setTimeout(() => {
      setActiveIndex(nextIndex)
      setIsFading(false)
    }, 250)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % REVIEWS.length
      handleSlideChange(nextIndex)
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused])

  return (
    <section id="reviews" className="bg-[#FAF9F6] py-20 w-full">
      
      {/* Part 1: Guest Reviews */}
      <div 
        className="max-w-4xl mx-auto px-6 text-center mb-16 border-b border-gray-200/50 pb-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <span className="block text-xs tracking-[0.25em] text-gray-500 uppercase mb-2">
          GUEST REVIEWS
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wide uppercase mb-3">
          What our guests say about their villa stay
        </h2>
        <p className="text-sm text-gray-500 mb-12">
          Real guest experiences and reviews from their tranquil hillside stay
        </p>

        {/* Carousel Testimonial Card */}
        <div className="max-w-3xl mx-auto relative px-4 min-h-[240px] flex flex-col justify-between">
          <div className={cn(
            'transition-opacity duration-300 ease-in-out',
            isFading ? 'opacity-0' : 'opacity-100'
          )}>
            <blockquote className="font-serif text-base md:text-lg text-gray-700 italic leading-relaxed mb-6">
              &ldquo;{REVIEWS[activeIndex].quote}&rdquo;
            </blockquote>

            <div className="text-yellow-400 text-xl flex justify-center gap-1 mb-4">
              {Array.from({ length: REVIEWS[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-current text-yellow-400" />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 mb-3">
              <TripAdvisorLogo />
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                {REVIEWS[activeIndex].source}
              </span>
            </div>

            <cite className="font-serif font-bold text-sm text-gray-900 uppercase tracking-wider not-italic">
              {REVIEWS[activeIndex].author}
            </cite>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-1 mt-8">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsPaused(true)
                  handleSlideChange(idx)
                }}
                className="p-2 focus:outline-none cursor-pointer"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={cn(
                    'h-3 rounded-full transition-all duration-300',
                    idx === activeIndex ? 'w-8 bg-gray-900' : 'w-3 bg-gray-300 hover:bg-gray-400'
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2: Youtube Video Space */}
      <div className="pt-10 pb-12 max-w-5xl mx-auto px-6">
        <span className="block text-xs tracking-[0.25em] text-gray-500 uppercase text-center mb-3">
          AS SEEN ON YOUTUBE
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-gray-900 text-center mb-8 uppercase">
          Watch Davud Akhundzada&apos;s Experience at Margossa Residence
        </h3>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-900">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/7T_1j2rYy5I?autoplay=1"
              title="Watch Davud Akhundzada's Experience at Margossa Residence"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full focus:outline-none"
              aria-label="Play guest experience video"
            >
              <Image
                src={`${basePath}/video-thumb.png`}
                alt="Davud Akhundzada Kandy Vlog at Margossa Residence"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-transform duration-300 group-hover:scale-110 shadow-lg border border-gray-100">
                <Play className="ml-1 size-7 fill-current" />
              </span>
            </button>
          )}
        </div>
      </div>

    </section>
  )
}
