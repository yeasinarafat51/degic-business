/* eslint-disable react/prop-types */

const Filters = ({ filter, handleFilterChange }) => {
  return (
    <div className="mb-4 bg-white dark:bg-gray-700 p-4 shadow-md rounded">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Filters
      </h2>
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
  );
};

export default Filters;
