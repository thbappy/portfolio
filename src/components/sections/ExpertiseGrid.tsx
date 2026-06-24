"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import {
  contactInfo,
  expertiseItems,
  icons,
} from "@/data/portfolio-data";

/**
 * Contact info card + expertise grid (4 cards).
 */
export default function ExpertiseGrid() {
  const revealRef = useScrollReveal<HTMLDivElement>(0.1);

  const accentColors: Record<string, string> = {
    teal: "bg-teal-500/20 text-teal-400 group-hover:bg-teal-500/20",
    blue: "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/20",
    purple: "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/20",
    pink: "bg-pink-500/20 text-pink-400 group-hover:bg-pink-500/20",
  };

  const blurColors: Record<string, string> = {
    teal: "bg-teal-500/10 group-hover:bg-teal-500/20",
    blue: "bg-blue-500/10 group-hover:bg-blue-500/20",
    purple: "bg-purple-500/10 group-hover:bg-purple-500/20",
    pink: "bg-pink-500/10 group-hover:bg-pink-500/20",
  };

  const iconColors: Record<string, string> = {
    teal: "text-teal-400",
    blue: "text-blue-400",
    purple: "text-purple-400",
    pink: "text-pink-400",
  };

  return (
    <div
      id="expertise"
      ref={revealRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 scroll-mt-24"
    >
      {/* Contact Info Card */}
      <GlassCard className="p-8">
        <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-6 text-teal-400 text-xl">
          <FontAwesomeIcon icon={icons.faAddressCard} className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={icons.faPhoneAlt}
              className="mt-1 text-teal-400 w-4 h-4"
            />
            <div className="flex flex-col">
              {contactInfo.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="hover:text-teal-400 transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </li>
          <li className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={icons.faEnvelope}
              className="text-teal-400 w-4 h-4"
            />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-teal-400 transition-colors break-all"
            >
              {contactInfo.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <FontAwesomeIcon
              icon={icons.faMapMarkerAlt}
              className="mt-1 text-teal-400 w-4 h-4"
            />
            <p>
              {contactInfo.address.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < contactInfo.address.length - 1 && <br />}
                </span>
              ))}
            </p>
          </li>
        </ul>
      </GlassCard>

      {/* Expertise Cards */}
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {expertiseItems.map((item) => (
          <GlassCard
            key={item.title}
            className="p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div
              className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl transition-all ${
                blurColors[item.accentColor]
              }`}
            />
            <FontAwesomeIcon
              icon={item.icon}
              className={`text-3xl mb-4 w-8 h-8 ${iconColors[item.accentColor]}`}
            />
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
