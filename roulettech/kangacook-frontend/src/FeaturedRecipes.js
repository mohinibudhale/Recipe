import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedRecipes.css'; 

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/featured-recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(err => {
        console.error('Error fetching featured recipes:', err);
      });
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedRecipe(null);
  };

  return (
    <div className="featured-container">
      <h2 className="featured-title">Featured Recipes</h2>
      <ul className="featured-list">
        {recipes.map(recipe => (
          <li key={recipe.id} className="featured-item" onClick={() => handleRecipeClick(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>

      {isPopupOpen && selectedRecipe && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h3>{selectedRecipe.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>{selectedRecipe.ingredients}</p>
            <p><strong>Instructions:</strong></p>
            <p>{selectedRecipe.instructions}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedRecipes;
