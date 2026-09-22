# SyntaxWear

## Apresentação do projeto

O SyntaxWear é uma loja virtual de moda e calçados desenvolvida em React + TypeScript, com foco em uma experiência moderna, responsiva e comercial. A interface foi pensada para apresentar produtos de forma visualmente atrativa, facilitar a navegação por categorias e criar uma jornada simples para o cliente explorar, selecionar e comprar itens.

Este projeto funciona como um e-commerce de demonstração, com páginas de catálogo, detalhes de produtos, autenticação, informações da marca e carrinho de compras com persistência local.

---

## Objetivo

Criar uma experiência de compra digital amigável, com:

- navegação intuitiva;
- catálogo de produtos organizado;
- destaque visual para categorias e campanhas;
- páginas institucionais e de localização;
- fluxo de compra simples e funcional.

---

## Funcionalidades principais

### 1. Página inicial e destaque visual
- Hero section com mensagem principal e chamada para ação;
- categorias em destaque;
- galeria visual de produtos e campanhas;
- navegação rápida para as principais áreas da loja.

### 2. Catálogo de produtos
- listagem completa de itens;
- cards com imagem, nome, categoria e preço;
- filtro por categoria;
- navegação para páginas de detalhes do produto.

### 3. Detalhe do produto
- visão completa do item selecionado;
- informações de preço, categoria e descrição;
- formulário de CEP para simular uma etapa de compra ou entrega;
- botão para adicionar ao carrinho.

### 4. Carrinho de compras
- adição de produtos ao carrinho;
- incremento e decremento de quantidade;
- remoção de itens;
- persistência em localStorage para manter o carrinho no navegador.

### 5. Autenticação
- páginas de login e cadastro;
- formulários com validação utilizando React Hook Form + Zod;
- experiência de cadastro visualmente alinhada ao estilo da loja.

### 6. Páginas institucionais
- página Sobre;
- página Nossas Lojas;
- rodapé com newsletter e redes sociais.

### 7. Responsividade
- layout adaptado para desktop e mobile;
- menu mobile para navegação em telas menores;
- componentes com visual consistente em diferentes tamanhos de tela.

---

## Stack tecnológica

- React
- TypeScript
- Vite
- TanStack Router
- React Hook Form
- Zod
- Tailwind CSS
- React Icons

---

## Estrutura do projeto

```bash
src/
├── components/
│   ├── Button/
│   ├── CartButton/
│   ├── CartDrawer/
│   ├── Categories/
│   ├── CEPForm/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── LoginForm/
│   ├── ProductCard/
│   ├── ProductsList/
│   ├── RegisterForm/
│   └── ...
├── pages/
│   ├── _app/
│   └── _auth/
├── mocks/
├── interfaces/
├── helpers/
├── styles/
├── utils/
├── App.tsx
├── main.tsx
└── router-tree-gen.ts
```

---

## Como rodar o projeto localmente

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd ecommerce-syntaxwear-react-ts
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:5173
```

### 4. Build de produção

```bash
npm run build
```

### 5. Pré-visualizar a build

```bash
npm run preview
```

---

## Scripts disponíveis

```bash
npm run dev     # inicia o projeto em modo de desenvolvimento
npm run build   # gera a versão de produção
npm run preview # visualiza a build final localmente
```

---

## Resumo

O SyntaxWear é um projeto de e-commerce front-end moderno, com foco em apresentação visual, navegação por produtos e experiência de compra simples. Ele demonstra como criar uma loja virtual funcional com React, TypeScript e rotas dinâmicas, além de manter um visual premium e responsivo.
