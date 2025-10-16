# 🚗 AutoShop - E-commerce de Carros (HTML, CSS, JS)

Site completo de e-commerce de carros desenvolvido com **HTML5, CSS3 e JavaScript puro** (Vanilla JS), sem frameworks ou bibliotecas complexas.

---

## ✨ Funcionalidades

### 🎨 Interface
- Layout responsivo para desktop, tablet e mobile
- Design moderno e profissional
- Animações suaves e feedback visual
- 4 páginas completas (Início, Carros, Sobre, Contato)

### 🛒 Carrinho de Compras
- Adicionar carros ao carrinho
- Remover itens do carrinho
- Cálculo automático do total
- Persistência no localStorage
- Badge com contador de itens
- Modal interativo

### 🎨 Personalização
- **Tema Claro/Escuro** com alternância suave
- Persistência da preferência do usuário
- Ícones dinâmicos

### ♿ Acessibilidade
- **3 tamanhos de fonte** (Pequeno, Médio, Grande)
- Skip links para navegação por teclado
- Atalhos de teclado (Ctrl + / Ctrl -)
- Compatível com leitores de tela
- Alto contraste de cores
- Labels e aria-labels apropriados

### 🔍 Filtros e Busca
- Busca por marca ou modelo
- Filtro por marca
- Filtro por faixa de preço
- Filtro por ano
- Atualização em tempo real
- Botão para limpar filtros

### 📦 Catálogo
- 18 carros pré-cadastrados
- Imagens de alta qualidade
- Informações detalhadas (marca, modelo, ano, preço, descrição, estoque)
- Cards com hover effects

---

## 📁 Estrutura do Projeto

```
autoshop-html/
├── index.html          # Página inicial
├── carros.html         # Catálogo de carros
├── sobre.html          # Sobre a empresa
├── contato.html        # Formulário de contato
├── css/
│   └── style.css       # Estilos completos
├── js/
│   ├── data.js         # Dados dos carros
│   ├── cart.js         # Gerenciamento do carrinho
│   ├── theme.js        # Tema claro/escuro
│   ├── accessibility.js # Acessibilidade
│   ├── main.js         # JavaScript da home
│   └── catalog.js      # JavaScript do catálogo
└── README.md           # Este arquivo
```

---

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador

1. Extraia os arquivos
2. Abra o arquivo `index.html` no seu navegador
3. Pronto! O site está funcionando

### Opção 2: Usar um Servidor Local

**Com Python:**
```bash
cd autoshop-html
python -m http.server 8000
```
Acesse: `http://localhost:8000`

**Com Node.js (http-server):**
```bash
npx http-server autoshop-html -p 8000
```
Acesse: `http://localhost:8000`

**Com VS Code:**
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## 🎯 Funcionalidades Detalhadas

### Carrinho de Compras
- Clique em "Adicionar ao Carrinho" em qualquer carro
- Clique no ícone do carrinho no header para ver os itens
- Remova itens clicando no botão "Remover"
- Finalize a compra clicando em "Finalizar Compra"
- Os itens são salvos no localStorage

### Tema Claro/Escuro
- Clique no ícone de lua/sol no header
- A preferência é salva automaticamente
- Funciona em todas as páginas

### Acessibilidade
- Clique no ícone de acessibilidade no header
- Escolha o tamanho de fonte desejado
- Use `Ctrl +` para aumentar e `Ctrl -` para diminuir
- Use `Tab` para navegar pelo teclado
- Use `Esc` para fechar modais

### Filtros (Página de Carros)
- Digite no campo de busca para procurar por marca/modelo
- Use os filtros de preço e ano
- Clique em "Limpar Filtros" para resetar

---

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --primary-color: #2563eb;  /* Cor principal */
    --primary-hover: #1d4ed8;  /* Cor ao passar o mouse */
    /* ... outras cores ... */
}
```

### Carros
Edite o array `carsData` em `js/data.js`:

```javascript
const carsData = [
    {
        id: 1,
        brand: "Marca",
        model: "Modelo",
        year: 2024,
        price: 50000,
        description: "Descrição do carro",
        image: "url-da-imagem",
        stock: 5
    },
    // ... adicione mais carros ...
];
```

---

## 📱 Responsividade

O site é totalmente responsivo e funciona em:

- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (até 767px)

Breakpoints principais:
- 1024px: Layout do catálogo muda para 1 coluna
- 768px: Menu mobile é ativado
- 480px: Ajustes adicionais para telas pequenas

---

## ♿ Recursos de Acessibilidade

- **Navegação por Teclado**: Use Tab, Enter e Esc
- **Skip Links**: Pule direto para o conteúdo principal
- **Atalhos**:
  - `Ctrl +` ou `Ctrl =`: Aumentar fonte
  - `Ctrl -`: Diminuir fonte
  - `Esc`: Fechar modais
- **Leitores de Tela**: Todos os elementos têm labels apropriados
- **Contraste**: Cores com contraste adequado (WCAG AA)

---

## 🌐 Compatibilidade

Funciona em todos os navegadores modernos:

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

**Não requer:**
- Node.js
- npm/pnpm
- React
- Banco de dados
- Servidor backend

---

## 📊 Dados Inclusos

O site vem com **18 carros pré-cadastrados**:

- Renault Kwid
- Toyota Corolla
- Honda Civic
- Volkswagen Jetta
- Chevrolet Onix
- Hyundai HB20
- Jeep Compass
- Ford Ranger
- Fiat Argo
- Nissan Kicks
- BMW 320i
- Mercedes-Benz Classe C
- Audi A4
- Volkswagen T-Cross
- Toyota Hilux
- Chevrolet Tracker
- Honda HR-V
- Hyundai Creta

---

## 🚀 Deploy

### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Selecione a branch main
5. Seu site estará em `https://seu-usuario.github.io/repo-name`

### Netlify
1. Arraste a pasta para netlify.com/drop
2. Pronto! URL gerada automaticamente

### Vercel
```bash
npx vercel --prod
```

---

## 💡 Dicas de Uso

1. **Adicione seus próprios carros** editando `js/data.js`
2. **Mude as cores** editando as variáveis CSS
3. **Adicione mais páginas** seguindo o padrão das existentes
4. **Personalize o footer** em cada arquivo HTML
5. **Adicione Google Analytics** inserindo o código no `<head>`

---

## 🐛 Solução de Problemas

**Carrinho não salva:**
- Verifique se o localStorage está habilitado no navegador
- Limpe o cache e tente novamente

**Imagens não carregam:**
- Verifique sua conexão com a internet
- As imagens vêm do Unsplash e requerem internet

**Tema não muda:**
- Limpe o localStorage: `localStorage.clear()`
- Recarregue a página

---

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

---

## 🎉 Pronto para Usar!

Basta abrir o `index.html` no navegador e começar a usar. Não precisa instalar nada!

**Desenvolvido com ❤️ usando HTML5, CSS3 e JavaScript puro**
