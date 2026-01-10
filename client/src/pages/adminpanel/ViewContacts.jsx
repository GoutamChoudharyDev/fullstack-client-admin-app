import { useEffect, useState } from "react";
import API from "../../services/api";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await API.get("/contact");
        setContacts(res.data);
      } catch (error) {
        console.error("Failed to fetch contacts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Contact Queries
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-500">No contact queries found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-700">Name</th>
                <th className="px-4 py-3 font-medium text-gray-700">Email</th>
                <th className="px-4 py-3 font-medium text-gray-700">Mobile</th>
                <th className="px-4 py-3 font-medium text-gray-700">City</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3">{contact.fullName}</td>
                  <td className="px-4 py-3">{contact.email}</td>
                  <td className="px-4 py-3">{contact.mobile}</td>
                  <td className="px-4 py-3">{contact.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewContacts;
