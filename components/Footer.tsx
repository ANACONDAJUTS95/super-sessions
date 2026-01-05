import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
// import RevealOnScroll from "./RevealOnScroll";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-6">
                {/* <RevealOnScroll> */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black mb-2">SUPER<span className="text-orange-500">SESSIONS</span></h3>
                        <p className="text-blue-200">Making holidays unforgettable.</p>
                    </div>

                    <div className="flex flex-wrap gap-6 items-center justify-between w-[50%]">
                        <Image
                            src="/brand-kit/Logos/2. Holiday Camps/Holiday-Camps-logo-2025-03.png"
                            alt="Holiday Camps"
                            width={120}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                        <Image
                            src="/brand-kit/Logos/2. Holiday Camps/1. Create Crew/Create-Crew-logo-2025-01.png"
                            alt="Create Crew"
                            width={120}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                        <Image
                            src="/brand-kit/Logos/2. Holiday Camps/2. Multi Sports Marvels/Mult-Sports-Marvel-logo-2025-01.png"
                            alt="Multi Sports Marvels"
                            width={120}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                        <Image
                            src="/brand-kit/Logos/2. Holiday Camps/3. Football Fanatics/Football-Fanatics-logo-2025-01.png"
                            alt="Football Fanatics"
                            width={120}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    <div className="flex gap-6">
                        <a href="https://www.facebook.com/schoolofplay.manc?locale=be_BY" className="hover:text-orange-400 transition-colors"><Facebook /></a>
                        <a href="https://www.instagram.com/schoolofplay.uk/" className="hover:text-orange-400 transition-colors"><Instagram /></a>
                        <a href="https://www.linkedin.com/company/school-of-play-mcr/" className="hover:text-orange-400 transition-colors"><Linkedin /></a>
                    </div>
                </div>

                <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
                    © {new Date().getFullYear()} Super Sessions. All rights reserved.
                </div>
                {/* </RevealOnScroll> */}
            </div>
        </footer>
    );
}
