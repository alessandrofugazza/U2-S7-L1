class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  ageComparison(otherUser) {
    let comparisonResult = "";
    if (this.age > otherUser.age) {
      comparisonResult = `${this.firstName} is older than ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      comparisonResult = `${otherUser.firstName} is older than ${this.firstName}.`;
    } else {
      comparisonResult = `${this.firstName} and ${otherUser.firstName} are the same age.`;
    }
    return comparisonResult;
  }
}

const user1 = new User("Mario", "Bianchi", 31, "Italy");
const user2 = new User("John", "Doe", 31, "USA");

console.log("--------------------------------");
console.log(user1.ageComparison(user2));

console.log("--------------------------------");
console.log("");
console.log("--------------------------------");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  checkSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    }
  }
}

const form = document.querySelector("form");
const ol = document.querySelector("ol");
const newPetPetName = form.elements["petName"];
const newPetOwnerName = form.elements["ownerName"];
const newPetSpecies = form.elements["species"];
const newPetBreed = form.elements["breed"];

form.addEventListener("submit", e => {
  e.preventDefault();
  const newPet = new Pet(newPetPetName.value, newPetOwnerName.value, newPetSpecies.value, newPetBreed.value);
  const newLi = document.createElement("li");
  newLi.innerText = `
  Name: ${newPet.petName}\n
  Owner: ${newPet.ownerName}\n
  Species: ${newPet.species}\n
  Breed: ${newPet.breed}
  `;
  ol.appendChild(newLi);
});
