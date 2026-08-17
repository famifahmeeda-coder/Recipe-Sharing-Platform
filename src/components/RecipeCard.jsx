import React from "react"
import { Link } from "react-router-dom"
import { useFavorites } from "../context/FavoritesContext"

const RecipeCard = ({ recipe }) => {

  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite
  } = useFavorites()

  const favorite = isFavorite(recipe.id)

  const handleFavorite = () => {
    if (favorite) {
      removeFromFavorites(recipe.id)
    } else {
      addToFavorites(recipe)
    }
  }

  return (
    <article className="recipe-card">

      
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-image"
      />

      
      <div className="recipe-card-content">

        <h2>{recipe.name}</h2>

        <div className="recipe-info">

          <p>⭐ {recipe.rating}</p>

          <p>🍽️ {recipe.cuisine}</p>

          <p>🥗 {recipe.diet}</p>

          <p>🔥 {recipe.difficulty}</p>

          <p>⏱️ {recipe.cookingTime} mins</p>

        </div>

        
        <button
          className="favorite-button"
          onClick={handleFavorite}
          aria-label={
            favorite
              ? `Remove ${recipe.name} from favorites`
              : `Add ${recipe.name} to favorites`
          }
        >
          {favorite
            ? "❤️ Remove Favorite"
            : "🤍 Add Favorite"}
        </button>

        
        <Link to={`/recipe/${recipe.id}`}>
          <button className="view-button">
            View Recipe
          </button>
        </Link>

      </div>

    </article>
  )
}

export default RecipeCard