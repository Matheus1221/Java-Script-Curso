// // 1 - settimeout

// console.log("Ainda não executou");

// setTimeout(function () {
//   console.log("Requisição Assíncrona");
// }, 2000);

// console.log("Ainda não executou 2");

// // 2 - setInterval

// console.log("Ainda não começou");

// // setInterval(function () {
// //   console.log("invervalo assíncrono");
// // }, 3000);

// console.log("Ainda não começou 2");

// // 3 - Promisse

// const promessa = Promise.resolve(5 + 5);

// console.log("Algum codigo");

// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("outro codigo");

// // 4 - falha na Promisse

// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores Inválidos");
//     }
//   })
//   .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - rejeição

function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O numero é maior que 10`);
    } else {
      reject(new Error("Número muito baixo"));
    }
  });
}

const a = checkNumber(20);

const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// 6 - resolvendo varias promises

const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("ERROR!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async Functions

async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(1, 2).then((value) => console.log(`O valor da soma é: ${value}`));

console.log("teste async");

//  8 - async await

function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a Promise");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e esperando o resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 9 - generators

function* generator() {
  yield 1;
  yield 2;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
