// --- Database of Filipino Recipes ---
const recipeDB = [
    { name: "Tortang Talong", type: "breakfast", tags: ["vegetarian","healthy","any"], costPerServing: 30, calories: "150 kcal", prepTime: "20 mins", method: "Grill and fry", ingredients: ["Eggplant","Eggs","Salt","Oil"] },
    { name: "Oatmeal with Mango", type: "breakfast", tags: ["vegetarian","healthy","any"], costPerServing: 40, calories: "220 kcal", prepTime: "10 mins", method: "Boil", ingredients: ["Oats","Mango","Milk"] },
    { name: "Lugaw with Egg", type: "breakfast", tags: ["healthy","any"], costPerServing: 35, calories: "250 kcal", prepTime: "25 mins", method: "Simmer", ingredients: ["Rice","Egg","Ginger"] },
    { name: "Banana Oatmeal", type: "breakfast", tags: ["vegetarian","healthy","any"], costPerServing: 35, calories: "230 kcal", prepTime: "10 mins", method: "Boil", ingredients: ["Oats","Banana"] },
    { name: "Tuna Pandesal", type: "breakfast", tags: ["healthy","high-protein","any"], costPerServing: 45, calories: "300 kcal", prepTime: "10 mins", method: "Mix", ingredients: ["Pandesal","Tuna"] },
    { name: "Boiled Egg with Kamote", type: "breakfast", tags: ["healthy","any"], costPerServing: 30, calories: "260 kcal", prepTime: "20 mins", method: "Boil", ingredients: ["Egg","Sweet potato"] },
    { name: "Peanut Butter Sandwich", type: "breakfast", tags: ["vegetarian","any"], costPerServing: 25, calories: "210 kcal", prepTime: "5 mins", method: "Assemble", ingredients: ["Bread","Peanut butter"] },

    { name: "Ginisang Munggo", type: "lunch", tags: ["vegetarian","healthy","any"], costPerServing: 35, calories: "210 kcal", prepTime: "45 mins", method: "Simmer", ingredients: ["Mung beans","Malunggay"] },
    { name: "Chicken Tinola", type: "lunch", tags: ["healthy","any"], costPerServing: 55, calories: "280 kcal", prepTime: "40 mins", method: "Boil", ingredients: ["Chicken","Chayote"] },
    { name: "Chicken Adobo", type: "lunch", tags: ["any"], costPerServing: 60, calories: "330 kcal", prepTime: "40 mins", method: "Simmer", ingredients: ["Chicken","Soy sauce"] },
    { name: "Sardines with Misua", type: "lunch", tags: ["healthy","any"], costPerServing: 35, calories: "230 kcal", prepTime: "15 mins", method: "Simmer", ingredients: ["Sardines","Misua"] },
    { name: "Chicken Afritada", type: "lunch", tags: ["any"], costPerServing: 65, calories: "360 kcal", prepTime: "45 mins", method: "Stew", ingredients: ["Chicken","Potato"] },
    { name: "Ginisang Sayote", type: "lunch", tags: ["healthy","any"], costPerServing: 50, calories: "250 kcal", prepTime: "25 mins", method: "Saute", ingredients: ["Sayote","Garlic"] },
    { name: "Pork Sinigang", type: "lunch", tags: ["any"], costPerServing: 70, calories: "350 kcal", prepTime: "50 mins", method: "Boil", ingredients: ["Pork","Kangkong"] },

    { name: "Pinakbet", type: "dinner", tags: ["vegetarian","healthy","any"], costPerServing: 45, calories: "180 kcal", prepTime: "30 mins", method: "Saute", ingredients: ["Vegetables"] },
    { name: "Adobong Kangkong", type: "dinner", tags: ["vegetarian","healthy","any"], costPerServing: 25, calories: "120 kcal", prepTime: "15 mins", method: "Saute", ingredients: ["Kangkong"] },
    { name: "Grilled Tilapia", type: "dinner", tags: ["healthy","any"], costPerServing: 60, calories: "200 kcal", prepTime: "25 mins", method: "Grill", ingredients: ["Tilapia"] },
    { name: "Bistek Tagalog", type: "dinner", tags: ["any"], costPerServing: 80, calories: "400 kcal", prepTime: "35 mins", method: "Fry", ingredients: ["Beef"] },
    { name: "Vegetable Stir Fry", type: "dinner", tags: ["vegetarian","healthy","any"], costPerServing: 40, calories: "170 kcal", prepTime: "20 mins", method: "Saute", ingredients: ["Vegetables"] },
    { name: "Fish Sinigang", type: "dinner", tags: ["healthy","any"], costPerServing: 65, calories: "260 kcal", prepTime: "35 mins", method: "Boil", ingredients: ["Fish"] },
    { name: "Tofu Sisig", type: "dinner", tags: ["vegetarian","any"], costPerServing: 45, calories: "240 kcal", prepTime: "25 mins", method: "Cook", ingredients: ["Tofu"] }
];

