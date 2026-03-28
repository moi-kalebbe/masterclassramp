

## Análise de Performance da Landing Page

### Resultados Medidos

| Métrica | Valor Atual | Meta Ideal |
|---------|-------------|------------|
| First Paint | 4.3s | < 1s |
| First Contentful Paint | 4.5s | < 1.8s |
| DOM Content Loaded | 4.3s | < 2s |
| Full Page Load | 5.8s | < 3s |
| Transfer Size Total | ~2MB | < 800KB |

### Problemas Identificados

1. **Imagens pesadas sem otimização** — 4 imagens somam ~1MB (hero-bg 379KB, event-1 323KB, event-2 298KB, rebeca 264KB). Nenhuma usa lazy loading ou formato moderno.

2. **Google Fonts bloqueante** — `@import url(...)` no CSS bloqueia a renderização até a fonte carregar. Isso sozinho atrasa o First Paint em ~1-2s.

3. **Lucide-react inteiro importado** — 158KB de ícones sendo carregados, quando apenas ~8 ícones são usados.

4. **Imagens above-the-fold e below-the-fold tratadas igual** — Imagens de Prova Social e Mentores carregam junto com o Hero, competindo por banda.

5. **Seções abaixo da dobra renderizam imediatamente** — Sem lazy loading de componentes.

### Plano de Melhorias

**1. Otimizar carregamento de fonte (index.css + index.html)**
- Remover `@import url(...)` do CSS
- Adicionar `<link rel="preconnect">` e `<link rel="preload">` no `index.html` com `font-display: swap`
- Carregar apenas weights usados (400, 500, 600, 700, 800, 900)

**2. Lazy loading de imagens (MetodosSection, ProvaSocialSection)**
- Adicionar `loading="lazy"` e `decoding="async"` nas imagens dos mentores e prova social
- Adicionar `fetchpriority="high"` apenas na imagem do Hero

**3. Otimizar importações do Lucide**
- Trocar `import { Icon } from "lucide-react"` por `import Icon from "lucide-react/dist/esm/icons/icon-name"` em todos os componentes — isso elimina o bundle de 158KB

**4. Preload da imagem Hero (index.html)**
- Adicionar `<link rel="preload" as="image" href="/images/hero-bg.jpg">` para iniciar o download antes do CSS

**5. Comprimir imagens**
- Converter as imagens de assets (rebeca, lucas, event-1, event-2) para WebP com fallback, reduzindo ~60-70% do tamanho

### Arquivos a editar
- `index.html` — preconnect fonts, preload hero image
- `src/index.css` — remover @import de fonte
- `src/components/HeroSection.tsx` — fetchpriority na bg image
- `src/components/MetodosSection.tsx` — lazy loading imagens
- `src/components/ProvaSocialSection.tsx` — lazy loading imagens
- `src/components/ProvocacaoSection.tsx` — otimizar imports lucide
- `src/components/PontoCegoSection.tsx` — otimizar imports lucide
- `src/components/DominarSection.tsx` — otimizar imports lucide
- `src/components/FechamentoSection.tsx` — otimizar imports lucide

### Resultado esperado
- FCP de 4.5s → ~1.5-2s
- Full load de 5.8s → ~2.5-3s
- Transfer size reduzido em ~50%

