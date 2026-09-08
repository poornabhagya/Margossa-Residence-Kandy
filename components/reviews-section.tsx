'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import { cn, basePath } from '@/lib/utils'

const REVIEWS = [
  {
    quote:
      "‘Our stay at Margossa Residence in Kandy was absolutely perfect — hands down, the best place we’ve stayed in Sri Lanka.\n\nFrom the moment we arrived, we were welcomed with warmth and kindness. The owner and host is truly exceptional — incredibly friendly, attentive, and genuinely cares about his guests. He made us feel at home in the best way possible, and we honestly regretted not staying longer.\n\nThe view from the property is breathtaking, and the atmosphere is so peaceful and calming — you feel like you’re in a small oasis above the city.\n\nThe interior design of the villa is stylish and thoughtful — every detail feels modern, fresh, and comfortable.\n\nAnd the breakfast… wow. Truly one of the best we’ve had in Sri Lanka — fresh, generous, and made with love.\n\nWe are already dreaming of coming back to Margossa. This place is a gem. Thank you for making our honeymoon stay so memorable 💛 ’",
    author: "Angelina",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    source: "booking.com",
  },
  {
    quote:
      "‘An amazing place. The hospitality and the service was excellent. The room - with access to the whole house - made you feel relaxed and happy. You could eat a delicious breakfast at the balcony, and choose to relax. If you had any questions, it was nothing that mr.Asitha, the ouner, could not answere or help you to solve. And you would easily get his drive you to the city center or to some of the amazing sites of Kandy. Its a good place for families, but also for single travellers. I would love to Come back some day.’’",
    author: "per andersen",
    country: null,
    rating: 5,
    source: "Google reviews",
  },
  {
    quote:
      "‘These are things why you should choose this place to stay in:\n1. In whole house there are only 2 rooms. So it often happens that you will be the only guest in whole house. In this case Asitha - the owner will let you use both rooms. There is real tropical rain under the open sky in one of them.\n2. Asitha is very attentive owner. He takes care of every single moment while you staying.\n3. Amazing breakfasts\n4. Quiet please among the jungle\n5. Parking\n6. Price for staying is very low. We even thought owner will ask to pay more than price booking :) ‘’",
    author: "Artyom",
    country: "🇰🇿 Kazakhstan",
    rating: 5,
    source: "booking.com",
  },
  {
    quote:
      "‘I want to describe this experience as perfect. The house is exquisitely designed; it's the most beautiful guesthouse I've ever stayed in. We even received lovely chocolates upon check-in, showing the owner's dedication to both design and service. There are so many wonderful words to describe this place and this unique experience, but I don't know where to begin. This was my first night in Sri Lanka, and this guesthouse experience instantly boosted our positive impression of the country. What I remember most vividly was the hotel breakfast. It was the first time I'd ever had such a thoughtfully prepared breakfast—it was simply wonderful! The food was delicious and beautifully presented; we couldn't resist taking pictures. The owner prepared an incredibly lavish spread, and since we couldn't finish it all, he even let us take some home—so touching! I hope to encounter such beautiful houses and such considerate owners on my future travels!”",
    author: "yu zhang",
    country: null,
    rating: 5,
    source: "Google reviews",
  },
  {
    quote:
      "‘Highly recommend! House is very nice, clean and special. We had rented one out of the two bedrooms, and were the only guests that night, so we had the great living room and kitchen area to ourselves.\n\nWe had the room without own balcony, but that was not a problem. The room is big and clean, with a very cool design and an outside shower (covered so no insects inside). House also had a balcony we could use, with view of the mountains.\n\nThe host was very friendly and helpful, and offered great breakfast. He also offered to help us ordering dinner delivered to the house, and gave us a bottle of wine - which is way more than expected! ‘",
    author: "Thea",
    country: "🇳🇴 Norway",
    rating: 5,
    source: "booking.com",
  },
  {
    quote:
      "‘This property is a rare gem and stood out to us as a truly unique and amazing experience. The host pays attention to detail and the property is a wonderful, starting from the location on quiet hills out of town where you can relax on terrace and watch birds , everything is perfectly cleaned and the design and decoration is incredible and interesting. The breakfast was amazing and the host truly makes a perfect cup of tea and best eggs and made our family feel very welcome. ‘",
    author: "Daniel",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    source: "booking.com",
  },
  {
    quote:
      "‘The house itself is very stylish indeed, with lovely touches throughout. The host, Asitha, is a lovely person who went well out of his way to make our stay special. I'd go so far as to say that it was some of the most impressive and personal service I've ever seen.\n\nThe breakfasts were really great (something we found to be the case all across Sri Lanka), and the outdoor shower in the smaller bedroom was superb.\n\nWe wished we could stay longer... If only all hotels and guest houses were as nice as this one! ‘",
    author: "Guy",
    country: "🇬🇧 United Kingdom",
    rating: 5,
    source: "booking.com",
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

const BookingLogo = () => (
  <span className="inline-flex items-center justify-center size-4 rounded-sm bg-[#003580] text-white text-[10px] font-black leading-none select-none">
    B.
  </span>
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
    }, 7000)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused])

  return (
    <section
      id="reviews"
      style={{ backgroundColor: '#EBE8DF' }}
      className="py-16 md:py-24 w-full"
      suppressHydrationWarning
    >
      {/* Part 1: Guest Reviews */}
      <div
        className="max-w-4xl mx-auto px-6 text-center mb-16 border-b border-gray-400/30 pb-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        suppressHydrationWarning
      >
        <span className="block text-xs tracking-[0.25em] text-gray-600 uppercase mb-2">
          GUEST REVIEWS
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wide uppercase mb-3">
          What our guests say about their villa stay
        </h2>
        <p className="text-sm text-gray-600 mb-12 font-light">
          Real guest experiences and reviews from their tranquil hillside stay
        </p>

        {/* Carousel Testimonial Card */}
        <div className="max-w-3xl mx-auto relative px-4">
          <div
            style={{
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            <blockquote
              className={cn(
                'font-serif text-base md:text-lg text-gray-800 italic leading-relaxed whitespace-pre-line transition-opacity duration-300 ease-in-out',
                isFading ? 'opacity-0' : 'opacity-100'
              )}
            >
              &ldquo;{REVIEWS[activeIndex].quote}&rdquo;
            </blockquote>

            {REVIEWS[activeIndex].author && (
              <p
                className={cn(
                  'mt-4 text-xs tracking-widest text-gray-700 uppercase font-semibold transition-opacity duration-300',
                  isFading ? 'opacity-0' : 'opacity-100'
                )}
              >
                — {REVIEWS[activeIndex].author}
              </p>
            )}
          </div>

          {/* Controls Container */}
          <div>
            <div className="text-yellow-500 text-xl flex justify-center gap-1 mb-4">
              {Array.from({ length: REVIEWS[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-current text-yellow-500" />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2">
              {REVIEWS[activeIndex].source === 'Google Reviews' ? (
                <GoogleGLogo />
              ) : (
                <BookingLogo />
              )}
              <span className="text-xs tracking-wider text-gray-700 font-medium uppercase">
                {REVIEWS[activeIndex].source}
              </span>
            </div>

            {/* Pagination Dots */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
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
                      height: '8px',
                      width: idx === activeIndex ? '26px' : '8px',
                      backgroundColor: idx === activeIndex ? '#0F172A' : '#CBD5E1',
                      borderRadius: '9999px',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: Youtube Video Space */}
      <div className="pt-6 pb-8 max-w-5xl mx-auto px-6">
        <span className="block text-xs tracking-[0.25em] text-gray-600 uppercase text-center mb-3">
          AS SEEN ON YOUTUBE
        </span>
        <h3 className="font-serif text-2xl md:text-3xl text-gray-900 text-center mb-8 uppercase leading-snug">
          Watch Davud Akhundzada&apos;s Experience at <br /> Margossa Residence
        </h3>

        {/* Video Player Container */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-gray-900">
          {playing ? (
            <video
              src={`${basePath}/video.mp4`}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full focus:outline-none"
              aria-label="Play guest experience video"
            >
              <Image
                src={`${basePath}/Margossa-Residence-Kandy/hero_section_imgs/hero-1.webp`}
                alt="Davud Akhundzada Kandy Vlog at Margossa Residence"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <span className="absolute left-1/2 top-1/2 flex size-16 md:size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-transform duration-300 group-hover:scale-110 shadow-lg border border-gray-100">
                <Play className="ml-1 size-6 md:size-7 fill-current" />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}