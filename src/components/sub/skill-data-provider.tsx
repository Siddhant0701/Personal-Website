"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiRedux, 
  SiReactquery, SiTypescript, SiNextdotjs, SiFramer, SiStripe, 
  SiNodedotjs, SiMongodb, SiMui, SiExpress, SiFirebase, 
  SiPostgresql, SiMysql, SiPrisma, SiGraphql, SiFigma, 
  SiTauri, SiDocker, SiGo, SiPython, SiR, SiCplusplus,
  SiC, SiTensorflow, SiKeras, SiPytorch, SiNumpy, SiPandas, 
  SiOpencv, SiScikitlearn, SiAmazonwebservices, SiKubernetes, SiTerraform, 
  SiHelm, SiGit, SiPostman, SiGnubash
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

// Custom Java Icon Component
export const JavaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" fill="currentColor" {...props}>
    <path d="M101.634 182.619C101.634 182.619 93.9548 187.293 106.979 188.63C122.707 190.634 131.023 190.299 148.386 186.962C148.386 186.962 153.06 189.971 159.406 192.306C120.331 209.002 70.9089 191.304 101.634 182.619ZM96.6252 160.914C96.6252 160.914 88.2753 167.26 101.299 168.593C118.327 170.262 131.69 170.597 154.732 165.926C154.732 165.926 157.741 169.267 162.747 170.936C115.664 184.961 62.8975 172.269 96.6252 160.917V160.914ZM188.795 198.984C188.795 198.984 194.471 203.658 182.449 207.334C160.073 214.012 88.6104 216.019 68.5735 207.334C61.564 204.325 74.9197 199.982 79.2587 199.319C83.6012 198.317 85.9366 198.317 85.9366 198.317C78.2569 192.973 34.8424 209.337 63.8959 214.046C143.709 227.073 209.499 208.37 188.792 199.018L188.795 198.984ZM105.307 138.203C105.307 138.203 68.9052 146.888 92.2793 149.89C102.298 151.223 122 150.892 140.368 149.555C155.396 148.221 170.458 145.548 170.458 145.548C170.458 145.548 165.113 147.886 161.441 150.222C124.342 159.915 53.2107 155.573 73.5827 145.554C90.9526 137.204 105.307 138.203 105.307 138.203V138.203ZM170.423 174.604C207.83 155.234 190.46 136.534 178.438 138.873C175.429 139.54 174.096 140.207 174.096 140.207C174.096 140.207 175.097 138.203 177.436 137.54C201.145 129.19 219.849 162.586 169.757 175.61C169.757 175.61 170.092 175.275 170.423 174.608V174.604ZM108.979 227.364C145.046 229.703 200.147 226.03 201.484 208.995C201.484 208.995 198.817 215.673 171.764 220.683C141.042 226.359 102.968 225.692 80.5957 222.016C80.5957 222.016 85.2698 226.023 108.982 227.36L108.979 227.364Z"/>
    <path fill="currentColor" d="M147.685 28C147.685 28 168.389 49.0388 127.983 80.7594C95.5891 106.472 120.632 121.168 127.983 137.861C108.948 120.833 95.2609 105.802 104.606 91.7762C118.331 71.0828 156.062 61.0644 147.685 28ZM137 123.842C146.683 134.862 134.333 144.881 134.333 144.881C134.333 144.881 159.044 132.195 147.692 116.494C137.338 101.466 129.324 94.1184 172.738 69.0689C172.738 69.0689 104.278 86.0968 137.007 123.835L137 123.842Z"/>
  </svg>
);

type SkillDataProviderProps = {
  iconName: string;
  width: number;
  height: number;
  index: number;
};

// Icon mapping function
// Icon mapping
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    // Web Development
    "SiHtml5": SiHtml5,
    "SiCss3": SiCss3,
    "SiJavascript": SiJavascript,
    "SiTailwindcss": SiTailwindcss,
    "SiReact": SiReact,
    "SiRedux": SiRedux,
    "SiReactquery": SiReactquery,
    "SiTypescript": SiTypescript,
    "SiNextdotjs": SiNextdotjs,
    "SiFramer": SiFramer,
    "SiStripe": SiStripe,
    
    // Backend & APIs
    "SiNodedotjs": SiNodedotjs,
    "SiMongodb": SiMongodb,
    "SiMui": SiMui,
    "SiExpress": SiExpress,
    "SiFirebase": SiFirebase,
    "SiPostgresql": SiPostgresql,
    "SiMysql": SiMysql,
    "SiPrisma": SiPrisma,
    "SiGraphql": SiGraphql,
    "SiFigma": SiFigma,
    "SiTauri": SiTauri,
    "SiDocker": SiDocker,
    
    // Programming Languages
    "SiGo": SiGo,
    "SiPython": SiPython,
    "SiR": SiR,
    "SiCplusplus": SiCplusplus,
    "JavaIcon": JavaIcon,
    
    // Machine Learning & Data Science
    "SiTensorflow": SiTensorflow,
    "SiKeras": SiKeras,
    "SiPytorch": SiPytorch,
    "SiNumpy": SiNumpy,
    "SiPandas": SiPandas,
    "SiOpencv": SiOpencv,
    "SiScikitlearn": SiScikitlearn,
    
    // Cloud & DevOps
    "SiAmazonwebservices": SiAmazonwebservices,
    "SiKubernetes": SiKubernetes,
    "SiTerraform": SiTerraform,
    "SiHelm": SiHelm,
    
    // Other Tools
    "SiGit": SiGit,
    "SiPostman": SiPostman,
    "SiGnubash": SiGnubash,
    "FaDatabase": FaDatabase,
    
    // Fallback
    "SiC": SiC,
  };
  
  return iconMap[iconName] || SiC;
};

