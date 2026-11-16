# MVP — critérios

> Fonte única do estado. Tabela atual de 16/11/2026 (ciclo de 16/11/2026, PR #35; critério 9 revisto às 12h40 de 16/11, com os alertas do Dependabot ligados, e às 14h45, com a ADR-0001). Revisto em 16/11/2026, 14h45. As tabelas anteriores estão em "Histórico", no fim.

**Nível:** Estudo (N1). Critérios 5 (medição) e 7 (LCP no ar) não se aplicam e saem da conta.

**Resumo:** 9 de 10 aplicáveis atendidos

**Finalizado:** sim

**Hipótese:** acreditamos que achar a aula pela busca ou por um link direto (`#aula-N`) e abri-la na mesma tela faz o aluno abrir uma aula. Meta: 1 em cada 3 visitantes abre uma aula (decisão D1 de 10/11/2026, revisável pelo responsável). Saberemos quando a validação com aluno (#17) ou uma medição de uso, fora do N1, mostrar essa proporção.

Falta só o critério 9, e o que falta é do responsável: validar os vídeos de apoio (#21, com `depende-do-responsavel`). Os 8 alertas do Dependabot, todos do `vite` numa atividade de aula que não é instalada nem publicada, estão aceitos na [ADR-0001](adr/0001-aceitar-alertas-de-desenvolvimento.md) por ordem do responsável (16/11/2026). Por isso o Finalizado é "sim". Antes do ciclo de 16/11/2026, o resumo dizia 9 de 10, mas o critério 8 não tinha axe no navegador, como a régua pede: pela régua de hoje eram 8 de 10.

| # | Critério | Como verificar | Situação em 16/11/2026 |
|---|---|---|---|
| 1 | Problema e público claros | Dá para explicar em uma frase | Atende: alunos da ByteClass acham a aula na ordem da grade e veem exemplos sem sair do painel (`docs/PLANO-DE-ACAO.md`) |
| 2 | Hipótese a validar | Aposta escrita, com meta | Atende: hipótese acima, com meta e "saberemos quando" |
| 3 | Fluxo principal completo | Teste de ponta a ponta no navegador (Playwright) no CI | Atende: `npm test` no CI, run [43810626944](https://github.com/douglasabnovato/aula-de-programacao/actions/runs/43810626944) (16/11/2026), verde: "o aluno busca "Promises", abre a aula real e volta ao painel" abre o conteúdo real no iframe, sem simular; "abrir o site com #aula-5 carrega a aula 5" também abre a aula real |
| 4 | Escopo enxuto | O que não entra está registrado | Atende: login, certificado e progresso no servidor ficam fora (`docs/PLANO-DE-ACAO.md`) |
| 5 | Medição de uso | A métrica principal é coletada | Não se aplica (N1) |
| 6 | Falhas tratadas | Erro, vazio e carregamento têm resposta clara | Atende: `npm test` no CI, run [43810626944](https://github.com/douglasabnovato/aula-de-programacao/actions/runs/43810626944) (16/11/2026), verde: aula com 404, sem rede com "Tentar de novo", busca vazia e `#aula-999` (aula que não existe) |
| 7 | Desempenho aceitável | LCP de até 2,5 s no celular | Não se aplica (N1). Registro: 2,84 s em 02/11/2026 |
| 8 | Acessibilidade básica | axe e teclado | Atende: `tests/acessibilidade.spec.mjs` no CI, run [43810626944](https://github.com/douglasabnovato/aula-de-programacao/actions/runs/43810626944) (16/11/2026), verde: axe WCAG A e AA sem violações, em 1280 px, com a grade real, no painel, na busca, na aula 5 real e na tela de erro. Teclado: "módulo fechado não deixa o Tab cair em aula invisível", Esc volta ao painel e o foco vai ao botão da tela de erro. O app não tem tema escuro próprio (não há `prefers-color-scheme`), por isso não há teste no escuro. As outras 69 aulas ainda sem axe (#34) |
| 9 | Segurança e conformidade | `npm audit --omit=dev` e alertas do Dependabot pela API; sem segredo; dados pessoais decididos | Parcial, só pelos vídeos (#21, responsável): `npm audit --omit=dev`, 16/11/2026: 0 vulnerabilidades (não há dependência de produção). `gh api "repos/douglasabnovato/aula-de-programacao/dependabot/alerts?state=open&per_page=100"` às 14h45 de 16/11/2026: 8 abertos (#1 a #8), 8 na [ADR-0001](adr/0001-aceitar-alertas-de-desenvolvimento.md), 0 corrigidos e 0 sem decisão. Todos são do `vite` (1 alta, 6 médias, 1 baixa) no `package.json` de `modulo-1-fundamentos/aula-1-js-ordenacao-reactjs/atividades/atividade-3/`, sem lockfile, fora do CI e do Pages (publicação sem build); `grep -c '"node_modules/vite"' package-lock.json` na raiz devolve 0. Sem dados pessoais nem segredo; YouTube no modo de privacidade. Falta validar os vídeos (#21) |
| 10 | Entrega confiável | CI nos PRs e principal protegida | Atende: `gh api repos/douglasabnovato/aula-de-programacao/rules/branches/main`, 16/11/2026: `deletion`, `non_fast_forward`, `pull_request` e `required_status_checks` com o job `verificar`; o CI roda nos PRs para a `main` e a `developer/**` |
| 11 | Testes dos fluxos críticos | Testes automatizados no CI, sem `skipped` | Atende: run [43810626944](https://github.com/douglasabnovato/aula-de-programacao/actions/runs/43810626944) (16/11/2026): `node scripts/verificar-conteudo.mjs` (70 aulas) e `npm test` com 18 testes Playwright, nenhum pulado |
| 12 | Documentação honesta | Qualquer pessoa roda o projeto | Atende: README e `docs/DEPLOY.md` com os comandos do `package.json` e do `playwright.config.mjs`, revistos em 16/11/2026; `curl` em https://douglasabnovato.github.io/aula-de-programacao/, 16/11/2026: 200, e o `index.html` publicado é igual ao da `main` (md5) |

## Histórico

### Revisão de 16/11/2026, 14h45 (ADR dos alertas)

Ordem do responsável ("Regra geral por ADR"): os 8 alertas do `vite` ficam aceitos na ADR-0001, porque a atividade não é instalada no CI nem construída no Pages. O 9 segue "Parcial" só pelos vídeos (#21, `depende-do-responsavel`). Resumo segue 9 de 10; Finalizado de "não" para "sim".

### Revisão de 16/11/2026, 12h40 (alertas do Dependabot)

Antes: **Resumo** 9 de 10, **Finalizado:** sim, com o 9 em "Parcial" por alertas desligados (403, #33) e vídeos a validar (#21). Depois: alertas ligados, 8 abertos do `vite` numa atividade, sem correção sem versão maior (#37). O 9 segue "Parcial" e o Finalizado cai para "não". Resumo segue 9 de 10.

### Tabela de 10/11/2026 (ciclo da faixa de 90%)

Critério 8 estava "Atende" sem axe no navegador; pela régua de 16/11/2026, seria Parcial.

**Resumo:** 9 de 10 aplicáveis atendidos

**Finalizado:** sim

Falta só o critério 9, que depende do responsável: validar os vídeos de apoio (#21, `depende-do-responsavel`). O teste com um aluno de fora saiu do MVP pela decisão D2 e virou validação de produto (#17, rótulo `validacao`).

| # | Critério | Como verificar | Situação em 10/11/2026 |
|---|---|---|---|
| 1 | Problema e público claros | Dá para explicar em uma frase | Atende: alunos da ByteClass acham a aula na ordem da grade e veem exemplos sem sair do painel (`docs/PLANO-DE-ACAO.md`) |
| 2 | Hipótese a validar | Existe uma aposta escrita, com meta | Atende: meta decidida pelo coordenador em 10/11/2026 (decisão D1), revisável pelo responsável: 1 em cada 3 visitantes abre uma aula |
| 3 | Fluxo principal completo | Teste de ponta a ponta no navegador, no CI | Atende (decisão D2): `npx playwright test`, 10/11/2026: 8 de 8 passaram, inclusive "o aluno busca "Promises", abre a aula real e volta ao painel", que abre o conteúdo real da aula no iframe, sem simular. Roda no CI do PR #32, que agora traz as pastas `modulo-*` sem mídia |
| 4 | Escopo enxuto | O que não entra está registrado | Atende: login, certificado e progresso no servidor ficam fora (`docs/PLANO-DE-ACAO.md`) |
| 5 | Medição de uso | A métrica principal é coletada | Não se aplica (N1) |
| 6 | Falhas tratadas | Erro, vazio e carregamento têm resposta clara | Atende: `npx playwright test`, 10/11/2026: aula com 404, sem rede e busca vazia passam |
| 7 | Desempenho aceitável | LCP de até 2,5 s no celular | Não se aplica (N1). Registro: 2,84 s em 02/11/2026 |
| 8 | Acessibilidade básica | Lighthouse e teclado | Atende: `npx playwright test`, 10/11/2026: "módulo fechado não deixa o Tab cair em aula invisível" passou. Lighthouse 100 em 02/11/2026 |
| 9 | Segurança e conformidade | Riscos decididos; termos cumpridos | Parcial: `npm audit --omit=dev`, 10/11/2026: 0 vulnerabilidades (Dependabot pela API: sem leitura com o token do agente). Sem dados pessoais; YouTube no modo de privacidade. Falta validar os vídeos (#21, responsável) |
| 10 | Entrega confiável | Publicação só depois de CI verde | Atende: `gh api repos/douglasabnovato/aula-de-programacao/rules/branches/main`, 10/11/2026: `deletion`, `non_fast_forward`, `pull_request` e `required_status_checks` com o job `verificar` (decisão D3) |
| 11 | Testes dos fluxos críticos | Testes automatizados no CI | Atende: `node scripts/verificar-conteudo.mjs` e `npm test` (8 testes Playwright) no CI |
| 12 | Documentação honesta | Qualquer pessoa roda o projeto, e os números estão certos | Atende: README revisto em 10/11/2026; `curl` em https://douglasabnovato.github.io/aula-de-programacao/, 10/11/2026: 200 |


### Tabela de 09/11/2026, revista em 10/11/2026 (ciclo de 07/11/2026)

**Resumo:** 8 de 10 aplicáveis atendidos

**Finalizado:** sim

Os 2 critérios que faltam (3 e 9) dependem do responsável, cada um com issue `depende-do-responsavel`: teste com aluno de fora (#17) e validar os vídeos (#21). A `main` está protegida desde 10/11/2026 (#16).

| # | Critério | Como verificar | Situação em 09/11/2026 |
|---|---|---|---|
| 1 | Problema e público claros | Dá para explicar em uma frase | Atende: alunos da ByteClass acham a aula na ordem da grade e veem exemplos sem sair do painel (`docs/PLANO-DE-ACAO.md`) |
| 2 | Hipótese a validar | Existe uma aposta escrita, com meta | Atende: 1 em cada 3 visitantes abre uma aula (proposta, ver Histórico) |
| 3 | Fluxo principal completo | Uma pessoa conclui sem ajuda | Parcial: fluxo percorrido no Chromium em 09/11/2026 (ver abaixo); falta um aluno de fora (#17) |
| 4 | Escopo enxuto | O que não entra está registrado | Atende: login, certificado e progresso no servidor ficam fora (`docs/PLANO-DE-ACAO.md`) |
| 5 | Medição de uso | A métrica principal é coletada | Não se aplica (N1) |
| 6 | Falhas tratadas | Erro, vazio e carregamento têm resposta clara | Atende: `npm test` em 09/11/2026, 7 de 7 passaram, inclusive aula com 404, sem rede e busca vazia |
| 7 | Desempenho aceitável | LCP de até 2,5 s no celular | Não se aplica (N1). Registro: 2,84 s em 02/11/2026 |
| 8 | Acessibilidade básica | Lighthouse e teclado | Atende: `npm test` em 09/11/2026, teste "módulo fechado não deixa o Tab cair em aula invisível" passou; antes, o Tab passava por cerca de 70 links escondidos. Lighthouse 100 em 02/11/2026 |
| 9 | Segurança e conformidade | Riscos decididos; termos cumpridos | Parcial: sem dados pessoais; YouTube no modo de privacidade; imagens de `projetos/projects/` abaixo de 500 KB (soma das 42 maiores: 60,9 MB → 15,4 MB). Falta validar os vídeos (#21) |
| 10 | Entrega confiável | Publicação só depois de CI verde | Atende: `gh api repos/douglasabnovato/aula-de-programacao/rulesets` em 10/11/2026: ruleset `principal-protegida` ativo (exige PR, bloqueia force push e exclusão); o workflow `CI` roda nos PRs para a `main` e a `developer/**` (#16) |
| 11 | Testes dos fluxos críticos | Testes automatizados no CI | Atende: `node scripts/verificar-conteudo.mjs` e `npm test` (7 testes Playwright) no CI, verdes no PR do ciclo de 07/11/2026 |
| 12 | Documentação honesta | Qualquer pessoa roda o projeto, e os números estão certos | Atende: README revisto em 09/11/2026; `curl` no site publicado deu 200 e o HTML é igual ao `index.html` da `main` |

#### Fluxo principal percorrido na tela (09/11/2026)

Como foi feito: clone novo, `http-server` local e um roteiro Playwright (Chromium) que faz o caminho do aluno, com captura de tela em cada passo.

1. Painel abre e mostra "70 de 70 aulas publicadas".
2. Busca por "arrays" deixa 1 aula visível.
3. Clique na Aula 1: o conteúdo abre no iframe ("Roadmap de Estudos Oficial").
4. Esc volta ao painel.
5. Catálogo de projetos abre sem imagem quebrada.
6. Os 10 projetos com imagem comprimida abrem com 0 imagem quebrada, depois de corrigir o caminho absoluto do `aprender-programar`.

O que o roteiro achou: o Tab passava por aulas escondidas (corrigido) e a busca apagada deixa o módulo aberto (#27).

### Tabela de 06/11/2026 (ciclo de 03/11/2026)

> Avaliação de 31/10/2026 com os mesmos 12 critérios usados no `movies`, revista em 06/11/2026.

> Avaliação de 31/10/2026 com os mesmos 12 critérios usados no `movies`, revista em 06/11/2026. "Não medido" significa que não há evidência, não que falhe.

**Nível:** Estudo (N1). Pela régua do ciclo de 03/11/2026, os critérios 5 (medição) e 7 (LCP no ar) não se aplicam e saem da conta.

**Resultado em 06/11/2026:** 7 de 10 critérios aplicáveis atendidos (1, 2, 4, 6, 8, 11 e 12) e 3 parciais (3, 9 e 10). Antes deste ciclo: 6 de 10.

**Finalizado: não.** Falta, do lado do código, fechar o critério 9 (#19 e #20 tiram peso e arquivo sem uso; a revisão dos vídeos é do responsável, #21). Dependem do responsável, cada um com issue `depende-do-responsavel`: teste com aluno de fora (#17) e proteção da `main` (#16).

| # | Critério | Como verificar | Situação |
|---|---|---|---|
| 1 | Problema e público claros | Dá para explicar em uma frase | Atende |
| 2 | Hipótese a validar | Existe uma aposta escrita, com meta | Atende: proposta abaixo |
| 3 | Fluxo principal completo | Uma pessoa conclui sem ajuda | Parcial: abertura de aula testada; aluno de fora não testou (#17) |
| 4 | Escopo enxuto | O que não entra está registrado | Atende: lista abaixo |
| 5 | Medição de uso | A métrica principal é coletada | Não se aplica (N1) |
| 6 | Falhas tratadas | Erro, vazio e carregamento têm resposta clara | Atende: busca vazia, aula em construção e, desde 06/11/2026, aula com 404 ou sem rede, com "Tentar de novo" (PR #15, 2 testes) |
| 7 | Desempenho aceitável | LCP de até 2,5 s no celular | Não se aplica (N1). Registro: 2,84 s em 02/11/2026 |
| 8 | Acessibilidade básica | Lighthouse e teclado | Atende: Lighthouse 100; Tab sem elemento sem nome ou sem foco |
| 9 | Segurança e conformidade | Riscos decididos; termos cumpridos | Parcial: sem dados pessoais e vídeos pelo modo de privacidade do YouTube (PR #15); falta validar os vídeos (#21) |
| 10 | Entrega confiável | Publicação só depois de CI verde | Parcial: CI nos PRs para a `main` e a `developer`; a `main` não está protegida (#16) |
| 11 | Testes dos fluxos críticos | Testes automatizados no CI | Atende: conferência de 70 aulas e 6 testes Playwright no CI |
| 12 | Documentação honesta | Qualquer pessoa roda o projeto, e os números estão certos | Atende: README com estado e comandos conferidos |

### Revisão de 02/11/2026

**Hipótese (proposta, sem validação):** Se o aluno achar a aula pelo menu ou pela busca e abri-la na mesma tela, ao menos 1 em cada 3 visitantes abre uma aula.

**Fora do MVP (proposta):** Login, certificado, progresso por aluno e as aulas marcadas como em construção.

**Medição:** Lighthouse 12.8.2 local, móvel, 3 execuções no site publicado. LCP 2,84 / 2,86 / 2,70 s (mediana 2,84 s; era 4,63 s), acessibilidade 100. O resultado varia entre execuções, e não houve teste em celular real.

**Critério 5:** segue sem atender, porque nada coleta uso; depende de uma conta de medição do responsável.
