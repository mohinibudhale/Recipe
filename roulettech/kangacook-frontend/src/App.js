import React from 'react';
import './App.css'; 
import FeaturedRecipes from './FeaturedRecipes';
import SearchRecipes from './SearchRecipes';

function App() {
  return (
    <div className="App">
      <h1 className="header">Welcome to Kangacook</h1>
      <div className="main-container">
        <div className="search-container">
          <SearchRecipes />
        </div>
        <div className="featured-container">
          <FeaturedRecipes />
        </div>
      </div>
    </div>
  );
}

export default App;
