import React from 'react';
import useNavigateToDetails from '../hooks/useNavigateToDetails';

const PlantCard = ({ name, type, imageURL, growthStage }) => {
  const handleViewDetails = useNavigateToDetails(name);

  return (
    <div className="bg-[#FDFBF8] p-4 rounded-lg shadow-lg w-full max-w-sm flex flex-col">
      <img
        src={imageURL || 'https://via.placeholder.com/150'}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4 text-left">
        <h2 className="text-lg font-bold text-[#404C3B]">{name}</h2>
        <p className="text-sm text-gray-600">Type: {type}</p>
        <p className="text-sm text-gray-600">Stage: {growthStage}</p>
      </div>
      <button
        onClick={handleViewDetails}
        className="mt-4 w-full bg-[#404C3B] text-white font-semibold py-2 rounded-lg hover:bg-[#56634E]"
      >
        View Details
      </button>
    </div>
  );
};

export default PlantCard;