'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { basePath } from '@/lib/utils'

const EXPERIENCES = [
  {
    number: "01",
    title: "Temple of the Sacred Tooth Relic",
    description: "Visit Sri Lanka's most revered Buddhist temple, home to the Sacred Tooth Relic of the Buddha. Admire its magnificent Kandyan architecture, immerse yourself in centuries of history, and witness the daily prayer ceremonies accompanied by the rhythmic sounds of traditional temple drumming.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (36).webp`
  },
  {
    number: "02",
    title: "Kandyan Cultural Dance Show",
    description: "Experience one of Sri Lanka's most celebrated cultural performances featuring vibrant Kandyan dancing, traditional drumming, elaborate costumes, acrobatics, and spectacular fire-walking demonstrations.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (37).webp`
  },
  {
    number: "03",
    title: "Kandy Gem Museum",
    description: "Discover why Sri Lanka is renowned as the Island of Gems. Learn about the country's precious sapphires and gemstones while observing the traditional techniques of gem cutting, polishing, and craftsmanship.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (38).webp`
  },
  {
    number: "04",
    title: "Hanthana Mountain",
    description: "Escape into the cool hill country with a scenic hike through the Hanthana mountain range. Surrounded by rolling tea plantations and panoramic views over Kandy, it is one of the region's most rewarding outdoor experiences.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (39).webp`
  },
  {
    number: "05",
    title: "Udawattakele Forest Sanctuary",
    description: "Just minutes from the city, this peaceful forest sanctuary offers shaded walking trails, abundant birdlife, ancient meditation hermitages, and a refreshing escape into nature.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (40).webp`
  },
  {
    number: "06",
    title: "Ceylon Tea Museum",
    description: "Journey through the story of Ceylon Tea at this fascinating museum housed in a restored tea factory. Discover historic machinery, learn about Sri Lanka's tea heritage, and enjoy a complimentary cup of world-famous Ceylon tea.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (41).webp`
  },
  {
    number: "07",
    title: "Bahirawakanda Buddha Statue",
    description: "Standing high above Kandy, the impressive white Buddha statue offers spectacular panoramic views across the city, surrounding mountains, and Kandy Lake.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (42).webp`
  },
  {
    number: "08",
    title: "Kandy Lake",
    description: "Take a leisurely stroll around the picturesque Kandy Lake, located in the heart of the city. Surrounded by lush hills and historic landmarks, it provides one of Kandy's most peaceful and scenic walks.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (43).webp`
  },
  {
    number: "09",
    title: "Kandy Museum",
    description: "Located within the Royal Palace complex beside the Temple of the Sacred Tooth Relic, the Kandy Museum offers a fascinating insight into the Kandyan Kingdom through royal artefacts, traditional costumes, jewellery, weapons, manuscripts, and everyday objects from Sri Lanka's last royal era.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (45).webp`
  },
  {
    number: "10",
    title: "Ehelepola Walawwa Wax Museum",
    description: "Step inside the historic Ehelepola Walawwa and explore Sri Lanka's first wax museum. Life-sized figures of kings, queens, monks, national heroes, and other influential personalities bring the country's rich history vividly to life.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (46).webp`
  },
  {
    number: "11",
    title: "Kandy Spice Gardens",
    description: "Explore the aromas and flavours that have shaped Sri Lanka's culinary heritage. Discover locally grown spices and medicinal herbs while learning about their traditional Ayurvedic and culinary uses.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (47).webp`
  },
  {
    number: "12",
    title: "Royal Botanical Gardens, Peradeniya",
    description: "Wander through one of Asia's finest botanical gardens, home to over 4,000 species of tropical plants. From towering palm avenues and magnificent bamboo groves to colourful orchid collections and giant tropical trees, the gardens offer a truly unforgettable experience.",
    image: `${basePath}/Margossa-Residence-Kandy/experience-imgs/Untitled design (48).webp`
  }
]

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]" suppressHydrationWarning>
      <SiteHeader />

      {/* Hero Header Section - One&Only Editorial Style */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-[#F4F3ED] border-b border-gray-200/60 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-6 tracking-wide max-w-4xl mx-auto">
            Iconic travel experiences with Margossa Residence Kandy
          </h1>
          <div className="w-16 h-px bg-amber-800/40 mx-auto mb-6" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light max-w-3xl mx-auto">
            Slow down and immerse yourself in the timeless beauty of Sri Lanka&apos;s hill capital. From sacred temples and royal heritage to mist-covered mountains, botanical gardens, and vibrant cultural traditions, each experience offers an authentic connection to the history, nature, and spirit of Kandy.
          </p>
        </div>
      </section>

      {/* Featured Header Banner Image - One&Only Editorial Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 md:-mt-14 relative z-20 mb-20 md:mb-28">
        <div className="relative aspect-[21/9] min-h-[350px] md:min-h-[460px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-200/50">
          <Image
            src={`${basePath}/Margossa-Residence-Kandy/ExpPagHero.webp`}
            alt="Margossa Residence Kandy Iconic Travel Experiences Hero"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </section>

      {/* Editorial Zig-Zag Experiences List (One&Only Style) */}
      <section className="max-w-6xl mx-auto px-6 pb-28 space-y-24 md:space-y-36">
        {EXPERIENCES.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <article
              key={item.title}
              className={`flex flex-col lg:items-center gap-10 lg:gap-16 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2 flex justify-center shrink-0">
                <div className="relative aspect-square w-full max-w-[450px] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group border border-gray-200/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </div>

              {/* Text Content Column */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="font-serif text-3xl md:text-4xl text-amber-800/40 font-light mb-2 block">
                  {item.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold mb-2 block">
                  Kandy Experience
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-gray-900 leading-tight mb-4 tracking-wide">
                  {item.title}
                </h2>
                <div className="w-12 h-px bg-amber-800/30 mb-5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light mb-6">
                  {item.description}
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-block border-b border-gray-900 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-900 hover:text-amber-800 hover:border-amber-800 transition-colors"
                  >
                    Inquire for Concierge Experience &rarr;
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      

      <SiteFooter />
    </main>
  )
}
