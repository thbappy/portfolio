"use client";

import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

/**
 * Floating glassmorphism navigation bar.
 * Uses IntersectionObserver-based active section tracking.
 */
export default function Navbar() {
  const activeSection = useActiveSection();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="glass-nav" id="navbar" aria-label="Main navigation">
      {NAV_ITEMS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`nav-item ${activeSection === id ? "active" : ""}`}
          aria-current={activeSection === id ? "true" : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
