## Painel Admin de Gestão de Leads

### Visão Geral

Criar um painel administrativo completo para monitorar leads capturados pelo formulário de qualificação, com autenticação, armazenamento em banco de dados, disparos de WhatsApp via z-api, e exportação de dados.

### Funcionalidades Sugeridas

Além do que você pediu, sugiro incluir:

1. **Dashboard com métricas**: total de leads, qualificados vs desqualificados, taxa de conversão, leads por ramo, por faixa de faturamento
2. **Filtros e busca**: por nome, email, ramo, status (qualificado/não qualificado), data de cadastro
3. **Pipeline de status**: Novo → Contactado → Em negociação → Convertido → Perdido
4. **Histórico de interações**: registro de cada disparo de WhatsApp feito por lead
5. **Exportação CSV**: download da tabela filtrada em CSV
6. **Disparo em massa**: selecionar múltiplos leads e enviar mensagem template para todos
7. **Templates de mensagem**: mensagens pré-configuradas para diferentes etapas do funil

### Arquitetura Técnica

```text
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│  Landing     │────▶│  Supabase    │◀────│  Admin Panel │
│  Page (form) │     │  Database    │     │  /admin      │
└─────────────┘     └──────┬───────┘     └──────┬──────┘
                           │                     │
                    ┌──────┴───────┐     ┌──────┴──────┐
                    │  Supabase    │     │  Edge Func   │
                    │  Auth        │     │  (Twilio)    │
                    └──────────────┘     └─────────────┘
```

### Etapas de Implementação

#### 1. Configurar Supabase (Lovable Cloud)

- Ativar Lovable Cloud para ter banco de dados e autenticação
- Criar tabela `leads` com os campos do formulário: nome, sobrenome, email, whatsapp, ramo, colaboradores, faturamento, desafios, qualified (boolean), status (pipeline), created_at
- Criar tabela `message_logs` para registrar disparos: lead_id, template, sent_at, status
- Habilitar RLS com políticas para admin

#### 2. Conectar formulário ao banco

- Modificar `QualificationFormModal` para salvar o lead no Supabase ao submeter
- Manter o fluxo visual atual intacto (tela de sucesso/rejeição)

#### 3. Autenticação Admin

- Criar página `/admin/login` com email/senha via Supabase Auth
- Proteger rota `/admin` com verificação de sessão
- Criar tabela `user_roles` com role `admin`

#### 4. Painel Admin (`/admin`)

- **Dashboard**: cards com métricas (total leads, qualificados, por ramo)
- **Tabela de leads**: listagem com busca, filtros, ordenação, paginação
- **Detalhe do lead**: modal/drawer com dados completos + histórico de mensagens
- **Ações**: alterar status no pipeline, enviar WhatsApp individual
- **Seleção em massa**: checkbox para selecionar vários leads e disparar mensagem
- **Exportar CSV**: botão para baixar dados filtrados
- **Templates de mensagem**: CRUD simples de templates

#### 5. Integração Z-api (WhatsApp)

- Conectar z-api
- Conectar com o mesmo z-api do grupo veltz (Veltz CRM)
- Frontend chama a Edge Function passando número + mensagem
- Registrar cada envio na tabela `message_logs`

### Arquivos a criar/modificar


| Arquivo                                     | Descrição                                                           |
| ------------------------------------------- | ------------------------------------------------------------------- |
| Migração SQL                                | Tabelas `leads`, `message_logs`, `user_roles`, RLS                  |
| `src/integrations/supabase/`                | Client e tipos gerados                                              |
| `src/components/QualificationFormModal.tsx` | Salvar lead no Supabase ao submeter                                 |
| `src/pages/AdminLogin.tsx`                  | Tela de login admin                                                 |
| `src/pages/Admin.tsx`                       | Dashboard + tabela + ações                                          |
| `src/components/admin/`                     | LeadsTable, LeadDetail, DashboardCards, MessageTemplates, CsvExport |
| `supabase/functions/send-whatsapp/`         | Edge Function para disparo via Twilio                               |
| `src/App.tsx`                               | Novas rotas `/admin`, `/admin/login`                                |


### Pré-requisitos

- Ativar Lovable Cloud (banco + auth)
- Conectar Z-api (para disparos de WhatsApp)
- Criar conta admin no Supabase Auth