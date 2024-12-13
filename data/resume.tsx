import { Globe, Home, Linkedin, Notebook } from "lucide-react";

export const DATA = {
  name: "Trung P",
  initial: "TP",
  location: "Hanoi, Vietnam",
  description: "As a frontend developer. I love building a website",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, I pursued a double degree in computer science and business, interned at big tech companies in Silicon Valley, and competed in over 21 hackathons for fun. I also had the pleasure of being a part of the first ever in-person cohort of buildspace called buildspace sf1.",
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
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum illo quas natus mollitia, debitis pariatur porro excepturi blanditiis autem expedita modi repellendus doloribus ex ab eaque totam cupiditate voluptatum?",
    },
  ],
  education: [
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, placeat, dolore inventore quaerat, corrupti iure ullam magni esse sint cum repudiandae eos. Odit atque ipsam laudantium eligendi vitae, sed veniam.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://bvote.vn/",
          icon: <Globe size={12} />,
        },
      ],
      image:
        "https://dichvuseohot.com/wp-content/uploads/2023/10/best-landing-page-examples.jpg",
    },
    {
      title: "Boffice",
      href: "https://boffice.bytesoft.vn/auth",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, placeat, dolore inventore quaerat, corrupti iure ullam magni esse sint cum repudiandae eos. Odit atque ipsam laudantium eligendi vitae, sed veniam.",
      technologies: ["ReactJS", "Typescript", "Styled-Components", "NestJS"],
      links: [
        {
          type: "Website",
          href: "https://boffice.bytesoft.vn/auth",
          icon: <Globe size={12} />,
        },
      ],
      image: "/projects/boffice.png",
    },
  ],
  navbar: [
    {
      href: "/",
      icon: <Home size={4} />,
      label: "Home",
    },
    {
      href: "/blog",
      icon: <Notebook size={4} />,
      label: "Blog",
    },
  ],
  contact: {
    social: {
      LinkeIn: {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/pham-trung-b7b12a18b/",
        icon: <Linkedin size={4} />,
        navbar: true,
      },
    },
  },
};
