

## Reconectar formulário ao Supabase + limpar admin

### Resumo
Atualizar o formulário de qualificação para gravar leads no Supabase com os campos solicitados, criar tabela `origens` com upsert automático, e remover a área admin.

### 1. Migration SQL

**Criar tabela `origens`:**
```sql
CREATE TABLE public.origens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  slug text NOT NULL UNIQUE,
  url text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.origens ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can upsert origens" ON public.origens
  FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
```

**Adicionar `origem_slug` à tabela `leads` e tornar campos extras nullable:**
```sql
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS origem_slug text,
  ALTER COLUMN sobrenome DROP NOT NULL,
  ALTER COLUMN ramo DROP NOT NULL,
  ALTER COLUMN colaboradores DROP NOT NULL,
  ALTER COLUMN faturamento DROP NOT NULL;
```

### 2. Atualizar `src/components/QualificationFormModal.tsx`

No `handleSubmit`:
- Fazer upsert na tabela `origens` com slug `masterclass-ramp`
- Inserir na tabela `leads` com os campos: nome, sobrenome, email, whatsapp, ramo, ramo_outro, colaboradores, faturamento, desafios, qualified, **origem_slug** (`"masterclass-ramp"`), status (`"novo"`)
- Tratar erro com toast amigável + `console.error`
- Manter o comportamento visual existente (tela de sucesso/reprovação)

### 3. Remover área admin

**Arquivos a deletar:**
- `src/pages/Admin.tsx`
- `src/pages/AdminLogin.tsx`
- `src/hooks/useAuth.tsx`
- `src/components/admin/CsvExport.tsx`
- `src/components/admin/DashboardCards.tsx`
- `src/components/admin/LeadDetail.tsx`
- `src/components/admin/LeadsTable.tsx`

**Atualizar `src/App.tsx`:**
- Remover rotas `/admin` e `/admin/login`
- Remover imports de Admin, AdminLogin, AuthProvider

### Arquivos alterados
| Arquivo | Ação |
|---|---|
| Migration SQL | Criar tabela `origens` + adicionar `origem_slug` a `leads` |
| `src/components/QualificationFormModal.tsx` | Upsert origens + insert lead com novos campos |
| `src/App.tsx` | Remover rotas admin e AuthProvider |
| `src/pages/Admin.tsx` | Deletar |
| `src/pages/AdminLogin.tsx` | Deletar |
| `src/hooks/useAuth.tsx` | Deletar |
| `src/components/admin/*` | Deletar (4 arquivos) |

