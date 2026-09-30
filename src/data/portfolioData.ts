export interface Project {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  year: string;
  runtime: string;
  rating: string;
  score: string;
  role: string;
  featured: boolean;
  accentColor: string;
  summary: string;
  techStack: string[];
  bulletPoints: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  interactiveType: 'interview' | 'facenet' | 'deepfake' | 'ecommerce';
}

export interface SkillCategory {
  category: string;
  department: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    popular?: boolean;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  skillsLearned: string[];
  accent: string;
}

export const PORTFOLIO_DATA = {
  director: {
    name: "KRISHNA",
    title: "AI/ML Engineer & Intelligent Systems Architect",
    tagline: "Architecting Autonomous AI Pipelines, Neural Vision Models & Scalable Full-Stack Systems",
    objective: "B.Tech CSE (AI/ML) engineer with hands-on experience building full-stack applications using large language models, deep learning, and computer vision, seeking full-time Software Engineer / AI-ML Engineer roles.",
    phone: "+91 6299754993",
    email: "officialkrishna2455@gmail.com",
    location: "Bhopal, Madhya Pradesh, India",
    github: "https://github.com/officialkrishna2455-tech",
    linkedin: "https://linkedin.com/in/krishna",
    education: {
      degree: "Bachelor of Technology, Computer Science & Engineering (AI/ML)",
      institution: "Jagran Lakecity University, Bhopal",
      duration: "2023 - 2027",
      specialization: "Artificial Intelligence & Machine Learning",
      status: "Final Year Engineer"
    },
    quickStats: [
      { label: "Model Accuracy", value: "82%+", sub: "Deepfake Detection" },
      { label: "Inference Speed", value: "<15 sec", sub: "Optimized CPU runtime" },
      { label: "Primary Stack", value: "Next.js + PyTorch", sub: "Web & Deep Learning" },
      { label: "Availability", value: "Immediate", sub: "Full-Time SWE / AI-ML" }
    ]
  },

  projects: [
    {
      id: "career-launch",
      title: "CareerLaunch",
      subtitle: "AI-Powered Technical Interview & Evaluation Platform",
      genre: "Generative AI · Llama-3.3-70b · Autonomous System",
      year: "2024",
      runtime: "Production Deployed",
      rating: "SYSTEM v1.4",
      score: "99% System Benchmark",
      role: "Lead Full-Stack & AI Systems Architect",
      featured: true,
      accentColor: "#00f0ff",
      summary: "Autonomous technical evaluation engine combining Groq-accelerated Llama-3.3-70b real-time interviews, GD simulators, and intelligent ATS resume matching algorithms.",
      techStack: ["TypeScript", "Next.js 14", "FastAPI", "Groq API (Llama-3.3-70b)", "SQLite", "NextAuth", "Tailwind CSS"],
      bulletPoints: [
        "Built a full-stack platform with AI Mock Interviews, GD Simulator, Resume Builder, ATS Scorer, JD Matcher, and Cover Letter Generator.",
        "Integrated the Groq LLM API for real-time AI feedback and sub-second response generation across multiple interactive evaluation modules.",
        "Implemented Google OAuth authentication with NextAuth and engineered a tiered subscription pricing system with secure session token validation."
      ],
      metrics: [
        { label: "LLM Model", value: "Llama-3.3-70b" },
        { label: "Response Latency", value: "<800ms via Groq" },
      ],
      githubUrl: "https://github.com/officialkrishna2455-tech/Engineering-Student-Interview-Preparing-Platform",
      interactiveType: "interview"
    },
    {
      id: "attendance-system",
      title: "Real-Time FaceNet Attendance",
      subtitle: "Biometric Facial Recognition & Identity Telemetry Engine",
      genre: "Computer Vision · Deep Neural Embeddings · Security",
      year: "2024",
      runtime: "Real-Time 30 FPS",
      rating: "VISION CORE",
      score: "98% Detection Rate",
      role: "Computer Vision & Backend Engineer",
      featured: true,
      accentColor: "#3b82f6",
      summary: "Multi-face recognition engine powered by CNN + FaceNet 512D embeddings, equipped with live telemetry monitoring and automated Excel reporting.",
      techStack: ["TypeScript", "Next.js 15", "Python", "Flask", "PyTorch", "FaceNet", "OpenCV", "MTCNN"],
      bulletPoints: [
        "Engineered a real-time attendance system using CNN + FaceNet deep learning models for high-accuracy multi-target face recognition.",
        "Built a live telemetry dashboard with session monitoring, dynamic record management, and automated Excel export for academic administration.",
        "Implemented JWT authentication, bcrypt password hashing, and role-based access control (Teacher/Admin); designed a multi-face detection pipeline using MTCNN."
      ],
      metrics: [
        { label: "Detection Engine", value: "MTCNN + FaceNet" },
        { label: "Pipeline", value: "Live Multi-Face" },
        { label: "Security", value: "JWT + Bcrypt RBAC" }
      ],
      githubUrl: "https://github.com/officialkrishna2455-tech/Attendance-Marking-System-Using-Facial-Recognition",
      interactiveType: "facenet"
    },
    {
      id: "deepfake-detector",
      title: "DeepFake Detector / AI Architect",
      subtitle: "AI Forensics & Scalable Neural Systems Pipeline",
      genre: "AI Forensics · Temporal Sequence Modeling · Neural Networks",
      year: "2025",
      runtime: "15s CPU Inference",
      rating: "FORENSIC v2",
      score: "82% Accuracy",
      role: "Deep Learning Research & Engineer",
      featured: true,
      accentColor: "#ef4444",
      summary: "Forensic video manipulation detector combining spatial CNNs with temporal BiLSTMs to unmask synthetic media on standard consumer hardware.",
      techStack: ["Python", "Next.js", "Flask", "PyTorch", "MTCNN", "ResNet-50", "BiLSTM", "OpenCV"],
      bulletPoints: [
        "Built a full-stack deepfake detection app (Next.js frontend, Flask API, PyTorch pipeline) using a hybrid CNN-LSTM model (ResNet-50 + BiLSTM), achieving 82% classification accuracy.",
        "Handled a severe 4:1 class imbalance via WeightedRandomSampler and a calibrated confidence threshold (0.575) to minimize false negatives.",
        "Ensured privacy with a transient /tmp file lifecycle and JWT auth, running inference in 15s on standard CPU with no GPU required."
      ],
      metrics: [
        { label: "Classification", value: "82% Accuracy" },
        { label: "Architecture", value: "ResNet-50 + BiLSTM" },
        { label: "Threshold", value: "0.575 Calibrated" }
      ],
      githubUrl: "https://github.com/officialkrishna2455-tech/AI-App-Architect",
      interactiveType: "deepfake"
    },
    {
      id: "ecommerce-platform",
      title: "Nexus Commerce",
      subtitle: "High-Performance Full-Stack Commerce Architecture",
      genre: "Modern Web Architecture · High-Concurrency Web",
      year: "2024",
      runtime: "Sub-Second TTFB",
      rating: "STOREFRONT v3",
      score: "99 Lighthouse",
      role: "Full-Stack Frontend Engineer",
      featured: false,
      accentColor: "#10b981",
      summary: "Modern, high-conversion commercial storefront engineered with Next.js, server components, and fluid interactive ergonomics.",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "React", "Node.js"],
      bulletPoints: [
        "Developed a modern, performance-optimized e-commerce platform focused on responsive design and seamless user experience.",
        "Crafted fluid cart mechanics, instant product search filters, and mobile-first micro-interactions."
      ],
      metrics: [
        { label: "Lighthouse", value: "99 Performance" },
        { label: "Design System", value: "Custom Tailwind" },
        { label: "Cart Hydration", value: "<12ms" }
      ],
      githubUrl: "https://github.com/officialkrishna2455-tech/E-Commerce-Website",
      interactiveType: "ecommerce"
    }
  ] as Project[],

  skillCategories: [
    {
      category: "Languages",
      department: "Core Algorithms & Syntax",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Expert", description: "Deep learning models, FastAPI/Flask backends, data pipelines & scientific computing", popular: true },
        { name: "TypeScript", level: "Advanced", description: "Type-safe Next.js architectures, modern frontends & scalable APIs", popular: true },
        { name: "JavaScript", level: "Advanced", description: "ES6+, async event loops, DOM manipulation & client-side rendering" },
        { name: "SQL", level: "Proficient", description: "Relational querying, schema optimization & data aggregation" },
        { name: "HTML5 / CSS3", level: "Expert", description: "Semantic markup, responsive layouts & high-performance UI animations" }
      ]
    },
    {
      category: "AI & Machine Learning",
      department: "Neural Networks & Vision Engines",
      iconName: "BrainCircuit",
      skills: [
        { name: "PyTorch", level: "Advanced", description: "Custom neural architectures, CNN-LSTM training, loss weighting & transfer learning", popular: true },
        { name: "FaceNet-PyTorch", level: "Advanced", description: "Facial landmark vector embeddings & real-time identity recognition", popular: true },
        { name: "OpenCV", level: "Advanced", description: "Video stream processing, frame extraction, bounding boxes & image transforms" },
        { name: "Groq API (LLMs)", level: "Advanced", description: "Ultra-low latency inference with Llama-3.3-70b & structured prompt pipelines", popular: true },
        { name: "Generative AI", level: "Advanced", description: "RAG setups, LLM agents, context framing & prompt engineering" },
        { name: "scikit-learn", level: "Proficient", description: "Feature engineering, classification metrics, confusion matrices & sampling" }
      ]
    },
    {
      category: "Frontend Engineering",
      department: "Client Interfaces & Motion Physics",
      iconName: "Layout",
      skills: [
        { name: "Next.js 14 / 15", level: "Expert", description: "App Router, SSR, Server Actions, Route Handlers & performance tuning", popular: true },
        { name: "React", level: "Expert", description: "Hooks, custom state orchestration, modular component systems" },
        { name: "Tailwind CSS", level: "Expert", description: "Modern utility-first styling, responsive grids & design tokens" },
        { name: "Framer Motion", level: "Advanced", description: "Fluid spring animations, layout transitions & micro-interactions", popular: true },
        { name: "Three.js & Canvas", level: "Intermediate", description: "3D scenes, particle meshes, volumetric lighting & visual shaders" }
      ]
    },
    {
      category: "Backend & Systems",
      department: "Production Infrastructure & Async APIs",
      iconName: "Server",
      skills: [
        { name: "FastAPI", level: "Advanced", description: "High-concurrency async REST endpoints, Pydantic validation & OpenAPI documentation", popular: true },
        { name: "Flask", level: "Advanced", description: "Microservices for PyTorch model inference & computer vision endpoints" },
        { name: "Node.js", level: "Advanced", description: "Event-driven runtime, background workers & API aggregation" },
        { name: "JWT Auth & OAuth", level: "Advanced", description: "Role-based access control (RBAC), bcrypt hashing & NextAuth Google flows", popular: true }
      ]
    },
    {
      category: "Databases & Storage",
      department: "Data Persistence & Schemas",
      iconName: "Database",
      skills: [
        { name: "SQLite", level: "Proficient", description: "Embedded relational storage for rapid local & lightweight production", popular: true },
        { name: "MongoDB", level: "Proficient", description: "Document schemas, JSON persistence & flexible clustering" },
        { name: "JSON Storage", level: "Proficient", description: "Lightweight config stores, transient session states & cache layers" }
      ]
    },
    {
      category: "DevOps & Cloud",
      department: "Containerization & Cloud Distribution",
      iconName: "Cloud",
      skills: [
        { name: "Docker", level: "Proficient", description: "Containerized Python AI inference environments & reproducible setups", popular: true },
        { name: "Git & GitHub", level: "Advanced", description: "Branching strategies, CI/CD integrations & version control workflows" },
        { name: "Vercel / Render / Netlify", level: "Advanced", description: "Zero-downtime serverless & container deployments", popular: true },
        { name: "AWS EC2 Basics", level: "Proficient", description: "Virtual instance lifecycle, security groups & cloud hosting" }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      id: "cert-anthropic",
      title: "Anthropic Claude Code in Action",
      issuer: "Anthropic",
      year: "2026",
      badge: "Verified Credential",
      description: "Advanced mastery in leveraging state-of-the-art agentic AI workflows, autonomous developer tooling, and prompt architecture.",
      skillsLearned: ["Agentic AI", "Prompt Architecture", "AI Pair Programming", "Autonomous Coding"],
      accent: "#f59e0b"
    },
    {
      id: "cert-aws-ec2",
      title: "AWS EC2 Fundamentals",
      issuer: "KodeKloud",
      year: "2024",
      badge: "Cloud Certified",
      description: "Hands-on expertise in AWS Elastic Compute Cloud deployment, IAM roles, security configurations, and cloud networking.",
      skillsLearned: ["AWS EC2", "VPC & Security Groups", "Cloud Compute", "Linux Administration"],
      accent: "#0ea5e9"
    },
    {
      id: "cert-cloud-fund",
      title: "Cloud Computing Fundamentals",
      issuer: "KodeKloud",
      year: "2024",
      badge: "Architecture Certified",
      description: "Comprehensive foundational knowledge of cloud architectures, multi-tenant infrastructure, SaaS/PaaS/IaaS models, and reliability engineering.",
      skillsLearned: ["Cloud Architecture", "Distributed Systems", "Storage & Compute", "Reliability"],
      accent: "#8b5cf6"
    }
  ] as Certification[]
};
