/* eslint-disable react/prop-types */

const Check = ({ checkIns, handleCheckIn, checkOuts, handleCheckOut }) => {
  return (
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
  );
};

export default Check;
