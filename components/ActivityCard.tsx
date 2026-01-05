"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ActivityCardProps {
    title: string;
    description: string;
    image: string;
    index: number;
    onClick: () => void;
}

export default function ActivityCard({ title, description, image, index, onClick }: ActivityCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl shadow-xl bg-white h-[400px] cursor-pointer"
            onClick={onClick}
        >
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white/90 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
