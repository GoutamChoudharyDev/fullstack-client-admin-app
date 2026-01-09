const ViewSubscribers = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Subscribed Emails</h2>

      <ul className="space-y-3">
        {/* Example emails */}
        <li className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition text-gray-700">
          subscriber1@example.com
        </li>
        <li className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition text-gray-700">
          subscriber2@example.com
        </li>
        <li className="px-4 py-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition text-gray-700">
          subscriber3@example.com
        </li>

        {/* Map your subscribers here */}
      </ul>
    </div>
  )
}

export default ViewSubscribers
