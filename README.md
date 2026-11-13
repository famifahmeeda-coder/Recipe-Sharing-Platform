# Yumoria - Recipe Sharing Platform

Yumoria is a full-stack recipe sharing platform where users can explore recipes, search and filter dishes, save favorite recipes, and get AI-powered recipe suggestions based on available ingredients.

This repository contains the React frontend of the Yumoria application.

## Features

- Browse recipes
- Search recipes by name or ingredient
- Filter recipes by cuisine
- Filter recipes by diet
- Filter recipes by difficulty
- Add and manage favorite recipes
- User registration and login
- JWT-based authentication
- AI-powered recipe suggestions
- Recipe details
- Cooking timer
- Ingredient checklist
- Print recipe option

## Technologies Used

- React
- Vite
- React Router
- Axios
- JavaScript
- HTML
- CSS
- React Icons
- Framer Motion
- React Hook Form
- Day.js

## Project Structure

```text
src/
├── api/
│   └── axios.js
├── components/
│   ├── AIRecipeSuggestions.jsx
│   ├── Navbar.jsx
│   ├── CookingTimer.jsx
│   └── IngredientChecklist.jsx
├── pages/
│   ├── Home.jsx
│   ├── RecipeDetails.jsx
│   ├── Favorites.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/famifahmeeda-coder/Recipe-Sharing-Platform.git
```

Open the project folder:

```bash
cd Recipe-Sharing-Platform
```

Install the required packages:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will normally run at:

```text
http://localhost:5173
```

## Backend

The frontend communicates with the Yumoria Node.js and Express backend through Axios.

The backend provides APIs for:

- Recipes
- User registration and login
- Authentication
- Protected routes
- AI recipe suggestions
- MongoDB database operations

## AI Recipe Suggestions

Yumoria includes an AI feature that generates recipe suggestions based on ingredients entered by the user.

For example:

```text
Chicken, Rice, Onion, Tomato
```

The frontend sends the ingredients to the backend, which communicates with the Gemini API and returns recipe suggestions.

## Testing

The following features have been tested during development:

- User registration
- User login
- User logout
- Login after logout
- Recipe loading
- Recipe search
- Recipe filtering
- Favorites
- AI recipe suggestions
- Protected AI access

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Author

Fathimath Fahmeeda

GitHub:

https://github.com/famifahmeeda-coder

## License

This project was created as a Full Stack Development capstone project.