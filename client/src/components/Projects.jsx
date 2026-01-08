import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
