﻿# TecnoCria

TecnoCria é um site moderno para compartilhar conhecimento, projetos e artigos sobre tecnologia, inovação e desenvolvimento de software.  

---

## 🚀 Sobre o projeto

Este site foi criado com foco em design responsivo, experiência do usuário e conteúdo técnico. Ele oferece uma estrutura para publicar posts em Markdown, facilitando a criação de artigos e atualizações.

---

## 🛠 Tecnologias usadas

- [Next.js](https://nextjs.org/) — Framework React para aplicações web  
- [Tailwind CSS](https://tailwindcss.com/) — Framework CSS utilitário para estilização rápida  
- [Remark + Remark-html](https://github.com/remarkjs/remark) — Para processamento de Markdown  
- [Gray-matter](https://github.com/jonschlinkert/gray-matter) — Para leitura de metadados frontmatter em Markdown  

---

## 📁 Estrutura do projeto

/
├── components/ # Componentes React reutilizáveis (ex: Navbar)
├── lib/ # Funções auxiliares para carregar posts
├── pages/ # Páginas do Next.js (rotas)
│ ├── blog/ # Página do blog e posts dinâmicos
│ ├── index.js # Página Home
│ ├── sobre.js # Página Sobre
│ ├── projetos.js # Página Projetos
│ └── contato.js # Página Contato
├── posts/ # Posts em Markdown (.md)
├── public/ # Arquivos públicos (imagens, favicon etc)
├── styles/ # Arquivos CSS (Tailwind)
├── package.json # Dependências e scripts npm
├── tailwind.config.js
├── postcss.config.js
└── README.md

yaml
Copiar
Editar

---

## ⚙️ Instalação e execução local

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/tecno-cria.git
Entre na pasta do projeto:

bash
Copiar
Editar
cd tecno-cria
Instale as dependências:

bash
Copiar
Editar
npm install
Rode o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
Abra no navegador:

arduino
Copiar
Editar
http://localhost:3000
📌 Rotas principais
/ — Home

/sobre — Sobre

/blog — Lista de posts

/blog/[slug] — Post individual

/projetos — Projetos

/contato — Contato

✍️ Como adicionar posts
Crie um arquivo .md dentro da pasta posts

Use o formato frontmatter para metadados, por exemplo:

markdown
Copiar
Editar
---
title: "Título do post"
date: "2025-07-04"
---

Conteúdo do post em Markdown aqui.
O post aparecerá automaticamente na lista do blog.

📄 Licença
Projeto aberto e gratuito para uso pessoal e comercial.

📫 Contato
Para dúvidas, sugestões ou parcerias: contato@tecnocria.dev

Desenvolvido por Állefe Samuel Santos 
© 2025 TecnoCria — Todos os direitos reservados

