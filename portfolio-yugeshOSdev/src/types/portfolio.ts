export interface Portfolio {
  profile: Profile;
  skills: Skills;
  experience: ExperienceItem[];
  projects: Project[];
  testimonials?: Testimonial[];
  education: EducationItem[];
  nav: NavItem[];
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  bio: string;
  avatarSvg: string;
  social: Social;
}

export interface Social {
  github: string;
  instagram: string;
  linkedin: string;
  email: string;
  phone: string;
  website: string;
}

export interface Skills {
  categories: SkillCategory[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  role: string;
  year: string;
  link: string;
  image: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarColor: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
}

export interface NavItem {
  label: string;
  href: string;
}
