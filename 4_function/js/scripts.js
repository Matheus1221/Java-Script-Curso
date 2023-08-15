// Criando uma função

function minhaFuncao() {
  console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("Função em variável");
};

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`imprimindo ${txt}`);
}

funcaoComParametro(1);

funcaoComParametro(2);
