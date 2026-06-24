"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/layout/CustomCursor";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ExpertiseGrid from "@/components/sections/ExpertiseGrid";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactModal from "@/components/modals/ContactModal";

// Lazy-load Three.js for performance (heavy library)
const ParticleBackground = dynamic(
  () => import("@/components/three/ParticleBackground"),
  { ssr: false }
);

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading screen — hide after page hydrates
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`loading-screen ${!loading ? "hidden" : ""}`}>
        <div className="loading-logo">TH</div>
        <div className="loading-bar" />
      </div>

      {/* 3D Particle Background */}
      <ParticleBackground />

      {/* Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-24 max-w-6xl mt-12 md:mt-16">
        <HeroSection onOpenContact={() => setContactOpen(true)} />
        <ExpertiseGrid />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <EducationSection />
        <Footer />
      </main>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
