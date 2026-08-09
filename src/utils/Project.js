import todoImg from "../assets/projects/TodoApp.png";
import studentImg from "../assets/projects/student.png";
import expenseImg from "../assets/projects/expense.png";
import instaImg from "../assets/projects/instagram.png";
import portfolioImg from "../assets/projects/Portfolio.png";
import guessImg from "../assets/projects/GuessGame.png";
import hostelImg from "../assets/projects/hostel.png";
import jwtsecurity from "../assets/projects/Jwt.png";
import kickkart from "../assets/projects/kickart.png";

export const projects = [
  // =========================================================
  // 01 — KICKKART
  // =========================================================
  {
    id: 9,
    title: "KickKart",
    description:
      "Full-stack football jersey e-commerce platform with product browsing, cart management, authentication, user accounts, and secure backend APIs.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    image: kickkart,
    liveLink: "https://kickkartstore.netlify.app/",
    repoLink: "https://github.com/shrxvx29/KickKart-Jersey-Store-",
  },

  // =========================================================
  // 02 — SPRING SECURITY AUTHENTICATION
  // =========================================================
  {
    id: 8,
    title: "Spring Security Authentication API",
    description:
      "Secure authentication backend implementing user registration, login, JWT-based authentication, password security, protected REST APIs, and Google OAuth2 integration.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth2",
      "REST API",
    ],
    image: jwtsecurity,
    liveLink: "https://github.com/shrxvx29/springboot-jwt-google-auth",
    repoLink: "https://github.com/shrxvx29/springboot-jwt-google-auth",
  },

  // =========================================================
  // 03 — HOSTEL ROOM ALLOCATION
  // =========================================================
  {
    id: 7,
    title: "Hostel Room Allocation System",
    description:
      "Full-stack hostel management system for managing students, rooms, allocations, availability, authentication, sessions, and dashboard information.",
    techStack: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "Tomcat",
    ],
    image: hostelImg,
    liveLink:
      "https://github.com/shrxvx29/HostelRoomAllocationSystem",
    repoLink:
      "https://github.com/shrxvx29/HostelRoomAllocationSystem",
  },

  // =========================================================
  // 04 — PORTFOLIO
  // =========================================================
  {
    id: 6,
    title: "Personal Portfolio",
    description:
      "Responsive developer portfolio featuring project showcases, technical skills, career timeline, interactive animations, and modern UI.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: portfolioImg,
    liveLink:
      "https://saravanank-portfolio.netlify.app/",
    repoLink:
      "https://github.com/shrxvx29/Portfolio-Website",
  },

  // =========================================================
  // 05 — INSTAGRAM CLONE
  // =========================================================
  {
    id: 5,
    title: "Instagram Clone",
    description:
      "Instagram-inspired responsive interface featuring feed layouts, posts, profile sections, navigation, and mobile-friendly UI.",
    techStack: [
      "React",
      "Bootstrap",
      "Vite",
    ],
    image: instaImg,
    liveLink:
      "https://instagram-clone-frontend-rufj.vercel.app/",
    repoLink:
      "https://github.com/shrxvx29/Instagram-clone-frontend",
  },

  // =========================================================
  // 06 — EXPENSE TRACKER
  // =========================================================
  {
    id: 4,
    title: "Xpense Tracker",
    description:
      "Expense management application for tracking income, expenses, balance updates, and transaction information through a simple responsive interface.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: expenseImg,
    liveLink:
      "https://shrxvx29.github.io/Xpense-Tracker/",
    repoLink:
      "https://github.com/shrxvx29/Xpense-Tracker",
  },

  // =========================================================
  // 07 — STUDENT MANAGEMENT
  // =========================================================
  {
    id: 3,
    title: "Student Management System",
    description:
      "CRUD-based web application for creating, updating, deleting, and managing student records with structured client-side data handling.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: studentImg,
    liveLink:
      "https://shrxvx29.github.io/-Student-Management-System/",
    repoLink:
      "https://github.com/shrxvx29/-Student-Management-System",
  },

  // =========================================================
  // 08 — TODO APP
  // =========================================================
  {
    id: 2,
    title: "Todo App",
    description:
      "Lightweight task management application with task creation, deletion, completion tracking, and responsive interaction.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: todoImg,
    liveLink:
      "https://shrxvx29.github.io/To-do-App/",
    repoLink:
      "https://github.com/shrxvx29/To-do-App",
  },

  // =========================================================
  // 09 — GUESS NUMBER
  // =========================================================
  {
    id: 1,
    title: "Guess Number Game",
    description:
      "Interactive browser game with random number generation, user input validation, attempt tracking, and real-time feedback.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: guessImg,
    liveLink:
      "https://shrxvx29.github.io/GuessTheNumber/",
    repoLink:
      "https://github.com/shrxvx29/GuessTheNumber",
  },
];