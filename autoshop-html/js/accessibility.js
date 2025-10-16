// Gerenciamento de Acessibilidade
class AccessibilityManager {
    constructor() {
        this.fontSize = this.loadFontSize();
        this.applyFontSize();
        this.initControls();
    }

    // Carregar tamanho de fonte salvo
    loadFontSize() {
        return localStorage.getItem('fontSize') || 'medium';
    }

    // Salvar tamanho de fonte
    saveFontSize() {
        localStorage.setItem('fontSize', this.fontSize);
    }

    // Aplicar tamanho de fonte
    applyFontSize() {
        document.body.classList.remove('font-small', 'font-medium', 'font-large');
        document.body.classList.add(`font-${this.fontSize}`);
        this.updateActiveButton();
    }

    // Definir tamanho de fonte
    setFontSize(size) {
        this.fontSize = size;
        this.saveFontSize();
        this.applyFontSize();
    }

    // Atualizar botão ativo
    updateActiveButton() {
        const buttons = document.querySelectorAll('[data-font]');
        buttons.forEach(btn => {
            if (btn.dataset.font === this.fontSize) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Inicializar controles
    initControls() {
        // Modal de acessibilidade
        const accessibilityBtn = document.getElementById('accessibilityBtn');
        const accessibilityModal = document.getElementById('accessibilityModal');
        const closeAccessibility = document.getElementById('closeAccessibility');

        if (accessibilityBtn) {
            accessibilityBtn.addEventListener('click', () => {
                accessibilityModal.classList.add('active');
                this.updateActiveButton();
            });
        }

        if (closeAccessibility) {
            closeAccessibility.addEventListener('click', () => {
                accessibilityModal.classList.remove('active');
            });
        }

        if (accessibilityModal) {
            accessibilityModal.addEventListener('click', (e) => {
                if (e.target === accessibilityModal) {
                    accessibilityModal.classList.remove('active');
                }
            });
        }

        // Botões de tamanho de fonte
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-font]')) {
                const btn = e.target.closest('[data-font]');
                this.setFontSize(btn.dataset.font);
            }
        });

        // Atalhos de teclado
        document.addEventListener('keydown', (e) => {
            // Ctrl + = para aumentar fonte
            if (e.ctrlKey && e.key === '=') {
                e.preventDefault();
                if (this.fontSize === 'small') this.setFontSize('medium');
                else if (this.fontSize === 'medium') this.setFontSize('large');
            }
            
            // Ctrl + - para diminuir fonte
            if (e.ctrlKey && e.key === '-') {
                e.preventDefault();
                if (this.fontSize === 'large') this.setFontSize('medium');
                else if (this.fontSize === 'medium') this.setFontSize('small');
            }

            // Esc para fechar modais
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
            }
        });
    }
}

// Inicializar gerenciador de acessibilidade
const accessibilityManager = new AccessibilityManager();
