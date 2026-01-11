import { useState, useEffect } from "react";
import API from "../../services/api.js";

const AddClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
  });
  const [image, setImage] = useState(null); // optional image file
  const [preview, setPreview] = useState(null); // optional preview
  const [loading, setLoading] = useState(false);

  // Handle input text change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(file.type)) {
      alert("Only PNG, JPG, JPEG, or WEBP images are allowed");
      return;
    }

    // Validate file size (<5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Cleanup object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.designation || !formData.description) {
      alert("Name, designation, and description are required");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("name", formData.name);
      data.append("designation", formData.designation);
      data.append("description", formData.description);
      if (image) data.append("image", image); // append only if image exists

      // Correct endpoint
      await API.post("/clients/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Client added successfully");

      // Reset form
      setFormData({ name: "", designation: "", description: "" });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Add Client
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Optional Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Logo / Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-gray-700 border border-gray-300 rounded-lg p-2 cursor-pointer hover:border-blue-400 transition"
          />
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="mt-2 w-24 h-24 object-cover rounded border border-gray-300"
            />
          )}
        </div>

        {/* Client Name */}
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Designation */}
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Client Description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Client"}
        </button>
      </form>
    </div>
  );
};

export default AddClient;
