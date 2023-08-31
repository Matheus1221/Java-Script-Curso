// //  Array

// const list = [1, 2, 3, 4, 5];

// console.log(list);

// console.log(typeof list);

// const itens = ["Matheus", false, 213, 3.14, []];

// console.log(itens);

// // 2 - Mais sobre os array

// const arr = ["a", "b", "c", "d"];

// console.log(arr[2]);

// //  3 -  prop

// const number = [1, 2, 3, 4];

// console.log(number.length);
// console.log(number[`length`]);

// const myName = "Matheus";

// console.log(myName.length);

// // 4 - metodos

// const otherNumbers = [5, 6, 7];

// const allNumbers = number.concat(otherNumbers);

// console.log(allNumbers);

// console.log(allNumbers.length);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// // 5 - Objetos

// const person = {
//   name: "Matheus",
//   age: 21,
//   job: "Programador",
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// Criando e deletando objetos

// const car = {
//   engine: 2.0,
//   brand: "VW",
//   model: "Tigua",
//   km: 20000,
// };

// console.log(car);

// car.door = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// // 7 - mais sobre objetos

// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj);

// console.log(obj2);

// console.log(obj);

// // 8 - conhecendo melhor os objetos

// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car));

// console.log(Object.entries(car));

// // 9 - Mutação

// const a = {
//   name: "Matheus",
// };

// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 21;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// // 10 - loop em array

// const users = ["Matheus", "João", "Pedro", "Jose"];

// for (let i = 0; i < users.length; i++) {
//   console.log(`Listando o usuário: ${users[i]}`);
// }

// // 11 - push e pop

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);

// array.pop();

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "y");

// console.log(array);

// // 12 - shift e unshift

// const letras = ["a", "b", "c"];

// const letra = letras.shift();

// console.log(letra);

// console.log(letras);

// letras.unshift("p", "q", "r");

// letras.unshift("z");

// console.log(letras);

// // 13 - LAST INDEXOF e  INDEXOF

// const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"];

// console.log(myElements.indexOf("Maçã"));
// console.log(myElements.indexOf("Abacate"));

// console.log(myElements.lastIndexOf("Abacate"));

// console.log(myElements.indexOf("Melancia"));
// console.log(myElements.lastIndexOf("Melancia"));

// 14 - Slice

// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20);

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);

// console.log(subArray4);

// // 15 - forEach

// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//   console.log(`O nunero é ${numero}`);
// });

// const posts = [
//   { title: "Primeiro Post", category: "JavaScript" },
//   { title: "Segundo Post", category: "React.JS" },
//   { title: "Terceiro Post", category: "Node.JS" },
// ];

// posts.forEach((post) => {
//   console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// });

// // 16 - includes

// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("KIA"));

// if (brands.includes("BMW")) {
//   console.log("Há carros da marca BMW");
// }

// // 17 - Reverse

// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();

// console.log(reverseTest);

// // 18 - Trim

// const trimTest = "   Testando \n    ";

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// // 19 - padStart

// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4, "0");

// console.log(testePadStart);

// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");

// console.log(testePadEnd);

// // 20 - spli

// const frase = "O rato roeu a roupa do rei de roma";

// const arrayDaFrase = frase.split(" ");

// console.log(arrayDaFrase);

// const fraseDenovo = arrayDaFrase.join(" ");

// console.log(fraseDenovo);

// const itens = ["Mouse", "Teclado", "Monitor"];

// const itensCompra = `Precisamos comprar: ${itens.join(", ")}`;

// console.log(itens);

// console.log(itensCompra);

// // 21 - Repeat

// const testeRepeat = "Testando ";

// console.log(testeRepeat.repeat(5));

// // 22 - Rest Oparator

// const somaInfinita = (...args) => {
//   let total = 0;

//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total;
// };

// console.log(somaInfinita(1, 2, 3));

// console.log(somaInfinita(2, 13124, 223424124, 21321321321, 231));

// 23 - for of

const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }
  return total;
};

console.log(somaInfinita2(1, 4, 2));

// 24 - destructuring em objetos

const userDetails = {
  firstName: "Matheus",
  lastName: "Felix",
  job: "Progamador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear variáveis

const { firstName: primeiroNome } = userDetails;

console.log(primeiroNome);

// 25 - destructuring em arrays

const myList = ["Avião", "Jato", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 26 - JSON

const myJson =
  '{"name":"Matheus", "age": 21, "skills":["PHP", "JavaScript","Java"]}';

console.log(myJson);

console.log(typeof myJson);

// 27 - JSON para Objeto e Objeto para JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(typeof myObject);

// JSON INVALIDO

const badJson = '{"name": Matheus, "age": 21}';

// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);
