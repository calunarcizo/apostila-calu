# Apostila de Calú

App de prática de inglês para estudantes de Calú: trilha por níveis, unidades em 11 temas, trilha de leitura para mestrado e índice remissivo.

## Estado atual (etapa 1)

Cópia fiel do app que estava publicado como artifact no claude.ai, agora como site próprio. O progresso ainda fica no navegador (`localStorage`). As próximas etapas trazem login, sincronização e memória pedagógica com Supabase.

A correção da escrita por IA não aparece fora do claude.ai: o botão só surge quando a IA está disponível. Ela volta na etapa 8, por uma função no servidor.

## Rodar localmente

```bash
npm install
npm run dev        # servidor de desenvolvimento
npm run build      # gera dist/
npm run test:e2e   # teste de fumaça das páginas (precisa do Playwright instalado)
```

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Trilha e índice remissivo (`#indice`) |
| `u1.html` | Presente simples (Nível 1) |
| `u3.html` | Futuro: will × going to (Nível 2) |
| `u4.html` | Passado simples (Nível 2) |
| `u5.html` | Present perfect ou passado simples? (Nível 3) |
| `u6.html` | Past perfect (Nível 4) |
| `mestrado.html` | Trilha mestrado (leitura instrumental) |

Cada unidade abre direto num tema pelo endereço, por exemplo `u4.html#porto`.
