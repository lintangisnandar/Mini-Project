import React, { useEffect, useState } from 'react';
import PlantCard from '../components/PlantCard';
import axios from 'axios';

const MyPlants = () => {
  const apiUrl = process.env.API_URL;
  const [plants, setPlants] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}`);
      setPlants(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-8 bg-[#E3DBC7] min-h-screen">
        
        {/* Grid Layout for Plant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 m-4">
          {plants.map((plant) => (
            <PlantCard
            key={plant.id}
            name={plant.name}
            type={plant.type}
            growthStage={plant.growthStage}
            location={plant.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPlants;