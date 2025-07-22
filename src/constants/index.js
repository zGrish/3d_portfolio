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
  aarvath,
  volunteer,
  apple,

  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Design & Content Lead",
    company_name: "Aarvath Mobitech Pvt. Ltd.",
    icon: aarvath,
    iconBg: "#fff",
    date: "Jul 2023 - Nov 2024",
    certificate: "/src/assets/company/aarvath_certificate.pdf",
    points: [
      "Led the design and development team.",
      "Represented the student-lead startup at tech events.",
      "Won Cisco's ThingQbator Cohort 6, securing ₹5,00,000 INR in funding.",
      "Managed internal and external communications, workflow, and contributed to frontend development."
    ],
  },
  {
    title: "Sales Assistant",
    company_name: "Apple Mart Valencia Branch",
    icon: apple,
    iconBg: "#fff",
    date: "Aug 2022 - Sept 2022",
    points: [
      "Worked part-time as a sales assistant.", 
      "Handled billing, inventory, and customer interactions at the local retail store."
    ],
  },
  {
    title: "Social Worker [Volunteer]",
    company_name: "Several Non-Profits",
    icon: volunteer,
    iconBg: "#fff",
    date: "Jul 2017 - Apr 2020",
    points: [
      "Volunteered at Ramakrishna Math & Mission and Sanathana Seva Trust, contributing to community service.", 
      "Represented Swacch Mangaluru Abhiyan as an ambassador, organising and participating in city cleanups, restoring public property.",
      "Helped with outreach, documentation, and events.",
      "Recognised with the “Swacchata Senani” and several other titles for consistent involvement."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "blah blah lorem ipsum idk man",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acne Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  /*
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Grishma does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Grishma optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
*/
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
  },
];

export { services, technologies, experiences, testimonials, projects };