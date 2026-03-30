

## Corrigir rotas SPA no Netlify

O problema é que o Netlify não sabe redirecionar rotas como `/admin` e `/admin/login` para o `index.html` — ele tenta encontrar um arquivo real e retorna 404.

### Solução

Criar o arquivo `public/_redirects` com a regra de fallback padrão para SPAs:

```
/*    /index.html   200
```

Isso faz com que qualquer rota (incluindo `/admin`, `/admin/login`, etc.) seja servida pelo `index.html`, permitindo que o React Router cuide do roteamento normalmente.

### Arquivo alterado
| Arquivo | Ação |
|---|---|
| `public/_redirects` | Criar com regra de fallback SPA |

Após a alteração, basta fazer o novo deploy no Netlify.

