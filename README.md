# masterclassramp

Landing page em React + Vite para a masterclass da Rumo a Maxima Potencia.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para build local:

```bash
npm run build
```

## Variaveis de ambiente

Crie um `.env` local a partir de `.env.example`.

As variaveis `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` e `VITE_SUPABASE_PROJECT_ID`
precisam existir no momento do build. Em deploy Docker, elas entram via `--build-arg`.

## Docker

Build local:

```bash
docker build \
  --build-arg VITE_SUPABASE_URL=... \
  --build-arg VITE_SUPABASE_PUBLISHABLE_KEY=... \
  --build-arg VITE_SUPABASE_PROJECT_ID=... \
  -t masterclassramp:local .
```

Executar localmente:

```bash
docker run --rm -p 3000:80 masterclassramp:local
```

Healthcheck:

```bash
curl http://localhost:3000/healthz
```

## GHCR + Portainer

O fluxo oficial de deploy usa GitHub Container Registry.

1. Configure os secrets do repositorio:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
2. Faça push na `main`.
3. O workflow `.github/workflows/docker-publish.yml` publica a imagem em `ghcr.io/moi-kalebbe/masterclassramp`.
4. No Portainer, use o `docker-compose.yml` deste repositorio e defina, se quiser, `MASTERCLASSRAMP_IMAGE=ghcr.io/moi-kalebbe/masterclassramp:<tag>`.
5. Valide primeiro em `http://IP:3000`.

## Observacoes de performance

- As imagens legadas pesadas foram removidas do repositório.
- O modal principal agora carrega sob demanda.
- Fonts externas do Google foram removidas para evitar bloqueio de render.
- O bundle inicial foi reduzido com limpeza de dependencias e componentes mortos.
