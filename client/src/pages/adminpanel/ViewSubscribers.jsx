import { useEffect, useState } from "react";
import API from "../../services/api";

const ViewSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await API.get("/subscribe");
        setSubscribers(res.data);
      } catch (error) {
        console.error("Failed to fetch subscribers", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Subscribed Emails
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading subscribers...</p>
      ) : subscribers.length === 0 ? (
        <p className="text-gray-500">No subscribers found</p>
      ) : (
        <ul className="space-y-3">
          {subscribers.map((item) => (
            <li
              key={item._id}
              className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition text-gray-700"
            >
              {item.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewSubscribers;
