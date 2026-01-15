# Recipe Manager – Console Application

## Project Description

**Recipe Manager** is a console-based application built with **TypeScript** and **SQLite** that allows users to manage cooking recipes through a simple text-based interface.

Users can **register or log in**, create and edit their own recipes, view all available recipes, search for specific recipes, and import/export recipes using JSON files. The application supports **role-based access**, where **admin users** have additional privileges such as deleting recipes.

This project is designed as a learning exercise to practice:
- TypeScript fundamentals
- SQLite database integration
- Console-based user interaction
- Clean architecture and separation of concerns

---

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm
- TypeScript
- SQLite3

---

### Installation Steps

1. Clone or download the repository:
   ```bash
   git clone https://github.com/AngeloPal22/Recipe_Console_App.git
   cd Recipe_Console_Application
2. Install Dependencies
    ```npm
    npm install
    node dist/main.js

## Feature Sets

### User Management
- Register a new user
- Login using username
- Prevent duplicate usernames
- Role-based access (Admin / Regular User)

### Recipe Management
- Create new recipes
- Edit existing recipes (only owned recipes or admin)
- Delete recipes (admin only)
- View all recipes (summary view)
- Search recipes by name
- View ingredients and steps separately for better readability

### Data Handling
- Recipes stored in SQLite
- Ingredients and steps stored as JSON arrays
- Automatic timestamps for creation and updates

### Import & Export
- Export all recipes to a .json file (saved to Downloads)
- Import recipes from a .json file
- File validation (JSON-only support)