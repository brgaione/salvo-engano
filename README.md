# 📝 Salvo Engano - Blog Pessoal

Um blog pessoal criado com [Hugo](https://gohugo.io/) e o tema [Relearn](https://github.com/McShelby/hugo-theme-relearn), hospedado no GitHub Pages.

## 🚀 Visão Geral

Este é um site estático gerado pelo Hugo, um framework de geração de sites extremamente rápido e flexível. O tema Relearn oferece uma interface limpa e moderna, perfeita para blogs e documentação.

## 📋 Pré-requisitos

- [Hugo Extended](https://gohugo.io/installation/) (versão 0.152.2 ou superior)
- [Git](https://git-scm.com/)

## 🛠️ Desenvolvimento Local

### 1. Clonar o repositório

```bash
git clone --recurse-submodules <url-do-repositorio>
cd salvo-engano
```

### 2. Rodar o servidor local

```bash
hugo server --buildDrafts
```

O site estará disponível em: http://localhost:1313

### 3. Criar novo conteúdo

Para criar um novo post:

```bash
hugo new content posts/meu-novo-post.md
```

## 📝 Estrutura do Projeto

```
salvo-engano/
├── content/              # Conteúdo do site
│   ├── posts/           # Posts do blog
│   └── sobre/           # Página sobre
├── themes/              # Temas do Hugo
│   └── hugo-theme-relearn/
├── hugo.toml            # Configuração do Hugo
└── .github/workflows/   # CI/CD para deploy
```

## 🌐 Deploy

O deploy é automático através do GitHub Pages. Basta fazer push para a branch `main`:

```bash
git add .
git commit -m "descrição das alterações"
git push origin main
```

O GitHub Actions irá construir e fazer o deploy automaticamente.

## ⚙️ Configuração

O arquivo `hugo.toml` contém as configurações do site:

- **baseURL**: URL do site no GitHub Pages
- **languageCode**: Idioma do site (pt-br)
- **theme**: Tema utilizado (hugo-theme-relearn)
- **params**: Parâmetros personalizados do tema

## 📚 Criando Conteúdo

### Novo Post

```bash
hugo new content posts/titulo-do-post.md
```

### Front Matter

Cada post deve ter o seguinte front matter:

```yaml
---
title: "Título do Post"
date: 2026-04-05T10:00:00-03:00
draft: false
tags: ["tag1", "tag2"]
categories: ["Categoria"]
---
```

## 🎨 Personalização

O tema Relearn oferece várias opções de personalização. Consulte a [documentação do tema](https://mcshelby.github.io/hugo-theme-relearn/) para mais detalhes.

## 📄 Licença

Este projeto é pessoal e está disponível sob a licença MIT.

## 🔗 Links

- [Documentação do Hugo](https://gohugo.io/documentation/)
- [Tema Relearn](https://mcshelby.github.io/hugo-theme-relearn/)
- [GitHub Pages](https://pages.github.com/)
