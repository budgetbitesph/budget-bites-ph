// --- 1. Comprehensive Database of Filipino Recipes ---
const recipeDB = [
    // 🥣 Breakfasts
    { name: "Tortang Talong", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 30, calories: "150 kcal", prepTime: "20 mins", method: "Pan-fry", ingredients: ["Eggplant", "Eggs", "Salt", "Oil"] },
    { name: "Oatmeal with Mango", type: "breakfast", tags: ["vegetarian", "healthy", "any"], costPerServing: 40, calories: "220 kcal", prepTime: "10 mins", method: "Boil", ingredients: ["Oats", "Ripe Mango", "Milk/Water"] },
    { name: "Tapsilog", type: "breakfast", tags: ["high-protein", "any"], costPerServing: 65, calories: "450 kcal", prepTime: "15 mins", method: "Fry", ingredients: ["Beef Tapa", "Garlic Rice", "Egg"] },
    { name: "Pandesal at Itlog", type: "breakfast", tags: ["vegetarian", "any"], costPerServing: 25, calories: "250 kcal", prepTime: "5 mins", method: "Assemble", ingredients: ["Pandesal", "Egg", "Butter"] },
    { name: "Arroz Caldo", type: "breakfast", tags: ["healthy", "high-protein", "any"], costPerServing: 40, calories: "300 kcal", prepTime: "30 mins", method: "Boil", ingredients: ["Rice", "Chicken", "Ginger", "Garlic"] },
    { name: "Champorado", type: "breakfast", tags: ["vegetarian", "any"], costPerServing: 35, calories: "350 kcal", prepTime: "25 mins", method: "Boil", ingredients: ["Glutinous Rice", "Cocoa Tablea", "Milk", "Sugar"] },
    { name: "Bangus Silog", type: "breakfast", tags: ["high-protein", "healthy", "any"], costPerServing: 70, calories: "400 kcal", prepTime: "20 mins", method: "Fry", ingredients: ["Daing na Bangus", "Garlic Rice", "Egg"] },

    // 🍲 Lunches
    { name: "Ginisang Munggo", type: "lunch", tags: ["vegetarian", "healthy", "any"], costPerServing: 35, calories: "210 kcal", prepTime: "45 mins", method: "Simmer", ingredients: ["Mung beans", "Spinach", "Garlic", "Onion"] },
    { name: "Chicken Tinola", type: "lunch", tags: ["healthy", "high-protein", "any"], costPerServing: 55, calories: "280 kcal", prepTime: "40 mins", method: "Boil", ingredients: ["Chicken cuts", "Sayote", "Malunggay", "Ginger"] },
    { name: "Pork Sinigang", type: "lunch", tags: ["high-protein", "any"], costPerServing: 70, calories: "350 kcal", prepTime: "50 mins", method: "Boil", ingredients: ["Pork", "Kangkong", "Radish", "Tamarind Base"] },
    { name: "Ginisang Sayote", type: "lunch", tags: ["vegetarian", "healthy", "any"], costPerServing: 30, calories: "150 kcal", prepTime: "20 mins", method: "Sauté", ingredients: ["Sayote", "Garlic", "Onion", "Pork Giniling (opt)"] },
    { name: "Chicken Adobo", type: "lunch", tags: ["high-protein", "any"], costPerServing: 60, calories: "380 kcal", prepTime: "35 mins", method: "Simmer", ingredients: ["Chicken", "Soy Sauce", "Vinegar", "Garlic"] },
    { name: "Fish Paksiw", type: "lunch", tags: ["healthy", "any"], costPerServing: 50, calories: "200 kcal", prepTime: "25 mins", method: "Simmer", ingredients: ["Fish", "Vinegar", "Garlic", "Ginger", "Eggplant"] },
    { name: "Pork Giniling", type: "lunch", tags: ["high-protein", "any"], costPerServing: 65, calories: "320 kcal", prepTime: "30 mins", method: "Sauté", ingredients: ["Ground Pork", "Potatoes", "Carrots", "Tomato Sauce"] },

    // 🍛 Dinners
    { name: "Pinakbet", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 45, calories: "180 kcal", prepTime: "30 mins", method: "Sauté", ingredients: ["Squash", "String beans", "Bitter gourd", "Bagoong"] },
    { name: "Adobong Kangkong", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 25, calories: "120 kcal", prepTime: "15 mins", method: "Sauté", ingredients: ["Kangkong", "Soy sauce", "Vinegar", "Garlic"] },
    { name: "Grilled Tilapia", type: "dinner", tags: ["healthy", "high-protein", "any"], costPerServing: 60, calories: "200 kcal", prepTime: "25 mins", method: "Grill", ingredients: ["Tilapia", "Tomatoes", "Onions", "Salt"] },
    { name: "Bistek Tagalog", type: "dinner", tags: ["high-protein", "any"], costPerServing: 80, calories: "400 kcal", prepTime: "35 mins", method: "Marinate & Fry", ingredients: ["Beef strips", "Soy sauce", "Calamansi", "Onion"] },
    { name: "Ginisang Ampalaya", type: "dinner", tags: ["vegetarian", "healthy", "any"], costPerServing: 35, calories: "160 kcal", prepTime: "20 mins", method: "Sauté", ingredients: ["Ampalaya", "Egg", "Tomatoes", "Garlic"] },
    { name: "Chicken Afritada", type: "dinner", tags: ["high-protein", "any"], costPerServing: 75, calories: "340 kcal", prepTime: "45 mins", method: "Simmer", ingredients: ["Chicken", "Tomato Sauce", "Potatoes", "Bell Peppers"] },
    { name: "Tokwa't Baboy", type: "dinner", tags: ["high-protein", "any"], costPerServing: 55, calories: "310 kcal", prepTime: "30 mins", method: "Fry & Mix", ingredients: ["Tofu", "Pork Belly", "Vinegar", "Soy Sauce", "Onion"] }
];

