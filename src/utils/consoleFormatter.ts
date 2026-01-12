export function printHeader(title: string) {
  console.log('\n' + '='.repeat(40));
  console.log(title.toUpperCase());
  console.log('='.repeat(40));
}

export function printIngredients(ingredientsJson: string) {
  const ingredients: string[] = JSON.parse(ingredientsJson);

  console.log('\nIngredients:\n');
  ingredients.forEach(item => {
    console.log(`• ${item}`);
  });
}

export function printSteps(stepsJson: string) {
  const steps: string[] = JSON.parse(stepsJson);

  console.log('\nSteps:\n');
  steps.forEach((step, index) => {
    console.log(`${index + 1}. ${step}`);
  });
}
