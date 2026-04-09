# Checklist QA Manual - T024 e T025

## Objetivo
Concluir as validacoes que dependem de execucao manual em navegadores reais e ambiente com Chrome instalado.

## T024 - QA visual cruzado

### Navegadores e dispositivos
- Chrome (desktop)
- Edge (desktop)
- Firefox (desktop)
- Mobile Android (Chrome)
- Mobile iOS (Safari)

### Pontos de verificacao
1. Hero
- Titulo Clipszoka em uma linha no desktop.
- Sem corte de texto em mobile.
- CTAs com espaco de toque confortavel.

2. Bloco Alanzoka
- Texto rosa termina em "no país".
- Texto seguinte em branco e legivel.
- Imagem alansz.jpg alinhada e sem distorcao.

3. Galeria
- Hover preview no desktop funcionando sem flicker forte.
- Mobile sem hover, mas com clique abrindo modal corretamente.
- Sem sobreposicoes quebradas de labels.

4. Modal
- Abre com clique no card.
- Fecha via botao fechar.
- Fecha com clique no backdrop.
- Fecha com tecla ESC.

5. Sobre / Parcerias / CTA final
- Blocos sem overflow horizontal.
- Tipografia consistente e sem cortes.
- Links externos abrindo corretamente.

6. Acessibilidade basica
- Skip link aparece ao focar via teclado.
- Ordem de tab coerente.
- Estados de foco visiveis.

### Criterio de aprovacao T024
- Nenhuma quebra visual critica em desktop/mobile.
- Nenhuma regressao funcional no fluxo principal.

## T025 - QA de performance

### Metodo recomendado
Rodar Lighthouse no navegador local com DevTools (aba Lighthouse):
- Mobile
- Desktop

### Metricas alvo sugeridas
- Performance: >= 70 mobile e >= 85 desktop
- Accessibility: >= 90
- Best Practices: >= 90
- SEO: >= 90

### Prioridades de ajuste se score cair
1. Videos muito pesados
- Considerar versoes comprimidas para Hero e clipes.

2. Carga inicial
- Evitar preload desnecessario de midias pesadas.

3. Renderizacao
- Verificar LCP e CLS com foco em Hero e imagem alansz.

### Baseline atual de peso
- Imagens: ~6.56 MB
- Videos: ~438.71 MB

## Observacao tecnica
No ambiente automatizado atual:
- Lighthouse via API publica retornou 429.
- Lighthouse CLI local nao executou por ausencia de Chrome detectado no runtime.

## Resultado esperado
Após executar os checks acima, atualizar o plano e marcar:
- T024 como concluida
- T025 como concluida
