/*Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

Passo 2 - identificar o clique no botão

Passo 3 - adicionar a classe "ativo" nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais
Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProdutos = document.querySelector('.btn-mostar-produtos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProdutos.addEventListener('click', () => {
// Passo 3 - adicionar a classe "ativo" nos produtos escondidos
mostrarMaisProdutos();

// Objetivo 2 - esconder o botão de mostrar mais
// Passo 1 - pegar o botão e esconder ele
esconderBotao();
});

function esconderBotao() {
botaoMostrarProdutos.classList.add("remover");
}

function mostrarMaisProdutos() {
produtosInativos.forEach(produtosInativo => {
produtosInativo.classList.add('ativo');
});
}