'use client'

import { useState } from 'react'

const EXPERIENCES = [
  {
    title: "Temple of the Sacred Tooth Relic",
    description: "One of Sri Lanka's most sacred Buddhist temples, the Temple of the Sacred Tooth Relic houses the revered tooth relic of the Buddha. A UNESCO World Heritage Site, it is renowned for its beautiful Kandyan architecture, rich history, and daily prayer ceremonies accompanied by traditional drumming.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kandyan Cultural Dance Show",
    description: "Experience the vibrant traditions of Sri Lanka through an energetic performance of Kandyan dance, rhythmic drumming, colourful costumes, and thrilling fire-walking displays, showcasing the island's rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kandy Gem Museum",
    description: "Discover Sri Lanka's world-famous gemstones and witness the traditional process of gem cutting and polishing.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hanthana Mountain",
    description: "A popular hiking destination offering breathtaking views of Kandy, lush tea plantations, and the surrounding hill country.",
    image: "https://images.unsplash.com/photo-1546853020-ca4909aef454?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Udawattakele Forest Sanctuary",
    description: "A tranquil forest reserve rich in wildlife, walking trails, and ancient meditation hermitages, just minutes from Kandy city.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Ceylon Tea Museum",
    description: "Learn about Sri Lanka's renowned tea industry through historic exhibits, vintage machinery, and a complimentary tea tasting.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Bahirawakanda Buddha Statue",
    description: "One of Kandy's most iconic landmarks, offering panoramic views of the city from the base of the towering white Buddha statue.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kandy Lake",
    description: "A scenic lake in the heart of Kandy, perfect for a peaceful stroll while enjoying views of the surrounding hills and the Temple of the Tooth.",
    image: "https://images.unsplash.com/photo-1588598046705-ea06159679f2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Millennium Elephant Foundation",
    description: "An ethical elephant sanctuary dedicated to the rescue, care, and conservation of elephants, offering educational and interactive experiences.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kandy Museum",
    description: "Located within the Royal Palace complex beside the Temple of the Sacred Tooth Relic, the Kandy Museum showcases the rich heritage of the Kandyan Kingdom. Its exhibits include royal artifacts, traditional costumes, jewelry, weapons, manuscripts, and household items that offer visitors a glimpse into the lifestyle, customs, and history of Sri Lanka's last royal kingdom.",
    image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Wax Museum - Ehelepola Walauwwe",
    description: "Step back into the Kandyan Kingdom at Sri Lanka's first wax museum, housed within the historic Ehelepola Walawwa. The museum features lifelike wax figures of kings, queens, monks, national heroes, and other influential figures, bringing centuries of Sri Lankan history and culture to life through immersive displays.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Kandy Spice Gardens",
    description: "Discover Sri Lanka's famous spices and medicinal herbs while learning about their culinary and Ayurvedic uses.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Royal Botanical Gardens",
    description: "Explore beautifully landscaped gardens featuring over 4,000 species of tropical plants, towering palm avenues, and vibrant orchid collections.",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800"
  }
]

export function ExperiencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % EXPERIENCES.length)
  }

  const getSlideIndex = (offset: number) => {
    return (currentIndex + offset + EXPERIENCES.length) % EXPERIENCES.length
  }

  const activeItem = EXPERIENCES[currentIndex]
  const prevItem = EXPERIENCES[getSlideIndex(-1)]
  const nextItem = EXPERIENCES[getSlideIndex(1)]

  return (
    <section 
      id="experiences" 
      className="relative w-full py-16 md:py-24 bg-[#FAF9F6] block clear-both"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 1. TOP HEADER CONTENT */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-[#92400e] font-semibold mb-3">
            EXPERIENCES
          </p>
          <h2 className="font-serif text-2xl md:text-4xl text-gray-900 uppercase tracking-wide mb-4">
            DISCOVER THE SOUL OF KANDY
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed font-light">
            Step beyond the ordinary and immerse yourself in the timeless charm of Sri Lanka's cultural capital. Wander through ancient temples, discover vibrant local markets, savour authentic cuisine, visit renowned tea plantations, and uncover breathtaking landscapes—all while returning to the comfort and tranquillity of Margossa Residence.
          </p>
        </div>

        {/* 2. RESPONSIVE CAROUSEL IMAGES CONTAINER */}
        <div className="relative w-full max-w-[1000px] mx-auto">
          
          <div className="flex items-center justify-center relative w-full">
            
            {/* Left Preview Image (Hidden on Mobile) */}
            <div className="hidden md:block w-[28%] h-[300px] opacity-40 rounded overflow-hidden shadow-xs -mr-[40px] z-1">
              <img src={prevItem.image} alt={prevItem.title} className="w-full h-full object-cover" />
            </div>

            {/* CENTER ACTIVE IMAGE - STRICT HARDCODED INLINE HEIGHT */}
            <div 
              style={{
                width: '100%',
                height: '280px',
                maxHeight: '280px',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.15)',
                zIndex: 10,
                backgroundColor: '#1f2937'
              }}
              className="md:w-[52%] md:!h-[380px] md:!max-h-[380px]"
            >
              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />

              {/* Left Arrow Button */}
              <button
                onClick={prevSlide}
                type="button"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#111827',
                  zIndex: 30
                }}
                aria-label="Previous slide"
              >
                ←
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextSlide}
                type="button"
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#111827',
                  zIndex: 30
                }}
                aria-label="Next slide"
              >
                →
              </button>
            </div>

            {/* Right Preview Image (Hidden on Mobile) */}
            <div className="hidden md:block w-[28%] h-[300px] opacity-40 rounded overflow-hidden shadow-xs -ml-[40px] z-1">
              <img src={nextItem.image} alt={nextItem.title} className="w-full h-full object-cover" />
            </div>

          </div>

        </div>

        {/* 3. BOTTOM ACTIVE TEXT CONTENT (INLINE HARDCODED MIN-HEIGHT TO LOCK LAYOUT) */}
        <div 
          style={{ 
            minHeight: '130px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '24px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '8px',
            paddingRight: '8px'
          }}
        >
          <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-2">
            {activeItem.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed font-light">
            {activeItem.description}
          </p>
        </div>

      </div>
    </section>
  )
}