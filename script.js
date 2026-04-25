// --- Database of Filipino Recipes ---
const recipeDB = [
    { name: "Tortang Talong", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 30, calories: "150 kcal", prepTime: "20 mins", method: "Grill and fry", ingredients: ["Eggplant", "Eggs", "Salt", "Oil"] },
    { name: "Oatmeal with Mango", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 40, calories: "220 kcal", prepTime: "10 mins", method: "Boil", ingredients: ["Oats", "Mango", "Milk"] },
    { name: "Lugaw with Egg", type: "breakfast", tags: ["healthy", "any"], costPerServing: 35, calories: "250 kcal", prepTime: "25 mins", method: "Simmer", ingredients: ["Rice", "Egg", "Ginger"] },
    { name: "Banana Oatmeal", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 35, calories: "230 kcal", prepTime: "10 mins", method: "Boil", ingredients: ["Oats", "Banana"] },
    { name: "Tuna Pandesal", type: "breakfast", tags: ["healthy", "high-protein", "any"], costPerServing: 45, calories: "300 kcal", prepTime: "10 mins", method: "Mix", ingredients: ["Pandesal", "Tuna"] },
    { name: "Boiled Egg with Kamote", type: "breakfast", tags: ["healthy", "high-protein", "any"], costPerServing: 30, calories: "260 kcal", prepTime: "20 mins", method: "Boil", ingredients: ["Egg", "Sweet potato"] },
    { name: "Peanut Butter Sandwich", type: "breakfast", tags: ["vegetarian", "any"], costPerServing: 25, calories: "210 kcal", prepTime: "5 mins", method: "Assemble", ingredients: ["Bread", "Peanut butter"] },

    { name: "Ginisang Munggo", type: "lunch", tags: ["vegetarian", "healthy", "any"], costPerServing: 35, calories: "210 kcal", prepTime: "45 mins", method: "Simmer", ingredients: ["Mung beans", "Malunggay"] },
    { name: "Chicken Tinola", type: "lunch", tags: ["healthy", "high-protein", "any"], costPerServing: 55, calories: "280 kcal", prepTime: "40 mins", method: "Boil/Simmer", ingredients: ["Chicken", "Chayote", "Malunggay", "Ginger"] },
    { name: "Chicken Adobo", type: "lunch", tags: ["high-protein", "any"], costPerServing: 60, calories: "330 kcal", prepTime: "40 mins", method: "Simmer", ingredients: ["Chicken", "Soy sauce", "Vinegar", "Garlic"] },
    { name: "Sardines with Misua", type: "lunch", tags: ["healthy", "any"], costPerServing: 35, calories: "230 kcal", prepTime: "15 mins", method: "Simmer", ingredients: ["Sardines", "Misua", "Garlic", "Onion"] },
    { name: "Chicken Afritada", type: "lunch", tags: ["high-protein", "any"], costPerServing: 65, calories: "360 kcal", prepTime: "45 mins", method: "Stew", ingredients: ["Chicken", "Potato", "Carrot", "Tomato sauce"] },
    { name: "Ginisang Sayote", type: "lunch", tags: ["healthy", "any"], costPerServing: 50, calories: "250 kcal", prepTime: "25 mins", method: "Sauté", ingredients: ["Sayote", "Garlic", "Onion"] },
    { name: "Pork Sinigang", type: "lunch", tags: ["high-protein", "any"], costPerServing: 70, calories: "350 kcal", prepTime: "50 mins", method: "Boil", ingredients: ["Pork", "Kangkong", "Radish", "Tamarind base"] },

    { name: "Pinakbet", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 45, calories: "180 kcal", prepTime: "30 mins", method: "Sauté", ingredients: ["Squash", "String beans", "Bitter gourd", "Bagoong"] },
    { name: "Adobong Kangkong", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 25, calories: "120 kcal", prepTime: "15 mins", method: "Sauté", ingredients: ["Kangkong", "Soy sauce", "Vinegar", "Garlic"] },
    { name: "Grilled Tilapia", type: "dinner", tags: ["healthy", "high-protein", "any"], costPerServing: 60, calories: "200 kcal", prepTime: "25 mins", method: "Grill", ingredients: ["Tilapia", "Tomatoes", "Onions"] },
    { name: "Bistek Tagalog", type: "dinner", tags: ["high-protein", "any"], costPerServing: 80, calories: "400 kcal", prepTime: "35 mins", method: "Marinate and fry", ingredients: ["Beef", "Soy sauce", "Calamansi", "Onion"] },
    { name: "Vegetable Stir Fry", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 40, calories: "170 kcal", prepTime: "20 mins", method: "Sauté", ingredients: ["Cabbage", "Carrots", "Baguio beans", "Garlic"] },
    { name: "Fish Sinigang", type: "dinner", tags: ["healthy", "high-protein", "any"], costPerServing: 65, calories: "260 kcal", prepTime: "35 mins", method: "Boil", ingredients: ["Fish", "Kangkong", "Tomato", "Tamarind base"] },
    { name: "Tofu Sisig", type: "dinner", tags: ["vegetarian", "healthy", "high-protein", "any"], costPerServing: 45, calories: "240 kcal", prepTime: "25 mins", method: "Pan-fry and mix", ingredients: ["Tofu", "Onion", "Calamansi"] }
];

