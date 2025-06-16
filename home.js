function buscar(){
    const termo = document.getElementById("searchInput").value;
    const marca = document.getElementById("brandSelect").value;
    const ano = document.getElementById("brandSelect").value;

    alert(`Buscar: ${termo || 'qualquer' } ${marca || 'todas as marcas'} ${ano || 'todos os anos'}`);
    // Aqui você pode adicionar a lógica para buscar os carros com base nos critérios
}