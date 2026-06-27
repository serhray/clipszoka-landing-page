# Clipszoka Landing Page

Landing page cinematica do projeto Clipszoka, com foco em midia imersiva, narrativa visual e performance web.

## Principais recursos

- Hero com video de fundo.
- Galeria com cards 16:9 e preview por hover/focus.
- Modal de reproducao com acessibilidade basica (teclado, ESC e foco).
- Secoes editoriais: Alanzoka, Sobre, Parcerias e CTA final.
- SEO tecnico base (Open Graph, Twitter Card, canonical, robots e sitemap).

## Estrutura atual de midia

- Videos usados em producao: pasta `videos comprimidos/`.
- Capas usadas em producao: pasta `capas/`.
- Imagens de apoio: `alan.webp` e `profile.webp`.

## Rodar localmente

Use um servidor estatico na raiz do projeto:

```bash
npx --yes serve -l 4173
```

Depois acesse:

```text
http://localhost:4173
```

## Deploy

Projeto configurado para Vercel como site estatico.

```bash
vercel
```

Observacao: o arquivo `videos comprimidos/compressed.zip` esta ignorado no deploy.

## Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Vercel (static hosting)

## Sobre

Projeto comunitario e voluntario criado para celebrar momentos do Alanzoka e da comunidade Clipszoka.
