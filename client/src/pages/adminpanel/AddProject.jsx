import { useState } from "react";
import API from "../../services/api.js";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null); // optional base64
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Optional image preview & Base64 conversion
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!["image/png", "image/jpeg", "image/jpg"].includes(file.type)) {
      alert("Only PNG, JPG, JPEG allowed");
      return;
    }

    // Validate file size (<5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
      setPreview(reader.result);
    };
  };

  // Submit project (with or without image)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        title,
        description,
        image: image || null, // optional
      };

      await API.post("/projects", payload, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Project added successfully");

      // Reset form
      setTitle("");
      setDescription("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Project</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Optional Image Upload */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Project Image (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded cursor-pointer"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="h-32 w-32 mt-2 object-cover rounded border"
            />
          )}
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400"
        />

        {/* Description */}
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          required
          className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400 resize-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Project"}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
