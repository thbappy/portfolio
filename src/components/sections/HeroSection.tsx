"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GradientButton from "@/components/ui/GradientButton";
import {
  personalInfo,
  socialLinks,
  icons,
} from "@/data/portfolio-data";
import { useEffect, useRef, useState } from "react";

/**
 * Hero section — profile image with spinning border,
 * typewriter subtitle, CTA buttons, social links.
 */
export default function HeroSection({
  onOpenContact,
}: {
  onOpenContact: () => void;
}) {
  const revealRef = useScrollReveal<HTMLElement>(0);
  const [typewriterText, setTypewriterText] = useState("");
  const typewriterDone = useRef(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Typewriter effect for title
  useEffect(() => {
    if (typewriterDone.current) return;
    const text = personalInfo.title;
    let i = 0;
    const interval = setInterval(() => {
      setTypewriterText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        typewriterDone.current = true;
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      id="home"
      ref={revealRef}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32 pt-10 scroll-mt-24"
    >
      {/* Text Content */}
      <div className="flex-1 space-y-6">
        <h2 className="text-xl md:text-2xl text-teal-400 font-semibold tracking-wider uppercase">
          Hello, I am
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          {personalInfo.firstName} <br />
          <span className="text-gradient">{personalInfo.lastName}</span>
        </h1>
        <h3 className="text-2xl md:text-3xl text-gray-400 font-light">
          {typewriterText}
          <span className="animate-pulse text-teal-400">|</span>
        </h3>
        <p className="text-gray-400 max-w-xl text-lg leading-relaxed mt-4">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons + Social */}
        <div className="flex flex-wrap gap-4 pt-6">
          <GradientButton onClick={onOpenContact}>
            <FontAwesomeIcon
              icon={icons.faPaperPlane}
              className="mr-2 w-4 h-4"
            />
            Contact Me
          </GradientButton>

          <GradientButton
            variant="outline"
            href={personalInfo.cvUrl}
            download="Md_Tanbeer_Hasan_CV.pdf"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={icons.faDownload}
              className="mr-2 w-4 h-4"
            />
            Download CV
          </GradientButton>

          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`w-12 h-12 flex items-center justify-center border rounded-full transition-all duration-300 hover:shadow-lg ${
                link.colorClass ||
                "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:shadow-gray-500/30"
              }`}
            >
              <FontAwesomeIcon icon={link.icon} className="text-xl w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex-shrink-0 flex justify-center items-center">
        <div 
          className="profile-img-container cursor-zoom-in hover:scale-105 active:scale-95 transition-all duration-300 group"
          onClick={() => setIsZoomed(true)}
          title="Click to view in 3D Zoom"
        >
          <img
            src={personalInfo.profileImageUrl}
            alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
            className="profile-img group-hover:brightness-110 transition-all duration-300"
            width={250}
            height={250}
            loading="eager"
          />
        </div>
      </div>

      {/* 3D Zoomed Profile Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl transition-all duration-300 zoom-modal-overlay"
          onClick={() => setIsZoomed(false)}
        >
          {/* 3D Glass Frame Container */}
          <div
            className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] rounded-2xl p-6 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-white/10 shadow-2xl flex items-center justify-center group pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
            style={{
              perspective: "1000px",
            }}
          >
            {/* Close button inside the card's top right corner */}
            <button
              className="absolute -top-3 -right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/90 border border-white/20 text-white text-xl hover:bg-red-500/80 hover:border-red-500/80 transition-all duration-300 hover:rotate-90 z-50 cursor-pointer shadow-lg"
              onClick={() => setIsZoomed(false)}
              title="Close Zoom"
            >
              ×
            </button>
            {/* Inner rotating glowing rings */}
            <div className="absolute inset-2 rounded-2xl border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-2xl border border-dashed border-emerald-400/30 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Glowing spot background */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />

            {/* The Image inside a 3D Tilt container */}
            <div
              className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/10 bg-black/60 shadow-inner flex items-center justify-center transition-all duration-300 ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(50px)",
              }}
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const tiltX = (y / (rect.height / 2)) * -25; // max 25 degrees
                const tiltY = (x / (rect.width / 2)) * 25;   // max 25 degrees

                el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(80px)`;
                el.style.boxShadow = `${-tiltY * 1.5}px ${tiltX * 1.5}px 35px rgba(0, 255, 136, 0.3)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(50px)";
                el.style.boxShadow = "none";
              }}
            >
              <img
                src={personalInfo.profileImageUrl}
                alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500"
                style={{
                  objectPosition: "50% 15%",
                  transform: "scale(1.02)",
                }}
              />

              {/* Extra 3D floating tag */}
              <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 py-2 px-4 rounded-full bg-black/80 border border-teal-500/30 text-teal-400 text-xs sm:text-sm font-semibold tracking-wider shadow-lg select-none"
                style={{
                  transform: "translateZ(40px)",
                }}
              >
                Md. Tanbeer Hasan
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
