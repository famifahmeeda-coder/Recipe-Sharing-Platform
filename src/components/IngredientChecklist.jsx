import React, { useState } from "react"

const IngredientChecklist = ({ ingredients }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([])

  const toggleIngredient = (ingredient) => {
    if (checkedIngredients.includes(ingredient)) {
      setCheckedIngredients(
        checkedIngredients.filter((item) => item !== ingredient)
      )
    } else {
      setCheckedIngredients([
        ...checkedIngredients,
        ingredient,
      ])
    }
  }

  return (
    <div className="ingredient-checklist">
      <h2>🛒 Ingredient Checklist</h2>

      {ingredients && ingredients.length > 0 ? (
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={checkedIngredients.includes(ingredient)}
                  onChange={() => toggleIngredient(ingredient)}
                />

                <span
                  className={
                    checkedIngredients.includes(ingredient)
                      ? "checked"
                      : ""
                  }
                >
                  {ingredient}
                </span>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p>No ingredients available.</p>
      )}
    </div>
  )
}

export default IngredientChecklist