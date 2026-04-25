:root {
    --primary-color: #2e7d32; /* Healthy Green */
    --secondary-color: #f57c00; /* Appetizing Orange */
    --bg-color: #f9fbf9;
    --card-bg: #ffffff;
    --text-color: #333333;
    --text-muted: #666666;
    --border-color: #e0e0e0;
}

/* Dark Mode Variables */
body.dark-mode {
    --primary-color: #66bb6a;
    --secondary-color: #ff9800;
    --bg-color: #121212;
    --card-bg: #1e1e1e;
    --text-color: #e0e0e0;
    --text-muted: #aaaaaa;
    --border-color: #333333;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.3s, color 0.3s;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 { font-size: 1.5rem; }

.hero {
    text-align: center;
    margin: 2rem 0;
}

.hero h2 { color: var(--secondary-color); margin-bottom: 0.5rem;}

.card {
    background-color: var(--card-bg);
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    border: 1px solid var(--border-color);
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

input, select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 1rem;
}

button {
    cursor: pointer;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--secondary-color);
    color: white;
    width: 100%;
}

.btn-primary:hover { background-color: #e65100; }

.btn-secondary {
    background-color: var(--primary-color);
    color: white;
    display: block;
    margin: 2rem auto;
}

.btn-outline {
    background: transparent;
    border: 2px solid white;
    color: white;
}

.hidden { display: none; }

.budget-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.budget-item {
    background-color: var(--bg-color);
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid var(--border-color);
}

.budget-item p {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.budget-item .highlight { color: var(--secondary-color); }

.meal-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.day-card {
    background-color: var(--card-bg);
    border-left: 5px solid var(--primary-color);
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.day-title {
    color: var(--primary-color);
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 0.5rem;
}

.meals-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.meal {
    background-color: var(--bg-color);
    padding: 1rem;
    border-radius: 8px;
}

.meal h5 { color: var(--secondary-color); font-size: 1.1rem;}
.meal-cost { font-weight: bold; color: var(--primary-color); }
.meal-details { font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted); }

footer {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border-color);
}

@media (max-width: 600px) {
    header h1 { font-size: 1.2rem; }
    .btn-outline { padding: 0.5rem 1rem; font-size: 0.9rem; }
}

@media print {
    body { background-color: white; color: black; }
    .input-section, header, footer, #print-btn { display: none; }
    .card { box-shadow: none; border: 1px solid #ccc; }
}
