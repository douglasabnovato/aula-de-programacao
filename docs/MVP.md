# MVP — critérios

> Fonte única do estado. Tabela atual de 09/11/2026 (ciclo de 07/11/2026). As tabelas anteriores estão em "Histórico", no fim.

**Nível:** Estudo (N1). Critérios 5 (medição) e 7 (LCP no ar) não se aplicam e saem da conta.

**Resumo:** 7 de 10 aplicáveis atendidos

**Finalizado:** sim

Os 3 critérios que faltam (3, 9 e 10) dependem do responsável, cada um com issue `depende-do-responsavel`: teste com aluno de fora (#17), validar os vídeos (#21) e proteger a `main` (#16).

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
| 10 | Entrega confiável | Publicação só depois de CI verde | Parcial: CI nos PRs para a `main` e a `developer/**`; a `main` não está protegida (#16) |
| 11 | Testes dos fluxos críticos | Testes automatizados no CI | Atende: `node scripts/verificar-conteudo.mjs` e `npm test` (7 testes Playwright) no CI, verdes no PR do ciclo de 07/11/2026 |
| 12 | Documentação honesta | Qualquer pessoa roda o projeto, e os números estão certos | Atende: README revisto em 09/11/2026; `curl` no site publicado deu 200 e o HTML é igual ao `index.html` da `main` |

### Fluxo principal percorrido na tela (09/11/2026)

Como foi feito: clone novo, `http-server` local e um roteiro Playwright (Chromium) que faz o caminho do aluno, com captura de tela em cada passo.

1. Painel abre e mostra "70 de 70 aulas publicadas".
2. Busca por "arrays" deixa 1 aula visível.
3. Clique na Aula 1: o conteúdo abre no iframe ("Roadmap de Estudos Oficial").
4. Esc volta ao painel.
5. Catálogo de projetos abre sem imagem quebrada.
6. Os 10 projetos com imagem comprimida abrem com 0 imagem quebrada, depois de corrigir o caminho absoluto do `aprender-programar`.

O que o roteiro achou: o Tab passava por aulas escondidas (corrigido) e a busca apagada deixa o módulo aberto (#27).

## Histórico

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
