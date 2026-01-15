### technical_specs.md

# Functional Requirements

### 1. Add Recipe

**Description:**  
The system shall allow the user to create a new recipe by providing recipe details via the console.

**User Interaction & Behavior:**  
- User selects the "Add Recipe" option from the menu.
- User is prompted to enter:
  - Recipe Category
  - Recipe name
  - Ingredients (multiple entries)
  - Cooking steps (multiple entries)
- System validates input and saves the recipe.
- A confirmation message is displayed upon success.

---

### 2. Edit Recipe

**Description:**  
The system shall allow the user to update an existing recipe.

**User Interaction & Behavior:**  
- User selects the "Edit Recipe" option.
- System displays a list of available recipes.
- User selects a recipe by ID.
- User updates one or more fields.
- System saves changes and confirms the update.

---

### 3. Delete Recipe

**Description:**  
The system shall allow the Admin to remove an existing recipe.

**User Interaction & Behavior:**  
- Admin selects the "Delete Recipe" option.
- System displays available recipes.
- Admin selects a recipe by ID.
- System asks for confirmation before deletion.
- Recipe is removed

---

### 4. View Recipes

**Description:**  
The system shall display all saved recipes or detailed information for a selected recipe.

**User Interaction & Behavior:**  
- User has a option to "View Recipes".
- User has a option to View steps of recipes.
- System formats and displays recipe information clearly.

---

### 5. View Steps

**Description:**  
The system shall display all steps on the specific recipe

**User Interaction & Behavior:**  
- User selects "View Steps on the recipe".
- System shows a list of steps.
- System formats and displays recipe information clearly.

---

### 6. Export/Import

**Description:**  
The system shall allow the user to Export and Import recipes.

**User Interaction & Behavior:**  
- User selects "Export/Import".
- System ask whether user wants to Export or Import.
- User can selects file when import, when exports it downloads a json file format.
- System reads and validates JSON


---

## Non-Functional Requirements

### Performance Considerations

- The application should respond to user input within acceptable console interaction time.
- File read/write operations should be optimized to minimize disk access.
- Recipe data should be loaded only when needed.

---

### Error Handling Approach

- All file operations must be wrapped in try-catch blocks.
- User-friendly error messages should be displayed.
- The application should not crash on invalid input.
- Errors should be logged to the console for debugging.

---

### Data Validation Rules

- Recipe name must not be empty.
- Ingredients and steps must contain at least one entry.
- Recipe ID must exist when editing or deleting.
- Duplicate recipe names should be avoided where possible.
- User input should be trimmed and sanitized.

---

## File Structure

### Planned Folder Organization
```text
recipe_console_application/
├── dist/
│   └── main.js
├── documents/
│   └── Markdown and Diagrams Files
├── node_modules/
├── src/
│   ├── Database/
│   │   ├── db.ts
│   │   └── recipe.db
│   ├── models/
│   │   ├── users.ts
│   │   └── recipes.ts
│   ├── modules/
│   │   ├── addUserModule.ts
│   │   ├── deleteRecipe.ts
│   │   ├── importExportModule.ts
│   │   ├── insertRecipeModule.ts
│   │   ├── searchRecipeModule.ts
│   │   ├── updateRecipeModule.ts
│   │   └── viewAllRecipeModule.ts
│   ├── service/
│   │   ├── crudService.ts
│   │   ├── exportService.ts
│   │   ├── importService.ts
│   │   ├── loginService.ts
│   │   └── recipeApp.ts
│   ├── utils/
│   │   ├── askRequired.ts
│   │   ├── consoleFormatter.ts
│   │   ├── input.ts
│   │   └── jsonHelper.ts
│   └── main.ts
├── tsconfig.json
└── package.json