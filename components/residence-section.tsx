'use client'

import Link from 'next/link'
import { basePath } from '@/lib/utils'

const CARDS = [
  {
    title: 'Margossa Suite',
    image: `${basePath}/room-sky-pavilion.png`,
    description:
      'Margossa Suite is our signature retreat, thoughtfully designed with contemporary elegance, spacious interiors, and a private balcony overlooking the lush hills of Kandy. A perfect blend of comfort, style, and tranquillity for an unforgettable stay.',
    exploreHref: '/our-resort#margossa-suite',
  },
  {
    title: 'Neem Suite',
    image: `${basePath}/room-sky-tented.png`,
    description:
      'Neem Suite offers a peaceful escape with warm, sophisticated interiors and serene views of the surrounding greenery. Designed for relaxation, it provides an intimate setting where modern comfort meets the natural beauty of Kandy.',
    exploreHref: '/our-resort#neem-suite',
  },
]

export function ResidenceSection() {
  return (
    <section id="residence" className="relative py-16 md:py-24 w-full overflow-hidden bg-[#FAF9F6]">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Header Content */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 tracking-wide uppercase mb-3">
            A Residence Designed for Relaxation
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light">
            Thoughtfully designed interiors and inviting spaces that blend contemporary comfort with the timeless charm of Kandy.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-md transition-shadow duration-300 rounded-sm"
            >
              {/* Fixed Image Height Container */}
              <div className="h-64 sm:h-72 md:h-80 w-full overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between text-center">
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{card.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link 
                    className="w-full sm:w-auto inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-none text-center" 
                    href={card.exploreHref}
                  >
                    EXPLORE SUITE &rarr;
                  </Link>
                  <Link 
                    className="w-full sm:w-auto inline-block border border-gray-900 bg-gray-900 text-white hover:bg-black px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-none text-center" 
                    href="/contact"
                  >
                    BOOK NOW
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}