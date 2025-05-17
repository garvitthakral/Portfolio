import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';

const projectsData = [
    {
        id: "ss!1",
        title: "StyleShare",
        description: "A social impact project built during a hackathon, designed to provide the poor and underprivileged with a dignified online shopping experience where they can choose what they need freely, just like any regular shopper.",
        challengesFaced: [
            "Implementing role-based access control with JWT",
            "Building a complete backend API with authentication",
            "Designing a clean UI within the hackathon time limit",
        ],
        whatILearned: [
            "Role-based access control & throughout pages",
            "Building under pressure, build under 36hr",
            "How to have creative approch for a real world problem",
        ],
        demoLink: "https://www.youtube.com/watch?v=bQaKgMp97EU",
        techUsed: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "JWT"],
        links: [
            {to: "https://github.com/garvitthakral/SoloStack_AMUHACKS4.0?tab=readme-ov-file", icon: GitHubIcon }, //github
            {to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/", icon: LinkedInIcon }, //linkedin
            {to: "https://solostack-amuhacks4-0.onrender.com/", icon: LanguageIcon }, //live
            {to: "https://www.youtube.com/watch?v=bQaKgMp97EU", icon: YouTubeIcon }, //demo
        ]
    },
    {
        id: "sp!1",
        title: "Stock Pulse - Zerodha clone",
        description: "A 1:1 replica of Zerodha’s stock trading and monitoring platform, developed to enhance my learning of full-stack architecture, real-time data handling, and user experience in financial applications.",
        challengesFaced: [
            "Designing a clean and intuitive UI to display complex financial data",
            "Implementing the logic for buying and selling stocks with proper validations",
            "Dynamically updating the UI based on user orders and real-time data changes"
        ],
        whatILearned: [
            "Visualizing data effectively using pie and bar charts for better user insights",
            "Structuring a scalable and maintainable backend architecture",
            "Enhancing UI design skills and mastering TailwindCSS for responsive layouts"
        ],
        demoLink: "https://www.youtube.com/watch?v=G5P0G_Prbk4",
        techUsed: ["MongoDB", "Express", "React", "Node.js"],
        links: [
            {to: "https://github.com/garvitthakral/StockPulse", icon: GitHubIcon }, //github
            {to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/", icon: LinkedInIcon }, //linkedin
            {to: "https://stockpulse-frontend-x8d6.onrender.com/", icon: LanguageIcon }, //live
            {to: "https://www.youtube.com/watch?v=G5P0G_Prbk4", icon: YouTubeIcon } //demo
        ],
    },
    {
        id: "amv!1",
        title: "Airbnb Mini-version",
        description: "It was my my first full-stack project, a Mini-Airbnb, which is an online hotel and stay booking platform!",
        challengesFaced: [
            "Handling multiple pages and ensuring smooth navigation",
            "Learning and working with EJS templating language",
            "Understanding and applying the MVC (Model-View-Controller) architecture"
        ],
        whatILearned: [
            "Setting up and managing routes in an Express application",
            "Implementing session management for user authentication and state handling",
            "Proper error handling to improve reliability and user experience"
        ],
        demoLink: null,
        techUsed: ["HTML", "CSS", "JS", "EJS", "MongoDB", "Express", "Node.js"],
        links: [
            {to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/", icon: GitHubIcon }, //github
            {to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/", icon: LinkedInIcon }, //linkedin
            {to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/", icon: LanguageIcon }, //live
            {to: "https://www.linkedin.com/in/garvit-thakral-23a0a130a/", icon: YouTubeIcon }, //demo
        ]
    },
]

export default projectsData;