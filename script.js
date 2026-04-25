// --- Database of Filipino Recipes ---
const recipeDB = [
    { name: "Tortang Talong", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 30, calories: "150 kcal", prepTime: "20 mins", method: "Grill and fry", ingredients: ["Eggplant", "Eggs", "Salt", "Oil"] },
    { name: "Oatmeal with Mango", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 40, calories: "220 kcal", prepTime: "10 mins", method: "Boil", ingredients: ["Oats", "Ripe Mango", "Milk/Water"] },
    { name: "Tapsilog", type: "breakfast", tags: ["high-protein", "any"], costPerServing: 65, calories: "450 kcal", prepTime: "15 mins", method: "Fry", ingredients: ["Beef Tapa", "Garlic Rice", "Egg"] },
    { name: "Ginisang Munggo", type: "lunch", tags: ["vegetarian", "healthy", "any"], costPerServing: 35, calories: "210 kcal", prepTime: "45 mins", method: "Simmer", ingredients: ["Mung beans", "Spinach/Malunggay", "Garlic", "Onion", "Tomatoes"] },
    { name: "Chicken Tinola", type: "lunch", tags: ["healthy", "high-protein", "any"], costPerServing: 55, calories: "280 kcal", prepTime: "40 mins", method: "Boil/Simmer", ingredients: ["Chicken cuts", "Chayote", "Malunggay", "Ginger", "Broth"] },
    { name: "Pork Sinigang", type: "lunch", tags: ["high-protein", "any"], costPerServing: 70, calories: "350 kcal", prepTime: "50 mins", method: "Boil", ingredients: ["Pork", "Kangkong", "Radish", "Tamarind Base"] },
    { name: "Pinakbet", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 45, calories: "180 kcal", prepTime: "30 mins", method: "Sauté", ingredients: ["Squash", "String beans", "Bitter gourd", "Bagoong (Shrimp paste)"] },
    { name: "Adobong Kangkong", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 25, calories: "120 kcal", prepTime: "15 mins", method: "Sauté", ingredients: ["Kangkong", "Soy sauce", "Vinegar", "Garlic"] },
    { name: "Grilled Tilapia", type: "dinner", tags: ["healthy", "high-protein", "any"], costPerServing: 60, calories: "200 kcal", prepTime: "25 mins", method: "Grill", ingredients: ["Tilapia", "Tomatoes", "Onions", "Salt"] },
    { name: "Bistek Tagalog", type: "dinner", tags: ["high-protein", "any"], costPerServing: 80, calories: "400 kcal", prepTime: "35 mins", method: "Marinate & Fry", ingredients: ["Beef strips", "Soy sauce", "Calamansi", "Onion rings"] }
];

// --- Theme Toggle ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});

// --- App Logic ---
document.getElementById('planner-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get Inputs
    const people = parseInt(document.getElementById('people').value);
    const dailyBudget = parseFloat(document.getElementById('budget').value);
    const dietPreference = document.getElementById('diet').value;

    generateMealPlan(people, dailyBudget, dietPreference);
});

function generateMealPlan(people, dailyBudget, diet) {
    const resultsSection = document.getElementById('results');
    const mealGrid = document.getElementById('meal-grid');
    mealGrid.innerHTML = ''; // Clear old results

    let totalDailyCost = 0;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Generate 7 days
    days.forEach(day => {
        const dayPlan = getDailyMeals(diet);
        
        // Calculate cost for this day based on number of people
        const dayCost = (dayPlan.breakfast.costPerServing + dayPlan.lunch.costPerServing + dayPlan.dinner.costPerServing) * people;
        if(day === "Monday") totalDailyCost = dayCost; // Use Day 1 to estimate average daily cost

        // Create HTML for the day
        const dayHTML = `
            <div class="day-card">
                <h4 class="day-title">${day}</h4>
                <div class="meals-wrapper">
                    ${renderMeal('Breakfast', dayPlan.breakfast, people)}
                    ${renderMeal('Lunch', dayPlan.lunch, people)}
                    ${renderMeal('Dinner', dayPlan.dinner, people)}
                </div>
            </div>
        `;
        mealGrid.innerHTML += dayHTML;
    });

    updateBudgetCalculator(dailyBudget, totalDailyCost);
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function getDailyMeals(diet) {
    // Filter database based on diet selection
    const availableBreakfasts = recipeDB.filter(r => r.type === "breakfast" && r.tags.includes(diet));
    const availableLunches = recipeDB.filter(r => r.type === "lunch" && r.tags.includes(diet));
    const availableDinners = recipeDB.filter(r => r.type === "dinner" && r.tags.includes(diet));

    // Fallback if filter is too strict
    const b = availableBreakfasts.length > 0 ? availableBreakfasts : recipeDB.filter(r => r.type === "breakfast");
    const l = availableLunches.length > 0 ? availableLunches : recipeDB.filter(r => r.type === "lunch");
    const d = availableDinners.length > 0 ? availableDinners : recipeDB.filter(r => r.type === "dinner");

    // Random selection
    return {
        breakfast: b[Math.floor(Math.random() * b.length)],
        lunch: l[Math.floor(Math.random() * l.length)],
        dinner: d[Math.floor(Math.random() * d.length)]
    };
}

function renderMeal(type, recipe, people) {
    const totalCost = recipe.costPerServing * people;
    return `
        <div class="meal">
            <h5>${type}: ${recipe.name}</h5>
            <p class="meal-cost">₱${totalCost.toFixed(2)} (Total for ${people})</p>
            <div class="meal-details">
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p><strong>Method:</strong> ${recipe.method} (${recipe.prepTime})</p>
                <p><strong>Nutrition:</strong> ${recipe.calories}</p>
            </div>
        </div>
    `;
}

function updateBudgetCalculator(budget, estCost) {
    document.getElementById('calc-daily-budget').innerText = `₱${budget.toFixed(2)}`;
    document.getElementById('calc-daily-cost').innerText = `₱${estCost.toFixed(2)}`;
    
    const remaining = budget - estCost;
    const remainingEl = document.getElementById('calc-remaining');
    remainingEl.innerText = `₱${remaining.toFixed(2)}`;
    
    // Turn red if over budget
    if(remaining < 0) {
        remainingEl.style.color = "red";
    } else {
        remainingEl.style.color = "var(--secondary-color)"; // Reset
    }

    document.getElementById('calc-weekly-cost').innerText = `₱${(estCost * 7).toFixed(2)}`;
}
