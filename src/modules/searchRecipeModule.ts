import { CrudService } from '../service/crudService';
import { ask } from '../utils/input';
import { printIngredients, printSteps, printHeader } from '../utils/consoleFormatter';
export class SearchRecipeModule {

async searchRecipe() {
  const service = new CrudService();

  const keyword = await ask('Enter recipe name: ');
  const recipe = await service.searchByName(keyword);

  if (!recipe) {
    console.log('Recipe not found.');
    return;
  }

  printHeader('Recipe Details');
  console.log(`Category : ${recipe.category}`);
  console.log(`Name     : ${recipe.name}`);
  console.log(`Created  : ${recipe.createdBy}`);

  while (true) {
    console.log('\n[1] View Ingredients');
    console.log('[2] View Steps');
    console.log('[3] Back');

    const choice = await ask('Select option: ');

    if (choice === '1') {
      printIngredients(recipe.ingredients);
    } else if (choice === '2') {
      printSteps(recipe.steps);
    } else if (choice === '3') {
      break;
    } else {
      console.log('Invalid option.');
    }
  }
}

}