import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import Footer from '../components/Footer';
import RecipeCard from "../components/RecipeCard";

import recipes from "../data/recipes";

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <SearchBar/>
        <FilterPanel />
       <h1>Yumoria</h1>
        {recipes.map((recipe) => (
         <RecipeCard
    key={recipe.id}
    recipe={recipe}
  />
      ))}
      <p>Welcome to the Home Page.</p>
      <Footer />
    </>
  )
}

export default Home
