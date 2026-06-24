import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillTagProps {
  icon: IconDefinition;
  label: string;
  index?: number;
}

/**
 * Animated skill pill with icon, glow hover effect, and staggered animation.
 */
export default function SkillTag({ icon, label, index = 0 }: SkillTagProps) {
  return (
    <span
      className="skill-tag"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <FontAwesomeIcon icon={icon} className="mr-2 w-4 h-4" />
      {label}
    </span>
  );
}
