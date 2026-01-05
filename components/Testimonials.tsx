"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react";
import { createAvatar } from '@dicebear/core';
import { bigSmile } from '@dicebear/collection';
import RevealOnScroll from "./RevealOnScroll";

const testimonials = [
    {
        name: "Sarah M.",
        role: "Parent",
        content: "My kids absolutely loved the new Laser Tag sessions! They haven't stopped talking about it since they got home.",
        rating: 5,
    },
    {
        name: "James P.",
        role: "Parent",
        content: "The Glow Dodgeball was a massive hit. My son said it was the highlight of his week. Great organization!",
        rating: 3,
    },
    {
        name: "Emily R.",
        role: "Parent",
        content: "The variety of activities is amazing. It's great to see them trying new things like Pickleball and Lacrosse.",
        rating: 4,
    },
    {
        name: "David L.",
        role: "Parent",
        content: "Super Sessions has been a game-changer for our school holidays. The kids come home exhausted and happy!",
        rating: 5,
    },
    {
        name: "Jessica W.",
        role: "Parent",
        content: "I was impressed by the professional staff and the range of unique activities. RC Cars was a big favorite!",
        rating: 4,
    },
    {
        name: "Michael B.",
        role: "Parent",
        content: "Finally, a holiday camp that offers something different. My daughter loved the Mini Golf and the team spirit.",
        rating: 5,
    },
    {
        name: "Sophie K.",
        role: "Parent",
        content: "The booking process was seamless, and the activities were top-notch. Highly recommend for active kids.",
        rating: 5,
    },
    {
        name: "Thomas H.",
        role: "Parent",
        content: "My son is usually shy, but he jumped right into the Lacrosse sessions. The coaches are fantastic at including everyone.",
        rating: 4,
    },
    {
        name: "Rachel G.",
        role: "Parent",
        content: "Great value for money. The kids are supervised well and get to experience so many different sports in one place.",
        rating: 5,
    },
    {
        name: "Daniel S.",
        role: "Parent",
        content: "The energy at these sessions is incredible. It's the only camp my kids actually ask to go back to.",
        rating: 3,
    },
    {
        name: "Olivia F.",
        role: "Parent",
        content: "I love that they focus on teamwork and strategy in games like Laser Tag. It's more than just running around.",
        rating: 4,
    },
    {
        name: "William J.",
        role: "Parent",
        content: "Pickleball was a surprise hit! Now the whole family wants to play. Thanks for introducing us to it.",
        rating: 5,
    },
    {
        name: "Chloe D.",
        role: "Parent",
        content: "The facilities are excellent and the variety of 'Super Sessions' keeps things fresh every day.",
        rating: 5,
    },
    {
        name: "Andrew T.",
        role: "Parent",
        content: "Safe, fun, and engaging. Exactly what we were looking for in a holiday program.",
        rating: 4,
    },
    {
        name: "Megan C.",
        role: "Parent",
        content: "My twins had a blast. They loved the competitive but friendly atmosphere of the Glow Dodgeball.",
        rating: 5,
    },
    {
        name: "Robert E.",
        role: "Parent",
        content: "A well-run program with enthusiastic staff. The RC Cars racing was particularly well-organized.",
        rating: 4,
    },
    {
        name: "Lauren V.",
        role: "Parent",
        content: "It's wonderful to see a camp that balances traditional sports with modern, high-energy activities.",
        rating: 5,
    },
    {
        name: "Christopher N.",
        role: "Parent",
        content: "The kids learned new skills and made great friends. We'll definitely be back for the next session.",
        rating: 5,
    },
    {
        name: "Hannah B.",
        role: "Parent",
        content: "Excellent communication from the team. My daughter felt safe and had the time of her life.",
        rating: 3,
    },
    {
        name: "Matthew Y.",
        role: "Parent",
        content: "The 'Super Sessions' really live up to the name. High energy, high fun, and very well managed.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // const getVisibleTestimonials = () => {
    //     const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    //     const nextIndex = (currentIndex + 1) % testimonials.length;
    //     return [
    //         { ...testimonials[prevIndex], id: prevIndex, position: "left" },
    //         { ...testimonials[currentIndex], id: currentIndex, position: "center" },
    //         { ...testimonials[nextIndex], id: nextIndex, position: "right" },
    //     ];
    // };

    return (
        <section id="testimonials" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <RevealOnScroll className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
                        WHAT PARENTS SAY
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                    <div
                        className="relative max-w-6xl mx-auto h-[400px] flex items-center justify-center"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative w-full h-full">
                            {testimonials.map((testimonial, index) => {
                                // Calculate relative position
                                // We need to handle the wrap-around logic to find the shortest distance
                                let position = "hidden";
                                let x = "0%";
                                let scale = 0.8;
                                let opacity = 0;
                                let zIndex = 0;

                                const length = testimonials.length;

                                // Calculate distance from current index
                                // We want to know if this index is the "current", "previous" (left), or "next" (right)
                                // We handle wrapping so that index 0 is "next" to index length-1

                                if (index === currentIndex) {
                                    position = "center";
                                    x = "0%";
                                    scale = 1.05;
                                    opacity = 1;
                                    zIndex = 20;
                                } else if (index === (currentIndex - 1 + length) % length) {
                                    position = "left";
                                    x = "-85%";
                                    scale = 0.9;
                                    opacity = 0.4;
                                    zIndex = 10;
                                } else if (index === (currentIndex + 1) % length) {
                                    position = "right";
                                    x = "85%";
                                    scale = 0.9;
                                    opacity = 0.4;
                                    zIndex = 10;
                                } else {
                                    // For hidden items, we want them to stay "behind" the visible ones
                                    // or transition smoothly if they are entering/leaving
                                    // But since we only show 3, we can just hide the rest
                                    // To allow smooth entry, we might need to position them just off-screen
                                    // based on where they would come from.

                                    // If this item will be "left" next (it's currently left-1), it should be at -100%
                                    // If this item will be "right" next (it's currently right+1), it should be at 100%

                                    // However, simpler logic: just hide them. 
                                    // The issue is the "entry" animation.
                                    // When an item becomes "right", it switches from "hidden" to "right".
                                    // We want it to slide in from 100%.

                                    // Let's check if it was previously "right+1" or "left-1".
                                    // Actually, we can just position all "other" items at 0% with opacity 0?
                                    // No, that would slide from center.

                                    // Let's try to determine "side".
                                    // If index is in the "right half" relative to current, put it at 100%.
                                    // If index is in the "left half", put it at -100%.

                                    const diff = (index - currentIndex + length) % length;
                                    if (diff < length / 2) {
                                        // It's on the right side
                                        x = "100%";
                                    } else {
                                        // It's on the left side
                                        x = "-100%";
                                    }
                                    opacity = 0;
                                    scale = 0.8;
                                    zIndex = 0;
                                }

                                return (
                                    <motion.div
                                        key={index}
                                        initial={false}
                                        animate={{
                                            x,
                                            scale,
                                            opacity,
                                            zIndex,
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute top-0 left-0 right-0 mx-auto w-[90%] md:w-[600px] bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100"
                                        style={{
                                            pointerEvents: opacity === 0 ? "none" : "auto"
                                        }}
                                    >
                                        <div className="flex gap-1 mb-4">
                                            {(() => {
                                                const stars = [];
                                                const rating = testimonial.rating || 5;
                                                const fullStars = Math.floor(rating);
                                                const hasHalfStar = rating % 1 !== 0;

                                                for (let i = 0; i < 5; i++) {
                                                    if (i < fullStars) {
                                                        stars.push(<Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />);
                                                    } else if (i === fullStars && hasHalfStar) {
                                                        stars.push(<StarHalf key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />);
                                                    } else {
                                                        stars.push(<Star key={i} className="w-5 h-5 fill-gray-200 text-gray-200" />);
                                                    }
                                                }
                                                return stars;
                                            })()}
                                        </div>
                                        <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200"
                                                dangerouslySetInnerHTML={{
                                                    __html: createAvatar(bigSmile, {
                                                        seed: testimonial.name,
                                                        backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"],
                                                    }).toString()
                                                }}
                                            />
                                            <div>
                                                <p className="font-bold text-blue-900">{testimonial.name}</p>
                                                <p className="text-slate-500 text-sm">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className={`absolute cursor-pointer left-4 md:left-10 top-[30%] z-30 p-3 bg-white rounded-full shadow-lg text-blue-900 hover:bg-blue-50 transition-all duration-300 ${isPaused ? "opacity-100 translate-x-0 -translate-y-1/2" : "opacity-0 -translate-x-4 -translate-y-1/2"}`}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className={`absolute cursor-pointer right-4 md:right-10 top-[30%] z-30 p-3 bg-white rounded-full shadow-lg text-blue-900 hover:bg-blue-50 transition-all duration-300 ${isPaused ? "opacity-100 translate-x-0 -translate-y-1/2" : "opacity-0 translate-x-4 -translate-y-1/2"}`}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
}
