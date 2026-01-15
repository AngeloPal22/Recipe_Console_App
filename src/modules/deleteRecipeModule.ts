import { ask } from '../utils/input';
import { CrudService } from '../service/crudService';
import { User } from '../models/users';

export class DeleteRecipeModule {

  async deleteRecipe(currentUser: User) {
    if (currentUser.isAdmin !== 1) {
      console.log('Access denied. Admin only.');
      return;
    }

    const crudService = new CrudService();

    try {
      const id = Number(await ask('Recipe ID to delete: '));
      await crudService.deleteRecipe(id);
      console.log('Recipe deleted successfully.');
    } catch (err) {
      console.error('Delete failed:', err);
    }
  }
}
