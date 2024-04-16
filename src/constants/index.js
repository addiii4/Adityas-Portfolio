import { UQ, HG, farzi } from "../assets/images";
import {
  AWS, vercel, python, py,
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: AWS,
    name: "AWS",
    type: "Cloud",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: vercel,
    name: "Vercel",
    type: "Web Hosting",
  },
  {
    imageUrl: py,
    name: "Python",
    type: "Programming",
  },
];

export const experiences = [
  {
    title: "Front End Developer",
    company_name: "HeyGuru",
    icon: HG,
    iconBg: "#accbe1",
    date: "February 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Intern",
    company_name: "Farzi Engineer",
    icon: farzi,
    iconBg: "#fbc3bc",
    date: "December 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor's of Software Engineering (Honors)",
    company_name: "The University of Queensland",
    icon: UQ,
    iconBg: "#a2d2ff",
    date: "Graduated July 2023",
    points: [
      "Attained a 25% merit-based scholarship offered by the University of Queensland, recognizing academic achievements and commitment to excellence.",
      "Completed a year-round thesis project as part of the Honors Programme, demonstrating research skills, critical thinking, and dedication to academic pursuits.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/addiii4",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aditya-cheema",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Personal Portfolio Website",
    description: [
      "Creating a portolio website to enhance my full stack development skills and to get hands-on experience developing fully functional web applications.",
      "Pushing the boundaries of web design with captivating visuals and interactive 3D elements powered by JavaScript, React, and Three.js. Ensuring lightning-fast performance with advanced technologies like Vite.js and Node.js.",
      "Technologies Utilized: JavaScript, React, AWS, node.js, next.js, mongoDB and Vercel.",
    ],
    link: "https://github.com/addiii4/Adityas-Portfolio",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Visual Interventions for preventing cyber-attacks in VR/XR",
    description: [
      "Identified key challenges in preventing cyber-attacks in VR/XR environments through in-depth research. Increased usability of reporting features by 33% while utilizing repetitive prototyping to assess the effectiveness of embodied reporting mechanisms.",
      "Developed a new unique method to access the reporting menu - Embodied Reporting Mechanisms. These are buttons or gestures linked to the user’s physique in a virtual environment and received great commendation for authenticity.",
      "Designed and executed a research methodology to investigate the effectiveness of embodied reporting mechanisms, yielding valuable insights for enhancing user safety and preventing cyber-attacks, leading to a 50% improvement in user safety perception.",
      "Technologies Utilized: Unity, C#, Figma, Research methods, data analysis tools.",
    ],
    link: "https://docs.google.com/document/d/e/2PACX-1vSbgYHvTIH6_DmgXe3aHcNOvl9MmnReXUtJMrsEfFyuHNg_c9MktmYoo3FlzdQ19NTH4D3xENt8qg7O/pub",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Multi-Modal Social Welfare Campaign",
    description: [
      "Our group of 6 was responsible for a 20% increase in awareness about the loneliness in society among older people by developing an interactive campaign to prompt community engagement.",
      "Integrated functionalities such as interactive live-data display billboards, a campaign home website, and an online research collection survey, enabling real-time data collection and analysis, leading to a 30% improvement in understanding community needs.",
      "Technologies Utilized: React, node.js, JavaScript, live-data display, online survey platform.",
    ],
    link: "https://github.com/Anwealso/BetterTogether",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Retro Racing Game",
    description: [
      "Our team of 32 developers received a 4.2/5 rating on university forums by excelling in developing a retro racing game over the course of multiple sprints, utilizing Java and IntelliJ.",
      "Took the lead in developing the storyline and gameplay of the post apocalyptic retro racer game.",
      "A 40% increase in player retention and satisfaction was attained by the game mechanics we designed and implemented to ensure smooth gameplay and user interaction.",
      "Technologies Utilized: Java, IntelliJ, Adobe Illustrator.",
    ],
    link: "https://github.com/UQdeco2800/2021-ext-studio-2",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Unmanned Firefighting Robot",
    description: [
      "Achieved the most efficient project of our batch by a margin of 30% by designing and prototyping an autonomous firefighting robot model using advanced engineering principles and AutoCAD.",
      "Received a commendation for outstanding performance in simulated firefighting scenarios.",
      "Achieved a 95% success rate in simulated fire fighting missions by Conducting rigorous testing and optimization to ensure reliability and effectiveness in various environmental conditions.",
      "Technologies Utilized: AutoCAD, Robotics, sensor technology, prototyping tools.",
    ],
    link: "https://drive.google.com/drive/folders/1Uvf7fg8EjPfWASa3Hpq6BpcU8PSEypTC",
  },
];
