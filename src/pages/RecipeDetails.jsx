import React from "react"
import { Link, useParams } from "react-router-dom"

import recipes from "../data/recipes"
import CookingTimer from "../components/CookingTimer"
import IngredientChecklist from "../components/IngredientChecklist"

const RecipeDetails = () => {
  
  const { id } = useParams()

  
  const recipe = recipes.find(
    (item) => item.id === Number(id)
  )

  
  if (!recipe) {
    return (
      <div className="not-found">
        <h1>Recipe Not Found</h1>

        <p>
          Sorry, we couldn't find the recipe you are
          looking for.
        </p>

        <Link to="/">
          <button>← Back to Home</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="recipe-details">

      
      <div className="details-top">
        <Link to="/">
          <button className="back-button">
            ← Back to Recipes
          </button>
        </Link>

        <button
          className="print-button"
          onClick={() => window.print()}
        >
          🖨️ Print Recipe
        </button>
      </div>

      
      <section className="recipe-header">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="details-image"
        />

        <div className="recipe-header-content">

          <p className="recipe-category">
            🍽️ {recipe.cuisine} Cuisine
          </p>

          <h1>{recipe.name}</h1>

          <p className="recipe-rating">
            ⭐ {recipe.rating} / 5
          </p>

          <div className="recipe-meta">

            <span>
              🥗 {recipe.diet}
            </span>

            <span>
              🔥 {recipe.difficulty}
            </span>

            <span>
              ⏱️ {recipe.cookingTime} minutes
            </span>

          </div>

        </div>

      </section>

      
      <section className="recipe-section">

        <h2>🥕 Ingredients</h2>

        <IngredientChecklist
          ingredients={recipe.ingredients}
        />

      </section>

      
      <section className="recipe-section">

        <h2>⏱️ Cooking Timer</h2>

        <CookingTimer
          cookingTime={recipe.cookingTime}
        />

      </section>

      
      <section className="recipe-section">

        <h2>👨‍🍳 Step-by-Step Instructions</h2>

        <div className="recipe-steps">

          {recipe.steps.map((step, index) => (
            <div
              className="recipe-step"
              key={index}
            >

              <div className="step-number">
                {index + 1}
              </div>

              <p>{step}</p>

            </div>
          ))}

        </div>

      </section>

      
      <div className="details-bottom">

        <Link to="/">
          <button className="back-button">
            ← Explore More Recipes
          </button>
        </Link>

      </div>

    </div>
  )
}

export default RecipeDetails