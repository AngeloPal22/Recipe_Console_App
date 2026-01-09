### user_guide.md

# User Guide: Recipe Manager

## User Guide Overview
This document provides instructions on how to install, run, and use the **Recipe Manager** console application. The application allows users to log in with a simple username and manage their personal recipes through a text-based menu.

---

## Installation Instructions

### Prerequisites
Before running the application, ensure the following are installed:
* **Node.js** (v18 or later recommended)
* **npm** (comes with Node.js)
* **TypeScript**
* **ts-node** (optional but recommended)

### Setup Steps
1.  Clone or download the project repository.
2.  Navigate to the project root directory.
3.  Install dependencies:
    ```bash
    npm install
    ```

---

## Getting Started

### Step 1: Login
* The application prompts the user to enter a **username**.
* No password is required.
* After login, the main menu is displayed.

### Step 2: Main Menu
After login, the following menu options are displayed:
* **View Recipes** – List all recipes created by the user.
* **Create New Recipe** – Add a new recipe by entering name, ingredients, and steps.
* **Edit Recipe** – Update an existing recipe.
* **Delete Recipe** – Remove a recipe after confirmation.
* **Exit** – Close the application safely.

---

## Feature Details

### 3. Edit Recipe
* Select a recipe by its **ID**.
* Update one or more fields (Name, Ingredients, or Steps).
* Changes are saved automatically.

### 4. Delete Recipe
* Select a recipe by its **ID**.
* Confirm deletion before the recipe is permanently removed.

### 5. Steps of Recipe
* Selects the view Steps of that Recipe.
* A list of in order steps for the recipe.

### 6. Export/Import Recipe
* Ask the user whether Export/Import.
* If import the user will provide a JSON file and the system will validate the file type.
* If export it downloads the recipe in JSON format.
