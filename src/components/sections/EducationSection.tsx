"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import {
  education,
  languages,
  interests,
  icons,
} from "@/data/portfolio-data";

/**
 * Education + Languages + Interests section.
 */
export default function EducationSection() {
  const revealRef = useScrollReveal<HTMLElement>(0.5);

  return (
    <section
      id="education"
      ref={revealRef}
      className="flex flex-col md:flex-row gap-12 mb-24 scroll-mt-24"
    >
      {/* Education Column */}
      <div className="flex-1">
        <SectionHeading title="Education" />

        <div className="space-y-6">
          {education.map((edu) => {
            const borderColor =
              edu.accentColor === "teal"
                ? "border-l-teal-500"
                : "border-l-blue-500";
            const textColor =
              edu.accentColor === "teal"
                ? "text-teal-400"
                : "text-blue-400";

            return (
              <GlassCard
                key={edu.degree}
                className={`p-6 border-l-4 ${borderColor}`}
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className={`${textColor} font-medium`}>
                  {edu.institution}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Languages & Interests Column */}
      <div className="w-full md:w-1/3 flex flex-col gap-6 pt-0 md:pt-20">
        {/* Languages */}
        <GlassCard className="p-6 text-center h-full flex flex-col justify-center">
          <FontAwesomeIcon
            icon={icons.faLanguage}
            className="text-3xl text-teal-400 mb-4 mx-auto w-8 h-8"
          />
          <h3 className="text-lg font-bold mb-3">Languages</h3>
          {languages.map((lang) => (
            <p key={lang.name} className="text-gray-300 mt-2 first:mt-0">
              {lang.name}{" "}
              <span
                className={`text-xs ${lang.colorClass} border px-2 py-0.5 rounded-full ml-1`}
              >
                ({lang.level})
              </span>
            </p>
          ))}
        </GlassCard>

        {/* Interests */}
        <GlassCard className="p-6 text-center h-full flex flex-col justify-center">
          <FontAwesomeIcon
            icon={icons.faHeart}
            className="text-3xl text-blue-400 mb-4 mx-auto w-8 h-8"
          />
          <h3 className="text-lg font-bold mb-3">Interests</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-xs bg-gray-800 border border-gray-600 px-3 py-1.5 rounded-full text-gray-300 shadow-inner"
              >
                {interest}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
