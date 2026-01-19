import { ask } from '../utils/input';

export async function editArray(jsonString: string, label: string): Promise<string | null> {
  let items: string[];

  try {
    items = JSON.parse(jsonString);
  } catch {
    console.log(`❌ Invalid ${label} format.`);
    return null;
  }

  console.log(`\nCurrent ${label}:`);
  items.forEach((item, i) => {
    console.log(`${i}: ${item}`);
  });

  console.log('\nOptions:');
  console.log('1. Edit item');
  console.log('2. Add item');
  console.log('3. Delete item');
  console.log('4. Cancel');

  const choice = await ask('Choose option: ');

  switch (choice) {
    case '1': {
      const index = Number(await ask('Enter index to edit: '));
      if (isNaN(index) || !items[index]) {
        console.log('❌ Invalid index.');
        return null;
      }
      const newValue = await ask('New value: ');
      if (!newValue.trim()) {
        console.log('❌ Value cannot be empty.');
        return null;
      }
      items[index] = newValue.trim();
      break;
    }

    case '2': {
      const newItem = await ask('New item: ');
      if (!newItem.trim()) {
        console.log('❌ Value cannot be empty.');
        return null;
      }
      items.push(newItem.trim());
      break;
    }

    case '3': {
      const index = Number(await ask('Enter index to delete: '));
      if (isNaN(index) || !items[index]) {
        console.log('❌ Invalid index.');
        return null;
      }
      items.splice(index, 1);
      break;
    }

    default:
      console.log('Cancelled.');
      return null;
  }

  return JSON.stringify(items);
}
