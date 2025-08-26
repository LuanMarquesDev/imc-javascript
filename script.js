// Classe Pessoa
function Pessoa(altura, peso) {
  if (!altura || !peso) {
    throw new Error("Altura e peso são obrigatórios");
  }

  this.altura = altura;
  this.peso = peso;
}

// Classe Nutricionista estende Pessoa
function Nutricionista(altura, peso) {
  Pessoa.call(this, altura, peso);

  this.calcularIMC = function () {
    return this.peso / (this.altura * this.altura);
  };

  this.classificarIMC = function () {
    var imc = this.calcularIMC();

    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau I";
    if (imc < 40) return "Obesidade grau II";

    return "Obesidade grau III";
    return "Obesidade grau III";
  };
}
Nutricionista.prototype = Object.create(Pessoa.prototype);
Nutricionista.prototype.constructor = Nutricionista;

// ====================
// Funções auxiliares
// ====================
function atualizarResultado(imc, classificacao) {
  document.getElementById("imc").innerText =
    imc.toFixed(2) + " - " + classificacao;
}

function limparTabela() {
  document.querySelectorAll("#tabela-imc tbody tr").forEach(function (linha) {
    linha.classList.remove("destacado");
  });
}

function destacarClassificacao(classificacao) {
  document.querySelectorAll("#tabela-imc tbody tr").forEach(function (linha) {
    if (
      linha.dataset.classificacao.toLowerCase() === classificacao.toLowerCase()
    ) {
      linha.classList.add("destacado");
    }
  });
}

// ====================
// Função principal
// ====================
function calcularIMC(evt) {
  evt.preventDefault();

  var alturaEl = document.getElementById("altura");
  var pesoEl = document.getElementById("peso");

  // Limpa resultado e destaque
  document.getElementById("imc").innerText = "";
  limparTabela();

  // Substitui vírgula por ponto e converte para número
  var altura = parseFloat(alturaEl.value.replace(",", "."));
  var peso = parseFloat(pesoEl.value.replace(",", "."));

  // Validação
  if (!altura || !peso || isNaN(altura) || isNaN(peso)) {
    alert("Erro: Altura e peso devem ser preenchidos com números válidos");
    return;
  }

  try {
    var nutricionista = new Nutricionista(altura, peso);
    var imc = nutricionista.calcularIMC();
    var classificacao = nutricionista.classificarIMC();

    atualizarResultado(imc, classificacao);
    destacarClassificacao(classificacao);
  } catch (erro) {
    alert("Erro inesperado: " + erro.message);
  }
}

// ====================
// Inicialização
// ====================
window.onload = function () {
  document.getElementById("calcular").addEventListener("click", calcularIMC);
};
