import { useState } from "react";
import AdminMain from "./AdminMain"; // Form component
import ClientAdmin from "./ClientAdmin"; // Client image component

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("uploadForm"); // State to track active component

  // Render the selected component based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "uploadForm":
        return <AdminMain />;
      case "clientImage":
        return <ClientAdmin />;
      default:
        return <div>Select an option from the sidebar</div>;
    }
  };

  return (
    <div className="flex mt-16">
      {" "}
      {/* Add margin-top here */}
      {/* Left Sidebar */}
      <nav className="w-1/4 h-screen bg-gray-800 text-white">
        <ul className="p-4 space-y-4">
          <li>
            <button
              onClick={() => setActiveComponent("uploadForm")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeComponent === "uploadForm"
                  ? "bg-gray-600"
                  : "hover:bg-gray-600"
              }`}
            >
              Client Card
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("clientImage")}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeComponent === "clientImage"
                  ? "bg-gray-600"
                  : "hover:bg-gray-600"
              }`}
            >
              Updated Client Category
            </button>
          </li>
        </ul>
      </nav>
      <div className="w-3/4 p-8">{renderComponent()}</div>
    </div>
  );
};

export default AdminDashboard;
