const ClientCard = ({ image, name, description, designation }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300">

      <img
        src={image}
        alt={name}
        className="w-16 h-16 mx-auto mb-5 rounded-full object-cover"
      />

      <p className="text-sm leading-6 text-gray-500 mb-6">
        {description}
      </p>

      <h4 className="text-base font-semibold text-blue-600">
        {name}
      </h4>

      <span className="text-xs text-gray-400">
        {designation}
      </span>
    </div>
  );
};

export default ClientCard;
