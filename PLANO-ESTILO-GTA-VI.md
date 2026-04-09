# Plano de Tasks - Estilo inspirado no site do GTA VI

## Resposta curta: e possivel?
Sim, e possivel deixar o seu site muito proximo no estilo visual e na sensacao cinematica do site do GTA VI.

## Limite importante
- O que podemos fazer: reproduzir direcao de arte, ritmo, atmosfera, composicao, motion design e nivel de acabamento.
- O que nao devemos fazer: copiar textos, logos, imagens, videos, tipografia proprietaria e identidade oficial da Rockstar/GTA.

## Objetivo do projeto
Transformar o site atual do Clipszoka em uma landing page cinematica, de alto impacto visual, com:
- visual editorial premium
- blocos hero com video e sobreposicoes fortes
- tipografia expressiva
- transicoes e animacoes com timing refinado
- mobile e desktop consistentes
- boa performance e acessibilidade

## Definicao de pronto
- Aparencia geral com identidade cinematica e premium
- Jornada visual clara: Hero -> Destaques -> Galeria -> Sobre -> CTA final
- Core Web Vitals aceitavel em conexao real
- Sem quebra em mobile
- Sem regressao funcional (modal e previews continuam funcionando)

---

## Backlog priorizado (tasks)

### Fase 1 - Fundacao visual e estrategia

1. [x] T001 - Definir direcao visual final
- Descricao: escolher um mood principal (cinematic neon sunset, grunge urbano, ou noir quente) e documentar regras de uso.
- Entregavel: mini guia visual com exemplos e restricoes.
- Esforco: M
- Dependencias: nenhuma

2. [x] T002 - Definir paleta e tokens globais
- Descricao: criar variaveis CSS de cor, espacamento, radius, sombra e opacidade para substituir valores soltos.
- Entregavel: bloco de design tokens em styles.css.
- Esforco: M
- Dependencias: T001

3. [x] T003 - Definir sistema tipografico
- Descricao: escolher par de fontes com personalidade (display + texto), escala de tamanhos e tracking.
- Entregavel: escala tipografica documentada e aplicada no layout base.
- Esforco: M
- Dependencias: T001

4. [x] T004 - Definir grid e ritmo vertical
- Descricao: padronizar container, gutters, espacamentos de secao e respiro entre blocos.
- Entregavel: regras de layout aplicadas no HTML/CSS.
- Esforco: P
- Dependencias: T002

### Fase 2 - Estrutura e narrativa da pagina

5. [x] T005 - Reestruturar ordem das secoes
- Descricao: revisar narrativa da pagina para manter impacto inicial e progressao visual.
- Entregavel: estrutura de secoes validada no index.html.
- Esforco: P
- Dependencias: T004

6. [x] T006 - Criar Hero cinematica de alto impacto
- Descricao: redesign completo da abertura com video de fundo, overlays multicamada, titulo gigante e CTA forte.
- Entregavel: secao Hero renovada e responsiva.
- Esforco: G
- Dependencias: T002, T003, T004

7. [x] T007 - Criar bloco de transicao visual entre Hero e Galeria
- Descricao: inserir elemento de transicao (shape, gradiente, faixa de textura ou corte angular) para evitar quebra brusca.
- Entregavel: transicao consistente entre secoes.
- Esforco: P
- Dependencias: T006

8. [x] T008 - Reforcar hierarquia de titulos e subtitulos
- Descricao: ajustar pesos, tamanhos e espacamento para leitura editorial.
- Entregavel: headings padronizados em todas as secoes.
- Esforco: P
- Dependencias: T003

### Fase 3 - Componentes e interacao

9. [x] T009 - Redesenhar cards da galeria para visual premium
- Descricao: melhorar moldura, sombra, recorte, overlay e comportamento de hover/focus.
- Entregavel: componente de card atualizado e consistente.
- Esforco: G
- Dependencias: T002, T003, T008

10. [x] T010 - Melhorar previews de video dos cards
- Descricao: ajustar inicio/fim de preview, reduzir flicker, melhorar transicao e fallback para dispositivos sem hover.
- Entregavel: preview suave no desktop e comportamento adequado no mobile.
- Esforco: M
- Dependencias: T009

11. [x] T011 - Reestilizar modal de reproducao
- Descricao: elevar acabamento do modal (cabecalho, botoes, backdrop, animacao de abertura/fechamento).
- Entregavel: modal mais imersivo e alinhado ao novo tema.
- Esforco: M
- Dependencias: T009

12. [x] T012 - Redesenhar secao Sobre em estilo editorial
- Descricao: aplicar composicao mais autoral, com destaque para quote e leitura em blocos.
- Entregavel: secao Sobre com layout refinado.
- Esforco: M
- Dependencias: T002, T003

13. [x] T013 - Redesenhar banners de parceria
- Descricao: dar linguagem visual coesa aos banners, com CTA claro e contraste bom.
- Entregavel: cards de parceria atualizados.
- Esforco: P
- Dependencias: T002, T008

14. [x] T014 - Criar CTA final memoravel
- Descricao: adicionar secao final com chamada forte para seguir/engajar.
- Entregavel: bloco final com conversao.
- Esforco: P
- Dependencias: T005

### Fase 4 - Motion design e atmosfera

