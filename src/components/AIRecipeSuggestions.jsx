
import { useState } from "react"
import API from "../api/axios"

function AIRecipeSuggestions() {
    const [ingredients, setIngredients] = useState("")
    const [suggestions, setSuggestions] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleGenerate = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            setError("");
            setSuggestions("")

            const response = await API.post("/ai/suggestions", {
                ingredients: ingredients
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
            })

            setSuggestions(response.data.suggestions)
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Unable to generate recipe suggestions."
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2> AI Recipe Suggestions</h2>

            <p>Enter the ingredients you have, separated by commas.</p>

            <form onSubmit={handleGenerate}>
                <textarea
                    placeholder="Example: Chicken, Rice, Onion, Tomato"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Generating..." : "Generate Recipes"}
                </button>
            </form>

            {error && <p>{error}</p>}

            {suggestions && (
                <div>
                    <h3>AI Generated Recipes</h3>
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        {suggestions}
                    </pre>
                </div>
            )}
        </div>
    )
}

export default AIRecipeSuggestions
