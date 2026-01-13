import { ask } from '../utils/input';
import { CrudService } from '../service/crudService';
import { LoginService } from '../service/loginService';
import { User } from '../models/users';

export class AddUserModule {
  async addUser(): Promise<User | null> {
    const crudService = new CrudService();
    const loginService = new LoginService();

    while (true) {
      const username = await ask('Please enter username: ');

      if (!username.trim()) {
        console.log('❌ Username cannot be empty.\n');
        continue;
      }

      try {
        const user = await crudService.insertNewUser(username);
        console.log(`✅ Registered as ${user.username}\n`);
        return user;

      } catch (err: any) {

        if (err.message?.includes('UNIQUE')) {
          console.log('\n❌ Username already exists.');
          console.log('[1] Login with this username');
          console.log('[2] Try another username');

          const choice = await ask('Choose option: ');

          if (choice === '1') {
            const user = await loginService.login(username);

            if (user) {
              console.log(`Hi! ${user.username}\n`);
              return user;
            } else {
              console.log('❌ Login failed.\n');
            }

          } else if (choice === '2') {
            console.log('');
            continue;
          } else {
            console.log('❌ Invalid option.\n');
          }

        } else {
          console.log('❌ Registration failed.\n');
        }
      }
    }
  }
}
