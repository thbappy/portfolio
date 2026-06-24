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
        <div className="profile-img-container">
          <img
            src={personalInfo.profileImageUrl}
            alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
            className="profile-img"
            width={250}
            height={250}
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
