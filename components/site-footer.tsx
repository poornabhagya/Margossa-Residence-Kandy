import Image from 'next/image'
import { Star } from 'lucide-react'
import { basePath } from '@/lib/utils'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Our Resort', href: '/#residence' },
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About Us', href: '/#welcome' },
  { label: 'Contact Us', href: '/contact' },
]

const FacebookIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TwitterIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=margossa+residence+kandy+tripadvisor&sca_esv=b83e30d655369951&hl=en&sxsrf=APpeQnuGRGlbvOzPHJJY_YveI1vL-Kzg-A%3A1785391885093&source=hp&ei=DetqapbxAeDH4-EPwrSsmQs&iflsig=ABILxe8AAAAAamr5HRHEMXbz5Wz3sZpx6a5E73ASfexL&oq=margossa+residence+kandy+tr&gs_lp=Egdnd3Mtd2l6IhttYXJnb3NzYSByZXNpZGVuY2Uga2FuZHkgdHIqAggAMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYnwUyBRAhGJ8FMgUQIRifBUidM1AAWM8qcAJ4AJABAJgBoAGgAZYNqgEEMTAuNrgBA8gBAPgBAZgCEqACkg6oAgrCAgQQIxgnwgIKECMYyQIY8AUYJ8ICEBAuGIAEGIoFGEMYxwEY0QPCAhAQABiABBiKBRhDGLEDGIMBwgIKEAAYgAQYigUYQ8ICCxAAGIAEGLEDGIMBwgILEAAYgAQYigUYsQPCAggQABiABBixA8ICChAjGPAFGMkCGCfCAgsQABiABBiKBRiRAsICChAuGIAEGIoFGEPCAgUQABiABMICBxAjGOoCGCfCAg0QLhjHARjRAxjqAhgnwgINECMYyQIY8AUY6gIYJ8ICDhAAGIAEGIoFGLEDGIMBwgIHECMY8AUYJ8ICFBAuGIAEGLEDGMcBGK8BGJgFGJkFwgIREC4YgAQYigUYsQMYxwEYrwHCAg0QLhiABBiKBRhDGLEDwgIFEC4YgATCAggQLhiABBixA8ICERAuGK8BGMcBGIAEGJgFGJkFwgIOEC4YgAQxwEYrwEYmAXCAgkQLhgKGAsYgATCAgkQABiABBgKGAvCAhUQLhgKGAsYrwEYxwEYgAQYmAUYmQXCAgQQABgewgIFEAAY7wXCAggQABiABBiiBMICBhAAGBYYHsICCBAAGIkFGKIEwgILEAAYgAQYigUYhgPCAgQQIRgVmAME8QXEr0qTIabmO5IHBDcuMTGgB8eoAbIHBDUuMTG4B4gOwgcKMC41LjExLjEuMcgHVYAIAQ&sclient=gws-wiz#lrd=0x3ae369a5710e9a93:0x95bd998cf9ca48e6,1"

const INSTAGRAM_ACCOUNT_URL = "https://www.instagram.com/margossaresidencekandy/"

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#E3E5D8] text-gray-800 w-full border-t border-gray-300/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        
        {/* 4-Column Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left items-start">
          
          {/* Column 1: Resized Compact Logo */}
          <div className="flex flex-col items-center sm:items-start justify-center">
            <a href="/" className="inline-block transition-opacity hover:opacity-90">
              <div style={{ width: '140px', height: 'auto' }}>
                <Image
                  src={`${basePath}/MargossaLogo.png`} 
                  alt="Margossa Residence Logo"
                  width={140}
                  height={140}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  priority
                />
              </div>
            </a>
          </div>

          {/* Column 2: Reservations & Contact */}
          <div>
            <h4 className="text-[#8C6D3B] uppercase text-xs tracking-[0.2em] font-semibold mb-4">
              Reservations
            </h4>
            <p className="text-gray-900 font-serif text-xl font-medium mb-2">
              <a href="tel:0777772616" className="hover:text-amber-900 transition-colors">
                0777 772 616
              </a>
            </p>
            <p className="text-gray-800 text-sm mb-1">
              <a href="mailto:stay@margossaresidence.lk" className="hover:underline hover:text-amber-900 transition-colors">
                stay@margossaresidence.lk
              </a>
            </p>
            <p className="text-gray-700 text-sm">
              Kandy, Sri Lanka
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-[#8C6D3B] uppercase text-xs tracking-[0.2em] font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-800">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Socials & Connected Google Reviews Badge */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-[#8C6D3B] uppercase text-xs tracking-[0.2em] font-semibold mb-4">
              Follow us
            </h4>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6 justify-center sm:justify-start">
              {[
                { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
                { icon: InstagramIcon, label: 'Instagram', href: INSTAGRAM_ACCOUNT_URL },
                { icon: TwitterIcon, label: 'Twitter', href: 'https://twitter.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center transition-transform hover:scale-105"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Google Reviews Badge */}
            <div>
              <a 
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-none border border-gray-300 px-4 py-2 w-fit bg-white/60 shadow-xs hover:bg-white hover:border-gray-400 transition-all cursor-pointer group"
              >
                <div className="flex gap-0.5 text-yellow-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-800 font-semibold group-hover:text-amber-900">
                  Google Reviews
                </span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-300/50 mt-12 pt-8 text-center">
          <p className="text-xs text-gray-600 tracking-wider">
            © 2026 Margossa Residence Kandy. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}