import ClientCard from "./ClientCard";

import client1 from "../assets/landingpage_images/client1.svg";
import client2 from "../assets/landingpage_images/client2.svg";
import client3 from "../assets/landingpage_images/client3.svg";
import client4 from "../assets/landingpage_images/client4.svg";
import client5 from "../assets/landingpage_images/client5.svg";

const HappyClient = () => {

  const clients = [
    {
      _id: 1,
      image: client1,
      name: "Rasmus Smith",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "CEO, Company"
    },
    {
      _id: 2,
      image: client2,
      name: "Stinger Kayak",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "Product Manager"
    },
    {
      _id: 3,
      image: client3,
      name: "John Larsen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "CTO"
    },
    {
      _id: 4,
      image: client4,
      name: "Mary Frensen",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "HR Manager"
    },
    {
      _id: 5,
      image: client5,
      name: "Lucy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      designation: "Marketing Head"
    }
  ];

  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-14">
        Happy Clients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {clients.map(client => (
          <ClientCard
            key={client._id}
            image={client.image}
            name={client.name}
            description={client.description}
            designation={client.designation}
          />
        ))}
      </div>
    </section>
  );
};

export default HappyClient;
