"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BaseModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function BaseModal({ children, isOpen, onClose }: BaseModalProps) {
    const [isHovered, setIsHovered] = useState(false);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-2 rounded-2xl shadow-2xl relative max-h-[95vh] overflow-hidden flex flex-col w-auto max-w-[95vw]"
                onClick={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence>
                    {isHovered && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm"
                        >
                            ✕
                        </motion.button>
                    )}
                </AnimatePresence>
                <div className="flex-1 overflow-auto">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
}