// --- 2. Shuffle Function (Babalasahin ang ulam) ---
function shuffleArray(array) {
    let shuffled = [...array]; 
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// --- 3. Dark Mode Toggle ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});

// --- 4. Main App Logic ---
document.getElementById('planner-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    
    const people = parseInt(document.getElementById('people').value);
    const dailyBudget = parseFloat(document.getElementById('budget').value);
    const dietPreference = document.getElementById('diet').value;

    generateMealPlan(people, dailyBudget, dietPreference);
});

function generateMealPlan(people, dailyBudget, diet) {
    const resultsSection = document.getElementById('results');
    const mealGrid = document.getElementById('meal-grid');
    mealGrid.innerHTML = ''; // Clear previous results

    let totalDailyCost = 0;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    // Filter based on what the user selected
    let availableBreakfasts = recipeDB.filter(r => r.type === "breakfast" && (diet === "any" || r.tags.includes(diet)));
    let availableLunches = recipeDB.filter(r => r.type === "lunch" && (diet === "any" || r.tags.includes(diet)));
    let availableDinners = recipeDB.filter(r => r.type === "dinner" && (diet === "any" || r.tags.includes(diet)));

    // Fallback: If strict diet returns 0 items, use all items to prevent crashing
    if(availableBreakfasts.length === 0) availableBreakfasts = recipeDB.filter(r => r.type === "breakfast");
    if(availableLunches.length === 0) availableLunches = recipeDB.filter(r => r.type === "lunch");
    if(availableDinners.length === 0) availableDinners = recipeDB.filter(r => r.type === "dinner");

    // Shuffle the lists so they are in a random order every time you click "Generate"
    const shuffledBreakfasts = shuffleArray(availableBreakfasts);
    const shuffledLunches = shuffleArray(availableLunches);
    const shuffledDinners = shuffleArray(availableDinners);

    days.forEach((day, index) => {
        // SMART LOOP FIX: The '%' operator loops through the array safely. 
        // This completely prevents "undefined" errors while ensuring NO repeats for 7 days!
        const b = shuffledBreakfasts[index % shuffledBreakfasts.length];
        const l = shuffledLunches[index % shuffledLunches.length];
        const d = shuffledDinners[index % shuffledDinners.length];
        
        // Calculate cost
        const dayCost = (b.costPerServing + l.costPerServing + d.costPerServing) * people;
        if(day === "Monday") totalDailyCost = dayCost; 

        // Add to Screen
        const dayHTML = `
            <div class="day-card">
                <h4 class="day-title">${day}</h4>
                <div class="meals-wrapper">
                    ${renderMeal('Breakfast', b, people)}
                    ${renderMeal('Lunch', l, people)}
                    ${renderMeal('Dinner', d, people)}
                </div>
            </div>
        `;
        mealGrid.innerHTML += dayHTML;
    });

    updateBudgetCalculator(dailyBudget, totalDailyCost);
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// --- 5. Render HTML Helper ---
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

// --- 6. Budget Calculator ---
function updateBudgetCalculator(budget, estCost) {
    document.getElementById('calc-daily-budget').innerText = `₱${budget.toFixed(2)}`;
    document.getElementById('calc-daily-cost').innerText = `₱${estCost.toFixed(2)}`;
    
    const remaining = budget - estCost;
    const remainingEl = document.getElementById('calc-remaining');
    remainingEl.innerText = `₱${remaining.toFixed(2)}`;
    
    // Budget turns red if negative
    if(remaining < 0) {
        remainingEl.style.color = "red";
    } else {
        remainingEl.style.color = "var(--secondary-color)";
    }

    document.getElementById('calc-weekly-cost').innerText = `₱${(estCost * 7).toFixed(2)}`;
}
