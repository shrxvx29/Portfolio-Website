import kickKartImage from "../public/images/projectImg/Kickart.webp";
import jwtImage from "../public/images/projectImg/jwt.webp";
import hostelImage from "../public/images/projectImg/hostel.webp";
import portfolioImage from "../public/images/projectImg/portfolio.webp";
import instagramImage from "../public/images/projectImg/ig.webp";
import expenseImage from "../public/images/projectImg/exp.webp";
import studentImage from "../public/images/projectImg/std.webp";
import todoImage from "../public/images/projectImg/todo.webp";
import guessGameImage from "../public/images/projectImg/GuessGame.webp";

export const portfolioData = {
  personal: {
    name: "Saravanan K",
    title: "Full Stack Developer",
    email: "ksaravanan2922@gmail.com",
    phone: "+91 9176806209 ",
    location: "Chennai, Tamil Nadu, India",

    github: "https://github.com/shrxvx29",
    linkedin:
      "https://www.linkedin.com/in/saravanankhere/",

    tagline:
      "Building modern, scalable, and user-focused web applications using the MERN Stack & SpringBoot.",

    bio: `
      Passionate Full Stack Developer with strong skills in React.js,
      JavaScript, Node.js, Express.js,SpringBoot, MySql and MongoDB.
      I enjoy building modern web applications, solving real-world problems,
      and continuously learning new technologies.
    `,
  },

  social: {
    github: "https://github.com/shrxvx29",
    linkedin:
      "https://www.linkedin.com/in/saravanankhere/",
    email: "ksaravanan2922@gmail.com",
  },

  education: [
    {
      degree:
        "Bachelor of Science (BSc) - Computer Science with Data Science",
      institution:
        "St. Thomas College of Arts and Science, Chennai",
      year: "2026",
      cgpa: "7.2",
    },
  ],

  skills: {
    frontend: [
      { name: "React.js", proficiency: 90 },
      { name: "JavaScript", proficiency: 90 },
      { name: "TypeScript", proficiency: 85 },
      { name: "Redux Toolkit", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3", proficiency: 90 },
    ],

    backend: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 85 },
      { name: "REST APIs", proficiency: 85 },
      { name: "JWT Authentication", proficiency: 85 },
      { name: "Socket.IO", proficiency: 80 },
    ],

    database: [
      { name: "MongoDB", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "Redis", proficiency: 75 },
    ],

    tools: [
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 85 },
      { name: "Postman", proficiency: 85 },
      { name: "VS Code", proficiency: 95 },
    ],
  },


