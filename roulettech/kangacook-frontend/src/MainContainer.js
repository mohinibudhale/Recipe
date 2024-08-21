import React from 'react';
import SearchRecipes from './SearchRecipes'; 
import FeaturedRecipes from './FeaturedRecipes'; 

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="featured-recipes-container">
        <h2>Featured Recipes</h2>
        <FeaturedRecipes />
      </div>
      <div className="search-recipes-container">
        <h1 className="title">Recipe Finder</h1>
        <SearchRecipes />
      </div>
    </div>
  );
};

export default MainContainer;
