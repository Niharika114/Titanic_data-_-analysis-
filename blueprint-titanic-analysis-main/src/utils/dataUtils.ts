
import { Passenger } from "../data/titanicData";

// Calculate survival rate for a group of passengers
export const calculateSurvivalRate = (passengers: Passenger[]): number => {
  if (passengers.length === 0) return 0;
  const survivors = passengers.filter(p => p.survived).length;
  return survivors / passengers.length;
};

// Group passengers by a specific attribute
export const groupBy = <T, K extends keyof any>(
  list: T[], 
  getKey: (item: T) => K
): Record<K, T[]> => {
  return list.reduce((acc, item) => {
    const key = getKey(item);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
};

// Extract title from passenger name
export const extractTitle = (name: string): string => {
  const match = name.match(/,\s([A-Za-z]+)\./);
  return match ? match[1] : "Unknown";
};

// Calculate family size for a passenger
export const calculateFamilySize = (passenger: Passenger): number => {
  return passenger.sibsp + passenger.parch + 1; // +1 for the passenger
};

// Age binning function
export const getAgeGroup = (age: number | null): string => {
  if (age === null) return "Unknown";
  if (age < 12) return "Child";
  if (age < 18) return "Teen";
  if (age < 65) return "Adult";
  return "Senior";
};

// Function to create synthetic imputed age data
export const imputeAge = (passenger: Passenger): number => {
  if (passenger.age !== null) return passenger.age;
  
  // Synthetic imputation based on class and sex
  if (passenger.sex === "female") {
    return passenger.pclass === 1 ? 35 : passenger.pclass === 2 ? 28 : 21;
  } else {
    return passenger.pclass === 1 ? 40 : passenger.pclass === 2 ? 30 : 25;
  }
};

// Convert numerical values to percentages
export const toPercentage = (value: number): string => {
  return (value * 100).toFixed(1) + "%";
};
