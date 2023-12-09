import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedCard = location.state?.selectedCard;

  useEffect(() => {
    if (!selectedCard) {
      navigate('/');
    }
  }, [selectedCard, navigate]);

  if (!selectedCard) {
    return null;
  }

  return (
    <div className="container mx-auto mt-8 p-4 pt-36">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg flex">
        <img src={selectedCard.image} alt={selectedCard.name} className="w-1/2 h-64 object-cover" />
        <div className="flex flex-col justify-between p-6 w-1/2">
          <div>
            <h1 className="text-2xl font-bold mb-2">{selectedCard.name}</h1>
            <p className="text-base text-gray-900 dark:text-black font-semibold mb-2">{selectedCard.price}</p>
            <p className="text-gray-700 mb-4">{selectedCard.sub}</p>
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={() => alert("Added to Cart")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