// --- Dark Mode ---
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});

// --- Form Submit ---
document.getElementById("planner-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const people = parseInt(document.getElementById("people").value);
    const dailyBudget = parseFloat(document.getElementById("budget").value);
    const diet = document.getElementById("diet").value;

    generateMealPlan(people, dailyBudget, diet);
});

// --- Main Meal Plan Generator ---
function generateMealPlan(people, dailyBudget, diet) {
    const resultsSection = document.getElementById("results");
    const mealGrid = document.getElementById("meal-grid");

    mealGrid.innerHTML = "";

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const breakfasts = getSevenUniqueMeals("breakfast", diet);
    const lunches = getSevenUniqueMeals("lunch", diet);
    const dinners = getSevenUniqueMeals("dinner", diet);

    let totalWeeklyCost = 0;

    days.forEach((day, index) => {
        const breakfast = breakfasts[index];
        const lunch = lunches[index];
        const dinner = dinners[index];

        const dayCost = (
            breakfast.costPerServing +
            lunch.costPerServing +
            dinner.costPerServing
        ) * people;

        totalWeeklyCost += dayCost;

        mealGrid.innerHTML += `
            <div class="day-card">
                <h4 class="day-title">${day}</h4>
                <div class="meals-wrapper">
                    ${renderMeal("Breakfast", breakfast, people)}
                    ${renderMeal("Lunch", lunch, people)}
                    ${renderMeal("Dinner", dinner, people)}
                </div>
            </div>
        `;
    });

    const averageDailyCost = totalWeeklyCost / 7;

    updateBudgetCalculator(dailyBudget, averageDailyCost, totalWeeklyCost);

    resultsSection.classList.remove("hidden");
    resultsSection.scrollIntoView({ behavior: "smooth" });
}

// --- Ensures no repeated meals per meal type within the week ---
function getSevenUniqueMeals(type, diet) {
    let meals = recipeDB.filter(recipe => recipe.type === type && recipe.tags.includes(diet));

    if (meals.length < 7) {
        meals = recipeDB.filter(recipe => recipe.type === type);
    }

    const uniqueMeals = removeDuplicateNames(meals);
    const shuffledMeals = shuffle(uniqueMeals);

    return shuffledMeals.slice(0, 7);
}

function removeDuplicateNames(meals) {
    const seen = new Set();

    return meals.filter(meal => {
        if (seen.has(meal.name)) {
            return false;
        }

        seen.add(meal.name);
        return true;
    });
}

function shuffle(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
    }

    return copy;
}

function renderMeal(type, recipe, people) {
    const totalCost = recipe.costPerServing * people;

    return `
        <div class="meal">
            <h5>${type}: ${recipe.name}</h5>
            <p class="meal-cost">₱${totalCost.toFixed(2)} total for ${people} person/s</p>
            <div class="meal-details">
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                <p><strong>How to cook:</strong> ${recipe.method} for about ${recipe.prepTime}.</p>
                <p><strong>Nutrition:</strong> Approximately ${recipe.calories} per serving.</p>
            </div>
        </div>
    `;
}

function updateBudgetCalculator(dailyBudget, averageDailyCost, totalWeeklyCost) {
    document.getElementById("calc-daily-budget").innerText = `₱${dailyBudget.toFixed(2)}`;
    document.getElementById("calc-daily-cost").innerText = `₱${averageDailyCost.toFixed(2)}`;
    document.getElementById("calc-weekly-cost").innerText = `₱${totalWeeklyCost.toFixed(2)}`;

    const remaining = dailyBudget - averageDailyCost;
    const remainingEl = document.getElementById("calc-remaining");

    remainingEl.innerText = `₱${remaining.toFixed(2)}`;

    if (remaining < 0) {
        remainingEl.style.color = "red";
    } else {
        remainingEl.style.color = "var(--secondary-color)";
    }
}
