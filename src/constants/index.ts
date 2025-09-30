import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

type Skill = {
  skill_name: string;
  iconName: string;
  width: number;
  height: number;
};

// Core skills data with icon names instead of functions
export const SKILL_DATA: Skill[] = [
  // Programming Languages
  {
    skill_name: "Python",
    iconName: "SiPython",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Go",
    iconName: "SiGo",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    iconName: "SiTypescript",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    iconName: "SiJavascript",
    width: 80,
    height: 80,
  },
  {
    skill_name: "R",
    iconName: "SiR",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    iconName: "SiCplusplus",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    iconName: "JavaIcon",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C",
    iconName: "SiC",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/Siddhant0701",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/siddhantmahajan07",
  },
] as const;

export const FRONTEND_SKILL: Skill[] = [
  // Web & Frontend
  {
    skill_name: "React",
    iconName: "SiReact",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    iconName: "SiNextdotjs",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    iconName: "SiHtml5",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    iconName: "SiCss3",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL: Skill[] = [
  // Data Science & ML
  {
    skill_name: "TensorFlow",
    iconName: "SiTensorflow",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Keras",
    iconName: "SiKeras",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PyTorch",
    iconName: "SiPytorch",
    width: 80,
    height: 80,
  },
  {
    skill_name: "NumPy",
    iconName: "SiNumpy",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Pandas",
    iconName: "SiPandas",
    width: 80,
    height: 80,
  },
  {
    skill_name: "OpenCV",
    iconName: "SiOpencv",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Scikit-Learn",
    iconName: "SiScikitlearn",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL: Skill[] = [
  // Cloud & DevOps
  {
    skill_name: "AWS",
    iconName: "SiAmazonwebservices",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Docker",
    iconName: "SiDocker",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Kubernetes",
    iconName: "SiKubernetes",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Terraform",
    iconName: "SiTerraform",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Helm",
    iconName: "SiHelm",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL: Skill[] = [
  // Databases
  {
    skill_name: "PostgreSQL",
    iconName: "SiPostgresql",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    iconName: "SiMysql",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    iconName: "SiMongodb",
    width: 80,
    height: 80,
  },
] as const;

// Additional skill category for Scripting & Tools
export const TOOLS_SKILL: Skill[] = [
  {
    skill_name: "Bash",
    iconName: "SiGnubash",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    iconName: "SiGit",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    iconName: "SiPostman",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Rock Paper Scissors AI Player",
    description: '',
    image: "/projects/project-1.png",
    link: "https://github.com/Siddhant0701/Rock-Paper-Scissors-AI-Player",
  },
  {
    title: "ArtiFace - AI Image Generator",
    description:'',
    image: "/projects/project-2.png",
    link: "https://github.com/Siddhant0701/ArtiFace",
  },
  {
    title: "Codebase Navigator",
    description:'',
    image: "/projects/project-3.png",
    link: "",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Social Media",
    data: [
      {
        name: "Github",
        icon: RxGithubLogo,
        link: "https://github.com/Siddhant0701",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/siddhantmahajan07",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:mahajansiddhant07@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Siddhant0701/Personal-Website",
};
