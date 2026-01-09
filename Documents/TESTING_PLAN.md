# File: TESTING_PLAN.md

## Testing Plan Overview

This document defines the testing strategy for the Recipe Manager console application. The goal is to ensure that all features function correctly, handle errors gracefully, and meet the functional and non-functional requirements.

---

## Testing Approach

### Manual Testing

Manual testing will be the primary testing approach due to the interactive nature of the console application.

**Procedure:**
1. Run the application using `ts-node` or compiled JavaScript.
2. Navigate through the menu options.
3. Provide valid and invalid inputs.
4. Observe application behavior and output.
5. Verify data persistence in the JSON file.
6. Confirm that errors are handled gracefully.

---

### Automated Testing (Optional)

Basic automated testing may be implemented for non-interactive components.

**Scope:**
- Business logic in `RecipeService`
- Validation functions
- File storage operations (mocked)

**Tools:**
- Jest (optional)
- ts-jest (optional)

---

## Test Scenarios

### 1. Add Recipe Feature

**What Will Be Tested:**
- Creation of a new recipe
- Input validation
- Data persistence

**Expected Outcomes:**
- Recipe is saved successfully
- Invalid inputs are rejected
- Confirmation message is displayed

---

### 2. Edit Recipe Feature

**What Will Be Tested:**
- Updating existing recipe data
- Handling invalid recipe IDs

**Expected Outcomes:**
- Recipe updates are saved correctly
- Errors are shown for non-existent recipes

---

### 3. Delete Recipe Feature

**What Will Be Tested:**
- Deleting a recipe
- Confirmation before deletion

**Expected Outcomes:**
- Recipe is removed from storage
- Deletion confirmation is required

---

### 4. View Recipes Feature

**What Will Be Tested:**
- Display of recipe list
- Display of recipe details

**Expected Outcomes:**
- Recipes are listed correctly
- Selected recipe details are displayed clearly

---


### 5. View Recipes Steps

**What Will Be Tested:**
- Display of recipe's list of steps

**Expected Outcomes:**
- Steps are listed correctly and in order
- Selected recipe details are displayed clearly

---

### 6. Export/Import Recipe in JSON Format

**What Will Be Tested:**
- Exporting/Importing recipe in text or JSON format

**Expected Outcomes:**
- Output is correctly formatted
- Recipe data remains unchanged
- When Importing, a JSON file will be downloaded

---

## Test Cases

### Add Recipe Test Cases

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| AR-01 | Add valid recipe | Valid name, ingredients, steps | Recipe saved successfully |
| AR-02 | Missing recipe name | Empty name | Error message displayed |
| AR-03 | Empty ingredients | No ingredients provided | Recipe not saved |

---

### Edit Recipe Test Cases

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| ER-01 | Edit existing recipe | Valid recipe ID | Recipe updated |
| ER-02 | Invalid recipe ID | Non-existent ID | Error message shown |
| ER-03 | Empty update | No fields updated | Update rejected |

---

### Delete Recipe Test Cases

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| DR-01 | Delete existing recipe | Valid recipe ID | Recipe deleted |
| DR-02 | Cancel deletion | User selects cancel | Recipe retained |
| DR-03 | Invalid recipe ID | Non-existent ID | Error message shown |

---

### View Recipes Test Cases

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| VR-01 | View all recipes | None | Recipe list displayed |
| VR-02 | View recipe details | Valid recipe ID | Full details shown |
| VR-03 | Empty recipe list | No data | Informational message shown |

---

### View Recipes Step Test Case

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| ST-01 | View all the step of specific recipe | Yes/Or | Recipe's Step list displayed |
| ST-02 | View recipe Steps details | None | In-order step Details |
| ST-03 | Empty recipe list | No data | Informational message shown |

---

### Export Recipe Test Cases

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| ER-01 | Export recipe | Correct file format (JSON) | Downloaded JSON recipe Format |
| ER-02 | Failed Export | Incorrect file Format | Download Not Complete |

### Import Recipe Test Cases

| Test Case ID | Scenario | Input | Expected Result |
|-------------|----------|-------|-----------------|
| IR-01 | Import recipe | Import JSON file format | Successful Import |
| SR-02 | Import Wrong File Format | Import PDF, Docx or other format | Error Message File Format |

---

## Edge Cases and Error Scenarios

- Attempting actions when no recipes exist
- Providing invalid or malformed input
- File not found or corrupted JSON file
- Duplicate recipe names
- Unexpected application termination

---

## Testing Completion Criteria

- All test cases executed successfully
- No critical or blocking bugs present
- Application does not crash under invalid input
- Data consistency maintained across sessions

---
