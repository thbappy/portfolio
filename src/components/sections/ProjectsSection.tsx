"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/portfolio-data";

/**
 * Featured projects grid — 6 project cards with unique gradient icons.
 */
export default function ProjectsSection() {
  const revealRef = useScrollReveal<HTMLElement>(0.4);

  return (
    <section id="projects" ref={revealRef} className="mb-24 scroll-mt-24">
      <SectionHeading title="Featured Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <GlassCard key={project.title} className="p-6 group">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <FontAwesomeIcon icon={project.icon} className="text-xl w-5 h-5" />
            </div>
            <h3
              className={`text-xl font-bold text-white mb-2 transition-colors ${project.hoverColor}`}
            >
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
