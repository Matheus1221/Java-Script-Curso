// 1 - Variaveis

let nome = "Matheus";

console.log(nome);

nome = "Matheus Quon";

console.log(nome);

const idade = 20;

console.log(idade);

// 3 prompt

// const age = prompt("Digite a sua idade");

// console.log(`Você tem ${age} anos`);

// 4 - Math

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.13));
console.log(Math.ceil(5.13));

// 5 - Console

console.log("teste!");

console.error("erro!");

// ESTRUTURAS DE REPETIÇÂO

// PULEI TODAS AS ESTRUTURAS de PROGRMAÇÂO SATURADAAS, irei dar exemplos das que sao mais complicadas

// let p = 0;

// while (p < 5) {
//   console.log(`Repetindo ${p}`);
//   p = p + 1;
// }

// // loop infinito

// let x = 1;

// while (x < 10) {
//   console.log(`Repetindo ${x}`);
//   x = x + 1;
// }

// do while

// let o = 10;

// do {
//   console.log(`Valor de o: ${o}`);
//   o--;
// } while (o > 1);

// For A estrutura de repetição mais utilizaDA

for (let t = 0; t < 10; t++) {
  console.log(`Repetindo Algo`);
}

let r = 10;

for (r; r > 0; r = r - 1) {
  console.log(`Repetindo o valor de R: ${r}`);
}

// identação

for (let u = 0; u < 10; u++) {
  if (u * 2 > 10) {
    console.log(`Maior que 10: ${u}`);
  } else {
    if (u / 2 === 0) {
      console.log("Deu 0");
    }
  }
}

// Switch

const job = "sd";

switch (job) {
  case "Programador":
    console.log("Você é Programador");
    break;
  case "Advogado":
    console.log("Você é Advogado!");
    break;

  case "Engenheiro":
    console.log("Você é Engenheiro!");
    break;
  default:
    console.log("Profissão não encontrada");
}

// switch errado

const l = 111;

switch (l) {
  case 200:
    console.log("l é 200");

  case 111:
    console.log("l é 111");

  case 300:
    console.log("l é 300");

  default:
    console.log("l não foi encontrados");
}
