import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    logo,
    python,
    java,
    zenith_coverimage,
    todo,
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
      title: "Content Writer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Personal Projects",
      icon: logo,
      iconBg: "#f5f5f5",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Web Developer",
      company_name: "Personal Projects",
      icon: logo,
      iconBg: "#f5f5f5",
      points: [
        "Developing and maintaining web applications using React.js, javascript, php and other related technologies.",
        "Since the start of the 2nd Semester, I have been able to create multiple basic to advanced projects or websites with the knowledge gained.",
        "Actively participating in web development activites and seminars and learning new technologies everyday.",
      ],
    },
    {
      title: "Data Scientist",
      company_name: "Personal Projects",
      icon: logo,
      iconBg: "#f5f5f5",
      points: [
        "Learning to implement various python libraries to create Machine Learning models and eventually predict results to higher accuracies.",
        "Created a project which predicts the amount of spam emails from a dataset. The dataset consisted emails from the Enron Scandal and this project proved to be quite researchful.",
        "Still in the early stages of ML and AI but very passionate about learning further in this field."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The projects created are great and there is still alot of hunger to improve the work.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Can adapt quickly to any task and language and complete it in the nick of time.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "Active participation in various activities and in constant need of learning. Great work altogether.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Zenith",
      description:
        "Web-based platform that allows users to select and upload pictures of any category. Users can like, comment and download pictures from other users on the platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: zenith_coverimage,
      source_code_link: "https://github.com/Mahimnak/Zenith/tree/master",
      app_link:"https://zenithmk.netlify.app/",
    },
    {
      name: "TO-DO LIST",
      description:
        "A simple React App to write down your list of tasks for the day and check mark it on completion. After completion of this project it has been my go to site to write down my tasks for the day and to get them done.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/Mahimnak/To-Do/tree/master",
      app_link:"https://mkto-do-list.netlify.app/",
    },
    /*{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };