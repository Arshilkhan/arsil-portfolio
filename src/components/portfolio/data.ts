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
    SiCss,
    SiPostgresql,
    SiGit,
    SiGithub,
    SiJupyter,
    SiGooglecolab,
    SiReact,
    SiTypescript,
    SiNodedotjs,
    SiNumpy,
    SiSupabase,
    SiCloudflare,
    SiVite,
    SiMysql,
    SiGithubactions,
    SiVercel,
    SiTailwindcss,
} from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaWifi, FaCode, FaTools, FaNetworkWired } from "react-icons/fa";
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

        {
            title: "Backend & APIs",
            icon: FaDatabase,
            accent: "secondary",
            skills: [
                "Node.js",
                "REST APIs",
                "API Integration",
                "Laravel",
                "OAuth 2.0",
                "Authentication",
                "Google Drive API",
                "Resend API",
                "Gemini API",
            ],
        },
        {
            title: "Databases & Backend Services",
            icon: FaDatabase,
            accent: "primary",
            skills: [
                "Supabase",
                "PostgreSQL",
                "SQL",
                "Supabase Auth",
                "Row Level Security",
                "Database Triggers",
                "Database Functions",
                "Schema Migrations",
            ],
        },
        {
            title: "Deployment & Infrastructure",
            icon: FaTools,
            accent: "accent",
            skills: [
                "Vercel",
                "Cloudflare",
                "Git",
                "GitHub",
                "Production Deployments",
                "Preview Deployments",
                "Environment Variables",
                "Custom Domains",
                "DNS Configuration",
                "HTTPS / SSL",
            ],
        },

    ];

export const TECH_ICONS: { icon: IconType; label: string }[] = [
    { icon: SiPython, label: "Python" },
    { icon: SiCplusplus, label: "C++" },
    { icon: FaJava, label: "Java" },
    { icon: SiPhp, label: "PHP" },
    { icon: SiHtml5, label: "HTML5" },
    { icon: SiCss, label: "CSS3" },
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiLaravel, label: "Laravel" },
    { icon: SiReact, label: "React" },
    { icon: SiNodedotjs, label: "Node.js" },
    { icon: SiMysql, label: "MySQL" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: SiGit, label: "Git" },
    { icon: SiGithub, label: "GitHub" },
    { icon: SiGithubactions, label: "GitHub Actions" },
    { icon: SiPytorch, label: "PyTorch" },
    { icon: SiTensorflow, label: "TensorFlow" },
    { icon: SiScikitlearn, label: "Scikit-Learn" },
    { icon: SiOpencv, label: "OpenCV" },
    { icon: SiEspressif, label: "ESP32" },
    { icon: SiJupyter, label: "Jupyter" },
    { icon: SiNumpy, label: "NumPy" },
    { icon: SiSupabase, label: "Supabase" },
    { icon: SiGooglecolab, label: "Colab" },
    { icon: SiCloudflare, label: "Cloudflare" },
    { icon: SiVercel, label: "Vercel" },
    { icon: FaNetworkWired, label: "REST APIs" },
];


