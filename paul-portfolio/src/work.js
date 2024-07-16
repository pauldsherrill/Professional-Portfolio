import symantic2 from "./assets/horiseon2.png";
import portfolio1 from "./assets/portfolio1.png";
import employeeTracker1 from "./assets/employeetracker1.png";
import personalBlog1 from "./assets/blog1-1.png";
import taskboard1 from "./assets/taskboard1.png";
import fitness1 from "./assets/fitness-tracker1.png";
import weather2 from "./assets/weather-dashboard2.png";
import logo1 from "./assets/logo-generator1.png";
import readme1 from "./assets/readme-generator.png";
import noteTaker1 from "./assets/note-taker1.png";
import employeedb1 from "./assets/employeedb.png";
import eCommerce1 from "./assets/e-commerce1.png";
import bootcamp1 from "./assets/bootcamp-banking1.png";
import techBlog1 from "./assets/blog2-1.png";
import socialNetwork1 from "./assets/social-network1.png";
import placeholder from "./assets/placeholder.png";
import css from "./assets/css.png";
import html from "./assets/html.png";
import javascript from "./assets/javascript.png";
import bootstrap from "./assets/bootstrap.png";
import tailwind from "./assets/tailwind.png";
import jquery from "./assets/jquery.png";
import node from "./assets/node.png";
import express from "./assets/express.png";
import postgresql from "./assets/postgresql.png";
import insomnia from "./assets/insomnia.png";
import handlebars from "./assets/handlebars.png";
import mongodb from "./assets/mongodb.jpg";
import graphql from "./assets/graphql.png";
import react from "./assets/react.png";
import redux from "./assets/redux.png";

const projects = [
  {
    href: "repos#symantic-html",
    src: symantic2,
    alt: "SYMANTIC HTML",
    classes: "img-fluid html",
    id: 1,
  },
  {
    href: "repos#portfolio",
    src: portfolio1,
    alt: "BEGINNER PORTFOLIO",
    classes: "img-fluid html css",
    id: 2,
  },
  {
    href: "repos#payroll",
    src: employeeTracker1,
    alt: "EMPLOYEE PAYROLL TRACKER",
    classes: "img-fluid html js",
    id: 3,
  },
  {
    href: "repos#personal-blog",
    src: personalBlog1,
    alt: "PERSONAL BLOG",
    classes: "img-fluid html css js",
    id: 4,
  },
  {
    href: "repos#taskboard",
    src: taskboard1,
    alt: "TASKBOARD",
    classes: "img-fluid js bs jq html",
    id: 5,
  },
  {
    href: "repos#fitness",
    src: fitness1,
    alt: "HEALTH AND FITNESS TRACKER",
    classes: "img-fluid html js tw",
    id: 6,
  },
  {
    href: "repos#weather",
    src: weather2,
    alt: "WEATHER DASHBOARD",
    classes: "img-fluid html js bs",
    id: 7,
  },
  {
    href: "repos#logo",
    src: logo1,
    alt: "LOGO GENERATOR",
    classes: "img-fluid js node",
    id: 8,
  },
  {
    href: "repos#readme",
    src: readme1,
    alt: "README GENERATOR",
    classes: "img-fluid js node",
    id: 9,
  },
  {
    href: "repos#note-taker",
    src: noteTaker1,
    alt: "NOTE TAKER",
    classes: "img-fluid html css bs express js node",
    id: 10,
  },
  {
    href: "repos#employee",
    src: employeedb1,
    alt: "EMPLOYEE DATABASE",
    classes: "img-fluid js node insomnia express pg",
    id: 11,
  },
  {
    href: "repos#e-commerce",
    src: eCommerce1,
    alt: "E-COMMERCE BACKEND",
    classes: "img-fluid js node insomnia express pg",
    id: 12,
  },
  {
    href: "repos#bootcamp",
    src: bootcamp1,
    alt: "BOOTCAMP BANKING",
    classes: "img-fluid css js jq bs insomnia node express pg hb html",
    id: 13,
  },
  {
    href: "repos#tech-blog",
    src: techBlog1,
    alt: "TECH BLOG",
    classes: "img-fluid html css js jq bs insomnia node express pg hb",
    id: 14,
  },
  {
    href: "repos#social-network",
    src: socialNetwork1,
    alt: "SOCIAL NETWORK API",
    classes: "img-fluid js insomnia node mdb",
    id: 15,
  },
  {
    href: "repos.html#payroll-tracker",
    src: placeholder,
    alt: "PROJECT IN PROGRESS",
    classes: "img-fluid",
    id: 16,
  },
  {
    href: "repos.html#payroll-tracker",
    src: placeholder,
    alt: "PROJECT IN PROGRESS",
    classes: "img-fluid",
    id: 17,
  },
  {
    href: "repos.html#payroll-tracker",
    src: placeholder,
    alt: "PROJECT IN PROGRESS",
    classes: "img-fluid",
    id: 18,
  },
  {
    href: "repos.html#payroll-tracker",
    src: placeholder,
    alt: "PROJECT IN PROGRESS",
    classes: "img-fluid",
    id: 19,
  },
  {
    href: "repos.html#payroll-tracker",
    src: placeholder,
    alt: "PROJECT IN PROGRESS",
    classes: "img-fluid",
    id: 20,
  },
  // Add more project objects here
];

const skills = [
  {
    href: "#",
    src: html,
    alt: "HTML5",
    classes: "html",
  },
  {
    href: "#",
    src: css,
    alt: "CSS3",
    classes: "css",
  },
  {
    href: "#",
    src: javascript,
    alt: "JAVASCRIPT",
    classes: "js",
  },
  {
    href: "#",
    src: bootstrap,
    alt: "BOOTSTRAP",
    classes: "bs",
  },
  {
    href: "#",
    src: tailwind,
    alt: "TAILWIND",
    classes: "tw",
  },
  {
    href: "#",
    src: jquery,
    alt: "JQUERY",
    classes: "jq",
  },
  {
    href: "#",
    src: node,
    alt: "NODE.JS",
    classes: "node",
  },
  {
    href: "#",
    src: express,
    alt: "EXPRESS.JS",
    classes: "node",
  },
  {
    href: "#",
    src: postgresql,
    alt: "POSTGRESQL",
    classes: "pg",
  },
  {
    href: "#",
    src: insomnia,
    alt: "INSOMNIA",
    classes: "insomnia",
  },
  {
    href: "#",
    src: handlebars,
    alt: "HANDLEBARS",
    classes: "hb",
  },
  {
    href: "#",
    src: mongodb,
    alt: "MONGODB",
    classes: "mdb",
  },
  {
    href: "#",
    src: graphql,
    alt: "GAPHQL",
    classes: "gql",
  },
  {
    href: "#",
    src: react,
    alt: "REACT.JS",
    classes: "react",
  },
  {
    href: "#",
    src: redux,
    alt: "REDUX",
    classes: "redux",
  },
  // Add more skill objects here
];

export { projects, skills };
