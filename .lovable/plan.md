
## Correção do acesso ao painel admin

### O que verifiquei
- A rota `/admin` existe no app e o login `/admin/login` também.
- A conta `tonifmelo@gmail.com` já está marcada como **admin** no backend.
- Não há erro de runtime registrado.
- O problema mais provável está no **fluxo de autenticação no frontend**, não na senha nem na role.

### Problema identificado
Hoje o login faz isso:
1. envia email/senha;
2. navega imediatamente para `/admin`;
3. a página `/admin` checa `isAdmin` antes da verificação de role terminar;
4. como `isAdmin` ainda está `false` por alguns instantes, o usuário é redirecionado de volta para `/admin/login`.

Ou seja: existe uma **condição de corrida** entre “login concluído” e “role admin carregada”.

### Plano de implementação
1. **Ajustar o `useAuth`**
   - Garantir que o estado `loading` só termine depois que a sessão e a role admin forem resolvidas.
   - Durante troca de sessão/login, reativar o loading antes de consultar a permissão de admin.

2. **Corrigir o `AdminLogin`**
   - Remover a navegação imperativa no corpo do componente.
   - Trocar por `useEffect` para redirecionar apenas quando `!loading && user && isAdmin`.
   - Após `signIn`, não forçar ida imediata ao `/admin`; esperar o contexto confirmar o acesso.

3. **Corrigir o `Admin`**
   - Manter a tela de carregamento enquanto a autenticação/permissão estiver sendo resolvida.
   - Só redirecionar para `/admin/login` quando realmente terminar o carregamento e o usuário não for admin.

4. **Melhorar feedback de erro**
   - Se o login for válido mas o usuário não tiver acesso administrativo, mostrar mensagem clara em vez de parecer que “não abriu nada”.

### Arquivos que pretendo ajustar
- `src/hooks/useAuth.tsx`
- `src/pages/AdminLogin.tsx`
- `src/pages/Admin.tsx`

### Resultado esperado
- Ao inserir a senha correta, o admin entra no painel normalmente.
- O dashboard carrega sem voltar para a tela de login.
- O fluxo fica estável tanto no preview quanto no domínio final.

### Detalhes técnicos
```text
Estado atual:
signIn -> navigate("/admin") -> Admin checa isAdmin=false -> redirect "/admin/login"

Estado corrigido:
signIn -> auth loading=true -> checa role admin -> loading=false -> redirect seguro para "/admin"
```
