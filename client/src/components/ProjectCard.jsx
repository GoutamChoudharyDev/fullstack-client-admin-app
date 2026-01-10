
const ProjectCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h4 className="font-semibold text-gray-800 mb-2">
          {title}
        </h4>

        <p className="text-sm text-gray-500 mb-4">
          {description}
        </p>

        <button className="bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-orange-600 transition">
          READ MORE
        </button>
      </div>

    </div>
  );
};

export default ProjectCard;
