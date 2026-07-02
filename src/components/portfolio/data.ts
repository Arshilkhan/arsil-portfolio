import {
  SiPython,
  SiCplusplus,
  SiPhp,
  SiJavascript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiEspressif,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiJupyter,
  SiGooglecolab,
} from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaWifi, FaCode, FaTools } from "react-icons/fa";
import { TbBinaryTree, TbCpu } from "react-icons/tb";
import type { IconType } from "react-icons";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_GROUPS: {
  title: string;
  icon: IconType;
  accent: "primary" | "secondary" | "accent";
  skills: string[];
}[] = [
  {
    title: "Programming",
    icon: FaCode,
    accent: "primary",
    skills: ["Python", "C++", "Java", "PHP", "JavaScript", "SQL"],
  },
  {
    title: "Machine Learning",
    icon: FaBrain,
    accent: "secondary",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "CNN",
      "Transformers",
      "Transfer Learning",
      "Activity Recognition",
      "Classification",
    ],
  },
  {
    title: "Computer Vision",
    icon: TbCpu,
    accent: "accent",
    skills: ["OpenCV", "Image Processing", "Object Detection", "Feature Extraction"],
  },
  {
    title: "Wireless AI",
    icon: FaWifi,
    accent: "secondary",
    skills: [
      "WiFi CSI",
      "ESP32",
      "Signal Processing",
      "Indoor Positioning",
      "Activity Recognition",
    ],
  },
  {
    title: "Web Development",
    icon: TbBinaryTree,
    accent: "primary",
    skills: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: FaTools,
    accent: "accent",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Laragon",
      "ESP-IDF",
    ],
  },
];

export const TECH_ICONS: { icon: IconType; label: string }[] = [
  { icon: SiPython, label: "Python" },
  { icon: SiPytorch, label: "PyTorch" },
  { icon: SiTensorflow, label: "TensorFlow" },
  { icon: SiScikitlearn, label: "Scikit-Learn" },
  { icon: SiOpencv, label: "OpenCV" },
  { icon: SiCplusplus, label: "C++" },
  { icon: FaJava, label: "Java" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: SiPhp, label: "PHP" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiEspressif, label: "ESP32" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss3, label: "CSS3" },
  { icon: SiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: SiJupyter, label: "Jupyter" },
  { icon: SiGooglecolab, label: "Colab" },
  { icon: FaDatabase, label: "SQL" },
];

export const PROJECTS = [
  {
    title: "TriModalTransformer Indoor Positioning System",
    tag: "Research",
    description:
      "Transformer-based indoor localization framework using WiFi CSI, RTT, and Angle of Arrival (AoA). Integrated Transformer feature fusion, Federated Learning, and Meta Learning to improve accuracy while preserving user privacy.",
    features: [
      "Transformer Fusion",
      "Federated Learning",
      "Meta Learning",
      "Indoor Localization",
      "AI-based Positioning",
    ],
    tech: ["Python", "PyTorch", "Transformers", "Deep Learning"],
  },
  {
    title: "WiFi CSI Human Activity Recognition",
    tag: "Wireless AI",
    description:
      "Activity recognition system using ESP32-generated WiFi CSI signals. Built preprocessing pipelines, signal filtering, feature extraction, and classification models to recognize walking, sitting, standing, and jumping.",
    features: [
      "CSI Signal Processing",
      "ESP32",
      "Feature Engineering",
      "Deep Learning",
      "Activity Classification",
    ],
    tech: ["Python", "ESP-IDF", "Signal Processing", "PyTorch"],
  },
  {
    title: "Fall Detection using Deep Learning",
    tag: "Computer Vision",
    description:
      "Multiple CNN-based fall detection models using image datasets. Compared Simple CNN, Complex CNN, ResNet18, EfficientNet-B0, and DenseNet121 for thorough performance evaluation.",
    features: [
      "CNN Architectures",
      "Model Benchmarking",
      "Transfer Learning",
      "Image Datasets",
      "Deep Learning",
    ],
    tech: ["PyTorch", "OpenCV", "Transfer Learning"],
  },
  {
    title: "Attendance Management System",
    tag: "Full Stack",
    description:
      "Converted a legacy PHP application into a modern Laravel-based web app with PostgreSQL and role-based authentication for Admin, Teacher, and Student.",
    features: [
      "Laravel Migration",
      "Role-based Auth",
      "PostgreSQL",
      "Modern UI",
      "Legacy Refactor",
    ],
    tech: ["Laravel", "PHP", "PostgreSQL", "JavaScript"],
  },
];

export const TIMELINE = [
  {
    title: "AI Research Projects",
    period: "Ongoing",
    body: "Leading research on transformer-based multimodal fusion, federated learning, and meta learning for privacy-preserving indoor positioning.",
    icon: FaBrain,
  },
  {
    title: "Deep Learning Projects",
    period: "2024 — Present",
    body: "Designed and benchmarked CNN and transfer-learning models across computer vision tasks including fall detection and image classification.",
    icon: TbCpu,
  },
  {
    title: "IoT & Wireless Sensing",
    period: "2023 — 2024",
    body: "Built WiFi CSI acquisition pipelines on ESP32, developing signal processing and activity-recognition systems from raw sensor data.",
    icon: FaWifi,
  },
  {
    title: "Full Stack Development",
    period: "2023 — Present",
    body: "Delivered end-to-end web applications with Laravel and PostgreSQL, including role-based platforms and legacy system modernization.",
    icon: TbBinaryTree,
  },
];

export const ACHIEVEMENTS = [
  {
    title: "AI & Deep Learning Projects",
    body: "Delivered production-grade deep learning models spanning vision, sensing, and classification.",
    icon: FaBrain,
    stat: "10+",
    statLabel: "Models trained",
  },
  {
    title: "Wireless Sensing Research",
    body: "Novel CSI-based sensing and transformer localization research with privacy-first design.",
    icon: FaWifi,
    stat: "3",
    statLabel: "Research tracks",
  },
  {
    title: "Full Stack Web Development",
    body: "Shipped modern Laravel applications with secure, role-based architectures.",
    icon: TbBinaryTree,
    stat: "5+",
    statLabel: "Apps shipped",
  },
  {
    title: "End-to-End ML Systems",
    body: "Built complete pipelines from raw data acquisition to deployed inference.",
    icon: TbCpu,
    stat: "4",
    statLabel: "Full pipelines",
  },
];

export const COURSEWORK = [
  "Machine Learning",
  "Artificial Intelligence",
  "Deep Learning",
  "Data Structures",
  "Database Systems",
  "Computer Networks",
  "IoT",
];

export const CONTACT = {
  email: "kashi@example.com",
  linkedin: "https://linkedin.com/in/kashi",
  github: "https://github.com/kashi",
};
