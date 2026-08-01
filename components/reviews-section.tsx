'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import { cn, basePath } from '@/lib/utils'

const REVIEWS = [
  {
    quote: "An amazing place. The hospitality and the service was excellent. The room - with access to the whole house - made you feel relaxed and happy. You could eat a delicious breakfast at the balcony, and choose to relax. If you had any questions, it was nothing that mr.Asitha, the ouner, could not answere or help you to solve. And you would easily get his drive you to the city center or to some of the amazing sites of Kandy. Its a good place for families, but also for single travellers. I would love to Come back some day.",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "Nestled in the stunning hills surrounding Kandy, this residence is just a quick Tuk-Tuk ride away from the vibrant city center and the iconic temple. The house is beautifully organized and adorned, making it feel like a true home away from home. Asitha elevates the hosting experience to an extraordinary level — you won't want to leave this place. NB: no pool and did not need it.",
    rating: 5,
    source: "Google Reviews",
  },
  {
    quote: "An exceptionally generous and delicious breakfast—so filling that you won’t need lunch. But it’s not just about eating; Asitha turns every breakfast into a memorable experience. Each day brings something new, thoughtfully prepared with care and passion. The house itself tells a story. We couldn’t resist asking Asitha about the beautiful items throughout his home, and he was always happy to share their stories, along with helpful tips on where to find similar pieces.",
    rating: 5,
    source: "Google Reviews",
  },
]

const GoogleGLogo = () => (
  <svg className="size-4 inline-block" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
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
    }, 6000)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused])

  return (
    <section 
      id="reviews" 
      style={{ backgroundColor: '#FAF9F6' }} 
      className="py-20 w-full"
    >
      
      {/* Part 1: Guest Reviews */}
      <div 
        className="max-w-4xl mx-auto px-6 text-center mb-16 border-b border-gray-300/40 pb-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <span className="block text-xs tracking-[0.25em] text-gray-500 uppercase mb-2">
          GUEST REVIEWS
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wide uppercase mb-3">
          What our guests say about their villa stay
        </h2>
        <p className="text-sm text-gray-500 mb-12 font-light">
          Real guest experiences and reviews from their tranquil hillside stay
        </p>

        {/* Carousel Testimonial Card */}
        <div className="max-w-3xl mx-auto relative px-4">
          
          {/* HARDCODED INLINE MIN-HEIGHT TO PREVENT ANY BOTTOM LAYOUT SHIFT */}
          <div 
            style={{ 
              minHeight: '180px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px' 
            }}
          >
            <blockquote 
              className={cn(
                'font-serif text-base md:text-lg text-gray-700 italic leading-relaxed transition-opacity duration-300 ease-in-out',
                isFading ? 'opacity-0' : 'opacity-100'
              )}
            >
              &ldquo;{REVIEWS[activeIndex].quote}&rdquo;
            </blockquote>
          </div>

          {/* Controls Container (Fixed Location) */}
          <div>
            <div className="text-yellow-500 text-xl flex justify-center gap-1 mb-4">
              {Array.from({ length: REVIEWS[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-current text-yellow-500" />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              <GoogleGLogo />
              <span className="text-xs tracking-wider text-gray-600 font-medium uppercase">
                {REVIEWS[activeIndex].source}
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setIsPaused(true)
                    handleSlideChange(idx)
                  }}
                  className="p-1 focus:outline-none cursor-pointer"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    style={{
                      height: '10px',
                      width: idx === activeIndex ? '28px' : '10px',
                      backgroundColor: idx === activeIndex ? '#0F172A' : '#CBD5E1',
                      borderRadius: '9999px',
                      transition: 'all 0.3s ease-in-out'
                    }}
                  />
                </button>
              ))}
            </div>
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
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-gray-900">
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