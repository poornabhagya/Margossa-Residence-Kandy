'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    alt: "Margossa Residence Kandy Exterior View",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    alt: "Margossa Suite Bedroom Interior",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1546853020-ca4909aef454?auto=format&fit=crop&w=1200&q=80",
    alt: "Hanthana Mountain View from Residence Balcony",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    alt: "Neem Suite Open-Air Sky Bathroom",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    alt: "Relaxed Hillside Dining Table Setup",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury Bathroom Vanity & Marble Details",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
    alt: "Tranquil Courtyard & Antique Wooden Doors",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    alt: "Margossa Suite Living Lounge & Sofa",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    alt: "Temple of the Tooth Heritage Scene",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh Ceylon Breakfast & Artisanal Tea",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    alt: "Private Terrace Overlooking Kandy Valley",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    alt: "Hillside Sunset Terrace Ambient Lighting",
    aspectRatio: "aspect-[4/3]"
  }
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
  }, [])

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  }, [])

  // Keyboard controls for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, nextImage, prevImage])

  return (
    <main className="min-h-screen bg-[#FAF9F6]" suppressHydrationWarning>
      <SiteHeader />

      {/* Hero Header Section */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-[#F4F3ED] border-b border-gray-200/60 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#92400e] font-semibold mb-3 block">
            GALLERY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-6 tracking-wide max-w-4xl mx-auto">
            A Glimpse Inside Margossa Residence
          </h1>
          <div className="w-16 h-px bg-amber-800/40 mx-auto mb-6" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
            Discover the spaces, details, and moments that define life at Margossa Residence. From peaceful suites and intimate courtyards to the natural beauty of Kandy, explore the residence through a carefully curated collection of imagery.
          </p>
        </div>
      </section>

      {/* Clean Masonry-Style Grid Display */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-100 border border-gray-200/60 cursor-pointer break-inside-avoid transition-all duration-500 hover:shadow-2xl"
            >
              <div className={cn("relative w-full overflow-hidden", item.aspectRatio)}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 bg-white/90 backdrop-blur-xs p-3 rounded-full text-gray-900 shadow-lg">
                    <Maximize2 className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent "Explore Full Gallery" Button */}
        <div className="text-center mt-16">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="inline-block rounded-none border border-gray-900 bg-gray-900 text-white hover:bg-transparent hover:text-gray-900 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer shadow-md focus:outline-none"
          >
            Explore Full Gallery
          </button>
        </div>
      </section>

      {/* REDESIGNED SLEEK WHITE POPUP MODAL CARD OVER BACKDROP */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* White Modal Card Container */}
          <div 
            className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col p-4 sm:p-6 border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Right Close Button */}
            <div className="flex justify-end items-center pb-3">
              <button
                type="button"
                onClick={closeLightbox}
                className="text-gray-500 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="size-5 sm:size-6" />
              </button>
            </div>

            {/* Center Main Active Image Display */}
            <div className="relative aspect-[4/3] w-full max-h-[58vh] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-900 border border-gray-200/60 shadow-inner flex items-center justify-center">
              <img
                src={GALLERY_IMAGES[activeIndex].src}
                alt={GALLERY_IMAGES[activeIndex].alt}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* Bottom Row: Arrow Controls & Thumbnail Carousel Strip */}
            <div className="flex items-center justify-between gap-3 pt-4 sm:pt-5">
              {/* Previous Arrow */}
              <button
                type="button"
                onClick={prevImage}
                className="p-2.5 rounded-full text-gray-700 hover:text-amber-900 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer shrink-0 border border-gray-200/80 shadow-xs"
                aria-label="Previous photo"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>

              {/* Centered Thumbnails Row */}
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto justify-center flex-1 max-w-2xl py-1">
                {GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "relative aspect-[4/3] w-12 sm:w-16 rounded-lg overflow-hidden border-2 transition-all cursor-pointer focus:outline-none shrink-0",
                      idx === activeIndex
                        ? "border-amber-800 opacity-100 scale-105 shadow-xs"
                        : "border-transparent opacity-50 hover:opacity-85"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={nextImage}
                className="p-2.5 rounded-full text-gray-700 hover:text-amber-900 hover:bg-gray-100 transition-colors focus:outline-none cursor-pointer shrink-0 border border-gray-200/80 shadow-xs"
                aria-label="Next photo"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
            </div>

          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  )
}
