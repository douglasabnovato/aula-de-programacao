# MVP — critérios

> Avaliação de 31/10/2026 com os mesmos 12 critérios usados no `movies`. "Não medido" significa que não há evidência, não que falhe.

| # | Critério | Como verificar | Situação |
|---|---|---|---|
| 1 | Problema e público claros | Dá para explicar em uma frase | Atende |
| 2 | Hipótese a validar | Existe uma aposta escrita, com meta | Atende: proposta abaixo |
| 3 | Fluxo principal completo | Uma pessoa conclui sem ajuda | Parcial: abertura de aula testada; aluno de fora não testou |
| 4 | Escopo enxuto | O que não entra está registrado | Atende: lista abaixo |
| 5 | Medição de uso | A métrica principal é coletada | Não atende |
| 6 | Falhas tratadas | Erro, vazio e carregamento têm resposta clara | Parcial: busca vazia e aula em construção tratadas; erro da aula no iframe não |
| 7 | Desempenho aceitável | LCP de até 2,5 s no celular | Parcial: 2,84 s em 02/11/2026, acima de 2,5 s |
| 8 | Acessibilidade básica | Lighthouse e teclado | Atende: Lighthouse 100; Tab sem elemento sem nome ou sem foco |
| 9 | Segurança e conformidade | Riscos decididos; termos cumpridos | Parcial |
| 10 | Entrega confiável | Publicação só depois de CI verde | Parcial |
| 11 | Testes dos fluxos críticos | Testes automatizados no CI | Atende: conferência de 70 aulas e 4 testes Playwright no CI |
| 12 | Documentação honesta | Qualquer pessoa roda o projeto, e os números estão certos | Atende: README com estado e comandos conferidos |

## Revisão de 02/11/2026

**Hipótese (proposta, sem validação):** Se o aluno achar a aula pelo menu ou pela busca e abri-la na mesma tela, ao menos 1 em cada 3 visitantes abre uma aula.

**Fora do MVP (proposta):** Login, certificado, progresso por aluno e as aulas marcadas como em construção.

**Medição:** Lighthouse 12.8.2 local, móvel, 3 execuções no site publicado. LCP 2,84 / 2,86 / 2,70 s (mediana 2,84 s; era 4,63 s), acessibilidade 100. O resultado varia entre execuções, e não houve teste em celular real.

**Critério 5:** segue sem atender, porque nada coleta uso; depende de uma conta de medição do responsável.
