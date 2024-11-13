import React from 'react';

const PlantCard = ({ name, type, description }) => {
  return (
    <div className="relative bg-[#FDFBF8] p-4 rounded-lg shadow-lg w-64">
      
      {/* Image Section */}
      <div className="w-full h-48 bg-gray-300 rounded overflow-hidden">
        <img
          src="plant-image.jpg"
          alt="Plant"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Plant Info */}
      <div className="mt-4 px-2">
        <h2 className="text-lg font-bold text-[#404C3B]">{name}</h2>
        <p className="text-sm text-gray-600">Type: {type}</p>
        <p className="text-sm text-gray-600 mt-1">{description}</p>

        {/* Action Button */}
        <button className="mt-4 w-full bg-[#404C3B] text-white font-semibold py-2 rounded-lg hover:bg-[#56634E]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantCard;