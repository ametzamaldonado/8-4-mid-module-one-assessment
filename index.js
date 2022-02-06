/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
function getTotalCount(animals) {
  let animalCount = 0;//determining data type and value (step 1) 
  for (let i = 0; i < animals.length; i++){ //standard for loop (step 2) 
    let count = animals[i].count;// accumulator pattern (step 3) 
    animalCount = animalCount + count;// adding up all the animals in indexes (step 4)
  }
  return animalCount //returning total count of animals 
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
function getAllKinds(animals) {
  let allAnimalKind = []; //determining data type and value 
  for (let i = 0; i < animals.length; i++){//standard for loop
    let oneAnimalKind = animals[i].kind;// accumulator pattern, defines how to get one animal kind
    allAnimalKind.push(oneAnimalKind);// the array we want which is allAnimalKind is adding one animal each time we loop 
  }
  return allAnimalKind;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
function filterByCountMinimum(animals, minimum) {
  let allObjects = [];//defining data type and value
  for (let i = 0; i < animals.length; i++){//standard for loop 
    let animalObject = animals[i];
    if(animals[i].count >= minimum){ //also can be animalObject.count
      allObjects.push(animalObject) //adding animalObject to allObjects in the end
    }
  }
  return allObjects;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  if (animals.length < 1){
    return null;
  }
  let highestSoFar = animals[0];
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].count > highestSoFar.count){
      highestSoFar = animals[i]; 
    }
  }
  return highestSoFar;
}

//   let highestCount = null; //defining data type and value 

//   for (let i = 0; i < animals.length; i++){//standard loop 

//     let amount = animals[0].count
//     if (animals[i].count > amount){//if the animal count at i is greater than highest count than highest count equals animal count at i
//       amount = animals[i].count;
//       highestCount = animals[i]; //highest count = the whole animal object
//     }
//   }
//   return highestCount;
// }

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
