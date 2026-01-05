"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ActivitiesSection from "@/components/ActivitiesSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <ActivitiesSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