// FORM SUBMIT
document.getElementById('planner-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const people = parseInt(document.getElementById('people').value);
    const dailyBudget = parseFloat(document.getElementById('budget').value);
    const diet = document.getElementById('diet').value;

    generateMealPlan(people, dailyBudget, diet);
});

// SHUFFLE FUNCTION
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

// GET UNIQUE MEALS
function getUniqueMeals(type, diet) {
    let meals = recipeDB.filter(r => r.type === type && r.tags.includes(diet));

    if (meals.length === 0) {
        meals = recipeDB.filter(r => r.type === type);
    }

    return shuffle(meals);
}

// MAIN GENERATOR
function generateMealPlan(people, budget, diet) {
    const mealGrid = document.getElementById('meal-grid');
    mealGrid.innerHTML = "";

    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    const breakfasts = getUniqueMeals("breakfast", diet);
    const lunches = getUniqueMeals("lunch", diet);
    const dinners = getUniqueMeals("dinner", diet);

    let weeklyCost = 0;

    days.forEach((day, i) => {
        const b = breakfasts[i];
        const l = lunches[i];
        const d = dinners[i];

        const dayCost = (
            b.costPerServing +
            l.costPerServing +
            d.costPerServing
        ) * people;

        weeklyCost += dayCost;

        mealGrid.innerHTML += `
        <div class="day-card">
            <h3>${day}</h3>

            ${renderMeal("Breakfast", b, people)}
            ${renderMeal("Lunch", l, people)}
            ${renderMeal("Dinner", d, people)}

        </div>
        `;
    });

    const dailyCost = weeklyCost / 7;

    updateBudgetCalculator(budget, dailyCost, weeklyCost);

    document.getElementById("results").classList.remove("hidden");
}

function renderMeal(type, recipe, people) {
    return `
    <div class="meal">
        <h4>${type}: ${recipe.name}</h4>
        <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
        <p>How to cook: ${recipe.method}</p>
        <p>Calories: ${recipe.calories}</p>
        <p>Cost: ₱${(recipe.costPerServing * people).toFixed(2)}</p>
    </div>
    `;
}

function updateBudgetCalculator(budget, dailyCost, weeklyCost) {
    document.getElementById("calc-daily-budget").innerText = `₱${budget.toFixed(2)}`;
    document.getElementById("calc-daily-cost").innerText = `₱${dailyCost.toFixed(2)}`;
    document.getElementById("calc-weekly-cost").innerText = `₱${weeklyCost.toFixed(2)}`;

    const remaining = budget - dailyCost;
    const remainingEl = document.getElementById("calc-remaining");

    remainingEl.innerText = `₱${remaining.toFixed(2)}`;

    if (remaining < 0) {
        remainingEl.style.color = "red";
    } else {
        remainingEl.style.color = "green";
    }
}
