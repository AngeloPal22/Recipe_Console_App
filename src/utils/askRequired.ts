import { ask } from './input';

export async function askRequired(question: string): Promise<string> {
  while (true) {
    const value = await ask(question);

    if (value.length > 0) {
      return value;
    }

    console.log('❌ This field cannot be empty. Please try again.');
  }
}
