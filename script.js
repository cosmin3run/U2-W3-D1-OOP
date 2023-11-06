class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compare() {
    if (x.age > y.age) {
      return x.firstName + " " + x.lastName + " is older than " + y.firstName + " " + y.lastName;
    } else return y.firstName + " " + y.lastName + " is older than " + x.firstName + " " + x.lastName;
  }
}
const x = new User("Cosmin", "Petrea", 32, "Mantova");
const y = new User("Stevano", "Miceli", 31, "Friuli");

console.log(User.compare());

// ESERCIZIO 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

list = [];

const form = document.getElementById("pet");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPet = new FormData(form);
  for (item of newPet) {
    console.log(newPet);
  }
});

// form.onsubmit = function () {
//   event.preventDefault();
//   petName = document.getElementById("petName").value;
//   ownerName = document.getElementById("ownerName").value;
//   species = document.getElementById("species").value;
//   breed = document.getElementById("breed").value;

//   const newPet = new Pet(petName, ownerName, species, breed);
//   list.push(newPet);
// };
// console.log(list);
