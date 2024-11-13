import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPlants = () => {
  const navigate = useNavigate();
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://6731742c7aaf2a9aff10ad4b.mockapi.io/plants', {
        name: plantName,
        type: plantType,
      });
      navigate('/plants');
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <div className="p-8 bg-[#E3DBC7] h-screen">
      <h2 className="text-2xl font-bold text-[#84A575] mb-4">Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#84A575] font-semibold mb-2">Plant Name</label>
          <input
            type="text"
            placeholder="Enter plant name"
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575]"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#84A575] font-semibold mb-2">Plant Type</label>
          <select
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575]"
          >
            <option value="" disabled hidden>Select plant type</option>
            <option value="Ornamental">Ornamental Plants</option>
            <option value="Herbal">Herbal Plants</option>
            <option value="Vegetable">Vegetable Plants</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#84A575] text-white font-semibold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlants;