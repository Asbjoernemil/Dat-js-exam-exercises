"use strict"
window.addEventListener("load", start);

const userList = [];

async function start(){

let userArray = await getUsers()
console.log(userArray);

userList.push(userArray)


createUser("Alice", true, "admin")
createUser("Lars", true, "guest")
createUser("Mike", true, "admin")

const allUsers = [...userArray, ...userList];
showUsers(allUsers);

}

async function getUsers(){
const response = await fetch("users.json")
const data = response.json();

return data;
}

function showUsers(users){
    document.querySelector("#userlist").innerHTML=""
    for(const user of users){
       if(user.active === true )
       
       {const html = /*html*/`
        
        <li>${user.name}, ${user.active}, ${user.role}</li>
          `
          document.querySelector("#userlist").insertAdjacentHTML("beforeend",html)
    }

}
}

function createUser(name, active, role){
const user = {
    name: name,
    active: active,
    role: role
};

userList.push(user)
}


// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer listen i en global variabel.
// 2. Lav en funktion der viser listen på websiden - vis kun aktive brugere.
// 3. Lav en funktion der modtager `name`, `active` og `role`, opretter et `user` objekt med de tre properties, og tilføjer objektet til den globale liste. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
