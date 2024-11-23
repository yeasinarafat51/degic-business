import  { useState, useEffect } from "react";
import Navbar from "./components/Nabvar";
import PropertyCard from "./components/PropertyCard";


const App = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [form, setForm] = useState({ name: "", type: "", status: "" });
  const [filter, setFilter] = useState({ type: "", status: "" });
  const [darkMode, setDarkMode] = useState(false);
  const [checkIns, setCheckIns] = useState(0);
  const [checkOuts, setCheckOuts] = useState(0);

  // Load properties and counts from localStorage on mount
  useEffect(() => {
    const savedProperties = JSON.parse(localStorage.getItem("properties")) || [];
    const savedCheckIns = parseInt(localStorage.getItem("checkIns")) || 0;
    const savedCheckOuts = parseInt(localStorage.getItem("checkOuts")) || 0;

    setProperties(savedProperties);
    setFilteredProperties(savedProperties);
    setCheckIns(savedCheckIns);
    setCheckOuts(savedCheckOuts);
  }, []);

  // Save properties and counts to localStorage
  useEffect(() => {
    localStorage.setItem("properties", JSON.stringify(properties));
    localStorage.setItem("checkIns", checkIns);
    localStorage.setItem("checkOuts", checkOuts);
  }, [properties, checkIns, checkOuts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.status) {
      alert("Please fill out all fields.");
      return;
    }
    const newProperty = { ...form, id: Date.now() };
    setProperties([...properties, newProperty]);
    setFilteredProperties([...properties, newProperty]);
    setForm({ name: "", type: "", status: "" });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });

    const filtered = properties.filter((prop) => {
      return (
        (value === "" || prop[name] === value) &&
        (name === "type" ? filter.status === "" || prop.status === filter.status : true)
      );
    });

    setFilteredProperties(filtered);
  };

  const handleCheckIn = () => {
    setCheckIns(checkIns + 1);
  };

  const handleCheckOut = () => {
    setCheckIns(checkIns - 1)
  
  };

  return (
    <div className={`${darkMode ? "dark" : ""} bg-gray-100 dark:bg-gray-800 min-h-screen`}>
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Property Management Dashboard</h1>

        {/* Key Numbers */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-500 text-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Check-ins</h2>
            <p className="text-3xl">{checkIns}</p>
            <button
              onClick={handleCheckIn}
              className="mt-2 bg-blue-700 px-3 py-1 rounded text-sm"
            >
              Add Check-in
            </button>
          </div>
          <div className="bg-red-500 text-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold">Check-outs</h2>
            <p className="text-3xl">{checkOuts}</p>
            <button
              onClick={handleCheckOut}
              className="mt-2 bg-red-700 px-3 py-1 rounded text-sm"
            >
              Add Check-out
            </button>
          </div>
        </div>

        {/* Add Property Form */}
        <form className="mb-6 bg-white dark:bg-gray-700 p-4 shadow-md rounded" onSubmit={handleAddProperty}>
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Add New Property</h2>
          <div className="grid grid-cols-3 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Property Name"
              className="p-2 border rounded dark:bg-gray-600 dark:text-gray-200"
            />
            <select
              name="type"
              value={form.type}
              onChange={handleInputChange}
              className="p-2 border rounded dark:bg-gray-600 dark:text-gray-200"
            >
              <option value="">Select Type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
            </select>
            <select
              name="status"
              value={form.status}
              onChange={handleInputChange}
              className="p-2 border rounded dark:bg-gray-600 dark:text-gray-200"
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
          <button
            type="submit"
            onClick={handleCheckIn}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Property
          </button>
        </form>

        {/* Filters */}
        <div className="mb-4 bg-white dark:bg-gray-700 p-4 shadow-md rounded">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Filters</h2>
          <div className="grid grid-cols-2 gap-4">
            <select
              name="type"
              value={filter.type}
              onChange={handleFilterChange}
              className="p-2 border rounded dark:bg-gray-600 dark:text-gray-200"
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Commercial">Commercial</option>
            </select>
            <select
              name="status"
              value={filter.status}
              onChange={handleFilterChange}
              className="p-2 border rounded dark:bg-gray-600 dark:text-gray-200"
            >
              <option value="">All Status</option>
              <option value="Available">Available</option>
              <option value="Rented">Rented</option>
            </select>
          </div>
        </div>

        {/* Property List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
