// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

interface Asteroid {
  discoveryYear: number;
}

export function getGreatestDiscoveryYear(
  asteroids: Asteroid[]
): number | undefined {
  if (asteroids.length === 0) return undefined;

  const discoveryCount = new Map<number, number>();

  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    const count = discoveryCount.get(year) || 0;
    discoveryCount.set(year, count + 1);
  }

  let maxYear: number | undefined = undefined;
  let maxCount = 0;

  discoveryCount.forEach((count, year) => {
    if (count > maxCount) {
      maxCount = count;
      maxYear = year;
    }
  });

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