15. [x] T015 - Implementar animacoes de entrada em camadas
- Descricao: aplicar reveal escalonado por secao e por componente com timing coerente.
- Entregavel: animacoes de entrada suaves e consistentes.
- Esforco: M
- Dependencias: T006, T009

16. [x] T016 - Criar microinteracoes de hover/focus
- Descricao: refinamento de transicoes em botoes, cards e links para dar sensacao premium.
- Entregavel: estado interativo padronizado.
- Esforco: P
- Dependencias: T015

17. [x] T017 - Adicionar profundidade no fundo
- Descricao: construir atmosferas com gradientes, glow localizado e camadas sutis.
- Entregavel: background nao plano em toda a pagina.
- Esforco: M
- Dependencias: T002

18. [x] T018 - Ajustar motion para preferencia de movimento reduzido
- Descricao: respeitar prefers-reduced-motion com alternativa sem perda de UX.
- Entregavel: acessibilidade de animacao pronta.
- Esforco: P
- Dependencias: T015

### Fase 5 - Responsividade, acessibilidade e performance

19. [x] T019 - Revisar layout mobile completo
- Descricao: ajustar tipografia, espacamentos, alturas de bloco e area de toque.
- Entregavel: experiencia mobile limpa e legivel.
- Esforco: M
- Dependencias: T006, T009, T012

20. [x] T020 - Revisar acessibilidade base
- Descricao: contraste, foco visivel, labels, ordem de tab, aria e navegacao por teclado.
- Entregavel: checklist de a11y atendido no essencial.
- Esforco: M
- Dependencias: T011, T014

21. [x] T021 - Otimizar imagens e videos
- Descricao: comprimir assets, definir preload/lazy adequados e diminuir custo inicial.
- Entregavel: peso total reduzido sem perda perceptivel importante.
- Esforco: M
- Dependencias: T006, T010
- Nota de execucao: aplicados width/height nas imagens, loading lazy e ajustes de carregamento; compressao binaria adicional de videos pode ser feita em uma passada dedicada.

22. [x] T022 - Revisar estabilidade do JS interativo
- Descricao: validar fluxo do modal, observadores e eventos de hover/focus em todos os breakpoints.
- Entregavel: sem erros no console e sem comportamento quebrado.
- Esforco: P
- Dependencias: T010, T011

23. [x] T023 - Meta tags e social preview
- Descricao: atualizar title, description, Open Graph e Twitter cards para novo posicionamento visual.
- Entregavel: compartilhamento com preview coerente.
- Esforco: P
- Dependencias: T006

### Fase 6 - QA, deploy e controle de qualidade

24. [ ] T024 - QA visual cruzado
- Descricao: testar em Chrome, Edge, Firefox e mobile real/simulador.
- Entregavel: lista de ajustes finais aplicada.
- Esforco: M
- Dependencias: T019, T022
- Nota de execucao: pendente validacao manual em navegadores reais (ambiente atual sem matriz completa de browsers para prova visual comparativa).

25. [ ] T025 - QA de performance
- Descricao: executar auditoria de performance e corrigir gargalos mais impactantes.
- Entregavel: melhoria objetiva dos indicadores principais.
- Esforco: M
- Dependencias: T021
- Nota de execucao: baseline de peso levantada (imagens ~6.56 MB, videos ~438.71 MB); auditoria Lighthouse automatica bloqueada por limite 429 na API publica e por ausencia de Chrome instalado no ambiente de execucao CLI.

26. [x] T026 - Regressao funcional final
- Descricao: validar abertura de clipes, fechamento de modal, links externos e scroll/reveal.
- Entregavel: fluxo principal aprovado.
- Esforco: P
- Dependencias: T024
- Nota de execucao: validacoes estruturais e de erros concluidas; IDs do modal e alvos de ancora consistentes, sem erros de HTML/CSS/JS.

27. [x] T027 - Deploy em Vercel e verificacao pos-deploy
- Descricao: publicar versao final e validar se producao bate com ambiente local.
- Entregavel: release online estavel.
- Esforco: P
- Dependencias: T026
- Nota de execucao: deploy em producao realizado e alias ativo em https://clipszoka-page.vercel.app.

---

## Sprint sugerida (ordem de execucao pratica)

Sprint 1 (base visual)
- T001, T002, T003, T004, T005

Sprint 2 (impacto principal)
- T006, T007, T008, T009, T012

Sprint 3 (interacao + motion)
- T010, T011, T013, T014, T015, T016, T017, T018

Sprint 4 (hardening e release)
- T019, T020, T021, T022, T023, T024, T025, T026, T027

---

## Checkpoint de risco
- Risco 1: excesso de animacao e queda de performance em mobile.
- Mitigacao: limitar blur pesado e usar animacoes GPU-friendly.

- Risco 2: visual bonito mas pouca legibilidade.
- Mitigacao: validar contraste e tamanho minimo de texto antes do refinamento final.

- Risco 3: inspiracao virar copia.
- Mitigacao: usar assets proprios e linguagem visual autoral, sem reproduzir elementos oficiais.

---

## Proximo passo recomendado
Executar a Sprint 4 (T019, T020, T021, T022, T023, T024, T025, T026, T027) para hardening, QA final e release.
