function verficarPar(numero) {
    if (numero % 2 === 0) {
        console.log('par');
    } else {
        console.log('impar');
    }
}

verficarPar(1);


function calcular(numero1, numero2) {
    console.log("divisão , " + (numero1 / numero2));
    console.log("soma, " + (numero1 + numero2));
    console.log("multiplicação, " + (numero1 * numero2));
    console.log("subtração, " + (numero1 - numero2));

}

calcular(1, 2);

for (let i = 10; i > 0; i--)
    console.log("Número " + i)


let original = "Hello World";
let reversed = original.split("").reverse().join("");
console.log(reversed);

function contarCaracteres(str) {  
    return str.length;  
}  

const texto = "Ontem";  
const numeroDeCaracteres = contarCaracteres(texto);  
console.log(numeroDeCaracteres);

const carro = {  
    marca: 'Ford',  
    modelo: 'Maverick',  
    ano: 2023  
};  

console.log(carro)