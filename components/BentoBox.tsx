"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
    // Glow Dodgeball
    "/documentation-images/glow-in-the-dark-dodgeball/DSC00006.JPG",
    "/documentation-images/glow-in-the-dark-dodgeball/DSC09933.JPG",
    "/documentation-images/glow-in-the-dark-dodgeball/DSC00011.JPG",
    // RC Cars
    "/documentation-images/rc-cars/DSC09836.JPG",
    "/documentation-images/rc-cars/DSC09797.JPG",
    "/documentation-images/rc-cars/DSC09819.JPG",
    // Laser Tag
    "/documentation-images/laser-tag/DSC00127.JPG",
    "/documentation-images/laser-tag/DSC00128.JPG",
    // Activities
    "/documentation-images/pickleball/mini-golf.png",
    "/documentation-images/pickleball/lacrosse.png",
    "/documentation-images/pickleball/pickleball.png",
    // Favourites
    "/images/favourite-photos/DSC01469.JPG",
    "/images/favourite-photos/DSC01500.JPG",
    "/images/favourite-photos/DSC01582.JPG",
    "/images/favourite-photos/DSC04217-2.JPG",
    "/images/favourite-photos/DSC08186.JPG",
    "/images/favourite-photos/sop_1.149.1.jpg",
];

function BentoGridItem({ className, index }: { className: string; index: number }) {
    // Start with a distributed index to show variety immediately
    // Use an initial deterministic index for hydration match, then randomize or cycle?
    // We'll just stick to a stable stride to ensure no duplicates at start if possible.
    const initialIndex = (index * 3) % images.length;
    const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

    useEffect(() => {
        // Random delay before the first change and starting the interval
        // This creates the "randomly changing" effect
        const randomDelay = Math.random() * 5000; // 0-5s delay

        // Timer to start the interval loop
        const startTimer = setTimeout(() => {
            // First update
            setCurrentImageIndex((prev) => (prev + 1) % images.length);

            // Start regular 6-second interval
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 6000);

            // Cleanup interval when component unmounts (or effect re-runs)
            return () => clearInterval(interval);

        }, randomDelay);

        return () => clearTimeout(startTimer);
    }, []);

    const src = images[currentImageIndex];

    return (
        <div className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-900 ${className}`}>
            <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                    key={`${index}-${currentImageIndex}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={src}
                        alt="Camp activity"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority={index < 2} // Prioritize largest images
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default function BentoBox() {
    // Grid Layout Configuration (7 items for 4x3 grid)
    // Ensures complete coverage with no gaps
    const gridLayouts = [
        "col-span-2 row-span-2", // 1. Large Box (Top-Left)
        "col-span-1 row-span-2", // 2. Tall Box (Top-Left-Center)
        "col-span-1 row-span-1", // 3. Small Box (Top-Right)
        "col-span-1 row-span-1", // 4. Small Box (Mid-Right) - Fills the gap
        "col-span-2 row-span-1", // 5. Wide Box (Bottom-Left)
        "col-span-1 row-span-1", // 6. Small Box (Bottom-Center)
        "col-span-1 row-span-1", // 7. Small Box (Bottom-Right)
    ];

    return (
        <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[200px] gap-2 p-2 -my-10 transform scale-105">
            {gridLayouts.map((layout, i) => (
                <BentoGridItem key={i} index={i} className={layout} />
            ))}
        </div>
    );
}