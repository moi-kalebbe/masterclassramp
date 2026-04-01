
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

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS origem_slug text,
  ALTER COLUMN sobrenome DROP NOT NULL,
  ALTER COLUMN ramo DROP NOT NULL,
  ALTER COLUMN colaboradores DROP NOT NULL,
  ALTER COLUMN faturamento DROP NOT NULL;
