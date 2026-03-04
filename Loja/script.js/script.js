const produtos = [
  { id: 1, nome: "Camisa Oversized", preco: 79.90, imagem: "https://via.placeholder.com/300" },
  { id: 2, nome: "Calça Jeans", preco: 129.90, imagem: "https://via.placeholder.com/300" },
  { id: 3, nome: "Moletom Street", preco: 149.90, imagem: "https://via.placeholder.com/300" }
];

let carrinho = [];

const produtosContainer = document.getElementById("produtos");

produtos.forEach(produto => {
  produtosContainer.innerHTML += `
    <div class="produto">
      <img src="${produto.imagem}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarCarrinho(${produto.id})">
        Adicionar ao Carrinho
      </button>
    </div>
  `;
});

function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    total += item.preco;
    cartItems.innerHTML += `<p>${item.nome} - R$ ${item.preco.toFixed(2)}</p>`;
  });

  totalElement.innerText = total.toFixed(2);
  cartCount.innerText = carrinho.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function finalizarCompra() {
  let numero = "5585999999999"; // coloque seu número aqui
  let mensagem = "Olá! Quero finalizar a compra:%0A";

  carrinho.forEach(item => {
    mensagem += `- ${item.nome} R$ ${item.preco}%0A`;
  });

  window.open(`https://wa.me/${numero}?text=${mensagem}`);
}