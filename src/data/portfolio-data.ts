// ============================================================
// Portfolio Data — Single source of truth for all content
// ============================================================

import {
  faServer,
  faCode,
  faDatabase,
  faLayerGroup,
  faLandmark,
  faHotel,
  faBus,
  faHamburger,
  faNewspaper,
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faGlobeEurope,
  faFire,
  faLeaf,
  faN,
  faLanguage,
  faHeart,
  faAddressCard,
  faDownload,
  faPaperPlane,
  faTimes,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import {
  faPhp,
  faLaravel,
  faJava,
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
  faBootstrap,
  faDocker,
  faLinux,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// ── Types ──────────────────────────────────────────────────
export interface ContactInfo {
  phones: string[];
  email: string;
  address: string[];
}

export interface ExpertiseItem {
  icon: IconDefinition;
  title: string;
  description: string;
  accentColor: string; // tailwind color class fragment e.g. "teal", "blue"
}

export interface Skill {
  icon: IconDefinition;
  label: string;
}

export interface Experience {
  title: string;
  dateRange: string;
  company: string;
  location: string;
  locationIcon: IconDefinition;
  accentColor: "teal" | "blue";
  icon: IconDefinition;
}

export interface Project {
  icon: IconDefinition;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  hoverColor: string;
}

export interface Education {
  degree: string;
  institution: string;
  accentColor: "teal" | "blue";
}

export interface SocialLink {
  icon: IconDefinition;
  href: string;
  label: string;
  colorClass?: string;
}

export interface ContactModalLink {
  icon: IconDefinition;
  href: string;
  label: string;
  value: string;
  iconColorClass?: string;
}

// ── Data ───────────────────────────────────────────────────

export const personalInfo = {
  firstName: "Md. Tanbeer",
  lastName: "Hasan",
  title: "Full Stack Developer",
  bio: "Develop expertise in the software industry that would enhance my knowledge and skill in software development and enable me to apply my knowledge and skills to self and company growth.",
  profileImageUrl: "/profile.webp",
  cvUrl: "/Tanbeer_Hasan_CV.pdf",
};

export const contactInfo: ContactInfo = {
  phones: ["+8801930285610", "+8801740144461"],
  email: "tanbeerhasan7@gmail.com",
  address: ["North Ibrahimpur, Mirpur-14,", "Dhaka-1216"],
};

export const socialLinks: SocialLink[] = [
  {
    icon: faGithub,
    href: "https://github.com/thbappy",
    label: "GitHub",
  },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/md-tanbeer-hasan-92a5b0158/",
    label: "LinkedIn",
    colorClass: "border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5]",
  },
];

export const contactModalLinks: ContactModalLink[] = [
  {
    icon: faPhoneAlt,
    href: "tel:+8801930285610",
    label: "Call Me",
    value: "+880 1930 285610",
  },
  {
    icon: faEnvelope,
    href: "mailto:tanbeerhasan7@gmail.com",
    label: "Email Me",
    value: "tanbeerhasan7@gmail.com",
  },
  {
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/md-tanbeer-hasan-92a5b0158/",
    label: "LinkedIn",
    value: "Md. Tanbeer Hasan",
    iconColorClass: "text-[#0077b5]",
  },
  {
    icon: faGithub,
    href: "https://github.com/thbappy",
    label: "GitHub",
    value: "thbappy",
    iconColorClass: "text-white",
  },
];

export const expertiseItems: ExpertiseItem[] = [
  {
    icon: faServer,
    title: "Backend Architecture",
    description:
      "Building scalable, secure APIs and complex server-side logic using PHP, Laravel, Node.js, and Java Spring Boot.",
    accentColor: "teal",
  },
  {
    icon: faCode,
    title: "Frontend Development",
    description:
      "Crafting interactive and responsive user interfaces with React, Next.js, Vue.js, JavaScript, and Tailwind CSS.",
    accentColor: "blue",
  },
  {
    icon: faDatabase,
    title: "Database Management",
    description:
      "Designing optimized database schemas and managing data flow with MySQL, PostgreSQL, and MongoDB.",
    accentColor: "purple",
  },
  {
    icon: faLayerGroup,
    title: "System Integration",
    description:
      "Deploying via Docker, managing Linux servers, and seamless third-party API integration.",
    accentColor: "pink",
  },
];

export const skills: Skill[] = [
  { icon: faPhp, label: "PHP" },
  { icon: faLaravel, label: "Laravel" },
  { icon: faFire, label: "Codeigniter" },
  { icon: faJava, label: "Java" },
  { icon: faLeaf, label: "Spring Boot" },
  { icon: faJs, label: "JavaScript" },
  { icon: faReact, label: "React" },
  { icon: faN, label: "Next.js" },
  { icon: faVuejs, label: "Vue.js" },
  { icon: faNodeJs, label: "Node.js" },
  { icon: faServer, label: "Express.js" },
  { icon: faBootstrap, label: "Bootstrap" },
  { icon: faDatabase, label: "MySQL" },
  { icon: faDatabase, label: "PostgreSQL" },
  { icon: faLeaf, label: "MongoDB" },
  { icon: faDocker, label: "Docker" },
  { icon: faLinux, label: "Linux" },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    dateRange: "02/2026 - Present",
    company: "G8ICT Limited",
    location: "Mar Garden, Niketon, Gulshan 1, Dhaka",
    locationIcon: faMapMarkerAlt,
    accentColor: "teal",
    icon: faBriefcase,
  },
  {
    title: "Software Engineer",
    dateRange: "08/2024 - 06/2025",
    company: "Adventure Dhaka Limited",
    location: "Autograph Tower, Banani, Dhaka",
    locationIcon: faMapMarkerAlt,
    accentColor: "blue",
    icon: faBriefcase,
  },
  {
    title: "Software Engineer (Remote)",
    dateRange: "04/2023 - 08/2024",
    company: "Bónus Elegante Lda",
    location: "Lisboa, Portugal",
    locationIcon: faGlobeEurope,
    accentColor: "teal",
    icon: faLaptopCode,
  },
  {
    title: "Software Developer",
    dateRange: "11/2021 - 12/2022",
    company: "Business Automation Ltd.",
    location: "Mirpur DOHS, Dhaka",
    locationIcon: faMapMarkerAlt,
    accentColor: "blue",
    icon: faCode,
  },
  {
    title: "Software Developer",
    dateRange: "02/2019 - 04/2020",
    company: "Datatrix Soft",
    location: "Mirpur DOHS, Dhaka",
    locationIcon: faMapMarkerAlt,
    accentColor: "teal",
    icon: faCode,
  },
];

