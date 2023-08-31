// // 1 - Métodos

// const animal = {
//   name: "Bob",
//   latir: function () {
//     console.log("Au Au ");
//   },
// };

// console.log(animal.name);

// animal.latir();

// // 2 - aprofundando em metodos

// const pessoa = {
//   name: "Matheus",
//   getNome: function () {
//     return this.name;
//   },

//   setNome: function (newName) {
//     this.name = newName;
//   },
// };

// console.log(pessoa.name);

// console.log(pessoa.getNome());

// pessoa.setNome("Izaque");

// console.log(pessoa.getNome());

// // 3 - prototype

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const boolean = true;

// console.log(Object.getPrototypeOf(boolean));

// const array = [];

// console.log(array.length);

// console.log(Object.getPrototypeOf(array));

// console.log(Object.getPrototypeOf(array) === array.prototye);

// // 4 - mais sobre prototype

// const myObject = {
//   a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// //

// const mySecondObject = Object.create(myObject);

// console.log(mySecondObject);

// console.log(mySecondObject.a);

// console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes basicas

// const cachorro = {
//   raca: null,
//   patas: 4,
// };

// const shitzu = Object.create(cachorro);

// shitzu.raca = "Shi-tzu";

// console.log(shitzu);

// console.log(shitzu.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "Bulldog";

// console.log(bulldog);

// // 6 - função construtora

// function criarCachorro(nome, raca) {
//   const cachorro = Object.create({});

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const jake = criarCachorro("Jake", "PitBull");

// console.log(jake);

// const zeus = criarCachorro("Zeus", "RottWeiler");

// console.log(zeus);

// console.log(Object.getPrototypeOf(zeus));

// // 7 - funções como classe

// function Cachorro(name, typeService) {
//   this.name = name;
//   this.typeService = typeService;
// }

// const husky = new Cachorro("Shini", "Husky");

// console.log(husky);

// // 8 - metodos na função construtora

// Cachorro.prototype.uivar = function () {
//   console.log("AUUUUUU");
// };

// console.log(Cachorro);

// console.log(Cachorro.prototype);

// husky.uivar();

// //  9 - Classes ECMA Script 6

// class CachorroClass {
//   constructor(name, typeService) {
//     this.name = name;
//     this.typeService = typeService;
//   }
// }

// const felipe = new CachorroClass("Felipe", "Labrador");

// console.log(felipe);

// console.log(Object.getPrototypeOf(felipe));

// // 10 - Mais sobre classes

// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(`Este Caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//   }
// }

// const scania = new Caminhao(6, "Amarela");

// console.log(scania);

// scania.descreverCaminhao();

// const c2 = new Caminhao(4, "Vermelha");

// console.log(c2);

// console.log(c2.motor);

// Caminhao.prototype.portas = 2;

// const c3 = new Caminhao(8, "Roxa");

// console.log(c3);

// console.log(c3.portas);

// // 11 - override

// class Humano {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const matheus = new Humano("Matheus", 21);

// console.log(matheus);

// console.log(Humano.prototype.idade);

// Humano.prototype.idade = "Não Definida";

// console.log(matheus.idade);

// console.log(Humano.prototype.idade);

//  12 - Symbol

class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[pilotos] = 3;

Aviao.prototype[asas] = 2;

const boeing = new Aviao("boeing", 12);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

// 13 - getter and setter

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }
  get exibirTitulo() {
    return `Você está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JavaScript, JS";

console.log(myPost);

// 14 - herança

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "Shark");

console.log(shark);

console.log(shark.patas);

// 15 - instanceof

console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);
