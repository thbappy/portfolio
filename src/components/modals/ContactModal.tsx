"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactModalLinks, icons } from "@/data/portfolio-data";
import { useCallback, useEffect, useRef } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Contact modal with 3D tilt effect, spinning globe icon,
 * and animated link items.
 */
export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // 3D tilt on modal card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "transform 0.1s ease-out";
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRot = ((y / rect.height) - 0.5) * -20;
    const yRot = ((x / rect.width) - 0.5) * 20;
    card.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale(1) translateY(0)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition =
      "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0)";
  }, []);

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      id="contact-modal"
      className={isOpen ? "active" : ""}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Contact modal"
    >
      <div
        ref={cardRef}
        className="modal-glass-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close contact modal"
        >
          <FontAwesomeIcon icon={icons.faTimes} className="w-3.5 h-3.5" />
        </button>

        {/* Spinning 3D Globe */}
        <div className="spinning-3d-icon-container">
          <FontAwesomeIcon
            icon={icons.faGlobe}
            className="spinning-3d-icon"
          />
        </div>

        <h3
          className="text-2xl font-bold text-center mb-6 text-white"
          style={{ transform: "translateZ(25px)" }}
        >
          Let&apos;s Connect
        </h3>

        {/* Links */}
        <div
          className="flex flex-col gap-2"
          style={{ transformStyle: "preserve-3d" }}
        >
          {contactModalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={
                link.href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="modal-link-item"
            >
              <FontAwesomeIcon
                icon={link.icon}
                className={`w-5 h-5 ${link.iconColorClass || ""}`}
              />
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider">
                  {link.label}
                </span>
                <span className="font-semibold">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
