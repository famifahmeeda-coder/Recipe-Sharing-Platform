const recipes = [
  {
    id: 1,
    name: "Chicken Biryani",
    image:
      "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    cuisine: "Indian",
    diet: "Non-Veg",
    difficulty: "Medium",
    cookingTime: 45,
    rating: 4.8,

    ingredients: [
      "Chicken",
      "Basmati Rice",
      "Onion",
      "Tomato",
      "Curd",
      "Ginger Garlic Paste",
      "Green Chilli",
      "Biryani Masala",
      "Mint Leaves",
      "Coriander Leaves",
      "Cooking Oil",
      "Salt"
    ],

    steps: [
      "Wash and soak the basmati rice for 20 minutes.",
      "Marinate the chicken with curd, spices and ginger garlic paste.",
      "Heat oil in a large pot and fry the onions until golden brown.",
      "Add tomatoes, green chilli and biryani masala.",
      "Add the marinated chicken and cook until the chicken is almost done.",
      "Add the soaked rice and enough water.",
      "Cover the pot and cook on low heat until the rice is completely cooked.",
      "Garnish with mint and coriander leaves.",
      "Serve hot with raita."
    ]
  },

  {
    id: 2,
    name: "Margherita Pizza",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",

    cuisine: "Italian",
    diet: "Veg",
    difficulty: "Easy",
    cookingTime: 30,
    rating: 4.7,

    ingredients: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Tomato",
      "Basil Leaves",
      "Olive Oil",
      "Salt"
    ],

    steps: [
      "Prepare the pizza dough and roll it into a round shape.",
      "Spread tomato sauce evenly over the dough.",
      "Add mozzarella cheese and sliced tomatoes.",
      "Sprinkle a little salt and add basil leaves.",
      "Drizzle olive oil over the pizza.",
      "Bake in a preheated oven until the crust becomes golden.",
      "Remove from the oven and serve hot."
    ]
  },

  {
    id: 3,
    name: "Vegetable Fried Rice",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b",

    cuisine: "Chinese",
    diet: "Veg",
    difficulty: "Easy",
    cookingTime: 25,
    rating: 4.5,

    ingredients: [
      "Cooked Rice",
      "Carrot",
      "Capsicum",
      "Green Peas",
      "Spring Onion",
      "Garlic",
      "Soy Sauce",
      "Pepper",
      "Salt",
      "Cooking Oil"
    ],

    steps: [
      "Cook the rice and allow it to cool.",
      "Heat oil in a wok.",
      "Add garlic and stir-fry for a few seconds.",
      "Add carrot, capsicum and green peas.",
      "Add the cooked rice.",
      "Add soy sauce, pepper and salt.",
      "Mix everything well on high heat.",
      "Garnish with spring onions and serve hot."
    ]
  },

  {
    id: 4,
    name: "Pasta Alfredo",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",

    cuisine: "Italian",
    diet: "Veg",
    difficulty: "Medium",
    cookingTime: 35,
    rating: 4.6,

    ingredients: [
      "Pasta",
      "Butter",
      "Garlic",
      "Fresh Cream",
      "Parmesan Cheese",
      "Black Pepper",
      "Salt",
      "Parsley"
    ],

    steps: [
      "Boil the pasta in salted water until cooked.",
      "Melt butter in a pan.",
      "Add chopped garlic and cook for a few seconds.",
      "Add fresh cream and stir well.",
      "Add Parmesan cheese and mix until the sauce becomes creamy.",
      "Add cooked pasta to the sauce.",
      "Season with salt and black pepper.",
      "Garnish with parsley and serve."
    ]
  },

  {
    id: 5,
    name: "Chicken Noodles",
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de",

    cuisine: "Chinese",
    diet: "Non-Veg",
    difficulty: "Easy",
    cookingTime: 25,
    rating: 4.4,

    ingredients: [
      "Noodles",
      "Chicken",
      "Carrot",
      "Capsicum",
      "Cabbage",
      "Spring Onion",
      "Soy Sauce",
      "Garlic",
      "Pepper",
      "Salt"
    ],

    steps: [
      "Boil the noodles according to the package instructions.",
      "Cut the chicken into small pieces.",
      "Heat oil in a wok and cook the chicken.",
      "Add garlic and vegetables.",
      "Stir-fry everything on high heat.",
      "Add the cooked noodles.",
      "Add soy sauce, pepper and salt.",
      "Mix well and garnish with spring onions."
    ]
  },

  {
    id: 6,
    name: "Paneer Butter Masala",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",

    cuisine: "Indian",
    diet: "Veg",
    difficulty: "Medium",
    cookingTime: 40,
    rating: 4.9,

    ingredients: [
      "Paneer",
      "Tomato",
      "Onion",
      "Butter",
      "Fresh Cream",
      "Ginger Garlic Paste",
      "Garam Masala",
      "Red Chilli Powder",
      "Coriander Leaves",
      "Salt"
    ],

    steps: [
      "Cut the paneer into small cubes.",
      "Heat butter in a pan.",
      "Add onion and cook until soft.",
      "Add ginger garlic paste and cook for a minute.",
      "Add tomatoes and cook until soft.",
      "Blend the mixture into a smooth paste.",
      "Return the paste to the pan and add spices.",
      "Add paneer and fresh cream.",
      "Cook for a few minutes and garnish with coriander.",
      "Serve hot with naan or rice."
    ]
  }
]

export default recipes