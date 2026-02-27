import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  laravel,
  php,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  icrew,
  nexglimpse,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    "title": "Figma Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "iCrewsystems",
    icon: icrew,
    iconBg: "#ffffff",
    date: "Feb 2025 - Present",
    points: [
      "Developing and maintaining web applications using Laravel, Tailwind CSS, and other related technologies.",
      "Collaborating with cross-functional teams to develop high-quality software solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to improve code quality.",
    ],
  },
  {
    title: "Internship Trainee - Full Stack Web Developer",
    company_name: "iCrewsystems",
    icon: icrew,
    iconBg: "#ffffff",
    date: "Jun 2024 - Mar 2025",
    points: [
      "Gained hands-on experience in Laravel and PHP for backend development.",
      "Developed and maintained web applications, improving system performance and scalability.",
      "Worked closely with senior developers to implement best coding practices.",
      "Built and tested new features to enhance user experience.",
    ],
  },
  {
    title: "Freelancer - Full Stack Web Developer",
    company_name: "Newglimpse",
    icon: nexglimpse,
    iconBg: "#ffffff",
    date: "Jan 2023",
    points: [
      "Developed a Hospital Management System, optimizing hospital operations such as appointment scheduling and patient records.",
      "Built custom web applications using HTML, CSS, JavaScript, PHP, Python, and SQL.",
      "Designed and implemented user-friendly interfaces with modern UI frameworks.",
      "Integrated databases and optimized backend performance for improved efficiency.",
    ],
  },
];

const Achievements = [
  {
    title: "Full Stack Developer",
    company_name: "iCrewsystems",
    icon: icrew,
    iconBg: "#ffffff",
    date: "Feb 2025 - Present",
    points: [
      "Developing and maintaining web applications using Laravel, Tailwind CSS, and other related technologies.",
      "Collaborating with cross-functional teams to develop high-quality software solutions.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to improve code quality.",
    ],
  },
  {
    title: "Internship Trainee - Full Stack Web Developer",
    company_name: "iCrewsystems",
    icon: icrew,
    iconBg: "#ffffff",
    date: "Jun 2024 - Mar 2025",
    points: [
      "Gained hands-on experience in Laravel and PHP for backend development.",
      "Developed and maintained web applications, improving system performance and scalability.",
      "Worked closely with senior developers to implement best coding practices.",
      "Built and tested new features to enhance user experience.",
    ],
  },
  {
    title: "Freelancer - Full Stack Web Developer",
    company_name: "Newglimpse",
    icon: nexglimpse,
    iconBg: "#ffffff",
    date: "Jan 2023",
    points: [
      "Developed a Hospital Management System, optimizing hospital operations such as appointment scheduling and patient records.",
      "Built custom web applications using HTML, CSS, JavaScript, PHP, Python, and SQL.",
      "Designed and implemented user-friendly interfaces with modern UI frameworks.",
      "Integrated databases and optimized backend performance for improved efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vero saepe omnis voluptatum illo, molestiae vitae blanditiis. Porro quod consectetur fugiat quaerat. Tempora quidem vitae dicta obcaecati doloribus facere?",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vero saepe omnis voluptatum illo, molestiae vitae blanditiis. Porro quod consectetur fugiat quaerat. Tempora quidem vitae dicta obcaecati doloribus facere?",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vero saepe omnis voluptatum illo, molestiae vitae blanditiis. Porro quod consectetur fugiat quaerat. Tempora quidem vitae dicta obcaecati doloribus facere?",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, Achievements };
