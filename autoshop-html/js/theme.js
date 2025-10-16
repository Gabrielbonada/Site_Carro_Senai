// Gerenciamento de Tema (Claro/Escuro)
class ThemeManager {
    constructor() {
        this.theme = this.loadTheme();
        this.applyTheme();
        this.initToggle();
    }

    // Carregar tema salvo
    loadTheme() {
        return localStorage.getItem('theme') || 'light';
    }

    // Salvar tema
    saveTheme() {
        localStorage.setItem('theme', this.theme);
    }

    // Aplicar tema
    applyTheme() {
        if (this.theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        this.updateIcon();
    }

    // Alternar tema
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.saveTheme();
        this.applyTheme();
    }

    // Atualizar ícone do botão
    updateIcon() {
        const themeBtn = document.getElementById('themeToggle');
        if (!themeBtn) return;

        const icon = themeBtn.querySelector('i');
        if (this.theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // Inicializar toggle
    initToggle() {
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => this.toggle());
        }
    }
}

// Inicializar gerenciador de tema
const themeManager = new ThemeManager();
