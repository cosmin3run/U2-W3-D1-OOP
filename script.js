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
    } else if (y.age > x.age) {
      return y.firstName + " " + y.lastName + " is older than " + x.firstName + " " + x.lastName;
    } else {
      return y.firstName + " e " + x.firstName + " hanno la stessa età";
    }
  }
}
const x = new User("Cosmin", "Petrea", 53, "Mantova");
const y = new User("Stefano", "Miceli", 52, "Friuli");

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

let list = [];

const form = document.getElementById("pet");
const ul = document.getElementById("newUl");

form.onsubmit = function (event) {
  event.preventDefault();
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  list.push(newPet);
  let li = document.createElement("li");
  li.innerText = newPet.petName + " " + newPet.ownerName + " " + newPet.species + " " + newPet.breed;
  ul.appendChild(li);
  console.log(list);
};
console.log(list);
