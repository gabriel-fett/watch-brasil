# Watch Brasil — SDUI Homepage

Frontend MVP de uma plataforma de streaming esportivo com arquitetura Server-Driven UI (SDUI).

Desenvolvido como teste técnico para a vaga de Frontend Jr — Innovation Team.

## Sobre o projeto

A homepage é composta por seções dinâmicas (shelves) cujo layout, ordem e conteúdo são definidos pela API. O frontend interpreta a resposta e monta a interface dinamicamente, sem hardcode de layout.

## Stack

- Next.js 16
- React
- TailwindCSS

## Como rodar localmente

**Pré-requisitos:** Node.js 18+
```bash
# Clone o repositório
git clone https://github.com/gabriel-fett/watch-brasil.git

# Entre na pasta
cd watch-brasil

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse `http://localhost:3000`

## Deploy

Projeto publicado na Vercel:
[link será adicionado após o deploy]

## API

Documentação: https://simple-test-api-s02c.onrender.com/docs

- `GET /shelves?page=1` — Football
- `GET /shelves?page=2` — NBA  
- `GET /shelves?page=3` — Formula 1