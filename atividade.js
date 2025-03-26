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