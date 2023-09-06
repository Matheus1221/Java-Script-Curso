// 1 - adicionando eventos

const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clickou aqui!");
});

// 2 - removendo eveto

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Imprimido");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento do evento

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.pointerType);
  console.log(event.offsetX);
});

// 4 - propagação

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});
btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 removendo evento padrão

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou a pagina");
});

// 6 - evemtps de tecça

document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

// 7 - eventos de mouse

const mouseEvent = document.querySelector("#mouse");

mouseEvent.addEventListener("mousedown", () => {
  console.log("Pressionou o Botão");
});
mouseEvent.addEventListener("mouseup", () => {
  console.log("Soltou Botão");
});

mouseEvent.addEventListener("dblclick", () => {
  console.log("Clique Duplo");
});

//  8 - movimentação do mouuse

document.addEventListener("mousemove", (e) => {
  // console.log(`No Eixo: ${e.x}`);
  // console.log(`No Eixo: ${e.y}`);
});

//  9 - Eventos por Scroll

// window.addEventListener("scroll", (e) => {
//   if (window.pageYOffset > 200) {
//     console.log("Passamos de 200px");
//   }
// });

// 10 - evento de focus

const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
  console.log("Saiu no input");
});

// 11 - evento de carregamento

window.addEventListener("load", () => {
  console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// 12 - debounce

const debounce = (f, delay) => {
  let timeout;
  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executou o movimento a cada 400ms");
  }, 400)
);
