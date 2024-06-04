const bot = document.querySelector("button");
const bot1 = document.getElementById("boton")

// const boton1 = document.querySelector("button")
// const color1 = document.getElementById("color")


function generalCol() {
let digitos = "123456789ABCDEF";
let colorHex = "#";

// forloop
for (i=0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
}

return colorHex;
}

boton1.addEventListener("click", function() {
    let colorAleatorio = generalCol();
    // Actualizar el texto
    color1.textContent = colorAleatorio;
    // Actualizar el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
})































// let but = document.getElementById() 



// function bottun() {

// }


















// // Header scroll
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }