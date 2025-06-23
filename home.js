function buscar(){
    const termo = document.getElementById("searchInput").value;
    const marca = document.getElementById("brandSelect").value;
    const ano = document.getElementById("brandSelect").value;

    alert(`Buscar: ${termo || 'qualquer' } ${marca || 'todas as marcas'} ${ano || 'todos os anos'}`);
    // Aqui você pode adicionar a lógica para buscar os carros com base nos critérios
}

 function abrirFormulario() {
    const form = document.getElementById("form-compra");
    form.style.display = "block";
    form.scrollIntoView({ behavior: "smooth" });
  }

  // Função para fechar o formulário
  function fecharFormulario() {
    const form = document.getElementById("form-compra");
    form.style.display = "none";
  }

  // Ativar evento nos botões com classe "detalhes"
  document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".detalhes");

    botoes.forEach((botao) => {
      botao.addEventListener("click", () => {
        // Aqui você pode futuramente preencher o input de carro automaticamente
        abrirFormulario();
      });
    });
  });