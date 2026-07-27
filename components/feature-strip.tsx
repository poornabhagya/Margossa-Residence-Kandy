import { Crown, Mountain, Sofa, Heart, Compass } from 'lucide-react'

const FEATURES = [
  { icon: Crown, label: 'Boutique Residence Experience' },
  { icon: Mountain, label: 'Peaceful Hillside Setting' },
  { icon: Sofa, label: 'Thoughtfully Curated Interiors' },
  { icon: Heart, label: 'Personalised Sri Lankan Hospitality' },
  { icon: Compass, label: "Minutes from Kandy's Iconic Attractions" },
]

export function FeatureStrip() {
  return (
    <section className="bg-[#E3E5D8] py-20 text-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Subtle Title & Tagline */}
        <span className="block text-xs tracking-[0.25em] text-gray-700 uppercase mb-2">
         ESSENCE OF MARGOSSA
        </span>
        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-14">
          Thoughtfully Curated for Your Complete Serenity
        </h2>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6">
          {FEATURES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center group last:col-span-2 md:last:col-span-1"
            >
              <Icon 
                className="w-8 h-8 text-gray-800 mb-4 stroke-[1.2] transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="font-serif text-sm md:text-base text-gray-900 leading-snug max-w-[12rem] mx-auto block">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