// Brand color mapping function
const getIconColor = (iconName: string) => {
  const colorMap: Record<string, string> = {
    SiHtml5: "text-orange-500 hover:text-orange-400", // HTML5 Orange
    SiCss3: "text-blue-500 hover:text-blue-400", // CSS3 Blue
    SiJavascript: "text-yellow-400 hover:text-yellow-300", // JavaScript Yellow
    SiTailwindcss: "text-cyan-400 hover:text-cyan-300", // Tailwind Cyan
    SiReact: "text-cyan-400 hover:text-cyan-300", // React Cyan
    SiRedux: "text-purple-500 hover:text-purple-400", // Redux Purple
    SiReactquery: "text-red-500 hover:text-red-400", // React Query Red
    SiTypescript: "text-blue-600 hover:text-blue-500", // TypeScript Blue
    SiNextdotjs: "text-white hover:text-gray-200", // Next.js Black/White
    SiFramer: "text-pink-500 hover:text-pink-400", // Framer Motion Pink
    SiStripe: "text-indigo-500 hover:text-indigo-400", // Stripe Indigo
    SiNodedotjs: "text-green-500 hover:text-green-400", // Node.js Green
    SiMongodb: "text-green-600 hover:text-green-500", // MongoDB Green
    SiMui: "text-blue-500 hover:text-blue-400", // Material UI Blue
    SiExpress: "text-gray-400 hover:text-gray-300", // Express Gray
    SiFirebase: "text-orange-400 hover:text-orange-300", // Firebase Orange
    SiPostgresql: "text-blue-600 hover:text-blue-500", // PostgreSQL Blue
    SiMysql: "text-blue-500 hover:text-blue-400", // MySQL Blue
    SiPrisma: "text-slate-600 hover:text-slate-500", // Prisma Dark Gray
    SiGraphql: "text-pink-500 hover:text-pink-400", // GraphQL Pink
    SiFigma: "text-red-500 hover:text-red-400", // Figma Red
    SiTauri: "text-blue-400 hover:text-blue-300", // Tauri Blue
    SiDocker: "text-blue-500 hover:text-blue-400", // Docker Blue
    SiGo: "text-cyan-500 hover:text-cyan-400", // Go Cyan
    SiPython: "text-yellow-500 hover:text-yellow-400", // Python Yellow
    SiR: "text-blue-600 hover:text-blue-500", // R Blue
    SiCplusplus: "text-blue-700 hover:text-blue-600", // C++ Blue
    JavaIcon: "text-orange-600 hover:text-orange-500", // Java Orange
    SiC: "text-blue-800 hover:text-blue-700", // C Dark Blue
    SiTensorflow: "text-orange-500 hover:text-orange-400", // TensorFlow Orange
    SiKeras: "text-red-600 hover:text-red-500", // Keras Red
    SiPytorch: "text-orange-600 hover:text-orange-500", // PyTorch Orange
    SiNumpy: "text-blue-500 hover:text-blue-400", // NumPy Blue
    SiPandas: "text-blue-700 hover:text-blue-600", // Pandas Dark Blue
    SiOpencv: "text-green-500 hover:text-green-400", // OpenCV Green
    SiScikitlearn: "text-orange-500 hover:text-orange-400", // Scikit-Learn Orange
    SiAmazonwebservices: "text-orange-400 hover:text-orange-300", // AWS Orange
    SiKubernetes: "text-blue-500 hover:text-blue-400", // Kubernetes Blue
    SiTerraform: "text-purple-600 hover:text-purple-500", // Terraform Purple
    SiHelm: "text-blue-400 hover:text-blue-300", // Helm Blue
    SiGit: "text-red-500 hover:text-red-400", // Git Red
    SiPostman: "text-orange-500 hover:text-orange-400", // Postman Orange
    SiGnubash: "text-gray-400 hover:text-gray-300", // Bash Gray
    FaDatabase: "text-gray-500 hover:text-gray-400", // SQL Gray
  };
  
  return colorMap[iconName] || "text-blue-400 hover:text-blue-300"; // fallback color
};

export const SkillDataProvider = ({
  iconName,
  width,
  height,
  index,
  className = "",
}: SkillDataProviderProps & { className?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;
  const Icon = getIconComponent(iconName);
  const iconColor = getIconColor(iconName);

  const iconProps = iconName === 'JavaIcon' 
    ? { width: Math.min(width, height), height: Math.min(width, height) }
    : { size: Math.min(width, height) };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4"
    >
      <Icon 
        {...(iconProps as React.ComponentProps<typeof Icon>)}
        className={`${iconColor} w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 transition-colors duration-200`}
      />
    </motion.div>
  );
};
