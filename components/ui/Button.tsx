"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    href?: string;
}

export function Button({
    children,
    onClick,
    variant = "primary",
    className = "",
    href,
}: ButtonProps) {
    const baseStyles = "px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30",
        secondary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30",
        outline: "border-2 border-white text-white hover:bg-white hover:text-blue-900",
    };

    const Component = href ? motion.a : motion.button;

    return (
        // @ts-ignore - framer motion types with 'a' tag can be tricky
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </Component>
    );
}
