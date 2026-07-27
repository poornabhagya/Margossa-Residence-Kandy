'use client'

import Image from 'next/image'
import { basePath } from '@/lib/utils'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Single Background Image */}
      <Image
        src={`${basePath}/hero-1.png`}
        alt="Aerial view of Margossa Residence set in the green hills of Kandy"
        fill
        priority
        sizes="100vw"
        className="w-full h-full object-cover object-center absolute inset-0"
      />

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl">
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
    </section>
  )
}
