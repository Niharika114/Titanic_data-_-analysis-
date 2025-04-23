
// Sample Titanic passenger data for visualization
export interface Passenger {
  id: number;
  survived: boolean;
  pclass: number;
  name: string;
  sex: string;
  age: number | null;
  sibsp: number;
  parch: number;
  ticket: string;
  fare: number;
  cabin: string | null;
  embarked: string | null;
}

export const samplePassengers: Passenger[] = [
  { id: 1, survived: false, pclass: 3, name: "Braund, Mr. Owen Harris", sex: "male", age: 22, sibsp: 1, parch: 0, ticket: "A/5 21171", fare: 7.25, cabin: null, embarked: "S" },
  { id: 2, survived: true, pclass: 1, name: "Cumings, Mrs. John Bradley", sex: "female", age: 38, sibsp: 1, parch: 0, ticket: "PC 17599", fare: 71.2833, cabin: "C85", embarked: "C" },
  { id: 3, survived: true, pclass: 3, name: "Heikkinen, Miss. Laina", sex: "female", age: 26, sibsp: 0, parch: 0, ticket: "STON/O2. 3101282", fare: 7.925, cabin: null, embarked: "S" },
  { id: 4, survived: true, pclass: 1, name: "Futrelle, Mrs. Jacques Heath", sex: "female", age: 35, sibsp: 1, parch: 0, ticket: "113803", fare: 53.1, cabin: "C123", embarked: "S" },
  { id: 5, survived: false, pclass: 3, name: "Allen, Mr. William Henry", sex: "male", age: 35, sibsp: 0, parch: 0, ticket: "373450", fare: 8.05, cabin: null, embarked: "S" },
  { id: 6, survived: false, pclass: 3, name: "Moran, Mr. James", sex: "male", age: null, sibsp: 0, parch: 0, ticket: "330877", fare: 8.4583, cabin: null, embarked: "Q" },
  { id: 7, survived: false, pclass: 1, name: "McCarthy, Mr. Timothy J", sex: "male", age: 54, sibsp: 0, parch: 0, ticket: "17463", fare: 51.8625, cabin: "E46", embarked: "S" },
  { id: 8, survived: true, pclass: 3, name: "Palsson, Master. Gosta Leonard", sex: "male", age: 2, sibsp: 3, parch: 1, ticket: "349909", fare: 21.075, cabin: null, embarked: "S" },
  { id: 9, survived: true, pclass: 3, name: "Johnson, Mrs. Oscar W", sex: "female", age: 27, sibsp: 0, parch: 2, ticket: "347742", fare: 11.1333, cabin: null, embarked: "S" },
  { id: 10, survived: true, pclass: 2, name: "Nasser, Mrs. Nicholas", sex: "female", age: 14, sibsp: 1, parch: 0, ticket: "237736", fare: 30.0708, cabin: null, embarked: "C" },
  { id: 11, survived: false, pclass: 3, name: "Sandstrom, Miss. Marguerite Rut", sex: "female", age: 4, sibsp: 1, parch: 1, ticket: "PP 9549", fare: 16.7, cabin: "G6", embarked: "S" },
  { id: 12, survived: true, pclass: 1, name: "Bonnell, Miss. Elizabeth", sex: "female", age: 58, sibsp: 0, parch: 0, ticket: "113783", fare: 26.55, cabin: "C103", embarked: "S" },
  { id: 13, survived: false, pclass: 3, name: "Saundercock, Mr. William Henry", sex: "male", age: 20, sibsp: 0, parch: 0, ticket: "A/5. 2151", fare: 8.05, cabin: null, embarked: "S" },
  { id: 14, survived: false, pclass: 3, name: "Andersson, Mr. Anders Johan", sex: "male", age: 39, sibsp: 1, parch: 5, ticket: "347082", fare: 31.275, cabin: null, embarked: "S" },
  { id: 15, survived: false, pclass: 3, name: "Vestrom, Miss. Hulda Amanda Adolfina", sex: "female", age: 14, sibsp: 0, parch: 0, ticket: "350406", fare: 7.8542, cabin: null, embarked: "S" },
  { id: 16, survived: true, pclass: 2, name: "Hewlett, Mrs. (Mary D Kingcome)", sex: "female", age: 55, sibsp: 0, parch: 0, ticket: "248706", fare: 16, cabin: null, embarked: "S" },
  { id: 17, survived: false, pclass: 3, name: "Rice, Master. Eugene", sex: "male", age: 2, sibsp: 4, parch: 1, ticket: "382652", fare: 29.125, cabin: null, embarked: "Q" },
  { id: 18, survived: true, pclass: 2, name: "Williams, Mr. Charles Eugene", sex: "male", age: null, sibsp: 0, parch: 0, ticket: "244373", fare: 13, cabin: null, embarked: "S" },
  { id: 19, survived: false, pclass: 3, name: "Vander Planke, Mrs. Julius", sex: "female", age: 31, sibsp: 1, parch: 0, ticket: "345763", fare: 18, cabin: null, embarked: "S" },
  { id: 20, survived: true, pclass: 3, name: "Masselmani, Mrs. Fatima", sex: "female", age: null, sibsp: 0, parch: 0, ticket: "2649", fare: 7.225, cabin: null, embarked: "C" }
];

