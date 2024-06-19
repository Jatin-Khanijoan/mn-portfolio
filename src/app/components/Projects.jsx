"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Automated Multi-Cloud deployment",
      description: "Successfully led a team to efficiently deploy complex applications across clouds, boosting developer productivity and optimizing cloud costs.",
      image: "/manas-pfp.jpg",
      tag: ["All", "Cloud"],
      gitUrl: "https://github.com/majs-tech",
      previewUrl: "https://github.com/majs-tech",
    },
    {
      id: 2,
      title: "Multi-Cloud Observibility Tool",
      description: "Kab banaya kya pata",
      image: "/manas-pfp.jpg",
      tag: ["All", "Cloud"],
      gitUrl: "https://www.google.com/search?q=Multi-Cloud+Observibility+Tool&sourceid=chrome&ie=UTF-8",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Cross Border Payment",
      description: "No idea",
      image: "/manas-pfp.jpg",
      tag: ["All","Full Stack"],
      gitUrl: "/https://www.google.com/search?q=Cross+Border+Payment&sourceid=chrome&ie=UTF-8",
      previewUrl: "/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-5xl font-bold accentColor mt-4 mb-8 md:mb-12">
          - projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Cloud"
            isSelected={tag === "Cloud"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Full Stack"
            isSelected={tag === "Full Stack"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;