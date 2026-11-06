# MVP — critérios

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

## Revisão de 02/11/2026

**Hipótese (proposta, sem validação):** Se o aluno achar a aula pelo menu ou pela busca e abri-la na mesma tela, ao menos 1 em cada 3 visitantes abre uma aula.

**Fora do MVP (proposta):** Login, certificado, progresso por aluno e as aulas marcadas como em construção.

**Medição:** Lighthouse 12.8.2 local, móvel, 3 execuções no site publicado. LCP 2,84 / 2,86 / 2,70 s (mediana 2,84 s; era 4,63 s), acessibilidade 100. O resultado varia entre execuções, e não houve teste em celular real.

**Critério 5:** segue sem atender, porque nada coleta uso; depende de uma conta de medição do responsável.
