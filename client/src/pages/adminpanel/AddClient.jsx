const AddClient = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Client</h2>

      <form className="space-y-5">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Logo / Image
          </label>
          <input
            type="file"
            className="w-full text-gray-700 border border-gray-300 rounded-lg p-2 cursor-pointer hover:border-blue-400 transition"
          />
        </div>

        {/* Client Name */}
        <div>
          <input
            type="text"
            placeholder="Client Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Designation */}
        <div>
          <input
            type="text"
            placeholder="Designation"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Client Description"
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Save Client
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddClient
