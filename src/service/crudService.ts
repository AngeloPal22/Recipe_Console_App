import connectDb from '../database/db';
import { User } from '../models/users';
import { recipe, recipeView } from '../models/recipes';

export class CrudService {

// Display all users in the database
async displayAllUsers() : Promise<void> {
    try {
        const db = await connectDb();
        db.all("SELECT * FROM users", (err: Error | null, rows: string[]) => {
            if (err) {
                console.error('Failed to list tables:', err);
            } else {
                if (!rows || rows.length === 0) {
                    console.log('Current Users\n', '(none)');
                } else {
                    console.log('Current Users in System');
                    console.table(rows);
                }
            }
            db.close();
        });
    } catch (e) {
        console.error('Database connection failed:', e);
        process.exitCode = 1;
    }
}

async login(username: string): Promise<User | null> {
    const db = await connectDb();

    const query = `
      SELECT id, username, created_at, isAdmin
      FROM users
      WHERE username = ?
      LIMIT 1
    `;

    return new Promise((resolve) => {
      db.get(query, [username], (err:Error|null, row:unknown) => {
        db.close();

        if (err || !row) {
          // ❗ No errors thrown, no logs
          resolve(null);
          return;
        }
        const user = row as User;
        resolve({
          id: user.id,
          username: user.username,
          created_at: user.created_at,
          isAdmin: user.isAdmin
        });
      });
    });
  }


async getAllRecipes(): Promise<recipe[]> {
  const db = await connectDb();

  return new Promise<recipe[]>((resolve, reject) => {
    db.all(
      `SELECT * FROM recipes`,
      (err: Error | null, rows: recipe[]) => {
        db.close();

        if (err) {
          console.error('Failed to fetch recipes:', err);
          return reject(err);
        }

        resolve(rows ?? []);
      }
    );
  });
}

// Insert a new user into the database
async insertNewUser(username: string): Promise<User> {
        try {
            const db = await connectDb();
            const createdAt = new Date().toISOString();

            const insertQuery = `INSERT INTO users (username, created_at) VALUES (?, ?)`;

            return new Promise<User>((resolve, reject) => {
                // use function to access `this.lastID`
                db.run(insertQuery, [username, createdAt], function (this: any, err: Error | null) {
                    if (err) {
                        return reject(err);
                    }

                    const newUser: User = {
                      id: this && this.lastID ? Number(this.lastID) : undefined,
                      username,
                      created_at: createdAt,
                      isAdmin: 0
                    };

                    console.log(`User '${username}' added successfully.`);
                    db.close();
                    resolve(newUser);
                });
            });
        } catch (e) {
            console.error('Database connection failed:', e);
            process.exitCode = 1;
            throw e;
        }
    }


    async insertRecipe(recipe: recipe): Promise<recipe> {
    const db = await connectDb();

    const sql = `
      INSERT INTO recipes 
      (user_id, category, name, ingredients, steps, lastEditedBy, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    return new Promise((resolve, reject) => {
      db.run(
        sql,
        [
          recipe.user_id,
          recipe.category,
          recipe.name,
          recipe.ingredients,
          recipe.steps,
          recipe.lastEditedBy,
          recipe.created_at,
          recipe.updated_at
        ],
        function (this: any, err: Error | null) {
          if (err) {
            db.close();
            return reject(err);
          }

          db.close();
          resolve({
            ...recipe,
            id: this.lastID
          });
        }
      );
    });
  }

  async getRecipeById(id: number): Promise<recipe | null> {
  const db = await connectDb();

  return new Promise<recipe | null>((resolve, reject) => {
    db.get(
      `SELECT * FROM recipes WHERE id = ?`,
      [id],
      (err: Error | null, row: recipe | undefined) => {
        db.close();

        if (err) return reject(err);
        resolve(row ?? null);
      }
    );
  });
}

    async updateRecipe(id: number, updates: Partial<recipe>): Promise<void> {
    const db = await connectDb();

    const fields = Object.keys(updates)
      .filter(key => updates[key as keyof recipe] !== undefined)
      .map(key => `${key} = ?`);

    if (fields.length === 0) {
      db.close();
      throw new Error('No fields to update');
    }

    const values = Object.values(updates);
    values.push(id);

    const sql = `UPDATE recipes SET ${fields.join(', ')} WHERE id = ?`;

    return new Promise((resolve, reject) => {
      db.run(sql, values, (err: Error) => {
        db.close();
        if (err) return reject(err);
        resolve();
      });
    });
  }

      async deleteRecipe(id: number): Promise<void> {
    const db = await connectDb();

    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM recipes WHERE id = ?`, [id], (err: Error) => {
        db.close();
        if (err) return reject(err);
        resolve();
      });
    });
  }


  async getAllRecipesSummary(): Promise<any[]> {
    const db = await connectDb();

    return new Promise((resolve, reject) => {
      db.all(`
        SELECT r.category, r.name, u.username AS createdBy
        FROM recipes r
        JOIN users u ON r.user_id = u.id
      `, (err: Error | null, rows: []) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
}

async searchByName(name: string): Promise<recipeView | null> {
    const db = await connectDb();

    return new Promise((resolve, reject) => {
      db.get(`
        SELECT r.*, u.username AS createdBy
        FROM recipes r
        JOIN users u ON r.user_id = u.id
        WHERE r.name LIKE ?
      `, [`%${name}%`], (err: Error | null, row: any) => {
        if (err) return reject(err);
        resolve(row || null);
      });
    });
  }

 

  
}

