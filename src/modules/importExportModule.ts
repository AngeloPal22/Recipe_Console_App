import { ask } from '../utils/input';
import { ExportService } from '../service/exportService';
import { ImportService } from '../service/importService';
import { User } from '../models/users';

export class ImportExportModule {
  async exportRecipes() {
    const exporter = new ExportService();
    const name = await ask('Export filename (optional): ');
    await exporter.exportAllRecipes(name || undefined);
  }

  async importRecipes(currentUser: User) {
    const importer = new ImportService();
    const path = await ask('Enter path to JSON file: ');
    await importer.importFromFile(path, currentUser);
  }
}
