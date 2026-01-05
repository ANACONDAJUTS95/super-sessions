"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/favourite-photos/DSC04217-2.JPG')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-blue-900/60 to-slate-50" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container mx-auto px-6 text-center text-white"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 drop-shadow-2xl">
                        UNLEASH THE <br />
                        <span className="text-orange-400 drop-shadow-2xl">
                            SUPER SESSIONS
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light text-blue-50">
                        Experience the ultimate holiday camp adventure with our new high-energy activities!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Button href="#book" className="w-full md:w-auto text-xl px-10 py-4">
                            Book Your Spot <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" href="#activities" className="w-full md:w-auto text-xl px-10 py-4">
                            Explore Activities
                        </Button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
