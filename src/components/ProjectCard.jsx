import { FaGithub } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
  const { title, description, imageUrl, githubLink } = project;
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isAnimated) {
        setIsVisible(true);
        setIsAnimated(true);
      }
    }, options);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isAnimated]);

  return (
    <div
      ref={cardRef}
      className={`overflow-hidden rounded-lg shadow-2xl ${
        isVisible ? "animate-slide-left opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.5s, transform 1s" }}
    >
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-lg text-gray-400 mb-4" style={{ maxWidth: "600px" }}>
          {description}
        </p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-400 hover:text-white transition duration-300 ease-in-out"
        >
          <FaGithub size={24} className="mr-2" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
