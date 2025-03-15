import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const ComplaintPage = () => {
  const { theme } = useTheme();
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    ward: "",
    location: "",
    description: "",
  });

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.some((file) => !file.type.startsWith("image/"))) {
      alert("Please upload only image files.");
      return;
    }

    if (images.length + files.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    setImages([...images, ...files]);
    setPreviewUrls([...previewUrls, ...files.map((file) => URL.createObjectURL(file))]);
  };

  // Handle Image Removal
  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviewUrls(previewUrls.filter((_, i) => i !== index));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, images });
    alert("Complaint submitted successfully!");

    // Reset Form
    setFormData({
      name: "",
      phone: "",
      address: "",
      ward: "",
      location: "",
      description: "",
    });
    setImages([]);
    setPreviewUrls([]);
  };

  return (
    <div
      className={`min-h-screen p-8 bg-gradient-to-br from-green-50 to-emerald-100 
        ${theme === "dark" ? "dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900" : ""}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-3xl font-bold mb-8 text-green-800 dark:text-emerald-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Report Civic Issue
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal & Location Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/** Left Panel: Personal Info */}
            <motion.div
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-green-700 dark:text-emerald-300">
                Your Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Ward Number *
                  </label>
                  <select
                    required
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    value={formData.ward}
                    onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                  >
                    <option value="">Select Ward</option>
                    {[...Array(20).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        Ward {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/** Right Panel: Location Info */}
            <motion.div
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-xl font-semibold mb-4 text-green-700 dark:text-emerald-300">
                Issue Location
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Address *
                  </label>
                  <textarea
                    required
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Landmark/Location *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image Upload */}
          <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-green-700 dark:text-emerald-300">
              Upload Photos (Max 5)
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative group">
                  <img src={url} alt="Preview" className="h-32 w-full object-cover rounded-lg" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
              ))}

              {previewUrls.length < 5 && (
                <label className="h-32 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 transition-colors">
                  <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
                  <span className="text-gray-500">Click to upload</span>
                </label>
              )}
            </div>
          </div>

          <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg text-lg font-semibold transition-colors">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintPage;
