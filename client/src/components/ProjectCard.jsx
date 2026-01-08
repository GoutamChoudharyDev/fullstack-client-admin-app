

const ProjectCard = () => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src="https://via.placeholder.com/300"
        alt="project"
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-semibold mt-3">Project Name</h3>
      <p className="text-gray-600 mt-2">
        Project description goes here.
      </p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
        Read More
      </button>
    </div>
  );
};

export default ProjectCard;
