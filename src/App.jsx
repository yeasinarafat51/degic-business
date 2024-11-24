import { useState, useEffect } from "react";
import Navbar from "./components/shared/Nabvar";
import PropertyCard from "./components/dashboard/PropertyCard";
import Footer from "./components/shared/Footer";
import AddProperty from "./components/dashboard/AddProperty";
import Filters from "./components/dashboard/Filters";
import Check from "./components/dashboard/Check";

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
    const savedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];
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
        (name === "type"
          ? filter.status === "" || prop.status === filter.status
          : true)
      );
    });

    setFilteredProperties(filtered);
  };

  const handleCheckIn = () => {
    setCheckIns(checkIns + 1);
  };

  const handleCheckOut = () => {
    setCheckIns(checkIns - 1);
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } bg-gray-100 dark:bg-gray-800 min-h-screen`}
    >
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Property Management Dashboard
        </h1>

        {/* Key Numbers */}

        <Check
          checkIns={checkIns}
          handleCheckIn={handleCheckIn}
          checkOuts={checkOuts}
          handleCheckOut={handleCheckOut}
        />

        {/* Add Property Form */}

        <AddProperty
          form={form}
          handleInputChange={handleInputChange}
          handleAddProperty={handleAddProperty}
          handleCheckIn={handleCheckIn}
        />

        {/* Filters */}

        <Filters filter={filter} handleFilterChange={handleFilterChange} />

        {/* Property List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
