/* eslint-disable react/prop-types */

const AddProperty = ({
  form,
  handleInputChange,
  handleAddProperty,
  handleCheckIn,
}) => {
  return (
    <form
      className="mb-6 bg-white dark:bg-gray-700 p-4 shadow-md rounded"
      onSubmit={handleAddProperty}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
        Add New Property
      </h2>
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
        className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Property
      </button>
    </form>
  );
};

export default AddProperty;
