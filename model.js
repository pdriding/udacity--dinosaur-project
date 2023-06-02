/* eslint-disable */

// Create Dino Constructor

class Animal {
  constructor(image, height, weight, diet) {
    this.image = image;
    this.weight = weight;
    this.height = height;
    this.diet = diet;

    // Add the Dino or Human object to the array of instances
    instances.push(this);
  }

  compareWeight(human) {
    return this.weight < human.weight
      ? `${human.name} is ${human.weight - this.weight} lbs heavier then ${
          this.species
        }`
      : `A ${this.species} is ${this.weight - human.weight} lbs heavier then ${
          human.name
        }`;
  }

  compareHeight(human) {
    // Find difference in inches
    const heightInches = Math.abs(human.height - this.height);

    // Convert to feet and inches
    const [heightFeet, heightRemainingInches] = [
      Math.floor(heightInches / 12),
      heightInches % 12,
    ];

    const comparison =
      this.height < human.height
        ? `${human.name} is ${heightFeet} feet and ${heightRemainingInches} inches taller then a ${this.species}`
        : `A ${this.species} is ${heightFeet} feet and ${heightRemainingInches} inches taller then ${human.name}`;
    return comparison;
  }

  compareDiet(human) {
    const sameDiet = instances.filter(
      (instance) => instance.diet === human.diet
    );
    const species = sameDiet
      .filter((dino) => {
        if (dino !== human) return dino.species;
      })
      .map((dino) => dino.species);

    let string;
    if (species.length === 1) {
      string = species[0];
    }
    if (species.length === 2) {
      string = `${species[0]} and a ${species[1]}`;
    }
    if (species.length > 2) {
      const lastItem = species.pop();
      string = `${species.join(", ")}, and a ${lastItem}`;
    }
    return `${human.name} has the same diet as a ${string}`;
  }

  dinoLocation() {
    return `${this.species} come from ${this.where}`;
  }

  dinoTimePeriod() {
    return `You would find ${
      this.species
    } in the ${this.when.toLowerCase()} period`;
  }

  dinoFact() {
    return this.fact;
  }

  randomFact(human) {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Check if animal is a pigeon
    if (this.species === "Pigeon") return this.dinoFact();

    // Display random data based on the generated number
    switch (randomNumber) {
      case 1:
        return this.compareWeight(human);
      case 2:
        return this.compareHeight(human);
      case 3:
        return this.compareDiet(human);
      case 4:
        return this.dinoLocation();
      case 5:
        return this.dinoTimePeriod();
      case 6:
        return this.dinoFact();
      default:
        console.log("Invalid case try again");
        break;
    }
  }
}

class Human extends Animal {
  constructor(image, height, weight, diet, name) {
    super(image, height, weight, diet);
    this.name = name;
  }
}

class Dino extends Animal {
  constructor(image, height, weight, diet, species, where, when, fact) {
    super(image, height, weight, diet);
    this.species = species;
    this.where = where;
    this.when = when;
    this.fact = fact;
  }
}

// Instances of Dino and Human
export const instances = [];

// Create Dino Objects

export const createDinoObject = async function () {
  try {
    const response = await fetch("dino.json");
    const data = await response.json();
    const dinos = data.Dinos.map(
      (dino) =>
        new Dino(
          dino.image,
          dino.height,
          dino.weight,
          dino.diet,
          dino.species,
          dino.where,
          dino.when,
          dino.fact
        )
    );
    return await dinos;
  } catch (error) {
    console.log("Error loading dino.json:", error);
  }
};

export const createHumanObject = function (e) {
  // Get Data
  const personData = (function () {
    const image = "images/human.png";
    const name = e.target.name.value;
    const height = +e.target.feet.value * 12 + +e.target.inches.value;
    const weight = +e.target.weight.value;
    const diet = e.target.diet.value.toLowerCase();

    return { image, height, weight, diet, name };
  })();

  // Create human object
  const human = new Human(
    personData.image,
    personData.height,
    personData.weight,
    personData.diet,
    personData.name
  );
  return human;
};
