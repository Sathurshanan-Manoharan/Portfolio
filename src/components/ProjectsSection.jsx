import ProjectCard from "./ProjectCard";
import projectImage from "../assets/Project.png";
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Attendify",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, tortor eget consequat ultrices, ipsum ipsum tristique enim, eget mattis purus mauris vel tortor.",
      imageUrl: projectImage,
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, tortor eget consequat ultrices, ipsum ipsum tristique enim, eget mattis purus mauris vel tortor.",
      imageUrl: projectImage,
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, tortor eget consequat ultrices, ipsum ipsum tristique enim, eget mattis purus mauris vel tortor.",
      imageUrl: projectImage,
      githubLink: "https://github.com",
    },
    {
      id: 4,
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, tortor eget consequat ultrices, ipsum ipsum tristique enim, eget mattis purus mauris vel tortor.",
      imageUrl: projectImage,
      githubLink: "https://github.com",
    },
    {
      id: 5,
      title: "Project 5",
      description:
        "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, tortor eget consequat ultrices, ipsum ipsum tristique enim, eget mattis purus mauris vel tortor.",
      imageUrl: projectImage,
      githubLink: "https://github.com",
    },
    {
      id: 6,
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, tortor eget consequat ultrices, ipsum ipsum tristique enim, eget mattis purus mauris vel tortor.",
      imageUrl: projectImage,
      githubLink: "https://github.com",
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
