import { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import API from "../services/api";

const HappyClient = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await API.get("/clients");
        setClients(res.data.clients || []);
      } catch (error) {
        console.error("Failed to fetch clients", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-14">
        Happy Clients
      </h2>

      {clients.length === 0 ? (
        <p className="text-gray-500">No clients available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {clients.map((client) => (
            <ClientCard
              key={client._id}
              image={client.image || "/default-client.jpg"}
              name={client.name}
              description={client.description}
              designation={client.designation}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HappyClient;
