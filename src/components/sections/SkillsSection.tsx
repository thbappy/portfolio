"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/data/portfolio-data";

/**
 * Technical skills section — animated tag cloud inside a glass card.
 */
export default function SkillsSection() {
  const revealRef = useScrollReveal<HTMLElement>(0.2);

  return (
    <section id="skills" ref={revealRef} className="mb-24 scroll-mt-24">
      <SectionHeading title="Technical Skills" />

      <GlassCard className="p-8" enableTilt={false}>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, i) => (
            <SkillTag key={skill.label} icon={skill.icon} label={skill.label} index={i} />
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
