"use strict";
window.addEventListener("load", start);

const basket = [];

async function start(){
    const productData = await getData();
    showAll(productData);

}

async function getData(){
const data = await fetch("products.json");
const response = data.json()
return response;
}

function showAll(array){
for(const product of array){

    showOne(product);
};

}

function showOne(obj){
    const html = /*html*/`
    <article>
               <h3>${obj.name}</h3>
               <p>${obj.weight}vægt: WEIGHT g</p>
               <p>${obj.price}pris: PRICE,-</p>
               <button>Læg i kurv</button>
            </article>
    `
    document.querySelector("#products").insertAdjacentHTML("beforeend",html);
    document.querySelector("#products article:last-child button").addEventListener("click", ()=> addProductToBasket(obj))
}

function addProductToBasket(product){
    basket.push(product);
    showBasket(basket);
}

function showBasket(array){
    console.log(array);
    document.querySelector("#basket tbody").innerHTML="";
    for(const product of array){
        showOneProduct(product)
    }
}

function showOneProduct(product){
const html = /*html*/`
<tr>
              <td>
                <button class="remove">-</button>
                <button class="add">+</button>
              </td>
              <td>${product.name}</td>
              <td>Pris pr stk ${product.price}</td>
              <td>PRIS I ALT,-</td>
            </tr>
`
document.querySelector("tbody").insertAdjacentHTML("beforeend",html);
}



// 1. Indlæs JSON-filen `products.json` og gem listen af produkter i en global variabel `products`. 
// Lav en anden global variabel `basket` til at indeholde produkter i kurven.
// 2. Lav en funktion `addToBasket` der modtager et produkt, og 
// putter et objekt i kurven bestående af det produkt og et antal (1). 
// Hvis et produktet allerede er i kurven skal der ikke tilføjes et nyt objekt, men antallet skal tælles op.
// 3. Lav en funktion `removeFromBasket` der modtager et produkt, 
// og hvis det allerede er i kurven skal der trækkes en fra dets antal
//  - hvis antallet ender på 0, skal objektet fjernes fra kurven.