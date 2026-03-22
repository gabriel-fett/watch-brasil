# Watch Brasil — SDUI Homepage

Frontend MVP de uma plataforma de streaming esportivo com arquitetura Server-Driven UI (SDUI).

Desenvolvido como teste técnico para a vaga de Frontend Jr — Watch Brasil.

## Sobre o projeto

A homepage é composta por seções dinâmicas (shelves) cujo layout, ordem e conteúdo são definidos pela API. O frontend interpreta a resposta e monta a interface dinamicamente, sem hardcode de layout.

Cada shelf retornada pela API possui um campo `layout` (`Banner`, `Carousel` ou `List`) e um campo `domain` por item (`Content`, `Team`, `News` ou `Collection`). O frontend decide qual componente renderizar com base nesses valores — nenhuma página é estática.

## Arquitetura SDUI

```
API /shelves?page=N
        ↓
    ShelfRenderer
    ├── layout: Banner     → Banner.jsx
    ├── layout: Carousel   → Carousel.jsx
    │         ├── domain: Content    → ContentCard
    │         ├── domain: Team       → TeamCard
    │         ├── domain: News       → NewsCard
    │         └── domain: Collection → CollectionCard
    └── layout: List       → List.jsx
              ├── domain: Team       → scroll horizontal
              ├── domain: News       → lista vertical com divisores
              └── domain: Collection → grid 2 colunas
```

## Stack

- Next.js 15
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

> **Nota:** A API externa entra em modo stand-by quando inativa. Se a página carregar vazia, aguarde alguns segundos e recarregue — é o servidor acordando.

## Estrutura de pastas

```
app/
  api/shelves/route.js   # Proxy interno (resolve CORS)
  page.js                # Página principal
components/
  Banner.jsx
  Carousel.jsx
  List.jsx
  ShelfRenderer.jsx
  CategoryTabs.jsx
  Header.jsx
  cards/
    ContentCard.jsx
    TeamCard.jsx
    NewsCard.jsx
    CollectionCard.jsx
services/
  api.js                 # Chamadas à API + filtro de shelves vazias
```

## Deploy

Projeto publicado na Vercel:
https://watch-brasil.vercel.app/

## API

Documentação: https://simple-test-api-s02c.onrender.com/docs

- `GET /shelves?page=1` — Football
- `GET /shelves?page=2` — NBA
- `GET /shelves?page=3` — Formula 1
