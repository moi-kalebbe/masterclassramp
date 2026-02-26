

## Plan: Elevar o design da Landing Page

### Problemas identificados
- Layout muito centrado e monótono
- Falta de ícones decorativos nas seções
- Fotos dos experts cortadas/pequenas nos cards de Métodos
- Seções Provocação e Ponto Cego são blocos de texto puro
- Prova Social sem contexto/texto
- Bios no rodapé muito discretas

### Mudanças por componente

**1. HeroSection** — Adicionar badges com ícones (Users, Calendar, Trophy) acima do CTA mostrando stats como "200+ empresários", "03 de Março", "Ao vivo". Adicionar sutil animated gradient border.

**2. ProvocacaoSection** — Layout split: texto à esquerda, ícones ilustrativos à direita (AlertTriangle, Lock, Battery). Cada parágrafo com um ícone lateral. Remover centralização, usar alinhamento à esquerda com grid.

**3. PontoCegoSection** — Adicionar ícones (EyeOff, TrendingDown) no card. Usar layout com ícone grande decorativo de fundo (semi-transparente). Adicionar stats visuais fictícios tipo "80% dos empresários..." em destaque.

**4. MetodosSection** — Fotos dos experts maiores, aspect ratio retrato (3:4 ao invés de 4:3) para não cortar. Imagem mais alta mostrando o corpo. Adicionar badges de credenciais. Hover effect mais pronunciado.

**5. DominarSection** — Ícones maiores, com fundo gradiente. Cards individuais ao invés de lista simples. Grid de 3 colunas no desktop. Números/contadores visuais (01, 02, 03).

**6. ProvaSocialSection** — Adicionar título mais forte, texto descritivo, overlay gradient nas fotos com texto sobre elas. Badges de "Evento Presencial" etc.

**7. FechamentoSection** — Adicionar countdown visual ou data em destaque. Ícones maiores para os perks. Background pattern sutil.

**8. BiosSection** — Fotos maiores (w-24 h-24), com glow border verde. Adicionar títulos de cargo. Layout mais destacado com cards.

### Arquivos a editar
- `src/components/HeroSection.tsx`
- `src/components/ProvocacaoSection.tsx`
- `src/components/PontoCegoSection.tsx`
- `src/components/MetodosSection.tsx`
- `src/components/DominarSection.tsx`
- `src/components/FechamentoSection.tsx`
- `src/components/ProvaSocialSection.tsx`
- `src/components/BiosSection.tsx`

