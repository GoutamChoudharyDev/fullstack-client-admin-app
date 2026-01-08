import ProjectCard from "./ProjectCard";

import Project1 from "../assets/landingpage_images/about3.svg";
import Project2 from "../assets/landingpage_images/project2.svg";
import Project3 from "../assets/landingpage_images/project3.svg";
import Project4 from "../assets/landingpage_images/project4.svg";
import Project5 from "../assets/landingpage_images/about2.svg";

const OurProjects = () => {
  const projects = [
    {
      image: Project1,
      title: "Consultation",
      description: "Project planning and consultation"
    },
    {
      image: Project2,
      title: "Design",
      description: "Property design solutions"
    },
    {
      image: Project3,
      title: "Marketing & Design",
      description: "Complete branding solutions"
    },
    {
      image: Project4,
      title: "Consultation & Marketing",
      description: "End-to-end market strategy"
    },
    {
      image: Project5,
      title: "Consultation",
      description: "Client-focused consultation"
    }
  ];

  return (
    <section className="py-24 bg-[#f9fbff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">
            Our Projects
          </h2>
          <p className="text-gray-600 text-sm">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProjects;
