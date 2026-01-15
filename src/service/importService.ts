import fs from 'fs';
import path from 'path';
import { CrudService } from './crudService';
import { User } from '../models/users';

export class ImportService {
  private service = new CrudService();

  async importFromFile(filePath: string, currentUser: User) {
    // 🔒 1. File existence
    if (!fs.existsSync(filePath)) {
      console.log('❌ File not found.');
      return;
    }

    // 🔒 2. File extension check
    if (path.extname(filePath).toLowerCase() !== '.json') {
      console.log('❌ Invalid file type. Only .json files are allowed.');
      return;
    }

    let parsed: string | any;

    // 🔒 3. Safe JSON parsing
    try {
      const raw = fs.readFileSync(filePath, 'utf-8');
      parsed = JSON.parse(raw);
    } catch {
      console.log('❌ Invalid JSON file.');
      return;
    }

    // 🔒 4. Structure validation
    if (!parsed || !Array.isArray(parsed.recipes)) {
      console.log('❌ Invalid JSON format. Expected { "recipes": [] }.');
      return;
    }

    // 🔒 5. Insert recipes
    for (const r of parsed.recipes) {
      if (
        !r.category ||
        !r.name ||
        !Array.isArray(r.ingredients) ||
        !Array.isArray(r.steps)
      ) {
        console.log('❌ Skipping invalid recipe entry.');
        continue;
      }

      await this.service.insertRecipe({
        user_id: currentUser.id!,
        category: r.category,
        name: r.name,
        ingredients: JSON.stringify(r.ingredients),
        steps: JSON.stringify(r.steps),
        lastEditedBy: currentUser.username,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    }

    console.log(`✔ Imported ${parsed.recipes.length} recipe(s) successfully.`);
  }
}
