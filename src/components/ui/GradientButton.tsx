import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: string;
  target?: string;
  variant?: "primary" | "outline";
  className?: string;
}

/**
 * Reusable CTA button — either gradient-filled or outline style.
 */
export default function GradientButton({
  children,
  onClick,
  href,
  download,
  target,
  variant = "primary",
  className = "",
}: GradientButtonProps) {
  const baseClasses =
    "px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg hover:shadow-teal-500/30"
      : "border border-teal-500 text-teal-400 hover:bg-teal-500/10";

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
}
