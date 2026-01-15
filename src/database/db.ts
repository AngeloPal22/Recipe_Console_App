import path from 'path';
import sqlite3 from 'sqlite3';

sqlite3.verbose();

export async function connectDb(): Promise<any> {
  return new Promise((resolve, reject) => {

    //const dbPath = path.join(__dirname, 'recipe.db');

    const dbPath = path.join(process.cwd(), 'src', 'database', 'recipe.db');

    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) return reject(err);

      db.serialize(() => {
        db.run(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            created_at TEXT NOT NULL
          );
        `);

        db.run(`
          CREATE TABLE IF NOT EXISTS recipes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            category TEXT NOT NULL,
            name TEXT NOT NULL,
            ingredients TEXT NOT NULL,
            steps TEXT NOT NULL,
            procedures TEXT NOT NULL,
            lastEditedBy TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
          );
        `, (tableErr) => {
          if (tableErr) return reject(tableErr);
          resolve(db);
        });
      });
    });
  });
}

export default connectDb;
