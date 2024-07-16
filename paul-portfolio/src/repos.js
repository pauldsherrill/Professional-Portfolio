import symantic1 from "./assets/horiseon1.png";
import symantic2 from "./assets/horiseon2.png";
import portfolio1 from "./assets/portfolio1.png";
import portfolio2 from "./assets/portfolio2.png";
import employeeTracker1 from "./assets/employeetracker1.png";
import employeeTracker2 from "./assets/employeetracker2.png";
import personalBlog1 from "./assets/blog1-1.png";
import personalBlog2 from "./assets/blog1-2.png";
import taskboard1 from "./assets/taskboard1.png";
import taskboard2 from "./assets/taskboard2.png";
import fitness1 from "./assets/fitness-tracker1.png";
import fitness2 from "./assets/fitness-tracker2.png";
import weather1 from "./assets/weather-dashboard1.png";
import weather2 from "./assets/weather-dashboard2.png";
import logo1 from "./assets/logo-generator1.png";
import logo2 from "./assets/logo-generator2.png";
import readme1 from "./assets/readme-generator.png";
import readme2 from "./assets/readme-generator1.png";
import noteTaker1 from "./assets/note-taker1.png";
import noteTaker2 from "./assets/note-taker2.png";
import employeedb1 from "./assets/employeedb.png";
import employeedb2 from "./assets/employeedb1.png";
import eCommerce1 from "./assets/e-commerce1.png";
import eCommerce2 from "./assets/e-commerce2.png";
import bootcamp1 from "./assets/bootcamp-banking1.png";
import bootcamp2 from "./assets/bootcamp-banking2.png";
import techBlog1 from "./assets/blog2-1.png";
import techBlog2 from "./assets/blog2-2.png";
import socialNetwork1 from "./assets/social-network1.png";
import socialNetwork2 from "./assets/social-network2.png";

