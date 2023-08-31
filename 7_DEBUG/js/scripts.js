// 1 - Strict

"use strict";

// opa = "teste"; Não é possivel criar variaveis globais, para evitar a sobreescrita de outras variaveis

const opa = "teste";

// const undefined = 10; não se pode criar nomes de variaveis com nome de dados existentes no JavaScript

// delete [].length; não pode deletar metodos ou atributos de objetos. isso tudo é considerado errado

// 2 - console.log

let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 - debbuger

let c = 1;
let d = 2;

if (c == 1) {
  c = b + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

console.log("executou o looping");

// debugger;

if (c > 5) {
  c = 25;
}

// 4 - tratamento de dados

function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor Incorreto!");
    return;
  }
  console.log("Valor Correto!");

  return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// 5 - exceptions

let x = 10;

if (x != 11) {
  // throw new Error("O valor de X não pode ser diferente de 11!");
}

// 6 - try catch

try {
  const soma = x + y;
} catch (error) {
  console.log(`ERRO no programa: ${error}`);
}

// 7 - finally

try {
  const value = checkNumber("1");
  if (!value) {
    throw new Error("Valores invalidos!");
  }
} catch (error) {
  console.log(`Opa, aonteceu um problema ${error}`);
} finally {
  console.log("O código foi executado!");
}

// 8 - Assertions

function checkArr(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa ter elementos");
  } else {
    console.log(`O array tem ${arr.length} elementos`);
  }
}

// checkArr([]);

checkArr(["a", "b"]);
