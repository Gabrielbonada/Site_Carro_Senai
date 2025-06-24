function buscar(){
    const termo = document.getElementById("searchInput").value;
    const marca = document.getElementById("brandSelect").value;
    const ano = document.getElementById("brandSelect").value;

    alert(`Buscar: ${termo || 'qualquer' } ${marca || 'todas as marcas'} ${ano || 'todos os anos'}`);
    // Aqui você pode adicionar a lógica para buscar os carros com base nos critérios
}

function abrirModal() {
  document.getElementById("modal-compra").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal-compra").style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function (event) {
  const modal = document.getElementById("modal-compra");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Altera o ícone do botão
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});