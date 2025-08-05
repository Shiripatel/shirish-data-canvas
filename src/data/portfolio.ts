// Portfolio data for easy editing
import shirishProfile from "@/assets/shirish-profile.jpg";
import deloitteLogo from "@/assets/logos/deloitte-logo.png";
import protivitiLogo from "@/assets/logos/protiviti-logo.png";
import grantThorntonLogo from "@/assets/logos/grant-thornton-logo.png";

export const personalInfo = {
  name: "Shirish Patel",
  title: "Data Analyst | Digital Transformation Consultant",
  location: "Chicago, IL, USA",
  email: "shirishpatel1611@gmail.com",
  phone: "(872) 288 4166",
  photo: shirishProfile,
  linkedin: "https://www.linkedin.com/in/shirish1611/",
  github: "https://github.com/shirishpatel",
  kaggle: "https://kaggle.com/shirishpatel"
};

export const about = {
  text: "Quantitative business analytics professional with over 8 years of experience across consulting, digital transformation, and data analytics. Passionate about enabling business strategy through data-driven insights, enterprise systems, and automation solutions."
};

export const skills = [
  "SQL", "Python", "R", "Tableau", "Excel", "Power BI", 
  "Oracle ERP", "SAP", "Statistical Modeling", "Sampling Techniques", 
  "Business Strategy", "Jira", "Jenkins", "Automation Frameworks", "Financial Modeling"
];

export const projects = [
  {
    id: 1,
    title: "Oracle ERP Digital Transformation",
    description: "Led ERP rollout for a $1B UAE conglomerate across 4 sectors. Analyzed 650+ requirements, improved finance and SCM functions.",
    technologies: ["Oracle Cloud", "Jira", "Jenkins"],
    link: "#"
  },
  {
    id: 2,
    title: "Clean Energy Billing Automation",
    description: "Built a no-code/low-code automation framework to reduce billing inaccuracies, raising automation coverage from 76% to 85%.",
    technologies: ["Python", "OCR", "Jenkins", "Jira"],
    link: "#"
  },
  {
    id: 3,
    title: "Tableau Student Dashboard",
    description: "Designed interactive dashboards used by 8+ teams to analyze student data, cutting manual reporting time significantly.",
    technologies: ["Tableau", "SQL", "Excel"],
    link: "#"
  },
  {
    id: 4,
    title: "HackWithChicago 2025 – Safety AI App (Winner)",
    description: "Built a real-time AI-powered driver safety platform that won first place at Microsoft's HackWithChicago.",
    technologies: ["Python", "RAG", "Streamlit", "OpenAI"],
    link: "#"
  },
  {
    id: 5,
    title: "Financial Model for Digital Infra Project",
    description: "Created a 7-year IRR/payback model for a state government, complete with sensitivity analysis and dashboards.",
    technologies: ["Excel", "Power BI"],
    link: "#"
  }
];

export const experience = [
  {
    id: 1,
    company: "DePaul University",
    position: "Data Analyst (Part Time)",
    location: "Chicago, IL",
    period: "Oct 2024 – Present",
    description: "Developing data solutions and analytics dashboards for university operations, supporting multiple departments with data-driven insights.",
    logo: null
  },
  {
    id: 2,
    company: "Deloitte",
    position: "Consultant, Strategy & Operations",
    location: "Bangalore, India",
    period: "Aug 2021 – Dec 2024",
    description: "Led digital transformation initiatives and business process optimization across supply chain, utilities, and telecom sectors.",
    logo: deloitteLogo
  },
  {
    id: 3,
    company: "Protiviti",
    position: "Consultant, Financial Advisory",
    location: "Riyadh, Saudi Arabia",
    period: "Feb 2019 – Jul 2021",
    description: "Conducted comprehensive audits of business processes and financial operations, identifying significant risk exposures and compliance gaps.",
    logo: protivitiLogo
  },
  {
    id: 4,
    company: "Grant Thornton",
    position: "Consultant, Business Advisory",
    location: "Delhi, India",
    period: "Apr 2016 – Jan 2019",
    description: "Provided strategic business advisory services including financial due diligence and investment decision support.",
    logo: grantThorntonLogo
  }
];

export const education = [
  {
    id: 1,
    institution: "DePaul University",
    degree: "MS in Business Analytics",
    period: "Expected November 2025",
    note: "Dean's Scholastic Award recipient"
  }
];

export const awards = [
  "Dean's Scholastic Award – DePaul University",
  "Winner – Microsoft HackWithChicago 2025",
  "Top 5% Performer – Deloitte",
  "Most Innovative Award – Protiviti Global Challenge, Dubai",
  "Green Dot Award – Deloitte"
];