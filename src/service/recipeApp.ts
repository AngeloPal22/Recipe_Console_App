import { ask, closeInput } from '../utils/input';
import { AddUserModule } from '../modules/addUserModule';
import { User } from '../models/users';
import { ViewAllRecipeModule } from '../modules/viewAllRecipeModule';
import { SearchRecipeModule } from '../modules/searchRecipeModule';
import { AddRecipe } from '../modules/insertRecipeModule';
import { UpdateRecipeModule } from '../modules/updateRecipe';
import { DeleteRecipeModule } from '../modules/deleteRecipeModule';
import { ImportExportModule } from '../modules/importExportModule';
import { LoginUserModule } from '../modules/loginUserModule';

let currentUser: User | null = null;

export class RecipeApp {
    
    async  startApp() {
      console.log("Welcome to the Recipe Console App!\n");
      console.log("[1] Login");
      console.log("[2] Register");
    
      const choice = await ask('Choose an option: ');
    
      const registerModule = new AddUserModule();
    
      if (choice === '1') {
        //const user = await loginService.login(username);
        const loginService = new LoginUserModule();
        const user =  await loginService.loginUser();
        if (!user) {
          console.log('User not found.');
          return;
        }
    
        currentUser = user;
        console.log(`Welcome back, ${user.username}`);
    
      } else if (choice === '2') {
        const user = await registerModule.addUser();
    
        if (!user) {
          console.log('Registration failed.');
          return;
        }
    
        currentUser = user;
        console.log(`Welcome, ${user.username}`);
    
      } else {
        console.log('Invalid option.');
        return;
      }
    
      await this.showMainMenu();
    }

   async showMainMenu() {
  if (!currentUser) return;

  console.log(`\nHi! ${currentUser.username}\n`);
  console.log("[1] Create Recipe");
  console.log("[2] Edit Recipe");

  if (currentUser.isAdmin === 1) {
    console.log("[3] Delete Recipe");
  }

  console.log("[4] View All Recipes");
  console.log("[5] Search a Recipe");
  console.log("[6] Export Recipes");
  console.log("[7] Import Recipes");
  console.log("[8] Exit\n");

  const choice = await ask('Select option: ');

  switch (choice) {

    // Add Recipe
    case '1': {
      
      const addRecipeModule = new AddRecipe();
      await addRecipeModule.addRecipe(currentUser);

      break;
    }

    // ✏️ EDIT
    case '2': {
      const updateRecipeModule = new UpdateRecipeModule();
      await updateRecipeModule.updateRecipe(currentUser);
      break;
    }

    // ❌ DELETE (ADMIN ONLY)
    case '3': {
      const deleteRecipeModule = new DeleteRecipeModule();
      await deleteRecipeModule.deleteRecipe(currentUser);
      break;
    }

    // 👀 VIEW (placeholder – you’ll expand)
    case '4':
      const viewAllRecipeModule = new ViewAllRecipeModule();
      await viewAllRecipeModule.viewAllRecipes();
      break;

    case '5':
      const searchReciple = new SearchRecipeModule();
      await searchReciple.searchRecipe();
      break;
    
     case '6':
      const exportRecipe = new ImportExportModule();
      await exportRecipe.exportRecipes();
      break;

    case '7':
      const importRecipe = new ImportExportModule();
      await importRecipe.importRecipes(currentUser);
      break;
    // 🚪 EXIT
    case '8':
      currentUser = null;
      console.log('Logged out.');
      closeInput();
      return;

    default:
      console.log('Invalid option.');
  }

  await this.showMainMenu();
}


}