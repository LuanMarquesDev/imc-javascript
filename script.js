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
async function calcularIMC(evt) {
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
    // Faz chamada para API Express
    const resposta = await fetch("http://localhost:3000/imc/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ height: altura, weight: peso }),
    });

    if (!resposta.ok) throw new Error("Erro na API");

    const dados = await resposta.json();

    // Atualiza resultado com resposta do backend
    atualizarResultado(Number(dados.imc), dados.imcDescription);
    destacarClassificacao(dados.imcDescription);
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
