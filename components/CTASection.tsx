"use client";

import RevealOnScroll from "./RevealOnScroll";
import BentoBox from "./BentoBox";

export default function CTASection() {
    return (
        <section id="book" className="relative py-32 overflow-hidden group">
            {/* Background Collage */}
            <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700">
                <BentoBox />
            </div>

            {/* Background Overlay */}
            <div className="absolute inset-0 z-10 bg-[#1c398e66]" />

            {/* Content */}
            <div className="container relative z-20 mx-auto px-6 text-center text-white">
                <RevealOnScroll className="text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight drop-shadow-sm">
                        READY FOR THE BEST <br className="hidden md:block" />
                        <span className="text-orange-500">HOLIDAY EVER?</span>
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-95 font-medium leading-relaxed drop-shadow-sm">
                        Spaces are filling up fast! Secure your spot in our Super Sessions today.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-orange-500 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 transform"
                    >
                        Book Now
                    </a>
                </RevealOnScroll>
            </div>
        </section>
    );
}
