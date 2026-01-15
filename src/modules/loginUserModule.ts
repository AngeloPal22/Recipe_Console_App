import { ask } from '../utils/input';
import { CrudService } from '../service/crudService';
import { User } from '../models/users';

export class LoginUserModule {
 async  loginUser(): Promise<User> {
  const loginService = new CrudService();

  while (true) {
    const username = await ask('Enter username: ');

    if (!username.trim()) {
      console.log('❌ Username cannot be empty.\n');
      continue;
    }

    const user = await loginService.login(username);

    if (!user) {
      console.log('❌ Username not found. Please try again.\n');
      continue;
    }

    console.log(`✅ Welcome back, ${user.username}\n`);
    return user;
  }
}
}
