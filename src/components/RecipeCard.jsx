import React from 'react'

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <img
        src={recipe.image}
        alt={recipe.name}
        width="250"
      />

      <h2>{recipe.name}</h2>

      <p>⭐ {recipe.rating}</p>

      <p>🍽️ {recipe.cuisine}</p>

      <p>⏱️ {recipe.cookingTime} mins</p>

      <p>🥗 {recipe.difficulty}</p>

      <button>View Recipe</button>
    </div>
  )
}

export default RecipeCard