export const projects: Project[] = [
  {
    icon: faLandmark,
    title: "E-Namjari System",
    description:
      "Government Mutation Land Management System with secure access.",
    gradientFrom: "from-teal-500",
    gradientTo: "to-blue-500",
    hoverColor: "group-hover:text-teal-400",
  },
  {
    icon: faHotel,
    title: "Hotel Management",
    description:
      "Comprehensive system for Restaurant & Hotel daily operations.",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-500",
    hoverColor: "group-hover:text-blue-400",
  },
  {
    icon: faBus,
    title: "Bus Ticketing",
    description:
      "Online automated bus ticket booking and seat tracking platform.",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    hoverColor: "group-hover:text-pink-400",
  },
  {
    icon: faHamburger,
    title: "Food Delivery",
    description: "Real-time food delivery system integrated with robust APIs.",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
    hoverColor: "group-hover:text-orange-400",
  },
  {
    icon: faNewspaper,
    title: "News Portal",
    description:
      "Dynamic and high-traffic online news publishing and CMS system.",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-500",
    hoverColor: "group-hover:text-green-400",
  },
  {
    icon: faGraduationCap,
    title: "School Management",
    description: "End-to-end management software for educational institutes.",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    hoverColor: "group-hover:text-yellow-400",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in CSE",
    institution: "Dhaka International University",
    accentColor: "teal",
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Mymensingh Polytechnic Institute",
    accentColor: "blue",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Nohata High School",
    accentColor: "teal",
  },
];

export const languages = [
  { name: "Bangla", level: "Native", colorClass: "text-teal-500 border-teal-500/30" },
  { name: "English", level: "Fluent", colorClass: "text-blue-500 border-blue-500/30" },
];

export const interests = ["DevOps", "AI", "Robotics"];

// ── Re-export icons used in layout / modals ────────────────
export const icons = {
  faAddressCard,
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faLanguage,
  faHeart,
  faDownload,
  faPaperPlane,
  faTimes,
  faGlobe,
  faGithub,
  faLinkedinIn,
};
