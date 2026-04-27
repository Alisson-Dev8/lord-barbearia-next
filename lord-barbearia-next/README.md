# Lord Barbearia (Next.js)

Landing page da **Lord Barbearia** (Campo Grande - MS) feita em **Next.js (App Router)** com **Tailwind CSS** e animações com **Framer Motion**.

## Requisitos

- Node.js (recomendado: **LTS**)
- npm

## Rodar localmente

No diretório `lord-barbearia-next/`:

```bash
npm install
npm run dev
```

Depois abra `http://localhost:3000`.

## Scripts

- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run start`: roda a build
- `npm run lint`: ESLint

## Estrutura (principal)

- `app/page.tsx`: página inicial (sections)
- `app/layout.tsx`: layout raiz + metadata (SEO)
- `components/`: seções da landing page (Navbar, Hero, Services, etc.)
- `public/assets/`: imagens usadas pelo site

## Assets esperados em `public/assets/`

O site referencia estas imagens:

- `logo-lord.png`
- `hero-barbershop.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`
- `barber-tools.jpg`

## Observação sobre o mapa

O mapa em `components/Contact.tsx` usa embed público (sem expor API key no código).
