import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VendingCard = ({ machineName, defaultImage, hoverImage, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${machineName}`, {
      state: {
        selectedCard: {
          name: machineName,
          image: isHovered ? hoverImage : defaultImage,
          sub: description,
        },
      },
    });         
  };

  return (
    <div className="relative overflow-hidden w-64 h-96" onClick={handleClick}>
      <img
        src={isHovered ? hoverImage : defaultImage}
        alt={machineName}
        className="w-full h-full object-cover transition-transform transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-0 text-white">
        <p className="text-sm">{machineName}</p>
        <p style={{display: "none"}} className='text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default VendingCard;
