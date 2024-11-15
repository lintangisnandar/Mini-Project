import React from 'react';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#FDFBF8] rounded-lg p-6 w-80 shadow-lg">
        <h2 className="text-xl font-bold text-red-500 mb-2">Confirm Delete</h2>
        <p className="text-gray-600 text-sm mb-6">Are you sure you want to delete this plant?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-white text-[#404C3B] font-semibold py-1 px-4 rounded-md hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white font-semibold py-1 px-4 rounded-md hover:bg-[#6a8f5e]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;