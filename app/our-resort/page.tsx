'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bed } from 'lucide-react'
import { cn, basePath } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ReviewsSection } from '@/components/reviews-section'

const MARGOSSA_SUITE_IMAGES = [
  { src: `${basePath}/suiteImgs/margossa/0U4A1856.webp`, alt: "Margossa Suite Bedroom View" },
  { src: `${basePath}/suiteImgs/margossa/0U4A1861.webp`, alt: "Margossa Suite Interior Details" },
  { src: `${basePath}/suiteImgs/margossa/0U4A1866.webp`, alt: "Margossa Suite Living Space" },
  { src: `${basePath}/suiteImgs/margossa/0U4A1920.webp`, alt: "Margossa Suite Balcony View" },
  { src: `${basePath}/suiteImgs/margossa/0U4A1931.webp`, alt: "Margossa Suite Bathroom & Comforts" },
]

const NEEM_SUITE_IMAGES = [
  { src: `${basePath}/suiteImgs/neem/0U4A1717.webp`, alt: "Neem Suite Bedroom Layout" },
  { src: `${basePath}/suiteImgs/neem/0U4A1721.webp`, alt: "Neem Suite Interior Design" },
  { src: `${basePath}/suiteImgs/neem/0U4A1738.webp`, alt: "Neem Suite Open-Air Bath Area" },
  { src: `${basePath}/suiteImgs/neem/0U4A1745.webp`, alt: "Neem Suite Cosy Seating Area" },
  { src: `${basePath}/suiteImgs/neem/0U4A1764.webp`, alt: "Neem Suite Hillside View" },
]

interface SuiteGalleryCardProps {
  id?: string
  title: string
  subtitle?: string
  description: string
  specs: string[]
  images: { src: string; alt: string }[]
  reverseLayout?: boolean
}