export const PROJECTS = [
    // Business applications
    {
        title: "Abjad ERP",
        tag: "Enterprise Application",
        description:
            "A full-stack ERP platform for managing business operations, including invoices, quotations, challans, customers, products, inventory, purchases, payments, and reports. Developed with database-backed workflows, role-based access, and separate development and production environments.",
        features: [
            "Invoice & Challan Management",
            "Inventory Management",
            "Customer & Product Management",
            "Role-Based Access",
            "Database Integration",
            "Dev & Production Environments",
        ],
        tech: [
            "React",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Vercel",
            "REST APIs",
            "Supabase Auth",
            "Row Level Security",
            "Database Migrations",
            "Google Drive API",
            "OAuth 2.0",
            "Resend API",
            "Gemini API",
            "Environment Variables",
            "Git",
            "GitHub",
        ],
    },

    // Business websites
    {
        title: "Happy Fabric",
        tag: "Business Website",
        description:
            "A modern website for a fabric business, featuring international and Indian textile brands, dedicated brand pages, and a structured fabric catalogue to help customers explore available collections.",
        features: [
            "Fabric Catalogue",
            "Brand-specific Pages",
            "Product Discovery",
            "Responsive Design",
            "Multi-brand Showcase",
        ],
        tech: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Git",
            "GitHub",
            "Web Deployment",
            "Custom Domains",
            "DNS Configuration",
            "Responsive Design",
        ],
    },
    {
        title: "Gilpix Photography",
        tag: "Photography Portfolio",
        description:
            "A photography website project focused on showcasing wedding photography, presenting visual work through an engaging portfolio, and creating a polished online identity for the photography brand.",
        features: [
            "Photography Portfolio",
            "Visual Storytelling",
            "Responsive Layout",
            "Brand Presentation",
        ],
        tech: [
            "React",
            "JavaScript",
            "Node.js",
            "REST APIs",
            "Full-Stack Development",
            "Responsive Design",
            "Git",
            "GitHub",
            "Web Hosting",
            "Custom Domains",
        ],
    },
    {
        title: "Abjad Marketing Website",
        tag: "Marketing Website",
        description:
            "A standalone marketing website developed to establish the Abjad brand online, communicate its offerings, and provide visitors with a clear, responsive browsing experience.",
        features: [
            "Brand Presentation",
            "Responsive UI",
            "Service Showcase",
            "Website Deployment",
        ],
        tech: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Vercel",
            "Cloudflare",
            "Custom Domains",
            "DNS Configuration",
            "HTTPS / SSL",
            "Git",
            "GitHub",
        ],
    },

    // AI and research projects
    {
        title: "TriModalTransformer Indoor Positioning System",
        tag: "Research",
        description:
            "A transformer-based indoor localization framework using WiFi CSI, RTT, and Angle of Arrival (AoA). Combines multimodal feature fusion, federated learning, and meta-learning to investigate accurate, privacy-preserving indoor positioning.",
        features: [
            "Transformer Fusion",
            "Federated Learning",
            "Meta Learning",
            "Indoor Localization",
            "Multimodal Learning",
        ],
        tech: [
            "Python",
            "PyTorch",
            "Transformers",
            "Deep Learning",
            "Federated Learning",
            "Meta-Learning",
            "WiFi CSI",
            "RTT",
            "AoA",
        ],
    },
    {
        title: "WiFi CSI Human Activity Recognition",
        tag: "Wireless AI",
        description:
            "An activity recognition system using WiFi Channel State Information collected with ESP32 hardware. Includes signal preprocessing, filtering, feature extraction, and classification of human activities.",
        features: [
            "CSI Signal Processing",
            "ESP32 Data Collection",
            "Feature Engineering",
            "Deep Learning",
            "Activity Classification",
        ],
        tech: [
            "Python",
            "ESP-IDF",
            "Signal Processing",
            "PyTorch",
        ],
    },
    {
        title: "Fall Detection using Deep Learning",
        tag: "Computer Vision",
        description:
            "A comparative deep learning project evaluating CNN architectures for image-based fall detection, including custom CNNs, ResNet18, EfficientNet-B0, and DenseNet121.",
        features: [
            "CNN Architectures",
            "Model Benchmarking",
            "Transfer Learning",
            "Image Processing",
            "Performance Evaluation",
        ],
        tech: [
            "PyTorch",
            "OpenCV",
            "Transfer Learning",
        ],
    },

    // Full-stack application
    {
        title: "Attendance Management System",
        tag: "Full Stack",
        description:
            "Modernized a legacy PHP attendance application into a Laravel-based web application with PostgreSQL, role-based authentication, and separate workflows for administrators, teachers, and students.",
        features: [
            "Laravel Migration",
            "Role-Based Authentication",
            "PostgreSQL Integration",
            "Legacy Code Modernization",
            "Multi-role Workflows",
        ],
        tech: [
            "Laravel",
            "PHP",
            "PostgreSQL",
            "JavaScript",
        ],
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
        period: "2025 — 2026",
        body: "Designed and benchmarked CNN and transfer-learning models across computer vision tasks including fall detection and image classification.",
        icon: TbCpu,
    },
    {
        title: "IoT & Wireless Sensing",
        period: "2025 — 2026",
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
    email: "arshilkhan8828@gmail.com",
    linkedin: "https://www.linkedin.com/in/arshil-khan-99460221a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/Arshilkhan",
};
