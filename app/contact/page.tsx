'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Share2, 
  Navigation, 
  Sun,
  Clock
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { basePath } from '@/lib/utils'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Resort', href: '#residence' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About Us', href: '#welcome' },
  { label: 'Contact Us', href: '#contact' },
]

const AirbnbIcon = () => (
  <svg className="size-4 fill-current" viewBox="0 0 32 32">
    <path d="M16 1c-2.008 0-3.916 1.179-5.064 3.01L1.642 18.06c-1.39 2.217-1.127 5.093.8 7.02l.142.143c1.887 1.887 4.908 2.012 7.02.8L16 22.064l6.396 3.96c2.112 1.212 5.133 1.087 7.02-.8l.142-.143c1.927-1.927 2.19-4.803.8-7.02L21.064 4.01C19.916 2.18 18.008 1 16 1zm0 2.4c1.325 0 2.583.784 3.328 1.984l9.293 14.05c.783 1.25.646 2.875-.434 3.955l-.142.143c-1.077 1.077-2.705 1.217-3.955.434L16 18.736l-8.09 5.23c-1.25.783-2.878.643-3.955-.434l-.142-.143c-1.08-1.08-1.217-2.705-.434-3.955l9.293-14.05c.745-1.2 2.003-1.984 3.328-1.984z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
)

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    alert('Thank you for contacting Margossa Residence Kandy. Our concierge team will get back to you shortly.')
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Margossa Residence Kandy',
        text: 'Experience tranquil luxury in the hills of Kandy.',
        url: window.location.href,
      }).catch(console.error)
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6]" suppressHydrationWarning>
      <SiteHeader />

      {/* 1. Hero Header Section */}
      <section className="relative h-[320px] md:h-[400px] w-full overflow-hidden flex items-center justify-center pt-20">
        <Image
          src={`${basePath}/contactUsImg.webp`}
          alt="Margossa Residence Contact Us background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 mt-6">
          <h1 className="font-serif text-4xl md:text-5xl text-white uppercase tracking-wide">
            Contact Us
          </h1>
          <p className="text-xs tracking-[0.25em] text-gray-300 uppercase mt-4">
            Home / Contact Us
          </p>
        </div>
      </section>

      {/* 2. Property Details & Inquiry Form (Split Layout) */}
      <section className="bg-[#F9F8F3] py-20 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Property Details (5 Columns) */}
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-10 font-normal leading-tight">
                Margossa Residence Kandy
              </h2>

              <div className="space-y-8">
                {/* Address Block */}
                <div>
                  <span className="text-[11px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-2 block">
                    ADDRESS
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    No 251/A Wattarantenna Passage, Kandy 20000
                  </p>
                </div>

                {/* Direct Inquiries Block */}
                <div>
                  <span className="text-[11px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-2 block">
                    DIRECT INQUIRIES
                  </span>
                  <a 
                    href="mailto:info@cohostceylon.com" 
                    className="text-sm text-gray-700 block hover:underline hover:text-amber-900 transition-colors mb-1 font-light"
                  >
                    info@cohostceylon.com
                  </a>
                  <a 
                    href="tel:0777 772 616" 
                    className="text-sm text-gray-700 block hover:underline hover:text-amber-900 transition-colors font-light"
                  >
                    0777 772 616
                  </a>
                </div>

                {/* Reservations Block */}
                <div>
                  <span className="text-[11px] tracking-[0.2em] text-gray-400 font-semibold uppercase mb-2 block">
                    RESERVATIONS
                  </span>
                  <a 
                    href="mailto:info@cohostceylon.com" 
                    className="text-sm text-gray-700 block hover:underline hover:text-amber-900 transition-colors font-light"
                  >
                    info@cohostceylon.com
                  </a>
                </div>
              </div>

              {/* Response Assurance Box */}
              <div className="border-l border-gray-300 pl-4 py-1 mt-12 flex items-start gap-2.5">
                <Clock className="size-4 text-gray-400 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-500 leading-relaxed">
                  We reply to all general stay and private event inquiries within 12 hours.
                </p>
              </div>
            </div>

            {/* Right Column: Underlined Form Card (7 Columns) */}
            <div className="lg:col-span-7">
              <div className="bg-[#F4F3ED] p-8 md:p-12 rounded-none border border-gray-200/50 shadow-sm">
                
                <form onSubmit={handleSubmit} className="flex flex-col">
                  
                  {/* Full Name */}
                  <div className="mb-8">
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-1 block">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Julian Vane"
                      className="border-b border-gray-400 focus:border-gray-900 rounded-none bg-transparent outline-none w-full py-3 text-sm text-gray-900 placeholder:text-gray-400/80 transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-8">
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-1 block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E.g., julian@example.com"
                      className="border-b border-gray-400 focus:border-gray-900 rounded-none bg-transparent outline-none w-full py-3 text-sm text-gray-900 placeholder:text-gray-400/80 transition-all"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-1 block">
                      INQUIRY TYPE
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Villa Reservation, Private Event, General Inquiry"
                      className="w-full bg-transparent border-b border-gray-400 focus:border-gray-900 rounded-none py-3 text-sm text-gray-900 placeholder:text-gray-400/80 outline-none transition-colors mb-8"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-1 block">
                      MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your event plans, general inquiries, or feedback."
                      className="border-b border-gray-400 focus:border-gray-900 rounded-none bg-transparent outline-none w-full py-3 text-sm text-gray-900 placeholder:text-gray-400/80 resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#22211F] hover:bg-black text-white py-4 text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 mt-6 focus:outline-none cursor-pointer"
                  >
                    Submit Inquiry
                  </button>

                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Full-width Interactive Google Map Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16 w-full">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 h-[400px] md:h-[450px] w-full relative group bg-gray-50">
          
          {/* Floating Location Badge with "Get Directions" Button */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-md border border-gray-100 flex flex-col sm:flex-row sm:items-center gap-3 z-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-gray-900 uppercase block">
                MARGOSSA RESIDENCE &bull; KANDY
              </span>
              <span className="text-[10px] text-gray-500 block mt-0.5 font-light">
                Kandy, Sri Lanka
              </span>
            </div>
            <a
              href="https://www.google.com/maps/place/Margossa+Residence+Kandy/@7.3041429,80.6255913,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-amber-900 hover:bg-amber-950 text-white text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors shadow-xs"
            >
              <Navigation className="size-3" />
              Get Directions
            </a>
          </div>

          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.271391584852!2d80.6255913!3d7.3041429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae369a5710e9a93%3A0x95bd998cf9ca48e6!2sMargossa%20Residence%20Kandy!5e0!3m2!1sen!2slk!4v1711900000000!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Margossa Residence Kandy Location Map"
            className="w-full h-[400px] md:h-[450px] rounded-2xl border-0"
          />
        </div>
      </section>

      <SiteFooter />

    </main>
  )
}
