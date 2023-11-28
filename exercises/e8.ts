// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters

import { Planet } from "../data/data";

export function findPlanetByMoon({
  planets,
  moonName,
}: {
  planets: Planet[];
  moonName: string;
}): Planet | undefined {
  const lowerCaseMoonName = moonName.toLowerCase();

  return planets.find(
    (planet) =>
      planet.moons &&
      planet.moons.some((moon) => moon.toLowerCase() === lowerCaseMoonName)
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
