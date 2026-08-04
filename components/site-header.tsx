"use client";

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { InquiryModal } from './inquiry-modal'

const basePath = process.env.NODE_ENV === 'production' ? '/Margossa-Residence-Kandy' : ''

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Resort', href: '/our-resort' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <header 
        style={{ minHeight: '90px' }}
        className="fixed inset-x-0 top-0 z-40 bg-white border-b border-gray-100 shadow-sm py-3 flex items-center min-h-[90px]"
      >
        <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-8 relative z-50">
          
          {/* Left Side: Hamburger & Navigation Trigger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex items-center gap-3 group focus:outline-none shrink-0 p-2 -ml-2 rounded-md hover:bg-gray-100/80 transition-colors"
          >
            <div className="flex flex-col gap-1.5 w-5 shrink-0">
              <span className="h-0.5 w-full bg-gray-900 transition-all duration-300 group-hover:bg-amber-800" />
              <span className="h-0.5 w-full bg-gray-900 transition-all duration-300 group-hover:bg-amber-800" />
              <span className="h-0.5 w-full bg-gray-900 transition-all duration-300 group-hover:bg-amber-800" />
            </div>
          </button>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-auto min-h-[70px] w-auto">
            <Link href="/" className="flex items-center justify-center h-auto min-h-[70px] w-auto group py-1">
              <img
                src={`${basePath}/MargossaKandyLogo.png`}
                alt="Margossa Residence"
                style={{ height: '70px', width: 'auto', minHeight: '70px', maxHeight: 'none' }}
                className="block h-[70px] min-h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right Side: CONTACT US outline button */}
          <div className="flex items-center shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-block rounded-none border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </header>

      {/* Backdrop Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out Navigation Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-[110] w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex flex-col h-full p-6 md:p-8">
          {/* Drawer Header with Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="group flex items-center gap-2 text-gray-600 hover:text-amber-800 transition-colors focus:outline-none"
            >
              <X className="size-5 transition-transform group-hover:rotate-90 duration-300" />
              <span className="text-xs uppercase tracking-widest font-semibold">Close</span>
            </button>
            <div className="flex items-center gap-2">
              <img
                src={`${basePath}/MargossaKandyLogo.png`}
                alt="Margossa Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Margossa
              </span>
            </div>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex-1 py-8 flex flex-col gap-6 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group relative font-serif text-2xl md:text-3xl text-gray-900 hover:text-amber-800 transition-colors tracking-wide py-2 border-b border-gray-50 last:border-none flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-amber-800 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-lg">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Drawer Footer */}
          <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center rounded-none border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>
            <div className="text-center text-[0.65rem] text-gray-400 uppercase tracking-widest">
              Margossa Residence © 2026
            </div>
          </div>
        </div>
      </div>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