// Summary statistics for quick display
export const summaryStatistics = {
  totalPassengers: 891,
  survivalRate: 0.3838,
  byClass: [
    { class: "1st Class", count: 216, survivalRate: 0.6296 },
    { class: "2nd Class", count: 184, survivalRate: 0.4728 },
    { class: "3rd Class", count: 491, survivalRate: 0.2424 }
  ],
  bySex: [
    { sex: "Male", count: 577, survivalRate: 0.1889 },
    { sex: "Female", count: 314, survivalRate: 0.7420 }
  ],
  byAge: [
    { group: "0-10", count: 62, survivalRate: 0.6129 },
    { group: "11-20", count: 102, survivalRate: 0.4020 },
    { group: "21-30", count: 223, survivalRate: 0.3587 },
    { group: "31-40", count: 167, survivalRate: 0.4371 },
    { group: "41-50", count: 89, survivalRate: 0.3933 },
    { group: "51+", count: 85, survivalRate: 0.3412 },
    { group: "Unknown", count: 177, survivalRate: 0.2938 }
  ]
};

// Decision tree model prediction rules (simplified for visualization)
export const decisionTreeRules = [
  { feature: "Sex", value: "female", prediction: "Survived", probability: 0.74, samples: 314 },
  { feature: "Sex", value: "male", nextNode: "PClass" },
  { feature: "PClass", value: 1, prediction: "Died", probability: 0.63, samples: 122 },
  { feature: "PClass", value: [2, 3], nextNode: "Age" },
  { feature: "Age", value: "<13", prediction: "Survived", probability: 0.70, samples: 40 },
  { feature: "Age", value: ">=13", prediction: "Died", probability: 0.95, samples: 415 }
];

// Feature engineering examples
export const featureEngineering = [
  { 
    name: "Title Extraction", 
    description: "Extract titles from passenger names to gain insights about social status",
    example: ["Mr.", "Mrs.", "Miss.", "Master.", "Dr.", "Rev."],
    impact: "Titles show clear survival patterns: 'Mrs' and 'Miss' had high survival rates"
  },
  { 
    name: "Family Size", 
    description: "Combine SibSp (siblings/spouse) and Parch (parents/children) to create family size",
    example: "FamilySize = SibSp + Parch + 1 (self)",
    impact: "Medium-sized families (2-4) had highest survival rates"
  },
  { 
    name: "Age Binning", 
    description: "Group ages into meaningful categories",
    example: "Child (<12), Teen (12-18), Adult (19-64), Senior (65+)",
    impact: "Children had much higher survival rates than adults"
  },
  { 
    name: "Fare Binning", 
    description: "Group ticket prices into categories",
    example: "Low (<10), Medium (10-30), High (>30)",
    impact: "Higher fare correlates with higher survival chances"
  }
];

// Missing data summary
export const missingDataSummary = [
  { feature: "Age", missingCount: 177, missingPercentage: 19.9, strategy: "Median imputation by passenger class and gender" },
  { feature: "Cabin", missingCount: 687, missingPercentage: 77.1, strategy: "Create binary 'Has Cabin' feature instead" },
  { feature: "Embarked", missingCount: 2, missingPercentage: 0.2, strategy: "Fill with most frequent value ('S')" }
];
