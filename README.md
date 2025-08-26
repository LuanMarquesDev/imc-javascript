# Calculadora de IMC

Uma aplicação web simples desenvolvida em **HTML, CSS e JavaScript (ES5)** para calcular o **Índice de Massa Corporal (IMC)** e classificar os resultados de acordo com os padrões da OMS.

---

## 🌟 Funcionalidades

- **Cálculo do IMC**: baseado na fórmula oficial:

  \[
  IMC = \frac{peso \ (kg)}{altura^2 \ (m)}
  \]

- **Classificação detalhada do IMC**:

  | Intervalo de IMC    | Situação           |
  | ------------------- | ------------------ |
  | Menor que 18.5      | Abaixo do peso     |
  | 18.5 - 24.9         | Peso normal        |
  | 25.0 - 29.9         | Sobrepeso          |
  | 30.0 - 34.9         | Obesidade grau I   |
  | 35.0 - 39.9         | Obesidade grau II  |
  | Maior ou igual a 40 | Obesidade grau III |

- **Tabela visual**: exibe todos os intervalos de IMC, destacando automaticamente a linha correspondente ao valor calculado.

- **Validação de entrada**:

  - Alertas caso altura ou peso estejam em branco ou com valores inválidos.
  - Limpeza do destaque da tabela e do resultado quando os campos não forem preenchidos corretamente.

- **Responsivo e estilizado**:
  - Layout moderno com card centralizado.
  - Inputs e botão estilizados para melhor experiência do usuário.
  - Tabela com cores suaves e efeito hover.

---

## 💻 Tecnologias utilizadas

- **HTML5**
- **CSS3** (flexbox, responsividade e estilos modernos)
- **JavaScript (ES5)**
  - Programação orientada a objetos com `Pessoa` e `Nutricionista`.
  - Manipulação do DOM para atualizar resultados e destaques da tabela.

---

## 🚀 Como usar

1. Abra o arquivo `index.html` no seu navegador.
2. Preencha os campos:
   - **Altura** (em metros, ex: 1.75)
   - **Peso** (em kg, ex: 70)
3. Clique em **Calcular IMC**.
4. O resultado será exibido abaixo do formulário e a **linha correspondente na tabela será destacada** automaticamente.
5. Caso os campos estejam vazios ou inválidos, um alerta será exibido e a tabela será limpa.

---
