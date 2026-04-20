import todoImg from "../assets/projects/TodoApp.png";
import studentImg from "../assets/projects/student.png";
import expenseImg from "../assets/projects/expense.png";
import instaImg from "../assets/projects/instagram.png";
import portfolioImg from "../assets/projects/portfolio.png";
import guessImg from "../assets/projects/GuessGame.png";

export const projects = [
    {
        id: 6,
        title: "Personal Portfolio",
        description:
            "Modern portfolio showcasing projects, skills, animations, and responsive UI.",
        techStack: ["React", "Tailwind", "Framer Motion"],
        image: portfolioImg,
        liveLink: "https://your-portfolio-link.com",
        repoLink: "https://github.com/yourusername/portfolio",
    },
    {
        id: 5,
        title: "Instagram Clone",
        description:
            "Instagram-inspired UI with feed layout, posts, and responsive design.",
        techStack: ["React", "Bootstrap"],
        image: instaImg,
        liveLink: "https://instagram-clone-frontend-rufj.vercel.app/",
        repoLink: "https://github.com/shrxvx29/Instagram-clone-frontend",
    },
    {
        id: 4,
        title: "Xpense Tracker",
        description:
            "Track income and expenses with real-time balance updates and simple UI.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: expenseImg,
        liveLink: "https://shrxvx29.github.io/Xpense-Tracker/",
        repoLink: "https://github.com/shrxvx29/Xpense-Tracker",
    },
    {
        id: 3,
        title: "Student Management System",
        description:
            "CRUD-based system to manage student records with structured data handling.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: studentImg,
        liveLink: "https://shrxvx29.github.io/-Student-Management-System/",
        repoLink: "https://github.com/shrxvx29/-Student-Management-System",
    },
    {
        id: 2,
        title: "Todo App",
        description:
            "Task management app with add, delete, and status tracking features.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: todoImg,
        liveLink: "https://shrxvx29.github.io/To-do-App/",
        repoLink: "https://github.com/shrxvx29/To-do-App",
    },
    {
        id: 1,
        title: "Guess Number Game",
        description:
            "Interactive number guessing game with real-time feedback and attempt tracking.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: guessImg,
        liveLink: "https://shrxvx29.github.io/GuessTheNumber/",
        repoLink: "https://github.com/shrxvx29/GuessTheNumber",
    },
];