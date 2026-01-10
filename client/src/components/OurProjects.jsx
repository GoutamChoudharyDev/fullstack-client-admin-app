import { useEffect, useState } from "react";
import API from "../services/api.js";
import ProjectCard from "./ProjectCard";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch projects from backend
  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await API.get("/projects");

      // Backend response: { success: true, projects: [...] }
      setProjects(res.data.projects || []); // handle empty or undefined projects
    } catch (err) {
      console.error("Failed to fetch projects", err);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

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

        {/* States */}
        {loading ? (
          <p className="text-center text-gray-500 mt-8">Loading projects...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-8">{error}</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">No projects available</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                // If no image, show a default placeholder
                image={project.image || "/default-image.jpg"}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProjects;
