import { ask } from '../utils/input';
import { CrudService } from '../service/crudService';
import { User } from '../models/users';
import { recipe } from '../models/recipes';
import { askRequired } from '../utils/askRequired';

export class UpdateRecipeModule {

  async updateRecipe(currentUser: User): Promise<void> {
    const service = new CrudService();

    try {
      const idInput = await askRequired('Recipe ID to update: ');
      const id = Number(idInput);

      if (isNaN(id)) {
        console.log('Invalid recipe ID.');
        return;
      }

      const existing: recipe | null = await service.getRecipeById(id);

      if (!existing) {
        console.log('Recipe not found.');
        return;
      }

      console.log('\nPress ENTER to keep the current value.\n');

      const category = await ask(`Category [${existing.category}]: `);
      const name = await ask(`Name [${existing.name}]: `);
      const ingredients = await ask('Ingredients (leave empty to keep): ');
      const steps = await ask('Steps (leave empty to keep): ');

      // Only update fields that were entered
      const updates: Partial<recipe> = {};

      if (category.trim() !== '') updates.category = category;
      if (name.trim() !== '') updates.name = name;
      if (ingredients.trim() !== '') updates.ingredients = ingredients;
      if (steps.trim() !== '') updates.steps = steps;

      // Always update metadata
      updates.lastEditedBy = currentUser.username;
      updates.updated_at = new Date().toISOString();

      if (Object.keys(updates).length === 2) {
        // Only metadata was updated
        console.log('No changes detected.');
        return;
      }

      await service.updateRecipe(id, updates);
      console.log('Recipe updated successfully.');

    } catch (err) {
      console.error('Update failed:', err);
    }
  }
}
