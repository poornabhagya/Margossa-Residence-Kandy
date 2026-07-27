'use client'

import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InquiryModalProps {
  isOpen: boolean
  onClose: () => void
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our team will get back to you shortly.')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF9F6] rounded-xl shadow-2xl border border-gray-100 max-w-xl w-full mx-4 p-8 md:p-10 z-10 max-h-[90vh] overflow-y-auto animate-scale-up">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        {/* Brand & Header */}
        <div className="text-center mb-6">
          <span className="block text-[10px] tracking-[0.25em] text-gray-500 uppercase mb-1">
            MARGOSSA RESIDENCE KANDY
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mb-2">
            Plan Your Hillside Retreat
          </h3>
          <p className="text-xs text-gray-600">
            Please fill out the details below and our team will get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Jane Doe"
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="e.g. jane@example.com"
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +1 234 567 890"
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>

          {/* Preferred Room / Villa */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Preferred Villa
            </label>
            <select
              required
              defaultValue=""
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 outline-none transition-all"
            >
              <option value="" disabled>Select Room/Villa</option>
              <option value="sky-pavilion">Sky Pavilion Villa</option>
              <option value="sky-tented">Sky Tented Villa</option>
              <option value="sol-sanctuary">Sol Sanctuary</option>
              <option value="full-property">Full Property</option>
            </select>
          </div>

          {/* Check-in Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Check-in Date
            </label>
            <input
              type="date"
              required
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 outline-none transition-all"
            />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Check-out Date
            </label>
            <input
              type="date"
              required
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 outline-none transition-all"
            />
          </div>

          {/* Number of Guests */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Number of Guests
            </label>
            <input
              type="number"
              min="1"
              required
              placeholder="e.g. 2"
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all"
            />
          </div>

          {/* Preferred Contact Method */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Contact Method
            </label>
            <select
              required
              defaultValue=""
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 outline-none transition-all"
            >
              <option value="" disabled>Select Method</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="call">Call</option>
            </select>
          </div>

          {/* Message / Special Requests */}
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Message / Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about any specific details or preferences..."
              className="border border-gray-300 focus:border-gray-900 focus:ring-0 rounded-md px-4 py-2.5 text-sm bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-gray-900 text-white hover:bg-amber-900 px-8 py-3.5 text-xs tracking-widest uppercase transition-colors duration-300 rounded-md font-medium w-full focus:outline-none cursor-pointer"
            >
              Submit Inquiry
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}
