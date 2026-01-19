import { ask } from '../utils/input';
import { CrudService } from '../service/crudService';
import { User } from '../models/users';
import { recipe } from '../models/recipes';
import { askRequired } from '../utils/askRequired';
import { editArray } from '../utils/arrayEditor';

export class UpdateRecipeModule {

  async updateRecipe(currentUser: User): Promise<void> {
    const service = new CrudService();

    try {
      const id = Number(await askRequired('Recipe ID to update: '));
      if (isNaN(id)) {
        console.log('❌ Invalid recipe ID.');
        return;
      }

      const existing = await service.getRecipeById(id);
      if (!existing) {
        console.log('❌ Recipe not found.');
        return;
      }

      if (existing.user_id !== currentUser.id && currentUser.isAdmin !== 1) {
        console.log('❌ You can only edit your own recipes.');
        return;
      }

      console.log('\nWhat do you want to update?');
      console.log('1. Category');
      console.log('2. Name');
      console.log('3. Ingredients');
      console.log('4. Steps');
      console.log('5. Cancel');

      const choice = await ask('Choose option: ');

      const updates: Partial<recipe> = {};

      switch (choice) {
        case '1':
          const category = await ask(`Category [${existing.category}]: `);
          if (category.trim()) updates.category = category;
          break;

        case '2':
          const name = await ask(`Name [${existing.name}]: `);
          if (name.trim()) updates.name = name;
          break;

        case '3': {
          const updatedIngredients = await editArray(existing.ingredients, 'ingredients');
          if (updatedIngredients) updates.ingredients = updatedIngredients;
          break;
        }

        case '4': {
          const updatedSteps = await editArray(existing.steps, 'steps');
          if (updatedSteps) updates.steps = updatedSteps;
          break;
        }

        default:
          console.log('Cancelled.');
          return;
      }

      if (Object.keys(updates).length === 0) {
        console.log('No changes made.');
        return;
      }

      updates.lastEditedBy = currentUser.username;
      updates.updated_at = new Date().toISOString();

      await service.updateRecipe(id, updates);
      console.log('✔ Recipe updated successfully.');

    } catch (err) {
      console.error('❌ Update failed.');
    }
  }
}
