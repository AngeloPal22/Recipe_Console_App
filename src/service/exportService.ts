import fs from 'fs';
import path from 'path';
import os from 'os';
import { CrudService } from './crudService';

export class ExportService {
  private service = new CrudService();

  async exportAllRecipes(fileName?: string) {
    const recipes = await this.service.getAllRecipes();

   const exportData = recipes.map(r => ({
  user_id: r.user_id,
  category: r.category,
  name: r.name,
  ingredients: JSON.parse(r.ingredients),
  steps: JSON.parse(r.steps),
  lastEditedBy: r.lastEditedBy,
  created_at: r.created_at,
  updated_at: r.updated_at
}));


    const downloadsDir = path.join(os.homedir(), 'Downloads');

    const finalName =
      fileName || `recipes_export_${Date.now()}.json`;

    const filePath = path.join(downloadsDir, finalName);

    fs.writeFileSync(
      filePath,
      JSON.stringify(exportData, null, 2),
      'utf-8'
    );

    console.log(`✔ Recipes exported to: ${filePath}`);
  }
}
