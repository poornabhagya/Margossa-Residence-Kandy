import { Camera, Video, Layers } from 'lucide-react'
import { basePath } from '@/lib/utils'

const INSTA_POSTS = [
  { id: 1, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/1.png`, type: "image", alt: "Hanthana Mountain view at Margossa Residence" },
  { id: 2, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/2.png`, type: "image", alt: "Temple of Tooth Relic experience" },
  { id: 3, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/3.png`, type: "image", alt: "Ceylon Tea tasting at Margossa" },
  { id: 4, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/4.png`, type: "image", alt: "Lush sanctuary forest walking trails" },
  { id: 5, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/5.png`, type: "image", alt: "Kandy Lake sunset stroll" },
  { id: 6, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/6.png`, type: "image", alt: "Kandy Gem gallery and craftsmanship" },
  { id: 7, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/7.png`, type: "image", alt: "Bahirawakanda Buddha Viewpoint" },
  { id: 8, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/8.png`, type: "image", alt: "Elephant Foundation sanctuary experience" },
  { id: 9, image: `${basePath}/Margossa-Residence-Kandy/instaImgs/9.png`, type: "image", alt: "Royal Palace Museum heritage artifacts" },
  { id: 10, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600", type: "video", alt: "Royal Botanical Gardens flora walk" }
]

export function SocialFeed() {
  return (
    <section id="gallery" className="bg-[#FAF9F6] py-20 w-full" suppressHydrationWarning>
      
      {/* 2-Column Flex Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 gap-4">
        <div>
          <span className="block text-xs tracking-[0.25em] text-gray-500 uppercase mb-2 font-semibold">
            LIFE AT MARGOSSA
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 uppercase tracking-wide">
            MOMENTS FROM THE HILLS
          </h2>
        </div>
        <div>
          <a
            href="https://www.instagram.com/margossaresidencekandy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-base md:text-lg text-gray-700 hover:text-amber-800 transition-colors cursor-pointer font-medium tracking-wide"
          >
            @margossa.residence
          </a>
        </div>
      </div>

      {/* Grid Display & Cards (5 Columns x 2 Rows) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-7xl mx-auto px-4 sm:px-6">
        {INSTA_POSTS.map((post, idx) => {
          const isLast = idx === INSTA_POSTS.length - 1

          return (
            <a
              key={post.id}
              href="https://www.instagram.com/margossaresidencekandy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-none block bg-gray-100 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Top-Right Badge Icons (for non-last cards) */}
              {!isLast && post.type === 'video' && (
                <div className="absolute top-2.5 right-2.5 bg-black/50 text-white rounded-sm p-1.5 z-10 flex items-center justify-center backdrop-blur-xs">
                  <Video className="size-3.5 fill-current text-white" />
                </div>
              )}
              {!isLast && post.type === 'carousel' && (
                <div className="absolute top-2.5 right-2.5 bg-black/50 text-white rounded-sm p-1.5 z-10 flex items-center justify-center backdrop-blur-xs">
                  <Layers className="size-3.5 text-white" />
                </div>
              )}

              {/* Standard Hover Overlay (for non-last cards) */}
              {!isLast && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Camera className="size-6 text-white" strokeWidth={1.5} />
                </div>
              )}

              {/* Special Overlay for 10th (Last) Card */}
              {isLast && (
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors flex items-center justify-center p-3 text-center">
                  <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-widest leading-snug drop-shadow-sm">
                    SEE MORE ON INSTAGRAM →
                  </span>
                </div>
              )}
            </a>
          )
        })}
      </div>

    </section>
  )
}
