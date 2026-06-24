interface SectionHeadingProps {
  title: string;
}

/**
 * Section heading with gradient text and underline bar.
 * Used consistently across Skills, Experience, Projects, Education sections.
 */
export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" />
    </div>
  );
}
