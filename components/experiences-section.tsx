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
      style={{ 
        position: 'relative', 
        width: '100%', 
        paddingTop: '80px', 
        paddingBottom: '90px', 
        backgroundColor: '#FAF9F6', 
        display: 'block',
        clear: 'both'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        
        {/* 1. TOP HEADER CONTENT */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#92400e', fontWeight: '600', marginBottom: '12px' }}>
            EXPERIENCES
          </p>
          <h2 style={{ fontFamily: 'serif', fontSize: '32px', color: '#111827', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
            DISCOVER THE SOUL OF KANDY
          </h2>
          <p style={{ color: '#4b5563', fontSize: '14px', maxWidth: '750px', margin: '0 auto', lineHeight: '1.7', fontWeight: '300' }}>
            Step beyond the ordinary and immerse yourself in the timeless charm of Sri Lanka's cultural capital. Wander through ancient temples, discover vibrant local markets, savour authentic cuisine, visit renowned tea plantations, and uncover breathtaking landscapes—all while returning to the comfort and tranquillity of Margossa Residence.
          </p>
        </div>

        {/* 2. 3D CAROUSEL IMAGES CONTAINER */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', minHeight: '380px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%' }}>
            
            {/* Left Preview Image */}
            <div 
              style={{ 
                width: '28%', 
                height: '300px', 
                opacity: 0.4, 
                borderRadius: '4px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                marginRight: '-40px',
                zIndex: 1
              }}
            >
              <img src={prevItem.image} alt={prevItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* CENTER ACTIVE IMAGE */}
            <div 
              style={{ 
                width: '52%', 
                height: '380px', 
                borderRadius: '6px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.15)',
                zIndex: 10,
                position: 'relative'
              }}
            >
              <img src={activeItem.image} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

              {/* Left Arrow Button */}
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  zIndex: 20
                }}
              >
                ←
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  zIndex: 20
                }}
              >
                →
              </button>
            </div>

            {/* Right Preview Image */}
            <div 
              style={{ 
                width: '28%', 
                height: '300px', 
                opacity: 0.4, 
                borderRadius: '4px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                marginLeft: '-40px',
                zIndex: 1
              }}
            >
              <img src={nextItem.image} alt={nextItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

          </div>

        </div>

        {/* 3. BOTTOM ACTIVE TEXT CONTENT */}
        <div style={{ textAlign: 'center', marginTop: '36px', maxWidth: '700px', margin: '36px auto 0' }}>
          <h3 style={{ fontFamily: 'serif', fontSize: '24px', color: '#111827', marginBottom: '12px' }}>
            {activeItem.title}
          </h3>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', fontWeight: '300' }}>
            {activeItem.description}
          </p>
        </div>

      </div>
    </section>
  )
}