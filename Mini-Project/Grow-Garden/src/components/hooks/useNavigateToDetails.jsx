import { useNavigate } from 'react-router-dom';

const useNavigateToDetails = (plantName) => {
  const navigate = useNavigate();

  return () => {
    const encodedPlantName = encodeURIComponent(plantName);
    navigate(`/my-plants/${encodedPlantName}`);
  };
};

export default useNavigateToDetails;