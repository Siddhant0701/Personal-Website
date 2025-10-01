export type JobSource = {
  company: string;
  companyLogo: string;
  jobTitle: string;
  dates: string;
  summary: string;
};

export const JOB_SOURCES: JobSource[] = [
  {
    company: "Amazon",
    companyLogo: "/work-exp/aws-svgrepo-com.svg",
    jobTitle: "Software Development Engineer - Eventbridge",
    dates: "Jul 2025 - Present",
    summary: "Working in the Eventbridge organization.",
  },
  {
    company: "Apple",
    companyLogo: "/work-exp/apple-logo-svgrepo-com.svg",
    jobTitle: "Software Engineer (SiVal)",
    dates: "Sep 2024 - Dec 2024",
    summary: "Developed anomaly detection systems for SoC tests using advanced algorithms. Implemented RAG-based chatbot and LLM pipelines with Haystack. Built Python modules for LLM pipeline management with embeddings support.",
  },
  {
    company: "Amazon AWS",
    companyLogo: "/work-exp/aws-svgrepo-com.svg",
    jobTitle: "Software Development Engineer",
    dates: "May 2024 - Aug 2024",
    summary: "Automated customer dashboard investigations using AWS stack. Significantly improved engineering efficiency by reducing on-call time by 40% and increasing investigation tools throughput by 60x.",
  },
  {
    company: "Mycro Harvest",
    companyLogo: "/work-exp/mycro harvest.png",
    jobTitle: "Machine Learning RnD Engineer",
    dates: "May 2023 - Oct 2023",
    summary: "Deployed instance segmentation models on AWS Cloud achieving 95% accuracy in crop growth estimation. Engineered NMS variation improving detection quality by 80%. Expertise in AWS SageMaker and NVIDIA technologies.",
  },
  {
    company: "Woodbridge",
    companyLogo: "/work-exp/woodbridge.jpeg",
    jobTitle: "Data Scientist",
    dates: "Jan 2023 - Apr 2023",
    summary: "Developed object detection model for car seat inventory with 98% MAP. Built real-time vision application using DeepStream SDK and Azure IoT for video analysis.",
  },
  {
    company: "PenfieldAI",
    companyLogo: "/work-exp/penfield.jpeg",
    jobTitle: "DevOps Engineer",
    dates: "May 2022 - Aug 2022",
    summary: "Configured UAT environment on RHEL 7 infrastructure. Managed PostgreSQL, Kubernetes, Metallb, and GlusterFS for scalable deployments. Streamlined environment provisioning and testing processes.",
  },
  {
    company: "Texada Software",
    companyLogo: "/work-exp/texada.jpeg",
    jobTitle: "DevOps Developer",
    dates: "Sep 2021 - Dec 2021",
    summary: "Led infrastructure optimization implementing CI/CD and IaC using Terraform, Terragrunt, and AWS Cloud. Enhanced deployment reliability and managed infrastructure drift effectively.",
  }
];
