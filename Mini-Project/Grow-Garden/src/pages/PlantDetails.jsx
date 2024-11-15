import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSeedling, FaTrashAlt, FaEdit, FaArrowLeft } from 'react-icons/fa';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

const PlantDetails = () => {
  const apiUrl = process.env.API_URL;
  const { plantName } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}?name=${plantName}`);
        setPlant(response.data[0]);
      } catch (error) {
        console.error("Error fetching plant details:", error);
      }
    };

    fetchPlantDetails();
  }, [plantName]);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/${plant.id}`);
      closeDeleteModal();
      navigate('/my-plants');
    } catch (error) {
      console.error("Error deleting plant:", error);
    }
  };

  if (!plant) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#FDFBF8] to-[#E3DBC7]">
        <span className="loading loading-spinner loading-lg text-[#84A575]"></span>
      </div>
    );
  }

  return (
    <div className="relative p-8 min-h-screen bg-gradient-to-br from-[#FDFBF8] to-[#E3DBC7]">
      <button
        onClick={() => navigate('/my-plants')}
        className="absolute top-4 left-4 p-2 bg-white shadow-md rounded-full text-[#84A575] hover:text-[#56634E] hover:bg-gray-100"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div className="max-w-2xl mx-auto m-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center bg-[#FDFBF8] p-6 border-b">
          <FaSeedling className="text-[#84A575] text-5xl mr-6" />
          <div>
            <h1 className="text-2xl font-bold text-[#404C3B]">{plant.name}</h1>
            <p className="text-[#84A575] font-medium">Type: {plant.type}</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-lg font-bold text-[#404C3B]">Plant Details</h2>
            <p className="text-sm text-gray-700">Growth Stage: <span className="text-gray-500">{plant.growthStage}</span></p>
            <p className="text-sm text-gray-700">Location: <span className="text-gray-500">{plant.location}</span></p>
            <p className="text-sm text-gray-700">Date Planted: <span className="text-gray-500">{plant.datePlanted}</span></p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#404C3B]">Care Tips</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{plant.careTips}</p>
          </div>
        </div>

        <div className="p-6 flex justify-between items-center bg-[#FDFBF8] border-t">
          <button
            className="px-4 py-2 flex items-center bg-[#84A575] text-white font-semibold rounded-lg hover:bg-[#56634E]"
            onClick={() => navigate(`/edit-plant/${plant.id}`)}
          >
            <FaEdit className="mr-2" />
            Edit
          </button>
          <button
            className="px-4 py-2 flex items-center bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
            onClick={openDeleteModal}
          >
            <FaTrashAlt className="mr-2" />
            Delete
          </button>
        </div>
      </div>

      {/* Confirm Delete Modal */}
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default PlantDetails;