/* eslint-disable react/prop-types */

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {property.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Type: {property.type}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Status: {property.status}
      </p>
    </div>
  );
};

export default PropertyCard;
