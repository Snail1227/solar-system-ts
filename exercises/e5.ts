// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']
// Note: This input should be destructured from the function parameter

interface Planet {
  mass: {
    massValue: number;
  };
  name: string;
}
export function getPlanetNamesWithMassValue(
  planets: Planet[],
  greaterThanOrEqualTo: number,
): string[] {
  return planets
    .filter(({mass: {massValue}}) => massValue >= greaterThanOrEqualTo)
    .map(({ name }) => name);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
