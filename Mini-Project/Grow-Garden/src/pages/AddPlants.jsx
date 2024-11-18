import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AddPlants = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const aiApiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');
  const [location, setLocation] = useState('');
  const [datePlanted, setDatePlanted] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [careTips, setCareTips] = useState('');

  const apiKey = `${aiApiKey}`;
  const genAI = new GoogleGenerativeAI(apiKey);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      const fetchPlantData = async () => {
        try {
          const response = await axios.get(`${apiUrl}/${id}`);
          const { name, type, location, datePlanted, growthStage, careTips } = response.data;
          setPlantName(name);
          setPlantType(type);
          setLocation(location);
          setDatePlanted(datePlanted);
          setGrowthStage(growthStage);
          setCareTips(careTips);
        } catch (error) {
          console.error('Error fetching plant data:', error);
        }
      };
      fetchPlantData();
    }
  }, [id]);

  const handleAIRecommendation = async () => {
    const prompt = `Provide care instructions for a plant with the following details:
    - Plant Name: ${plantName}
    - Plant Type: ${plantType}
    - Location: ${location}
    - Date Planted: ${datePlanted}
    - Growth Stage: ${growthStage}

    Care instructions should include:
    - Watering frequency (e.g., daily, weekly)
    - Light requirement (e.g., full sun, partial shade, low light)
    - Humidity level (e.g., high, moderate, low)
    - Ideal temperature range

    Please provide a brief and consistent format for these instructions. Make it in paragraph sentence form.`;

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
      const chatSession = model.startChat({
        generationConfig: { maxOutputTokens: 100, temperature: 0.7 }
      });

      const result = await chatSession.sendMessage(prompt);
      const aiResponse = result.response.text();
      setCareTips(aiResponse);
    } catch (error) {
      console.error('Error generating AI recommendation:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plantData = {
      name: plantName,
      type: plantType,
      location,
      datePlanted,
      growthStage,
      careTips,
    };

    try {
      if (isEdit) {
        await axios.put(`${apiUrl}/${id}`, plantData);
      } else {
        await axios.post(`${apiUrl}`, plantData);
      }
      navigate('/my-plants');
    } catch (error) {
      console.error('Error submitting plant data:', error);
    }
  };

  return (
    <div className="p-20 bg-[#E3DBC7] min-h-screen flex flex-col">
      <h2 className="text-2xl font-bold text-[#84A575] mb-4">
        {isEdit ? 'Edit Plant' : 'Add New Plant'}
      </h2>
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
        <div className="mb-4">
          <label className="block text-[#84A575] font-semibold mb-2">Plant Type</label>
          <select
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575]"
          >
            <option value="" disabled hidden>Select plant type</option>
            <option value="Succulent">Succulent</option>
            <option value="Flowering">Flowering</option>
            <option value="Foliage">Foliage</option>
            <option value="Herb">Herb</option>
            <option value="Cactus">Cactus</option>
            <option value="Tree">Tree</option>
            <option value="Shrub">Shrub</option>
            <option value="Vine">Vine</option>
            <option value="Ornamental Grass">Ornamental Grass</option>
            <option value="Aquatic Plant">Aquatic Plant</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-[#84A575] font-semibold mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575]"
          >
            <option value="" disabled hidden>Select location</option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Balcony">Balcony</option>
            <option value="Garden">Garden</option>
            <option value="Greenhouse">Greenhouse</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-[#84A575] font-semibold mb-2">Date Planted</label>
          <input
            type="date"
            value={datePlanted}
            onChange={(e) => setDatePlanted(e.target.value)}
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#84A575] font-semibold mb-2">Growth Stage</label>
          <select
            value={growthStage}
            onChange={(e) => setGrowthStage(e.target.value)}
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575]"
          >
            <option value="" disabled hidden>Select growth stage</option>
            <option value="Seedling">Seedling</option>
            <option value="Young">Young</option>
            <option value="Mature">Mature</option>
            <option value="Flowering">Flowering</option>
            <option value="Fruiting">Fruiting</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleAIRecommendation}
            className="mb-2 bg-[#84A575] text-white font-semibold py-1 px-3 rounded-md"
          >
            AI Recommendation
          </button>
          <label className="block text-[#84A575] font-semibold mb-2">Care Tips</label>
          <textarea
            placeholder="Enter care tips"
            value={careTips}
            onChange={(e) => setCareTips(e.target.value)}
            rows="6"
            className="w-full px-3 py-2 border border-[#84A575] rounded-md bg-white text-[#84A575] resize-none min-h-[150px]"
          />
        </div>
        <div className="flex justify-between pb-10">
          <button
            type="button"
            onClick={() => navigate('/my-plants')}
            className="bg-[#84A575] text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#84A575] text-white font-semibold py-2 px-4 rounded-md"
          >
            {isEdit ? 'Update Plant' : 'Add Plant'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlants;