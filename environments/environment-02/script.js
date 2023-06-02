"use strict";
window.addEventListener("load",start);

let animals = []

function start(){
createAnimal("Lars","Hund",77)

document.querySelector("#create-form").addEventListener("submit", createNewClicked)

}

function createAnimal(name, type, age){
const animalObject = {name, type, age}
animals.push(animalObject)
const sortedArray = sortedAnimals(animals) 
showAnimals(sortedArray)



}

function createNewClicked(event){
event.preventDefault();
console.log("clickedS");

const form = event.target
const name = form.name.value
const type = form.type.value
const age = Number(form.age.value)

createAnimal(name, type, age)
}

function showAnimals(animals){
    document.querySelector("#list-container").innerHTML=""
for(const animal of animals){
    const html = /*html*/`
    <li>${animal.name}, ${animal.type}, ${animal.age} </li>
    `
    document.querySelector("#list-container").insertAdjacentHTML("beforeend", html)
}

}

function sortedAnimals(animals){
const sortAnimal = animals.sort((a,b)=>a.name.localeCompare(b.name));

return sortAnimal;

}




// 1. Lav en funktion der modtager `name`, `type` og `age`, opretter et `animal` objekt med de tre properties, og tilføjer det til en global liste, `animals`.
// 2. Lav en funktion der reagerer når brugeren trykker på "Create new" knappen, og opretter et nyt `animal` objekt med de data der er tastet ind på websiden. Test at objektet er tilføjet den globale liste, `animals`.
// 3. Lav en funktion der viser listen af alle animal-objekter - sorteret alfabetisk. Listen opdateres hver gang brugeren opretter et nyt.