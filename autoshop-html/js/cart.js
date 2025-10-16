// Gerenciamento do Carrinho
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateBadge();
    }

    // Carregar carrinho do localStorage
    loadCart() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    // Salvar carrinho no localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.updateBadge();
    }

    // Adicionar item ao carrinho
    addItem(carId) {
        const car = carsData.find(c => c.id === carId);
        if (!car) return;

        const existingItem = this.items.find(item => item.id === carId);
        
        if (existingItem) {
            if (existingItem.quantity < car.stock) {
                existingItem.quantity++;
            } else {
                this.showNotification('Estoque insuficiente!', 'error');
                return;
            }
        } else {
            this.items.push({
                id: car.id,
                brand: car.brand,
                model: car.model,
                price: car.price,
                image: car.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.showNotification('Adicionado ao carrinho!', 'success');
    }

    // Remover item do carrinho
    removeItem(carId) {
        this.items = this.items.filter(item => item.id !== carId);
        this.saveCart();
        this.renderCart();
    }

    // Atualizar badge do carrinho
    updateBadge() {
        const badge = document.getElementById('cartBadge');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        if (badge) {
            badge.textContent = totalItems;
        }
    }

    // Calcular total
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Renderizar carrinho
    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>Seu carrinho está vazio</p>
                </div>
            `;
            cartTotal.textContent = formatPrice(0);
            return;
        }

        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.brand} ${item.model}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.brand} ${item.model}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div>Quantidade: ${item.quantity}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-item-remove" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Remover
                    </button>
                    <div style="font-weight: 600;">${formatPrice(item.price * item.quantity)}</div>
                </div>
            </div>
        `).join('');

        cartTotal.textContent = formatPrice(this.getTotal());

        // Adicionar eventos de remover
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                this.removeItem(id);
            });
        });
    }

    // Mostrar notificação
    showNotification(message, type = 'success') {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remover após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Limpar carrinho
    clear() {
        this.items = [];
        this.saveCart();
        this.renderCart();
    }
}

// Adicionar animações CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar carrinho
const cart = new Cart();

// Event listeners para modal do carrinho
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartBtn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
            cart.renderCart();
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.items.length === 0) {
                cart.showNotification('Seu carrinho está vazio!', 'error');
                return;
            }

            // Simular checkout
            const total = cart.getTotal();
            const confirmed = confirm(`Finalizar compra no valor de ${formatPrice(total)}?`);
            
            if (confirmed) {
                cart.showNotification('Pedido realizado com sucesso!', 'success');
                cart.clear();
                cartModal.classList.remove('active');
            }
        });
    }

    // Event delegation para botões de adicionar ao carrinho
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart')) {
            const btn = e.target.closest('.add-to-cart');
            const carId = parseInt(btn.dataset.id);
            cart.addItem(carId);
        }
    });
});
