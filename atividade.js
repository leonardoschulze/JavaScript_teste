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

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

const resultado = media(8, 12, 16);
console.log(resultado);

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(mensagem, nome);
}

mensagemPersonalizada("Maria");
mensagemPersonalizada("João");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(`${i} - Múltiplo de 3`);
    } else {
        console.log(`${i} - Não múltiplo de 3`);
    }
}

function verificarPalindromo(palavra) {
    reversed = palavra.split("").reverse().join("");
    if (palavra === reversed)
        {
            console.log("Verdade");
            return true;
        }
        console.log("Mentira")
        return false;


}

verificarPalindromo('arara');

function verificarSinal(numero) {  
    if (numero > 0) {  
        console.log("Positivo");  
    } else if (numero < 0) {  
        console.log("Negativo");  
    } else {  
        console.log("Zero");  
    }  
}  

verificarSinal(10)
verificarSinal(-5)

function converterTemperatura(temperatura){
    console.log((temperatura* 9/5) + 32, "fahrenheit");
}

converterTemperatura(10)

let soma = 0;   
let i = 1;   

while (i <= 100) {   
    soma += i;  
    i++;   
}  

console.log("A soma dos números de 1 a 100 é: " + soma);

function atividade14(){
    console.log("Substituir palavra Azul por Vermelho!")

    let texto = prompt('Digite uma frase ou texto com a palavra azul:');

    console.log(texto.replace(/azul/g, "Vermelho"));
}

function atividade21(){

    console.log("soma dos elementos de um Array");

    let valores = prompt("Digite números separados por vírgula:").split(",").map(Number);

    console.log("Soma:" , valores.reduce((acc, val) => acc + val , 0));
}

function atividade24(){
    console.log("Capitalizar a primeira letra");
    let texto = prompt("Digite uma palavra:");
    console.log(texto.charAt(0).toUpperCase()+texto.slice(1));
}

function atividade15(str) {  
    if ((str.length) > 10) {  
        console.log("A string tem mais de 10 caracteres.");  
    } else {  
        console.log("A string NÃO tem mais de 10 caracteres.");  
    }  
}  

atividade15("Ontem eu tomei banho");

function atividade16(){
    console.log("Frutas diferentes");
    let frutas = prompt("Digite 5 frutas diferentes").split(",").map(String);
    console.log(frutas[2]);
}

function atividade17(){
    console.log("Seu nome");
    let nome = prompt("Digite seu nome:")
    console.log("Bem Vindo(a)" + nome)
}
