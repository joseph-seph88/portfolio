export interface ProfileData {
  name: string;
  subtitle: string;
  email: string;
  github: string;
  portfolio: string;
}

export interface ProjectDetail {
  title: string;
  status?: string;
  tags: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  icon?: string;
  link: string;
  role: string;
  period: string;
  projects: ProjectDetail[];
  images?: { src: string; pdfSrc?: string; alt: string }[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface EducationProject {
  org: string;
  role: string;
  period: string;
  projects: ProjectDetail[];
}

export interface InfoSection {
  title: string;
  items: string[];
}

export interface OpenSourceEntry {
  name: string;
  href: string;
  items: string[];
}

export interface ResumeData {
  profile: ProfileData;
  experiences: ExperienceEntry[];
  skills: SkillCategory[];
  educationProjects: EducationProject[];
  certificates: string[];
  education: string[];
  openSource: OpenSourceEntry[];
  aboutMePlainText: string;
}
