import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSeedling } from 'react-icons/fa';

const PlantCard = ({ name, type, growthStage, location }) => {

  const navigate = useNavigate();

  const handleViewDetails = () => {
    const encodedPlantName = encodeURIComponent(name);
    navigate(`/my-plants/${encodedPlantName}`);
  };

  return (
    <div className="relative bg-[#FDFBF8] p-4 rounded-lg shadow-lg w-64 flex flex-col items-center">
      
      {/* Icon and Plant Info */}
      <div className="flex items-center">
        {/* Plant Icon */}
        <div className="mr-4 text-[#84A575] text-4xl">
          <FaSeedling />
        </div>
        
        {/* Plant Details */}
        <div className="ml-4 text-left">
          <h2 className="text-lg font-bold text-[#404C3B]">{name}</h2>
          <p className="text-sm text-gray-600">Type: {type}</p>
          <p className="text-sm text-gray-600">Stage: {growthStage}</p>
          <p className="text-sm text-gray-600">Location: {location}</p>
        </div>
      </div>

      {/* Action Button */}
      <button onClick={handleViewDetails} className="mt-4 w-full bg-[#404C3B] text-white font-semibold py-2 rounded-lg hover:bg-[#56634E]">
        View Details
      </button>
    </div>
  );
};

export default PlantCard;