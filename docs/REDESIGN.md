# Orvia Tech — site institucional

A home apresenta a Orvia como empresa de tecnologia B2B em três pilares: Products, Intelligence e Solutions. Retoma é o único produto publicado no catálogo. A integração Supabase, variáveis de ambiente, manifestos, lockfiles e Dockerfile foram preservados. Nenhum deploy foi executado.

## Desenvolvimento

```sh
cd /workspace/orvia-ai-commerce-hub
npm ci --legacy-peer-deps
npm run dev -- --host 0.0.0.0 --strictPort
```

O Vite utiliza a porta 8080. No navegador local, abra a origem do servidor e visite `/` ou `/produtos/retoma`. Neste ambiente cloud, use a visualização disponibilizada pela plataforma, quando disponível.

```sh
npm test
npm run lint
./node_modules/.bin/tsc -p tsconfig.app.json
./node_modules/.bin/tsc -p tsconfig.node.json
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

O lockfile existente requer `--legacy-peer-deps`; não foi atualizado como parte do redesign.

## Arquitetura

- `src/data/company.ts`: catálogo de produtos, pilares, soluções, jornada e canais oficiais. Inclua novos produtos no array; cada produto novo precisa também de conteúdo e rota próprios antes de publicar o link.
- `src/components/institutional/Primitives.tsx`: ProductCard, ProductHero, ProductDiagram, SolutionCard, SectionHeader e PrimaryCTA.
- `src/components/Header.tsx`: navegação sticky, menu mobile com Escape, estados acessíveis e retorno do foco.
- `src/components/Footer.tsx`: footer corporativo, ano dinâmico e links condicionais.
- `src/components/institutional/ContactSection.tsx`: CTA real para o WhatsApp informado pelo responsável.
- `src/components/institutional/PageEffects.tsx`: metadados por rota e navegação entre âncoras, respeitando movimento reduzido.
- `src/pages/Index.tsx` e `src/pages/Retoma.tsx`: home e página de produto.
- `scripts/page-metadata.ts`: plugin de build que gera `dist/produtos/retoma/index.html` com title, descrição, canonical e Open Graph próprios, inclusive para crawlers sem JavaScript.
- `src/test/institutional.test.tsx`: testes de conteúdo, catálogo, canais, navegação, menu, metadados e 404.

Os componentes de UI existentes continuam disponíveis. Seções antigas sem uso não participam mais da página nem do bundle JavaScript. Os erros de lint preexistentes nos tipos de CommandDialog/Textarea e no import do Tailwind Animate foram corrigidos sem alterar comportamento.

## Conteúdo e SEO

WhatsApp: `https://wa.me/5511977536165`. Site público do Retoma: `https://retoma.orviabr.tech/`. Não há envio de formulário nem coleta nova de dados neste site. O fluxograma do Retoma é identificado como conceitual; não simula uma tela real, métricas ou funcionalidades não confirmadas.

HTML em pt-BR, headings semânticos, metadados sociais, imagem de compartilhamento local, favicon, sitemap, robots e dados estruturados Organization. Não foram incluídos preços, avaliações, depoimentos ou números não confirmados. Canonicals e sitemap usam a URL atual fornecida no briefing. Caso o domínio institucional mude, atualizar `index.html`, `src/data/company.ts`, `scripts/page-metadata.ts`, `public/robots.txt` e `public/sitemap.xml`.

O build emite a página do Retoma como diretório estático, compatível com o serviço de arquivos do Nginx já utilizado pelo Dockerfile. A navegação via React Router continua disponível. As tags de metadados não constituem renderização completa do conteúdo no servidor.

## Performance e acessibilidade

Sem novas dependências de aplicação. Foram removidos da home canvas de partículas, animações contínuas, imagens pesadas de IA e fontes buscadas remotamente. A composição do hero usa CSS e SVGs. O JavaScript de produção passou de aproximadamente 462 kB para 336 kB (147 kB para 107 kB gzip) neste ambiente. Core Web Vitals de usuários reais dependem de medição após publicação.

Incluídos skip link, foco visível, menu acionável por teclado, labels, contraste revisado e suporte a prefers-reduced-motion. Layout e navegação foram exercitados com Chromium em 1440, 768, 390 e 320 px, sem overflow horizontal nem erros de console. Não há garantia de conformidade completa com WCAG apenas por testes automatizados.

## Informações pendentes

- URLs oficiais de redes sociais para preencher `company.socials`.
- Política de privacidade aprovada e URL oficial para preencher `company.privacyUrl`. Termos de uso devem ser adicionados somente com conteúdo válido.
- Validar comercialmente a copy e qualquer informação nova sobre o Retoma antes de ampliar a descrição.
- Confirmar o domínio definitivo antes da publicação.

Não foram criados links sociais fictícios nem páginas legais provisórias.

## Identidade visual original

A revisão visual utiliza os arquivos originais de marca existentes em `public/lovable-uploads`: `bbc59210-47ba-46d0-982a-48ce9045a3da.png` (logotipo completo) e `cc08f24f-978d-4f55-82da-e1e65c5d6edc.png` (símbolo). Os arquivos não foram redesenhados nem alterados. Header, hero, seção institucional, footer, favicon e metadados usam a identidade original. A interface mantém fundo azul profundo, ciano e luz discreta; a assinatura institucional acompanha a referência fornecida.
