// // Criando uma função

// function minhaFuncao() {
//   console.log("Testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function () {
//   console.log("Função em variável");
// };

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt) {
//   console.log(`imprimindo ${txt}`);
// }

// funcaoComParametro(1);

// funcaoComParametro(2);

// // 2 - Return

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function somaDeValores(n1, n2) {
//   return n1 + n2;
// }

// const soma = somaDeValores(c, b);
// const soma2 = somaDeValores(a, a);
// const soma3 = somaDeValores(a, b);
// const soma4 = somaDeValores(c, d);

// console.log(`imprimindo soma 1 ${soma}`);
// console.log(`imprimindo soma 2 ${soma2}`);
// console.log(`imprimindo soma 3 ${soma3}`);
// console.log(`imprimindo soma 4 ${soma4}`);

// console.log(`imprimindo soma 5 ${somaDeValores(a, d)}`);

// // 3 - escopo da função

// let y = 10;

// function testandoEscopo() {
//   let y = 20;
//   console.log(`Y dentro da função é ${y}`);
// }

// testandoEscopo();
// y = 15;

// console.log(`Y fora da função é ${y}`);

// testandoEscopo();

// // 4 - escopo aninhado

// let m = 10;

// function escopoAninhado() {
//   let m = 20;

//   if (true) {
//     let m = 30;
//     console.log(m);

//     if (true) {
//       let m = 40;
//       console.log(m);
//     }
//   }
//   console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - arrow function

// // exemplo de uso de arrow function com array
// const numbers = [1, 2, 3, 4, 5];
// const squared = numbers.map((number) => number * number);
// // exemple ^^^^

// const testeArrow = () => {
//   console.log("Esta é uma arrow function");
// };

// testeArrow();

// const parOuImpar = (n) => {
//   if (n % 2 === 0) {
//     console.log("par");
//     return;
//   }
//   console.log("impar");
// };

// parOuImpar(10);

// parOuImpar(5);

// // 6 - mais sobre arrow functions

// const raizQuadrada = (x) => {
//   return x * x;
// };

// console.log(raizQuadrada(3));

// // Arrow function Omitida/Simplified

// const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(4));

// console.log(raizQuadrada2(12));

// // Não precisa ter return

// const helloWorld = () => console.log("Hello World!");

// helloWorld();

// // 7 - parametro opcional

// const multiplication = (m, n) => {
//   if (n === undefined) {
//     return m * 2;
//   } else {
//     return m * n;
//   }
// };

// console.log(multiplication(20));

// console.log(multiplication(2, 7));

// const greeting = (name) => {
//   if (!name) {
//     console.log("Olá");
//     return;
//   }
//   console.log(`Olá ${name}`);
// };

// greeting();

// greeting("Felix");

// 8 - valor default

const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};

console.log(customGreeting("Matheus"));
console.log(customGreeting("Elvis", "Bom dia"));

const repeatTxt = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatTxt("Teste");

repeatTxt("Agora repete 5 vezes", 5);

const repeatNumber = (numb, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(numb++);
  }
};

repeatNumber(1);

// 9 - Closure

function someFunction() {
  let txt = " Algum Texto";

  function display() {
    console.log(txt);
  }
  display();
}

someFunction();

// 10 -  mais sobre closure

const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));

console.log(c2(10));

// recursion

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar!");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};

untilTen(100, 6);
