const ViewContacts = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Queries</h2>

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
            {/* Example row */}
            <tr className="hover:bg-gray-50 transition">
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">john@example.com</td>
              <td className="px-4 py-3">1234567890</td>
              <td className="px-4 py-3">Indore</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100 transition">
              <td className="px-4 py-3">Jane Smith</td>
              <td className="px-4 py-3">jane@example.com</td>
              <td className="px-4 py-3">9876543210</td>
              <td className="px-4 py-3">Bhopal</td>
            </tr>
            {/* Map your contacts here */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewContacts
