function Pessoa(altura, peso) {
  if (!altura || !peso) {
    throw new Error("Altura e peso são obrigatórios");
  }

  this.altura = altura;
  this.peso = peso;
}

function Nutricionista(altura, peso) {
  Pessoa.call(this, altura, peso);
  this.imc = function () {
    return this.peso / (this.altura * this.altura);
  };

  this.classificaIMC = function () {
    var imc = this.imc();

    if (imc < 18.5) {
      return "Abaixo do peso";
    }
    if (imc >= 18.5 && imc <= 24.9) {
      return "Peso normal";
    }
    if (imc >= 25 && imc <= 29.9) {
      return "Sobrepeso";
    }
    if (imc >= 30 && imc <= 34.9) {
      return "Obesidade grau I";
    }
    if (imc >= 35 && imc <= 39.9) {
      return "Obesidade grau II";
    }
    return "Obesidade grau III";
  };
}
Nutricionista.prototype = Object.create(Pessoa.prototype);
Nutricionista.prototype.constructor = Nutricionista;

function renderizaResultadoIMC(nutricionista) {
  var classificacao = nutricionista.classificaIMC();
  var imc = nutricionista.imc();

  document.getElementById("imc").innerText =
    imc.toFixed(2) + " - " + classificacao;

  destacarClassificacao(classificacao);
}

function destacarClassificacao(classificacao) {
  var linhas = document.querySelectorAll("#tabela-imc tbody tr");
  for (var i = 0; i < linhas.length; i++) {
    linhas[i].classList.remove("destacado");
    if (
      linhas[i].getAttribute("data-classificacao").toLowerCase() ===
      classificacao.toLowerCase()
    ) {
      linhas[i].classList.add("destacado");
    }
  }
}

// Função para limpar destaque da tabela
function limparDestaqueTabela() {
  var linhas = document.querySelectorAll("#tabela-imc tbody tr");
  for (var i = 0; i < linhas.length; i++) {
    linhas[i].classList.remove("destacado");
  }
}

function actionCalcularIMCBuilder() {
  var alturaEl = document.getElementById("altura");
  var pesoEl = document.getElementById("peso");

  return function actionCalcularIMC(evt) {
    evt.preventDefault();

    // Limpa resultado e destaque antes de tentar calcular
    document.getElementById("imc").innerText = "";
    limparDestaqueTabela();

    try {
      var altura = parseFloat(alturaEl.value.replace(",", "."));
      var peso = parseFloat(pesoEl.value.replace(",", "."));

      // Verifica se os valores são números válidos
      if (isNaN(altura) || isNaN(peso)) {
        throw new Error("Altura e peso devem ser números válidos");
      }

      var nutricionista = new Nutricionista(altura, peso);
      renderizaResultadoIMC(nutricionista);
    } catch (erro) {
      alert("Erro: " + erro.message);
    }
  };
}

window.onload = function () {
  document
    .getElementById("calcular")
    .addEventListener("click", actionCalcularIMCBuilder());
};
