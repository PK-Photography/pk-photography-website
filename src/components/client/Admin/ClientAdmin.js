import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../../utils/axiosConfig";

const ClientAdmin = () => {
  const [clients, setClients] = useState([]); // List of clients
  const [selectedClientId, setSelectedClientId] = useState(""); // Selected client's ID
  const [categoryName, setCategoryName] = useState(""); // New category name
  const [imageLink, setImageLink] = useState(""); // New category image link

  // Fetch client data on component mount
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data } = await axiosInstance.get("/cards");
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  // Handle form submission to update the category
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClientId || !categoryName || !imageLink) {
      alert("Please fill out all fields.");
      return;
    }

    const newCategory = {
      name: categoryName,
      images: imageLink,
    };

    try {
      const response = await axiosInstance.put(
        "/cards/update-category",
        {
          id: selectedClientId,
          category: newCategory,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Category updated successfully!");

      // Clear form fields
      setCategoryName("");
      setImageLink("");
      setSelectedClientId("");
    } catch (error) {
      // console.error(
      //   "Error updating category:",
      //   error?.response?.data || error.message
      // );
      alert("Failed to update category. Please try again.");
    }
  };

  // Handle category deletion
  const handleDelete = async () => {
    if (!selectedClientId || !categoryName) {
      alert("Please select a client and enter the category name to delete.");
      return;
    }
  
    try {
      const response = await axiosInstance.delete(
        "/cards/delete-category",
        {
          data: {
            id: selectedClientId,
            categoryName: categoryName,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      alert("Category deleted successfully!");
  
      // Clear form fields
      setCategoryName("");
      setSelectedClientId("");
    } catch (error) {
      // console.error(
      //   "Error deleting category:",
      //   error?.response?.data || error.message
      // );
      alert("Failed to delete category. Please try again.");
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center py-10 space-y-6"
    >
      <h1 className="text-2xl font-bold text-gray-700">Client Admin</h1>

      {/* Dropdown to select a client */}
      <div className="w-3/4 md:w-1/2">
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Select Client
        </label>
        <select
          value={selectedClientId}
          onChange={(e) => setSelectedClientId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:border-yellow-600"
        >
          <option value="">-- Select a Client --</option>
          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name || "Unnamed Client"}
            </option>
          ))}
        </select>
      </div>

      {/* Input fields for new category */}
      <div className="w-3/4 md:w-1/2">
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Category Name
        </label>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter Category Name"
          className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:border-yellow-600"
        />

        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Drive Link
        </label>
        <input
          type="text"
          value={imageLink}
          onChange={(e) => setImageLink(e.target.value)}
          placeholder="Drive Link"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-600 focus:outline-none focus:border-yellow-600"
        />
      </div>

      {/* Submit and Delete buttons */}
      <div className="space-x-4">
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700"
        >
          Update Category
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
        >
          Delete Category
        </button>
      </div>
    </form>
  );
};

export default ClientAdmin;
