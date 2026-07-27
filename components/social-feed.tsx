import Image from 'next/image'
import { Camera, Play, Layers } from 'lucide-react'
import { basePath } from '@/lib/utils'

const POSTS = [
  { src: `${basePath}/social-1.png`, alt: 'Breakfast tray with tropical fruit on a villa terrace', type: 'carousel' },
  { src: `${basePath}/social-2.png`, alt: 'Infinity plunge pool overlooking the hills', type: 'reel' },
  { src: `${basePath}/social-3.png`, alt: 'Villa bedroom detail with cream linens and flowers', type: 'image' },
  { src: `${basePath}/social-4.png`, alt: 'Path through a lush tropical garden', type: 'image' },
  { src: `${basePath}/social-5.png`, alt: 'Misty sunrise over forested mountains', type: 'reel' },
  { src: `${basePath}/social-6.png`, alt: 'Candlelit alfresco dinner on a terrace', type: 'carousel' },
  { src: `${basePath}/social-7.png`, alt: 'Outdoor jacuzzi on a private villa deck', type: 'image' },
  { src: `${basePath}/social-8.png`, alt: 'Traditional Kandyan brass and wood decor accent', type: 'image' },
  { src: `${basePath}/welcome-villa.png`, alt: 'Villa exterior surrounded by tropical greenery', type: 'carousel' },
  { src: `${basePath}/hero-3.png`, alt: 'Infinity plunge pool at sunrise', type: 'reel' },
]

export function SocialFeed() {
  return (
    <section id="gallery" className="bg-white py-20 md:py-24 w-full">
      
      {/* 2-Column Flex Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 max-w-7xl mx-auto px-5 md:px-8 gap-4">
        <div>
          <span className="block text-xs tracking-[0.25em] text-gray-500 uppercase mb-1">
            LIFE AT MARGOSSA
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-gray-900 uppercase">
            Moments from the Hills
          </h2>
        </div>
        <div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-sm md:text-base text-gray-600 hover:text-amber-800 transition-colors cursor-pointer"
          >
            @margossa.residence
          </a>
        </div>
      </div>

      {/* Grid Structure */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-7xl mx-auto px-5 md:px-8">
        {POSTS.map((post, idx) => (
          <a
            key={idx}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-sm block bg-gray-100"
          >
            <Image
              src={post.src || '/placeholder.svg'}
              alt={post.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Top-Right Badge Indicators */}
            {post.type === 'reel' && (
              <div className="absolute top-2.5 right-2.5 bg-black/45 text-white rounded-md p-1 z-10 flex items-center justify-center backdrop-blur-xs">
                <Play className="size-3 fill-current text-white" />
              </div>
            )}
            {post.type === 'carousel' && (
              <div className="absolute top-2.5 right-2.5 bg-black/45 text-white rounded-md p-1.5 z-10 flex items-center justify-center backdrop-blur-xs">
                <Layers className="size-3 text-white" />
              </div>
            )}

            {/* Subtle Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Camera className="size-6 text-white" strokeWidth={1.5} />
            </div>
          </a>
        ))}
      </div>

    </section>
  )
}