function SuiteGalleryCard({
  id,
  title,
  subtitle,
  description,
  specs,
  images,
  reverseLayout = false
}: SuiteGalleryCardProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const handlePrev = () => {
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setActiveImgIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <article id={id} className="scroll-mt-28 flex flex-col gap-8">
      {/* TOP PORTION: Left/Right Main Featured Image + Right/Left Details */}
      <div className={cn("flex flex-col lg:flex-row gap-10 lg:gap-16 items-start", reverseLayout && "lg:flex-row-reverse")}>
        
        {/* Main Image Container & Bottom Thumbnails / Controls Column */}
        <div className="w-full lg:w-1/2 shrink-0 flex flex-col gap-4">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-900 border border-gray-200/60">
            <img
              src={images[activeImgIndex].src}
              alt={images[activeImgIndex].alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* BOTTOM PORTION: Single-Row Thumbnail List & Pagination Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            {/* Horizontal Single-Row Thumbnails */}
            <div className="flex flex-row flex-nowrap items-center gap-2 overflow-x-auto scrollbar-none w-full flex-1 min-w-0 py-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImgIndex(idx)}
                  className={cn(
                    "relative aspect-[4/3] flex-1 min-w-[54px] rounded-lg overflow-hidden border-2 transition-all cursor-pointer focus:outline-none shrink-0 sm:shrink",
                    idx === activeImgIndex 
                      ? "border-amber-800 opacity-100 shadow-sm scale-102" 
                      : "border-transparent opacity-60 hover:opacity-90"
                  )}
                  aria-label={`Select photo ${idx + 1}`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Interactive Pagination Controls (< 1/4 >) */}
            <div className="flex items-center gap-3 shrink-0 bg-[#F4F3ED] px-3.5 py-1.5 rounded-lg border border-gray-200/80">
              <button
                type="button"
                onClick={handlePrev}
                className="text-gray-800 hover:text-amber-900 font-bold px-1 transition-colors focus:outline-none cursor-pointer text-sm"
                aria-label="Previous photo"
              >
                &lt;
              </button>
              <span className="text-xs font-mono font-medium text-gray-700 tracking-wider">
                {activeImgIndex + 1}/{images.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="text-gray-800 hover:text-amber-900 font-bold px-1 transition-colors focus:outline-none cursor-pointer text-sm"
                aria-label="Next photo"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Suite Details & Specs Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {subtitle && (
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#92400e] font-semibold mb-2 block">
              {subtitle}
            </span>
          )}
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight mb-4 tracking-wide">
            {title}
          </h2>
          <div className="w-12 h-px bg-amber-800/30 mb-5" />
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light mb-6">
            {description}
          </p>

          {/* Bed & Amenity Specs */}
          <div className="bg-[#F4F3ED] p-5 rounded-xl border border-gray-200/60 mb-6 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-900 block mb-2">
              SUITE SPECIFICATIONS
            </span>
            {specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-800">
                <Bed className="size-4 text-amber-800 shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div>
            <Link
              href="/contact"
              className="inline-block rounded-none border border-gray-900 bg-gray-900 text-white hover:bg-transparent hover:text-gray-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
            >
              Inquire Suite Availability
            </Link>
          </div>
        </div>

      </div>
    </article>
  )
}

export default function OurResortPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]" suppressHydrationWarning>
      <SiteHeader />

      {/* SECTION 1: HERO & ABOUT STORY */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F4F3ED] border-b border-gray-200/60 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-6 tracking-wide max-w-4xl mx-auto">
            A Boutique Home in the <br/> Heart of  Kandy
          </h1>
          <div className="w-16 h-px bg-amber-800/40 mx-auto mb-6" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
            Margossa Residence is an intimate two-suite boutique residence offering the warmth of a private home with the comforts of contemporary hospitality. Inspired by the timeless Margossa (Neem) tree, the residence blends thoughtfully designed interiors, curated artwork, antique architectural details, and tranquil shared spaces to create a peaceful retreat just minutes from Kandy&apos;s historic city centre.
          </p>
        </div>
      </section>

      {/* Hero Featured Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 md:-mt-12 relative z-20 mb-20 md:mb-28">
        <div className="relative aspect-[21/9] min-h-[350px] md:min-h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-200/50">
          <Image
            src={`${basePath}/suiteImgs/ourResortHeroImg.webp`}
            alt="Margossa Residence Luxury Retreat"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>

      {/* SUITES OVERVIEW SECTION WITH INTERACTIVE GALLERIES */}
      <section className="max-w-6xl mx-auto px-6 pb-24 space-y-24 md:space-y-36">

        {/* SECTION 2: MARGOSSA SUITE */}
        <SuiteGalleryCard
          id="margossa-suite"
          title="Margossa Suite"
          
          description="The Margossa Suite is the residence's signature retreat, offering generous space, contemporary comfort, and thoughtful design. Featuring a private balcony overlooking the lush hills of Kandy, the suite is filled with natural light and carefully curated details that create a peaceful setting to relax and unwind. A comfortable sofa bed also allows the suite to accommodate an additional guest, making it an ideal choice for couples, small families, or friends travelling together."
          specs={["King size bed (2)", "Sofa bed (01)"]}
          images={MARGOSSA_SUITE_IMAGES}
        />

        {/* SECTION 3: NEEM SUITE */}
        <SuiteGalleryCard
          id="neem-suite"
          title="Neem Suite"
          description="Inspired by the calm character of the Margossa (Neem) tree, the Neem Suite offers a cosy and tranquil retreat with warm contemporary interiors and a distinctive open-air bathroom beneath the sky. Designed to create a seamless connection with nature, the suite provides an intimate and relaxing setting, making it the perfect place to slow down and enjoy the peaceful surroundings of Kandy."
          specs={["Queen sized Bed (2)"]}
          images={NEEM_SUITE_IMAGES}
          reverseLayout={true}
        />

      </section>

      {/* SECTION 4 & 5: REVIEWS & YOUTUBE VIDEO SECTION */}
      <ReviewsSection />

      <SiteFooter />
    </main>
  )
}
