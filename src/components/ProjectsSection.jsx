import ProjectCard from "./ProjectCard";
import projectImage from "../assets/Project.png";
import Attendify from "../assets/Attendify Blue.png";
import Ceylon from "../assets/Ceylon.png";
import Porfolio from "../assets/Porfolio.png";
import shopping from "../assets/shopping.jpg";
import moviehublogo from "../assets/moviehublogo.jpg";
import food from "../assets/food.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Attendify",
      description:
        "Attendify is a web based solution for tracking and managing attedance. It is a full stack application built using MERN stack. It uses the RFID technology to record attedance.",
      imageUrl: Attendify,
      githubLink:
        "https://github.com/Sathurshanan-Manoharan/attendify-frontend",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "A perfolio website that showcases my skills, projects and experience. It is built using React and Tailwind CSS. It is a responsive website that looks great on all devices.",
      imageUrl: Porfolio,
      githubLink: "https://github.com/Sathurshanan-Manoharan/Portfolio",
    },
    {
      id: 3,
      title: "Ceylon Trotters",
      description:
        "Ceylon Trotters is website that showcases the beauty of Sri Lanka and offers tourist packages and services to users.",
      imageUrl: Ceylon,
      githubLink:
        "https://github.com/Sathurshanan-Manoharan/Ceylon-Trotters-Website",
    },
    {
      id: 4,
      title: "Shopping management system",
      description:
        "This system is built using Java. There are two versions: one for the manager and one for the customer. The customer version features a GUI made using Swing.",
      imageUrl: shopping,
      githubLink:
        "https://github.com/Sathurshanan-Manoharan/Westminster-online-shopping-system",
    },
    {
      id: 5,
      title: "Movie Hub",
      description:
        "Movie Hub is a web application that allows users to search for movies and view details about them. It uses the OMDB API to fetch movie data. It is built using React.",
      imageUrl: moviehublogo,
      githubLink: "https://github.com/Sathurshanan-Manoharan/Movie-Hub",
    },
    {
      id: 6,
      title: "Hotel Management System",
      description:
        "A basic Java program, which manages the food queues in a hotel. It uses the concepts of OOP and file handling.",
      imageUrl: food,
      githubLink:
        "https://github.com/Sathurshanan-Manoharan/Food-Queue-Management-System",
    },
  ];

  return (
    <div
      id="ProjectsSection"
      className="bg-gray-900 text-white py-12 px-8 md:px-32"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
