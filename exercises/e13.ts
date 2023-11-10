// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

interface Planet {
  avgTemp: number;
}

interface Data {
  planets: Planet[];
}

export function getAveragePlanetsTemperature(data: Data): number {
  if (data.planets.length === 0) return 0;

  const totalTemp = data.planets.reduce(
    (total, planet) => total + planet.avgTemp,
    0
  );

  const averageTemp = totalTemp / data.planets.length;

  return averageTemp;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
