import React, { useState } from 'react';
import axios from 'axios';
import './SearchRecipes.css';

const SearchRecipes = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    axios.get('http://127.0.0.1:8000/api/search-recipes/', { params: { query: trimmedQuery } })
      .then(response => {
        if (response.data.length === 0) {
          setError('No recipes found.');
        } else {
          setRecipes(response.data);
          setError(null);
        }
      })
      .catch(() => {
        setError('Error fetching recipes.');
      });
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container">
      <h1 className="title">Search for Recipes</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      {error && <p className="error-message">{error}</p>}
      <ul className="recipe-list">
        {recipes.map(recipe => (
          <li
            key={recipe.id}
            onClick={() => handleRecipeClick(recipe)}
            className="recipe-item"
          >
            {recipe.name}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div className="recipe-details">
          <button className="close-button" onClick={handleCloseDetails}>Close</button>
          <h2>{selectedRecipe.name}</h2>
          <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
          <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default SearchRecipes;
