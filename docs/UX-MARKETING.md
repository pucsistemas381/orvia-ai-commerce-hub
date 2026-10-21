# Experiência institucional e conversão

A direção visual preserva o símbolo e o logotipo originais da Orvia, com fundo azul profundo, ciano e iluminação discreta. O objetivo de conversão é levar visitantes com contextos diferentes a um próximo passo relevante: conhecer o Retoma ou iniciar uma conversa comercial. Resultados de conversão não foram medidos nem presumidos.

## Jornada implementada

- Hero com proposta de valor, CTA comercial direto e caminho secundário para explorar soluções.
- Ecossistema visual com três destinos funcionais: Retoma, inteligência aplicada e soluções.
- Destaque do Retoma com identidade subordinada à Orvia, benefícios confirmados e acesso ao site público.
- Seletor de desafios: recuperar oportunidades, conectar a operação ou criar software. A escolha atualiza a recomendação e a mensagem de WhatsApp. A mensagem só é enviada se o próprio visitante decidir enviar no WhatsApp.
- CTAs específicos por solução, evitando conversas sem contexto.
- FAQ com respostas sobre o posicionamento, relação com Retoma e início de uma conversa comercial.
- Contato fixo somente no mobile: aparece após o CTA principal sair da tela, oculta-se na área de contato e durante a navegação mobile aberta.

Não foram criados números de clientes, depoimentos, urgência artificial, descontos, preços ou promessas de resultado. Não há novos pixels, analytics, cookies ou envio de formulários. A seleção acontece apenas no navegador e não é persistida.

## Componentes e dados

- `src/data/marketing.ts`: desafios, recomendações, perguntas frequentes e construção de URLs do canal comercial.
- `ChallengeFinder.tsx`: botões com estado `aria-pressed`, painel anunciado por `aria-live` e CTAs de acordo com a seleção.
- `EcosystemVisual.tsx`: links reais, conectores em SVG e marca original.
- `FaqSection.tsx`: disclosure nativo `details/summary`, operável por teclado e sem depender de JavaScript para abrir o conteúdo.
- `ExperienceEnhancements.tsx`: visibilidade do contato mobile e entradas visuais com IntersectionObserver/Web Animations. Conteúdo permanece visível se essas APIs não existirem. Movimento reduzido desativa animações; os sinais decorativos do hero terminam em menos de cinco segundos.
- `Primitives.tsx`: cards, CTAs e apresentação conceitual do Retoma reutilizados nas rotas existentes.

A folha de estilos foi reorganizada em uma única implementação, com breakpoints para desktop, tablet e mobile. A família Inter variável é servida localmente, com preload e `font-display: swap`; origem `@fontsource-variable/inter@5.3.0`, licença em `public/fonts/INTER-LICENSE.txt`. Nenhuma nova dependência foi adicionada ao manifesto.

## Imagens de marca

Os PNGs originais permanecem intactos. As cópias WebP foram codificadas sem perda e comparadas com os originais, incluindo dimensões e todos os pixels RGBA:

| Arquivo | PNG original | WebP |
| --- | ---: | ---: |
| Logotipo completo | 101.235 bytes | 55.506 bytes |
| Símbolo | 65.554 bytes | 37.858 bytes |

A imagem institucional abaixo da primeira dobra usa lazy loading. As dimensões intrínsecas e o espaço reservado evitam deslocamento ao carregar.

## Validação

- `npm test`: 7 testes aprovados, incluindo seleção de desafios, destino comercial contextualizado, FAQ, navegação, menu, SEO e 404.
- `npm run build`: aprovado, incluindo HTML estático com metadados próprios do Retoma.
- TypeScript nos projetos `tsconfig.app.json` e `tsconfig.node.json`: aprovado.
- `npm run lint`: sem erros; permanecem 7 avisos preexistentes de Fast Refresh nos componentes de UI.
- Chromium em 1440, 768, 390 e 320 px: home e Retoma sem overflow horizontal ou erros de console.
- Em produção local: seleção por teclado, mensagem correta de WhatsApp, FAQ por Enter, retorno do foco por Escape e estados do contato fixo mobile verificados.
- Axe-core: sem violações detectadas nas verificações WCAG 2 A/AA, 2.1 A/AA e 2.2 AA executadas na home e na página do Retoma. Isso não substitui uma avaliação humana completa.

Última auditoria Lighthouse na home, build de produção local e simulação mobile:

| Categoria | Pontuação |
| --- | ---: |
| Desempenho | 96 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

FCP: 1,5 s; LCP: 2,6 s; CLS: 0; TBT: 70 ms. São medidas de laboratório deste ambiente, sujeitas a variação. Não representam Core Web Vitals de usuários reais, hospedagem de produção ou conversão comercial.

## Publicação e continuidade

As rotas `/` e `/produtos/retoma`, Supabase, segredos e Dockerfile foram preservados. Nenhum deploy foi executado. Para desenvolvimento, use os comandos de [REDESIGN.md](REDESIGN.md).

Antes de configurar campanhas e mensuração externa, definir domínio definitivo, política de privacidade aprovada, ferramenta de analytics e requisitos de consentimento aplicáveis. As redes sociais e links legais continuam condicionados a URLs oficiais.
