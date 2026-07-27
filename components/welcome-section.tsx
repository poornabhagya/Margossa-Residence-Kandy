export function WelcomeSection() {
  return (
    <section id="welcome" className="bg-white py-20 w-full">
      <div className="px-6 max-w-4xl mx-auto text-center">
        {/* Sub-heading */}
        <span className="block text-xs tracking-[0.2em] text-gray-500 uppercase mb-3">
          MARGOSSA RESIDENCE. KANDY
        </span>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-gray-900 uppercase mb-8">
          YOUR HILLSIDE RETREAT BEGINS HERE
        </h2>

        {/* Decorative Divider */}
        <div className="w-16 h-[1px] bg-gray-300 mx-auto mb-8" />

        {/* Highlight Paragraph */}
        <p className="font-serif text-lg md:text-xl text-gray-800 leading-relaxed mb-6 max-w-3xl mx-auto">
          Nestled in the peaceful hills of Kandy, Margossa Residence embodies the belief that true luxury is found in thoughtful design, genuine hospitality, and the freedom to experience each destination at your own pace.
        </p>

        {/* Body Paragraph */}
        <p className="text-sm text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
          Margossa Residence offers an intimate boutique retreat where contemporary architecture meets authentic Sri Lankan warmth. Every space has been carefully designed to create a sense of comfort, elegance, and tranquillity, with handcrafted details, panoramic views, and personalised service that make every stay feel effortless. Located just minutes from Kandy's iconic cultural landmarks, Margossa provides the perfect balance between peaceful seclusion and convenient exploration, inviting guests to relax, reconnect, and discover the timeless beauty of Sri Lanka's hill capital.
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="#residence"
            className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 rounded-none"
          >
            About Margossa
          </a>
        </div>
      </div>
    </section>
  )
}
