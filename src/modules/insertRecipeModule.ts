import { ask } from '../utils/input';
import { CrudService } from '../service/crudService';
import { User } from '../models/users';
import { recipe } from '../models/recipes';
import { toJsonArray } from '../utils/jsonHelper';
import { askRequired } from '../utils/askRequired';



export class AddRecipe {

  async addRecipe(currentUser: User): Promise<recipe | null> {
    const crudService = new CrudService();

    try {
      const category = await askRequired('Category: ');
      const name = await askRequired('Recipe name: ');
      const ingredients = await askRequired('Ingredients (comma separated): ');
      const steps = await askRequired('Steps (comma separated): ');

      const now = new Date().toISOString();

      const newRecipe = await crudService.insertRecipe({
        user_id: currentUser.id!,
        category,
        name,
        ingredients: toJsonArray(ingredients),
        steps: toJsonArray(steps),
        lastEditedBy: currentUser.username,
        created_at: now,
        updated_at: now,
      });

      console.log('Recipe created successfully.');
      return newRecipe;

    } catch (err) {
      console.error('Failed to add recipe:', err);
      return null;
    }
  }
}
