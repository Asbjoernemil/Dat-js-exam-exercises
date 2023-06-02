"use strict";
window.addEventListener("load",start);

function start(){
document.querySelector("#create-student-form").addEventListener("submit", submitStudent);
}

function createStudent(student){


}

function submitStudent (event){
event.preventDeafault();
const form = event.target;
const name = form.name.value;
const age = Number(form.age.value);
const email = form.email.value;
const student = (name,age,email)
}

function studentArray(){

}

function showAll(students){
    for(student of students){
        showOne(student)
    }
}

function showOne(student){
    const html=/*html*/`
    <tr>
            <td>student.name</td>
            <td>student.email</td>
            <td>student.age</td>
          </tr>
    `
    document.querySelector("#students-table-body").insertAdjacentElement
}
