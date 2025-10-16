// Dados dos carros
const carsData = [
    {
        id: 1,
        brand: "Renault",
        model: "Kwid",
        year: 2024,
        price: 55000,
        description: "Compacto econômico perfeito para cidade, com baixo consumo de combustível.",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        stock: 5
    },
    {
        id: 2,
        brand: "Toyota",
        model: "Corolla",
        year: 2024,
        price: 135000,
        description: "Sedã médio com excelente economia de combustível e confiabilidade comprovada.",
        image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800",
        stock: 5
    },
    {
        id: 3,
        brand: "Honda",
        model: "Civic",
        year: 2024,
        price: 145000,
        description: "Sedã esportivo com design moderno e tecnologia de ponta.",
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800",
        stock: 3
    },
    {
        id: 4,
        brand: "Volkswagen",
        model: "Jetta",
        year: 2023,
        price: 125000,
        description: "Sedã alemão com acabamento premium e conforto superior.",
        image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800",
        stock: 4
    },
    {
        id: 5,
        brand: "Chevrolet",
        model: "Onix",
        year: 2024,
        price: 75000,
        description: "Hatch compacto ideal para cidade, econômico e moderno.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        stock: 8
    },
    {
        id: 6,
        brand: "Hyundai",
        model: "HB20",
        year: 2024,
        price: 72000,
        description: "Hatch popular com ótimo custo-benefício e baixa manutenção.",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
        stock: 6
    },
    {
        id: 7,
        brand: "Jeep",
        model: "Compass",
        year: 2023,
        price: 165000,
        description: "SUV robusto com tração 4x4 e design aventureiro.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
        stock: 3
    },
    {
        id: 8,
        brand: "Ford",
        model: "Ranger",
        year: 2023,
        price: 195000,
        description: "Picape potente ideal para trabalho e aventura.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
        stock: 2
    },
    {
        id: 9,
        brand: "Fiat",
        model: "Argo",
        year: 2024,
        price: 68000,
        description: "Hatch compacto com design italiano e boa dirigibilidade.",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        stock: 7
    },
    {
        id: 10,
        brand: "Nissan",
        model: "Kicks",
        year: 2023,
        price: 98000,
        description: "SUV compacto urbano com design arrojado e tecnologia.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
        stock: 5
    },
    {
        id: 11,
        brand: "BMW",
        model: "320i",
        year: 2023,
        price: 280000,
        description: "Sedã de luxo com performance excepcional e tecnologia avançada.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        stock: 1
    },
    {
        id: 12,
        brand: "Mercedes-Benz",
        model: "Classe C",
        year: 2023,
        price: 380000,
        description: "Sedã de luxo alemão com conforto e elegância incomparáveis.",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        stock: 2
    },
    {
        id: 13,
        brand: "Audi",
        model: "A4",
        year: 2023,
        price: 350000,
        description: "Sedã premium com tecnologia Quattro e design sofisticado.",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800",
        stock: 2
    },
    {
        id: 14,
        brand: "Volkswagen",
        model: "T-Cross",
        year: 2024,
        price: 125000,
        description: "SUV compacto versátil e moderno para família.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
        stock: 4
    },
    {
        id: 15,
        brand: "Toyota",
        model: "Hilux",
        year: 2023,
        price: 230000,
        description: "Picape indestrutível com tração 4x4 e motor diesel potente.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800",
        stock: 3
    },
    {
        id: 16,
        brand: "Chevrolet",
        model: "Tracker",
        year: 2024,
        price: 115000,
        description: "SUV compacto conectado com tecnologia OnStar.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
        stock: 6
    },
    {
        id: 17,
        brand: "Honda",
        model: "HR-V",
        year: 2024,
        price: 135000,
        description: "SUV compacto versátil com banco mágico e design elegante.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
        stock: 4
    },
    {
        id: 18,
        brand: "Hyundai",
        model: "Creta",
        year: 2024,
        price: 125000,
        description: "SUV compacto com design moderno e tecnologia completa.",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800",
        stock: 5
    }
];

// Função para formatar preço
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Função para criar card de carro
function createCarCard(car) {
    return `
        <div class="car-card" data-id="${car.id}">
            <img src="${car.image}" alt="${car.brand} ${car.model}" class="car-image">
            <div class="car-content">
                <div class="car-brand">${car.brand}</div>
                <h3 class="car-model">${car.model}</h3>
                <div class="car-year">${car.year}</div>
                <div class="car-price">${formatPrice(car.price)}</div>
                <p class="car-description">${car.description}</p>
                <div class="car-stock">
                    <i class="fas fa-check-circle"></i>
                    <span class="stock-badge">${car.stock} em estoque</span>
                </div>
                <div class="car-actions">
                    <button class="btn-primary btn-block add-to-cart" data-id="${car.id}">
                        <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `;
}
