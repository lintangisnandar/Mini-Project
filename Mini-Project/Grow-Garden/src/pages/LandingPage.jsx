import React from 'react';
import { FaLeaf, FaMobileAlt, FaSeedling } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      navigate('/plants');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <div className="bg-[#E3DBC7] min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#FDFBF8] py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Text Section */}
          <div className="ml-20 my-6 md:w-1/2 text-left md:pr-10">
            <h1 className="text-4xl font-bold text-[#84A575]">Grow and Thrive with GrowGarden</h1>
            <p className="text-lg text-[#809B70] mt-4">
              Your personalized plant care assistant with AI-powered recommendations.
            </p>
            <button onClick={handleGetStarted} className="mt-8 px-6 py-3 bg-[#84A575] text-white font-semibold rounded-lg shadow-md hover:bg-[#6D8360]">
              Get Started
            </button>
          </div>
          {/* Right Image Section */}
          <div className="mr-10 ml-1 md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="plant.png"
              alt="Plants"
              className="max-w-xs md:max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#E3DBC7] mx-20 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#84A575]">Why Choose GrowGarden?</h2>
        <div className="mt-10 flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-[#FDFBF8] p-6 rounded-lg shadow-md max-w-sm">
            <FaLeaf className="text-[#84A575] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#84A575]">Smart Care Tips</h3>
            <p className="text-[#809B70] mt-2">
              AI-generated advice tailored for each plant.
            </p>
          </div>
          <div className="bg-[#FDFBF8] p-6 rounded-lg shadow-md max-w-sm">
            <FaMobileAlt className="text-[#84A575] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#84A575]">Easy Tracking</h3>
            <p className="text-[#809B70] mt-2">
              Add and manage all your plants effortlessly.
            </p>
          </div>
          <div className="bg-[#FDFBF8] p-6 rounded-lg shadow-md max-w-sm">
            <FaSeedling className="text-[#84A575] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#84A575]">Stay Green</h3>
            <p className="text-[#809B70] mt-2">
              Eco-friendly tips and sustainable gardening resources.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FDFBF8] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#84A575] mb-6">How It Works</h2>
          <p className="text-lg text-[#809B70] mb-10 max-w-2xl mx-auto">
            Simply add a plant, receive expert care tips, and watch your plants thrive with our eco-friendly recommendations.
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-[#E3DBC7] rounded-lg p-6 shadow-md max-w-xs">
                <p className="text-[#84A575] font-bold text-4xl">1</p>
                <p className="text-[#809B70] mt-2">Add your favorite plants</p>
              </div>
              <div className="bg-[#E3DBC7] rounded-lg p-6 shadow-md max-w-xs">
                <p className="text-[#84A575] font-bold text-4xl">2</p>
                <p className="text-[#809B70] mt-2">Receive AI-powered care tips</p>
              </div>
              <div className="bg-[#E3DBC7] rounded-lg p-6 shadow-md max-w-xs">
                <p className="text-[#84A575] font-bold text-4xl">3</p>
                <p className="text-[#809B70] mt-2">Watch your plants thrive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#809B70] text-[#FDFBF8] py-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>Email: grow.garden@example.com</p>
          </div>
          <div className="flex justify-center gap-6 mt-4 mb-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#84A575]">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#84A575]">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#84A575]">Twitter</a>
          </div>
          <p className="text-sm">&copy; 2024 GrowGarden. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;