projects: [
  // =========================================================
  // 01 — KICKKART
  // =========================================================
  {
    id: 1,
    title: "KickKart",
    category: "Full Stack E-Commerce",
    highlight: "Football Jersey Store • Secure Authentication",
    description:
      "End-to-end jersey store with protected user flows, cart management, product browsing, and Spring Boot APIs backed by MySQL.",
    image: kickKartImage,
    technologies: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    github: "https://github.com/shrxvx29/KickKart-Jersey-Store-",
    live: "https://kickkartstore.netlify.app/",
    featured: true,
  },

  // =========================================================
  // 02 — SPRING SECURITY AUTHENTICATION
  // =========================================================
  {
    id: 2,
    title: "Spring Security Authentication API",
    category: "Backend Authentication & Security",
    highlight: "JWT Authentication • Google OAuth2",
    description:
      "Authentication service that secures registration and login flows, issues JWTs, protects REST endpoints, and supports Google OAuth2 sign-in.",
    image: jwtImage,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "REST API",
    ],
    github: "https://github.com/shrxvx29/springboot-jwt-google-auth",
    live: "https://github.com/shrxvx29/springboot-jwt-google-auth",
    featured: true,
  },

  // =========================================================
  // 03 — HOSTEL ROOM ALLOCATION
  // =========================================================
  {
    id: 3,
    title: "Hostel Room Allocation System",
    category: "Full Stack Management System",
    highlight: "Room Allocation • Student Management",
    description:
      "Data-driven management system for student records, room availability, allocations, authenticated sessions, and dashboard workflows.",
    image: hostelImage,
    technologies: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "Tomcat",
    ],
    github: "https://github.com/shrxvx29/HostelRoomAllocationSystem",
    live: "",
    featured: false,
  },

  // =========================================================
  // 04 — PERSONAL PORTFOLIO
  // =========================================================
  {
    id: 4,
    title: "Personal Portfolio",
    category: "Frontend Web Application",
    highlight: "Interactive UI • Modern Developer Portfolio",
    description:
      "Responsive developer portfolio featuring project showcases, technical skills, career timeline, interactive animations, and modern UI.",
    image: portfolioImage,
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/shrxvx29/Portfolio-Website",
    live: "https://saravanank-portfolio.netlify.app/",
    featured: true,
  },

  // =========================================================
  // 05 — INSTAGRAM CLONE
  // =========================================================
  {
    id: 5,
    title: "Instagram Clone",
    category: "Frontend Web Application",
    highlight: "Responsive Social UI • Feed & Profile",
    description:
      "Instagram-inspired responsive interface featuring feed layouts, posts, profile sections, navigation, and mobile-friendly UI.",
    image: instagramImage,
    technologies: [
      "React",
      "Bootstrap",
      "Vite",
    ],
    github: "https://github.com/shrxvx29/Instagram-clone-frontend",
    live: "https://instagram-clone-frontend-rufj.vercel.app/",
    featured: false,
  },

  // =========================================================
  // 06 — XPENSE TRACKER
  // =========================================================
  {
    id: 6,
    title: "Xpense Tracker",
    category: "Frontend Web Application",
    highlight: "Expense Tracking • Income & Balance Management",
    description:
      "Expense management application for tracking income, expenses, balance updates, and transaction information through a simple responsive interface.",
    image: expenseImage,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/shrxvx29/Xpense-Tracker",
    live: "https://shrxvx29.github.io/Xpense-Tracker/",
    featured: false,
  },

  // =========================================================
  // 07 — STUDENT MANAGEMENT
  // =========================================================
  {
    id: 7,
    title: "Student Management System",
    category: "Frontend Web Application",
    highlight: "CRUD Operations • Student Record Management",
    description:
      "CRUD-based web application for creating, updating, deleting, and managing student records with structured client-side data handling.",
    image: studentImage,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/shrxvx29/-Student-Management-System",
    live: "https://shrxvx29.github.io/-Student-Management-System/",
    featured: false,
  },

  // =========================================================
  // 08 — TODO APP
  // =========================================================
  {
    id: 8,
    title: "Todo App",
    category: "Frontend Web Application",
    highlight: "Task Management • Completion Tracking",
    description:
      "Lightweight task management application with task creation, deletion, completion tracking, and responsive interaction.",
    image: todoImage,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/shrxvx29/To-do-App",
    live: "https://shrxvx29.github.io/To-do-App/",
    featured: false,
  },

  // =========================================================
  // 09 — GUESS NUMBER
  // =========================================================
  {
    id: 9,
    title: "Guess Number Game",
    category: "Frontend Web Application",
    highlight: "Random Number Generation • Input Validation",
    description:
      "Interactive browser game with random number generation, user input validation, attempt tracking, and real-time feedback.",
    image: guessGameImage,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/shrxvx29/GuessTheNumber",
    live: "https://shrxvx29.github.io/GuessTheNumber/",
    featured: false,
  },
],


  experience: [
    {
      company: "Open to Opportunities",
      position: "MERN Stack Developer",
      duration: "2025 - Present",
      description:
        "Building full-stack web applications using React, TypeScript, Node.js, Express.js, and MongoDB.",
      achievements: [
        "Built multiple MERN Stack projects",
        "Developed responsive web applications",
        "Implemented authentication and REST APIs",
      ],
    },
  ],

  services: [
    {
      title: "Frontend Development",
      description:
        "Modern responsive UI development using React.js and Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "Backend Development",
      description:
        "REST API development with Node.js, Express.js and MongoDB.",
      icon: "⚙️",
    },
    {
      title: "Full Stack Development",
      description:
        "Complete MERN stack web application development.",
      icon: "🚀",
    },
  ],

  testimonials: [
    {
      name: "Coming Soon",
      role: "Future Client",
      company: "Portfolio",
      content:
        "Testimonials will be updated after professional collaborations.",
      rating: 5,
    },
  ],

  certifications: [
    {
      title: "HTML & CSS",
      issuer: "HCL-Guvi",
      year: "2025",
      credentialId: "9599uF6309X78y71N7",
    },
    {
      title: "AI Tools Workshop",
      issuer: "Be10X",
      year: "2025",
      credentialId: "9599uF6309X7854g1N7",
    },
  ],

  currentlyLearning: [
    "Next.js",
    "System Design",
    "Performance Optimization",
    "Advanced React Patterns",
  ],
};
