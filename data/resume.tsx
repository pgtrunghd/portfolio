import { Icon } from "@/components/icons";
import { Code2, Globe, Home, Notebook } from "lucide-react";

export const DATA = {
  name: "Trung Pham",
  url: process.env.NEXT_PUBLIC_APP_URL,
  initial: "TP",
  location: "Hanoi, Vietnam",
  description: "As a frontend developer. I love building a website",
  summary:
    "I am working as a frontend developer at a software company, with 2 years of experience in web development since starting my career in 2022. I focus on creating user-focused applications and am currently expanding my expertise in backend development, aiming to transition into a DevOps role in the future.",
  avatarUrl: "avatar.jpg",
  work: [
    {
      company: "Bytesoft",
      href: "https://bytesoft.vn/",
      logoUrl: "bytesoft.webp",
      location:
        "Tầng 12, Tòa văn phòng 1, Tổ hợp Sunsquare, Số 21 Lê Đức Thọ, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội",
      title: "Frontend Developer",
      start: "March 2022",
      end: "Present",
      description:
        "Developed responsive web interfaces using HTML5, CSS3, JavaScript, and React.js. Collaborated with designers and backend teams to implement and deploy user-friendly features. Optimized website performance and ensured cross-browser compatibility. Worked with Git and Agile workflows to meet project milestones.",
    },
    {
      company: "Bytesoft",
      href: "https://bytesoft.vn/",
      logoUrl: "bytesoft.webp",
      location:
        "Tầng 12, Tòa văn phòng 1, Tổ hợp Sunsquare, Số 21 Lê Đức Thọ, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Hà Nội",
      title: "Intern Frontend Developer",
      start: "November 2021",
      end: "March 2022",
      description:
        "Built responsive web interfaces using HTML, CSS, JavaScript, and React.js and deploy website to Vercel.",
    },
  ],
  education: [
    {
      school: "FPT Software Academy",
      href: "https://fsoft-academy.edu.vn/",
      degree: "Frontend Developer",
      location: "Hanoi, Vietnam",
      start: "March 2021",
      end: "November 2021",
      logoUrl: "fsoft.png",
    },
    {
      school: "Military Technical Academy",
      href: "https://mta.edu.vn/",
      degree: "Engineer's Degree of Electronics and Telecommunications",
      location: "Hanoi, Vietnam",
      start: "September 2015",
      end: "January 2021",
      logoUrl: "mta.png",
    },
  ],
  skills: [
    {
      name: "React",
      icon: "react.svg",
    },
    {
      name: "Next.js",
      icon: "next.svg",
    },
    {
      name: "Typescript",
      icon: "typescript.svg",
    },
    {
      name: "PostgreSQL",
      icon: "postgreSQL.svg",
    },
    {
      name: "Node.js",
      icon: "node.svg",
    },
    {
      name: "NestJS",
      icon: "nest.svg",
    },
  ],
  projects: [
    {
      title: "Bvote",
      href: "https://bvote.vn/",
      description:
        "The landing page of Bvote: Online solutions For Annual General Meeting of Shareholders",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://bvote.vn/",
          icon: <Globe size={12} />,
        },
      ],
      image: "/projects/bvote.png",
    },
    {
      title: "Boffice",
      href: "https://boffice.bytesoft.vn/auth",
      description:
        "The ERP System covers a range of functions such as financial management, human resources, manufacturing, inventory management, sales, and customer relationship management.",
      technologies: [
        "ReactJS",
        "Typescript",
        "Styled-Components",
        "Vite",
        "ExpressJS",
        "MySQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://boffice.bytesoft.vn/auth",
          icon: <Globe size={12} />,
        },
      ],
      image: "/projects/boffice.png",
    },
    {
      title: "ID Bvote",
      href: "https://idtest-web.bvote.vn/sign-in",
      description:
        "An app that manages informations, and activities of the account user. This account allows user to use many of Bvote's services.",
      technologies: [
        "Next.js",
        "Typescript",
        "React Hook Form",
        "SWR",
        "MongoDB",
        "TailwindCSS",
        "ExpressJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://idtest-web.bvote.vn/sign-in",
          icon: <Globe size={12} />,
        },
      ],
      image: "/projects/bvote-id.png",
    },
    {
      title: "Expense Tracker",
      href: "https://expense-tracker-theta-drab-79.vercel.app/",
      description:
        "A web app that allows users to track their expenses and manage their budget.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Redux",
        "React Hook Form",
        "PostgreSQL",
        "NestJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://expense-tracker-theta-drab-79.vercel.app/",
          icon: <Globe size={12} />,
        },
      ],
      image: "/projects/expense-tracker.png",
    },
  ],
  navbar: [
    {
      href: "/",
      icon: <Home size={4} />,
      label: "Home",
    },
    {
      href: "/#projects",
      icon: <Code2 size={4} />,
      label: "Projects",
    },
    {
      href: "/blogs",
      icon: <Notebook size={4} />,
      label: "Blog",
    },
  ],
  contact: {
    social: {
      LinkeIn: {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/pham-trung-b7b12a18b/",
        icon: Icon.linkein,
        navbar: true,
      },
      Github: {
        name: "Github",
        url: "https://github.com/pgtrunghd",
        icon: Icon.github,
        navbar: true,
      },
      Mail: {
        name: "Mail",
        url: "mailto:pgtrung1997@gmail.com",
        icon: Icon.github,
        navbar: false,
      },
    },
  },
};