const repos = [
  {
    title: "SYMANTIC HTML",
    descriptionOne:
      "This project was my first ever coding assignment with the University of Texas at Austing Coding Bootcamp. For this project, I was tasked with adding symantic HTML and cleaning up the CSS styling page. The actual design of the site was not created nor changed by me. All I did was reorganize the structure of the files to add readability. This entailed changing the div elements to something that was more relevant to the purpose of the element and simplifying the CSS elements so that multiple classes or ID’s weren’t doing the same thing.",
    descriptionTwo:
      "This project was a great first assignment because it taught me the importance of readability and the role that adding symantic HTML plays in that. It was also great practice for building more simplified and efficient files with how I worked in the CSS styling sheet. It is often easy to build lazy code by being redundant in the CSS file but than can make readability a lot more difficult and could potentially cause problems with the actual code. This project established good coding habits that I have used on all of my work so far.",
    imageOne: symantic2,
    imageTwo: symantic1,
    github: "https://github.com/pauldsherrill/homework-1",
    site: "https://pauldsherrill.github.io/homework-1/",
    href: "symantic-html",
    id: 1,
  },
  {
    title: "BEGINNER PORTFOLIO",
    descriptionOne:
      "This project was my first complete webpage I deployed on GitHub. For it, I was tasked with creating a professional portfolio from scratch with unique styling using CSS. The webpage contains a navbar with my name and the sections you can navigate to on the page (about, work, resume, contact) as well as these sections containing images and text. The main priority of this project was to create a clean and unique looking page that I could use to show off my work, experience, and information about myself.",
    descriptionTwo:
      "The webpage is also adjustable for different sizes of screens which was done by adding media queries to the CSS. This was great practice because it taught me the importance of building a webpage for mobile devices first and then working up towards the larger screens because it is easier to adjust the positioning that way. Positioning of the elements was, however, the most challenging aspect of the design but with enough trial and error, it all came together.",
    imageOne: portfolio2,
    imageTwo: portfolio1,
    github: "https://github.com/pauldsherrill/homework-2",
    site: "https://pauldsherrill.github.io/homework-2/",
    href: "portfolio",
    id: 2,
  },
  {
    title: "EMPLOYEE PAYROLL TRACKER",
    descriptionOne:
      "In this project, I was tasked with implementing Javascript code into a JS file so that the user would be prompted with options to add information about employees. From that information, I was tasked with creating an array with the objects the user inputted. From there, I was tasked with calculating and displaying the average salary out of the inputted salaries of the employees and also choosing one of the employees at random.",
    descriptionTwo:
      "This project was my first JavaScript webpage and introduced me to the logic behind a website rather than just the design and structure. Because of that, there was not an emphasis on the design but rather just the functions for handling the employee payroll tracker. In addition, I was given starter code for this project but all of the logic behind the user input needed to be created still.",
    imageOne: employeeTracker2,
    imageTwo: employeeTracker1,
    github: "https://github.com/pauldsherrill/homework-3",
    site: "https://pauldsherrill.github.io/homework-3/",
    href: "payroll",
    id: 3,
  },
  {
    title: "PERSONAL BLOG",
    descriptionOne:
      "In this challenge, I was tasked with creating a two page website to submit and store blog posts. For the first page, I had to create a form where the user could submit a username, a title for their blog post, and the actual content in that post. When submitted, they were to be taken to the second page where their new post could be seen among any previous posts that were already created. If the form had any inputs left empty, a prompt was to pop up to tell them to fill in the form.",
    descriptionTwo:
      " On the next page, I was tasked with adding a light switch to make the page lighter or darker when pressed, a back button to bring them to the previous form page when clicked, and a link to my portfolio in the footer. Besides the JavaScript logic, I was also tasked with creating two HTML pages with unique CSS styling for the JavaScript logic to be able to manipulate. For the styling, I implemented a font from google fonts and then the rest of the styling was handled throught the CSS styling page.",
    imageOne: personalBlog2,
    imageTwo: personalBlog1,
    github: "https://github.com/pauldsherrill/homework-4",
    site: "https://pauldsherrill.github.io/homework-4/",
    href: "personal-blog",
    id: 4,
  },
  {
    title: "TASKBOARD",
    descriptionOne:
      "In this challenge, I was tasked with creating a webpage that could add and store tasks in three different categories: 'To Do', 'In Progress', and 'Done'. On the webpage the user could click 'Add Task' and a form would pop up for them to add a name, due date, and description of the task. When submitted, the task would then be added to the 'To Do' section but could be moved to and from the other sections based on completion status. The task was to be also given a color based on how close it was to being due. Red for overdue, yellow for almost due, and white if it wasn't nearing the deadline.",
    descriptionTwo:
      "I was tasked with using local storage to make the tasks stay when the page was refreshed and deleted when the delete button was clicked. This project was great for learning how to use local storage to store objects on the client-side. It was also great for becoming familiar with jQuery and Bootstrap styling. Fortunately for me, I was given the HTML and CSS files so this allowed me to really focus on getting to learn and practice storing and retrieving data in local storage which has served to be really helpful so far in my career.",
    imageOne: taskboard2,
    imageTwo: taskboard1,
    github: "https://github.com/pauldsherrill/task-board-repo",
    site: "https://pauldsherrill.github.io/task-board-repo/",
    href: "taskboard",
    id: 5,
  },
  {
    title: "HEALTH AND FITNESS TRACKER",
    descriptionOne:
      "The health and fitness tracker was my first group project with the University of Texas at Austin Coding Bootcamp. For this project, we were put into groups of 4 and tasked with creating a front-end web application that used two server-side API’s. As a group we decided to make a health and fitness tracker web application where a user could log a food and see the nutrition facts for it and it would be stored in their daily total, as well as choose exercises to complete, be able to view the instructions for that exercise, and log that exercise to their daily total with notes.",
    descriptionTwo:
      "For this application, we chose to use Tailwind CSS to make the styling simple yet clean. We also used local storage to store the user’s meals and exercises for that day so that it would be displayed everytime they went to the application and could be added to when they logged more meals or exercises. This project was great experience for me to collaborate with other developers and learn how to effectively communicate and plan a project with others. I found it to be a smooth process as we were all able to communicate our strengths and weaknesses and divide the work accordingly. This allowed us to focus on just what we werre working on and really put a lot of effort into it.",
    imageOne: fitness2,
    imageTwo: fitness1,
    github: "https://github.com/pauldsherrill/fitness-tracker-project",
    site: "https://pauldsherrill.github.io/fitness-tracker-project/",
    href: "fitness",
    id: 6,
  },
  {
    title: "WEATHER DASHBOARD",
    descriptionOne:
      "In this challenge, I was tasked with creating a webpage that rerieves data about the weather in an inputted city. This data had to include current weather regarding the weather conditions, temperature, wind speed, and humidity. It also had tt include a 5 day forecast with the previously mentioned information for each of the next 5 days. I was also tasked with storing previously searched city on the page as search history where the user could re-view weather information in a city they had already searched.",
    descriptionTwo:
      "For the styling of this project, I used Bootstrap so I could make a clean yet simple UI and not spend too much time focused on the design of the page and more on the manipulation of the weather API I was using for the application and the local storage I was using to store the user’s past search history.",
    imageOne: weather2,
    imageTwo: weather1,
    github: "https://github.com/pauldsherrill/weather-dashboard",
    site: "https://pauldsherrill.github.io/weather-dashboard/",
    href: "weather",
    id: 7,
  },
  {
    title: "LOGO GENERATOR",
    descriptionOne:
      "This project was my first back-end application as a web developer. For this project, I was tasked with creating a Node.js command line application that takes in user input regarding a logo and generates that logo into an SVG file. The application asks the user three questions: what text to go inside the logo, what color the text should be, what shape the logo should be, and what color the logo should be. It then takes that data and adds it to a SVG file so that the logo will look how the user wants it to.",
    descriptionTwo:
      "For this project, I was also tasked with creating tests to make sure the SVG file matched with the user input. For the actual command line prompts, I used the inquirer prompt technology to specify which questions were multiple choice and which ones weren’t. It is worth noting that this application uses object-oriented programming. This was used to handle the user input for each shape class so that each shape wrote the specific shape dimensions to the SVG file.",
    imageOne: logo2,
    imageTwo: logo1,
    github: "https://github.com/pauldsherrill/logo-generator",
    href: "logo",
    id: 8,
  },
  {
    title: "README GENERATOR",
    descriptionOne:
      "For this project, I was tasked with creating a Node.js command line application that takes in user input regarding a project they have completed or are working on and generates a readme.md file. The application asks the user various questions regarding the project to render a project title, as well as description, installation, usage, contributing, tests, license, and questions categories on the readme.",
    descriptionTwo:
      "For the actual command line prompts, I used the inquirer prompt technology to specify which questions were multiple choice and which ones weren’t as well as add limitations to the answers coming from the user. It is important noting that this application is entirely back-end, so there is no deployed site to view and use. However, there is a link to a walkthrough video on GitHub that shows you the application.",
    imageOne: readme2,
    imageTwo: readme1,
    github: "https://github.com/pauldsherrill/readme-generator",
    href: "readme",
    id: 9,
  },
  {
    title: "NOTE TAKER",
    descriptionOne:
      "For this assignment, I was tasked with building the back end for a note taking application by modifying starter code so that the application can be used to write and save notes. The main goal of this assignment, was to use Express.js to retreive and store data to and from a JSON file. I was given all the front-end code that handled pushing user input into the routes and pulling from the JSON file to update the UI to show the new data.",
    descriptionTwo:
      "For the routes, I created GET, POST, and DELETE routes because all that needed to be handled was the viewing, creation, and deletion of the notes. This project was great practice to learn how back-end routes work and how you can manipulate data by taking user input and using express.js to rewrite a JSON file. This layed the groundworks for my knowledge and ability to build back-end and full stack applications.",
    imageOne: noteTaker2,
    imageTwo: noteTaker1,
    github: "https://github.com/pauldsherrill/note-taker",
    site: "https://note-taker-6sn5.onrender.com/",
    href: "note-taker",
    id: 10,
  },
  {
    title: "EMPLOYEE DATABASE",
    descriptionOne:
      "For this project, I was tasked with creating a Node.js command line application that manages a company's database containing the departments, roles, and employees within the company. I was tasked with making the application responsive to user input so that when the user wants to view the company's departments, roles, and employees, they are presented with tables containing more details about each. I was also tasked with allowing the user to add more departments, roles, and employees to the company's database as well as update an employee's role within the database.",
    descriptionTwo:
      "For this project, I learned and used postgreSQL to create, add, delete , and update data to and from the database. It is only a command line application, so attached to my GitHub repository readme is a link to a walkthrough video that shows how these routes function within the terminal and allows you to view the manipulation of the database.",
    imageOne: employeedb2,
    imageTwo: employeedb1,
    github: "https://github.com/pauldsherrill/employee-tracker",
    href: "employee",
    id: 11,
  },
  {
    title: "E-COMMERCE BACKEND",
    descriptionOne:
      "For this assignment, I was tasked with building the back end for an e-commerce site by modifying starter code. The main goal of this assignment, was to build a functional database and routes that allowed for adding to, updating, and deleting data from the three main models in that database (products, categories, and tags). Thes routes included GET, POST, PUT, and DELETE routes for handling the manipulation of the data.",
    descriptionTwo:
      "To build the models, I used sequelize so I could use JavaScript to build the models that were to be added to the database within the schema. To test the routes, I used Insomnia where I could enter a URL that included either a JSON body or paramaters in the actual URL to specify the change that was to be made within the database. This was a completely back end application, so there is no deployed site to view, however my GitHub repository contains a link to a walkthrough video to view how the application runs.",
    imageOne: eCommerce2,
    imageTwo: eCommerce1,
    github: "https://github.com/pauldsherrill/e-commerce-repo",
    href: "e-commerce",
    id: 12,
  },
  {
    title: "BOOTCAMP BANKING",
    descriptionOne:
      "This project was the second group project assigned by the University of Austin Coding Bootcamp. It is also my first full-stack application. This application showcases the ability to build a real-world, responsive, and interactive web application featuring user authentication, secure handling of sensitive information, and a polished, intuitive UI. We utilized Node.js and Express.js to create a robust RESTful API, and implemented Handlebars.js as our template engine to ensure a dynamic and interactive user experience.",
    descriptionTwo:
      "Our database management was handled through PostgreSQL and Sequelize ORM, ensuring efficient data retrieval and storage. The project also incorporates user authentication with express-session and cookies, protects sensitive information with environment variables, and is deployed on Render for live demonstration. Users can open accounts where they can view manage their balances. Bootcamp Banking is not just a project, but a culmination of hard work, dedication, and the collaborative efforts of our team.",
    imageOne: bootcamp2,
    imageTwo: bootcamp1,
    github: "https://github.com/IvoryRines/Bootcamp-Banking",
    site: "https://bootcamp-banking.onrender.com/",
    href: "bootcamp",
    id: 13,
  },
  {
    title: "TECH BLOG",
    descriptionOne:
      "This project was the first full-stack application I created on my own. I was tasked with creating a blog post site where users could view other user’s blog posts without being logged in, but once registered and logged in, could view, comment on, create, edit, and delete blog posts. This application follows the MVC (model, view, controller) file structure. It utlizes postgreSQL and sequelize for the models in the database, express.js for the controllers and routes, and handlebars and bootstrap for the UI and view of the application in the browser.",
    descriptionTwo:
      "This project contains both front-end and back-end logic using JavaScript and various other technologies. It does not focus too much on the UI but keeps the view simplistic and easy to understand. It focuses more so on the functionality of the application so that users have no trouble navigating the application to create, view, and edit their blog posts.",
    imageOne: techBlog2,
    imageTwo: techBlog1,
    github: "https://github.com/pauldsherrill/MVC-Tech-Blog-Repo",
    site: "https://mvc-tech-blog-u2wn.onrender.com",
    href: "tech-blog",
    id: 14,
  },
  {
    title: "SOCIAL NETWORK API",
    descriptionOne:
      "For this assignment, I was tasked with building the back end for a social network api completely from scratch. The main goal of this assignment, was to build a functional MongoDB database and routes that allowed for adding to, updating, and deleting data from the three main collections in that database (users, thoughts, and reactions).",
    descriptionTwo:
      "To do so, I utilized mongoose which is a technology that allows MongoDB collections to be created through JavaScript. Because this application was completely on the back-end, I used Insomnia to view and test the routes and controllers and how they manipulated the data in the MongoDB database. In my GitHub repository is a link to a walkthrough video to view how the application works.",
    imageOne: socialNetwork2,
    imageTwo: socialNetwork1,
    github: "https://github.com/pauldsherrill/Social-Network-API",
    href: "social-network",
    id: 15,
  },
];

export default repos;
