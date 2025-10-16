// JavaScript da Página de Catálogo
document.addEventListener('DOMContentLoaded', () => {
    const carsGrid = document.getElementById('carsGrid');
    const totalCarsEl = document.getElementById('totalCars');
    const searchInput = document.getElementById('searchInput');
    const brandFilter = document.getElementById('brandFilter');
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const minYear = document.getElementById('minYear');
    const maxYear = document.getElementById('maxYear');
    const clearFilters = document.getElementById('clearFilters');

    let filteredCars = [...carsData];

    // Renderizar carros
    function renderCars() {
        if (filteredCars.length === 0) {
            carsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <i class="fas fa-car" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Nenhum carro encontrado com os filtros selecionados.</p>
                </div>
            `;
        } else {
            carsGrid.innerHTML = filteredCars.map(car => createCarCard(car)).join('');
        }
        
        totalCarsEl.textContent = filteredCars.length;
    }

    // Aplicar filtros
    function applyFilters() {
        filteredCars = carsData.filter(car => {
            // Filtro de busca
            const searchTerm = searchInput.value.toLowerCase();
            const matchesSearch = !searchTerm || 
                car.brand.toLowerCase().includes(searchTerm) ||
                car.model.toLowerCase().includes(searchTerm);

            // Filtro de marca
            const brandTerm = brandFilter.value.toLowerCase();
            const matchesBrand = !brandTerm || 
                car.brand.toLowerCase().includes(brandTerm);

            // Filtro de preço
            const min = minPrice.value ? parseFloat(minPrice.value) : 0;
            const max = maxPrice.value ? parseFloat(maxPrice.value) : Infinity;
            const matchesPrice = car.price >= min && car.price <= max;

            // Filtro de ano
            const yearMin = minYear.value ? parseInt(minYear.value) : 0;
            const yearMax = maxYear.value ? parseInt(maxYear.value) : Infinity;
            const matchesYear = car.year >= yearMin && car.year <= yearMax;

            return matchesSearch && matchesBrand && matchesPrice && matchesYear;
        });

        renderCars();
    }

    // Event listeners para filtros
    searchInput.addEventListener('input', applyFilters);
    brandFilter.addEventListener('input', applyFilters);
    minPrice.addEventListener('input', applyFilters);
    maxPrice.addEventListener('input', applyFilters);
    minYear.addEventListener('input', applyFilters);
    maxYear.addEventListener('input', applyFilters);

    // Limpar filtros
    clearFilters.addEventListener('click', () => {
        searchInput.value = '';
        brandFilter.value = '';
        minPrice.value = '';
        maxPrice.value = '';
        minYear.value = '';
        maxYear.value = '';
        applyFilters();
    });

    // Renderizar todos os carros inicialmente
    renderCars();

    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    // Login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Funcionalidade de login será implementada em breve!');
        });
    }
});
