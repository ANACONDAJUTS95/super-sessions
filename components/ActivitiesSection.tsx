"use client";

import { useState } from "react";
import Image from "next/image";
import ActivityCard from "./ActivityCard";
import RevealOnScroll from "./RevealOnScroll";
import BaseModal from "./ui/BaseModal";

const activities = [
    {
        title: "Laser Tag",
        description: "Gear up for an adrenaline-pumping mission! Strategy and teamwork meet high-tech fun.",
        image: "/documentation-images/laser-tag/DSC00127.JPG",
    },
    {
        title: "Pickleball",
        description: "Serve, volley, and score in the fastest-growing sport that combines tennis, badminton, and ping-pong.",
        image: "/documentation-images/pickleball/pickleball.png",
    },
    {
        title: "RC Cars",
        description: "Take control and race to the finish line with our high-speed radio-controlled cars.",
        image: "/documentation-images/rc-cars/DSC09836.JPG",
    },
    {
        title: "Glow Dodgeball",
        description: "A classic favorite with a neon twist! Dodge, duck, and dive in the dark.",
        image: "/documentation-images/glow-in-the-dark-dodgeball/DSC00006.JPG",
    },
    {
        title: "Mini Golf",
        description: "Putt your way to victory on our challenging and fun mini-golf course.",
        image: "/documentation-images/pickleball/mini-golf.png",
    },
    {
        title: "Lacrosse",
        description: "Discover the thrill of this fast-paced team sport. Perfect for beginners and pros alike.",
        image: "/documentation-images/pickleball/lacrosse.png",
    },
];

export default function ActivitiesSection() {
    const [selectedActivity, setSelectedActivity] = useState<{ title: string; image?: string } | null>(null);

    const activityImages: Record<string, string> = {
        "Glow Dodgeball": "/images/benefits/51.jpg",
        "RC Cars": "/images/benefits/52.jpg",
        "Laser Tag": "/images/benefits/53.jpg",
        "Mini Golf": "/images/benefits/54.jpg",
    };

    const handleActivityClick = (activity: typeof activities[0]) => {
        setSelectedActivity({
            title: activity.title,
            image: activityImages[activity.title],
        });
    };

    return (
        <section id="activities" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <RevealOnScroll className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">
                        NEW SUPER SESSIONS
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Get ready for non-stop action with our latest additions to the camp lineup.
                    </p>
                </RevealOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <ActivityCard
                            key={index}
                            {...activity}
                            index={index}
                            onClick={() => handleActivityClick(activity)}
                        />
                    ))}
                </div>
            </div>

            <BaseModal
                isOpen={!!selectedActivity}
                onClose={() => setSelectedActivity(null)}
            >
                {selectedActivity && (
                    <div className="flex flex-col items-center justify-center h-full sm:min-w-[300px]">
                        {selectedActivity.image ? (
                            <div className="relative h-[85vh] aspect-[1414/2000] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={selectedActivity.image}
                                    alt={selectedActivity.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-height: 85vh) 100vw"
                                />
                            </div>
                        ) : (
                            <div className="w-[80vw] max-w-md aspect-[1414/2000] bg-slate-100 rounded-xl flex items-center justify-center shadow-inner">
                                <p className="text-3xl font-bold text-slate-400">Coming Soon</p>
                            </div>
                        )}
                    </div>
                )}
            </BaseModal>
        </section>
    );
}
