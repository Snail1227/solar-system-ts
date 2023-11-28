// SPACE DATA EXERCISE 3
// Return an array of all Planets' average temperatures
// Return example: [1, 2, ... , N]

import { Planet } from "../data/data";

export function getAllAverageTemperatures(planets: Planet[]): number[] {
  return planets.map((planetTemp) => planetTemp.avgTemp);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
