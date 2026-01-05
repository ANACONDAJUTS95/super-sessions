"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Placeholder for Logo - using text for now or we can use an image from brand kit */}
                    <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                        SUPER<span className="text-orange-500">SESSIONS</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Activities", "About", "Testimonials"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? "text-slate-700" : "text-white/90"
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                    <Button variant={isScrolled ? "primary" : "secondary"} href="#book">
                        Book Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-slate-900" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-4"
                >
                    {["Activities", "About", "Testimonials"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-700 font-medium text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <Button href="#book" className="w-full">
                        Book Now
                    </Button>
                </motion.div>
            )}
        </nav>
    );
}
