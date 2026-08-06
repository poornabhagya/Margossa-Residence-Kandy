'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { cn, basePath } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

// 12 Main Grid Images (9 Horizontal + 3 Vertical)
const MAIN_GRID_IMAGES = [
  {
    id: 1,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A1985.webp`,
    alt: "Margossa Residence Living Space & Architecture",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 2,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A1994.webp`,
    alt: "Luxurious Bedroom Interior with Garden View",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 3,
    src: `${basePath}/gallery/MainGrid/vertical/0U4A2017.webp`,
    alt: "Veranda & Traditional Architectural Details",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 4,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A2026.webp`,
    alt: "Hillside Terrace View of Kandy Mountains",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 5,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A2031.webp`,
    alt: "Serene Garden Pathway & Tropical Flora",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 6,
    src: `${basePath}/gallery/MainGrid/vertical/0U4A2024.webp`,
    alt: "Open-Air Sky Bathing Experience",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 7,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A2041.webp`,
    alt: "Fine Dining & Breakfast Setup on Balcony",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 8,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A2063.webp`,
    alt: "Elegantly Appointed Suite Lounge",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 9,
    src: `${basePath}/gallery/MainGrid/vertical/0U4A2070.webp`,
    alt: "Historic Antique Wood Details & Courtyard",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 10,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A2078.webp`,
    alt: "Spacious En-Suite Bathroom Vanity",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 11,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A2095.webp`,
    alt: "Peaceful Evening Ambience on Private Terrace",
    aspectRatio: "aspect-[16/10]"
  },
  {
    id: 12,
    src: `${basePath}/gallery/MainGrid/horizontal/0U4A9379.webp`,
    alt: "Panoramic Views of Sri Lankan Nature",
    aspectRatio: "aspect-[4/3]"
  }
]

// 8 Extra PopupBox Images
const POPUP_BOX_IMAGES = [
  {
    id: 13,
    src: `${basePath}/gallery/PopupBox/0U4A2055.webp`,
    alt: "Margossa Suite Master Bedroom & Lounge Area",
  },
  {
    id: 14,
    src: `${basePath}/gallery/PopupBox/0U4A2115.webp`,
    alt: "Boutique Residence Exterior Architectural View",
  },
  {
    id: 15,
    src: `${basePath}/gallery/PopupBox/0U4A2123.webp`,
    alt: "Sun-Drenched Garden Patio & Seating",
  },
  {
    id: 16,
    src: `${basePath}/gallery/PopupBox/0U4A2132.webp`,
    alt: "Private Balcony Overlooking Hanthana Range",
  },
  {
    id: 17,
    src: `${basePath}/gallery/PopupBox/0U4A2136.webp`,
    alt: "Luxury Bathroom Marble Vanity & Amenities",
  },
  {
    id: 18,
    src: `${basePath}/gallery/PopupBox/0U4A2149.webp`,
    alt: "Artisanal Ceylon Dining & Morning Tea",
  },
  {
    id: 19,
    src: `${basePath}/gallery/PopupBox/0U4A2172.webp`,
    alt: "Tranquil Courtyard Dusk Lighting",
  },
  {
    id: 20,
    src: `${basePath}/gallery/PopupBox/0U4A9314.webp`,
    alt: "Lush Tropical Surroundings & Villa Entrance",
  }
]

// Combined 20 Images Array for Full Lightbox Navigation
const FULL_GALLERY_IMAGES = [...MAIN_GRID_IMAGES, ...POPUP_BOX_IMAGES]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

  const openLightbox = (index: number) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % FULL_GALLERY_IMAGES.length)
  }, [])

  const prevImage = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + FULL_GALLERY_IMAGES.length) % FULL_GALLERY_IMAGES.length)
  }, [])

  // Lock background scroll when modal is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  // Preload next and previous images when lightbox is open for instant transitions
  useEffect(() => {
    if (!lightboxOpen) return
    const nextIdx = (activeIndex + 1) % FULL_GALLERY_IMAGES.length
    const prevIdx = (activeIndex - 1 + FULL_GALLERY_IMAGES.length) % FULL_GALLERY_IMAGES.length

    const img1 = new Image()
    img1.src = FULL_GALLERY_IMAGES[nextIdx].src
    const img2 = new Image()
    img2.src = FULL_GALLERY_IMAGES[prevIdx].src
  }, [lightboxOpen, activeIndex])

  // Auto-scroll active thumbnail into view inside thumbnail strip
  useEffect(() => {
    if (lightboxOpen && thumbnailRefs.current[activeIndex]) {
      thumbnailRefs.current[activeIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [lightboxOpen, activeIndex])

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
          {MAIN_GRID_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-100 border border-gray-200/60 cursor-pointer break-inside-avoid transition-all duration-500 hover:shadow-2xl"
            >
              <div className={cn("relative w-full overflow-hidden", item.aspectRatio)}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width={800}
                  height={600}
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

      {/* SLEEK WHITE POPUP MODAL CARD OVER BACKDROP (CONDITIONALLY MOUNTED) */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
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
            <div className="relative aspect-[4/3] w-full max-h-[58vh] rounded-xl sm:rounded-2xl overflow-hidden bg-white flex items-center justify-center">
              <img
                key={FULL_GALLERY_IMAGES[activeIndex].src}
                src={FULL_GALLERY_IMAGES[activeIndex].src}
                alt={FULL_GALLERY_IMAGES[activeIndex].alt}
                loading="eager"
                decoding="async"
                width={1200}
                height={900}
                className="w-full h-full object-contain transition-opacity duration-300"
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
              <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto justify-start sm:justify-center flex-1 max-w-2xl py-1 scroll-smooth">
                {FULL_GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={img.id}
                    ref={(el) => { thumbnailRefs.current[idx] = el }}
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
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      decoding="async"
                      width={120}
                      height={90}
                      className="w-full h-full object-cover"
                    />
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



