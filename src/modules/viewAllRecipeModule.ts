import { CrudService } from '../service/crudService';

export class ViewAllRecipeModule {
  async viewAllRecipes() {
    const crudService = new CrudService();
    const recipes = await crudService.getAllRecipesSummary();

    if (!recipes || recipes.length === 0) {
      console.log('\nNo recipes found.');
      return;
    }

    // Remove ID and format for console.table
    const tableData = recipes.map(r => ({
      id: r.id,
      Category: r.category,
      Name: r.name,
      CreatedBy: r.createdBy,
    }));

    console.log('\n📘 Available Recipes');
    console.table(tableData);
  }
}
