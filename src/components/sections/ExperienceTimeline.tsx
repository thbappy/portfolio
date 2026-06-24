"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { experiences } from "@/data/portfolio-data";

/**
 * Work experience timeline — alternating left/right layout on desktop,
 * single-column with left border on mobile.
 */
export default function ExperienceTimeline() {
  const revealRef = useScrollReveal<HTMLElement>(0.3);

  return (
    <section id="experience" ref={revealRef} className="mb-24 scroll-mt-24">
      <SectionHeading title="Work Experience" />

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:to-blue-500">
        {experiences.map((exp, i) => {
          const isTeal = exp.accentColor === "teal";
          const dotColor = isTeal ? "bg-teal-500" : "bg-blue-500";
          const badgeBg = isTeal ? "bg-teal-500/10" : "bg-blue-500/10";
          const badgeText = isTeal ? "text-teal-400" : "text-blue-400";

          return (
            <div
              key={`${exp.company}-${exp.dateRange}`}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] ${dotColor} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}
              >
                <FontAwesomeIcon icon={exp.icon} className="text-sm w-3.5 h-3.5" />
              </div>

              {/* Content Card */}
              <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h3 className="font-bold text-xl text-white">{exp.title}</h3>
                  <span
                    className={`${badgeText} text-sm font-semibold ${badgeBg} px-3 py-1 rounded-full w-max`}
                  >
                    {exp.dateRange}
                  </span>
                </div>
                <h4 className="text-lg text-gray-300 mb-2 font-semibold">
                  {exp.company}
                </h4>
                <p className="text-gray-400 text-sm">
                  <FontAwesomeIcon
                    icon={exp.locationIcon}
                    className="mr-1 w-3 h-3"
                  />
                  {exp.location}
                </p>
              </GlassCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
