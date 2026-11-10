# Plano de ação — Aula de Programação

O estado e os critérios ficam em [`MVP.md`](MVP.md). Este arquivo guarda o plano de cada ciclo, com data.

## Ciclo de 07/11/2026

> Executado em 09/11/2026. Branch `feature/2026-11-07` → `developer/sprint-2026-11-12` → `main` (o PR para a `main` fica aberto para o responsável). Nível: Estudo (N1).

### Produto

**Foco.** Critério 9: peso da mídia (#19) e arquivos sem uso (#20). Percorrer o fluxo principal na tela e registrar.

**O que a pesquisa trouxe.**

| Ideia | O que levamos para o projeto | Fonte |
|---|---|---|
| Não há nível de compressão universal: reduzir a imagem ao tamanho em que aparece e testar a qualidade | Imagens acima de 500 KB reduzidas no lado maior e comprimidas de novo, mantendo nome e formato para não mudar referências | [web.dev: escolher o nível de compressão](https://web.dev/articles/compress-images), [web.dev: desempenho de imagens](https://web.dev/learn/performance/image-performance) |
| `preload="none"` faz o navegador não baixar a mídia até o play; `metadata` baixa só a duração | Vídeos do `classic-sites` (todos com pôster) com `preload="none"`; áudio com `metadata` | [MDN: HTMLMediaElement.preload](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/preload) |
| GIF animado grande pesa mais que o mesmo trecho em vídeo | Virou issue (#24) | [web.dev: desempenho de imagens](https://web.dev/learn/performance/image-performance) |

**Backlog do ciclo.**

| Prioridade | Item | Destino |
|---|---|---|
| 1 | Imagens de `projetos/projects/` abaixo de 500 KB | Este ciclo (#19) |
| 2 | Mídia do `classic-sites` só ao tocar | Este ciclo (#19) |
| 3 | Cópias idênticas em `assets/banners/` | Este ciclo (#20) |
| 4 | Tab passando por aulas escondidas (achado no fluxo na tela) | Este ciclo |
| 5 | Imagem com caminho absoluto no `aprender-programar` | Este ciclo |
| 6 | GIFs acima de 500 KB | Issue #24 |
| 7 | Banners de marca sem uso no site | Responsável (#25) |
| 8 | Histórico do Git com 330 MB | Responsável (#26) |
| 9 | Busca apagada deixa o módulo aberto | Issue #27 |

### Engenharia

**Riscos.**
- Comprimir não diminui o clone: as versões antigas ficam no histórico (#26).
- PNG reduzido a 256 cores pode mostrar faixas em degradê; conferir as capturas dos fundos do `dev-em-dobro`.
- Antes de apagar, `git grep` pelo caminho e pelo nome; banners de marca podem ser usados fora do site, por isso ficaram (#25).

**Qualidade.** `node scripts/verificar-conteudo.mjs`, `npm test` (7 testes) e o roteiro do fluxo na tela, com 0 imagem quebrada nos 10 projetos alterados.

**Definição de pronto.** CI verde no PR para a sprint; PR sprint → `main` aberto com `revisao-responsavel`; `docs/MVP.md` e README atualizados.

### Plano de ação

**Este ciclo executa.** Itens 1 a 5 do backlog, o fluxo na tela e a atualização do `docs/MVP.md` e do README.

**Vira issue.** #24 e #27 (agente); #25 e #26 (responsável).

## Ciclo de 03/11/2026

> Executado em 06/11/2026. Branch `feature/2026-11-06` → `developer/sprint-2026-11-12` → `main`. Nível: Estudo (N1); critérios 5 e 7 não se aplicam.

### Produto

**Problema e público.** Alunos da ByteClass precisam achar a aula certa, na ordem da grade, e ver exemplos de projeto sem sair do painel.

**Hipótese e meta.** Se o aluno achar a aula pelo menu ou pela busca e abri-la na mesma tela, ao menos 1 em cada 3 visitantes abre uma aula. Em N1, a meta fica registrada sem medição.

**O que a pesquisa trouxe.**

| Ideia | O que levamos para o projeto | Fonte |
|---|---|---|
| O iframe não tem evento de erro confiável: o `load` dispara também com 404 | O painel confere a aula com um `HEAD` antes de pôr no iframe. Com 404 ou sem rede, mostra uma tela de erro com "Tentar de novo" | [Bugzilla 367079](https://bugzilla.mozilla.org/show_bug.cgi?id=367079), [WebKit 137468](https://bugs.webkit.org/show_bug.cgi?id=137468) |
| Modo de privacidade do YouTube: o vídeo embutido não usa cookies de rastreio de visualização | Vídeos da trilha experimental passam a abrir por `youtube-nocookie.com`. O modo ainda guarda um identificador no navegador; fica registrado como limite | [ctrl.blog: youtube-nocookie](https://www.ctrl.blog/entry/youtube-nocookie), [Stefan Judis: o modo de privacidade](https://www.stefanjudis.com/blog/the-lie-of-youtubes-privacy-enhanced-embed-mode) |
| Plataformas de curso separam aula aberta de aula concluída e retomam pela última aula vista | Virou issue: marcar como concluída e "Continuar" na home, com progresso só no navegador (#18) | [SendPulse: fluxo de estudo](https://sendpulse.com/br/knowledge-base/edu/student-account/study-flow), [Okai: player de aulas](https://okai.com.br/suporte/cursos-certificados/assistir-aulas-no-player) |

**Backlog priorizado (impacto × esforço).**

| Prioridade | Item | Impacto | Esforço | Destino |
|---|---|---|---|---|
| 1 | Erro da aula no iframe tratado | Alto | Baixo | Este ciclo (#15) |
| 2 | Títulos nos iframes e YouTube sem cookies de rastreio | Médio | Baixo | Este ciclo (#15) |
| 3 | CI também nos PRs para a `developer` | Alto | Baixo | Este ciclo (#15) |
| 4 | Proteger a `main` | Alto | Baixo | Responsável (#16) |
| 5 | Teste com aluno de fora | Alto | Baixo | Responsável (#17) |
| 6 | Link direto para cada aula | Médio | Baixo | Issue (#22) |
| 7 | Aula concluída e "Continuar" | Médio | Médio | Issue (#18) |
| 8 | Peso das imagens e da mídia | Médio | Médio | Issue (#19) |
| 9 | Arquivos do catálogo antigo | Baixo | Baixo | Issue (#20) |
| 10 | Validar os vídeos de apoio | Médio | Médio | Responsável (#21) |

**Fora do escopo.** Login, certificado, progresso por aluno no servidor, medição de uso.

### Engenharia

**Arquitetura.** Site estático no GitHub Pages. `index.html` é o painel (menu, busca, telas e iframe), `cursos.js` guarda a grade, e cada aula é uma pasta com `index.html`. O catálogo de projetos roda no mesmo iframe e conversa com o painel por `postMessage` da mesma origem.

**Riscos.**
- O `HEAD` antes da aula soma uma requisição curta a cada abertura; o Pages responde `HEAD` normalmente.
- Sem proteção na `main`, um push direto publica sem CI (#16).
- O repositório é grande (mídia dos projetos), o que deixa o clone lento (#19).

**Qualidade.**
- Testes: conferência das 70 aulas publicadas e 6 testes Playwright (grade, busca vazia, abrir aula e Esc, aula com 404, sem rede e nova tentativa, 375 px).
- Acessibilidade: tela de erro com `role="alert"`, foco no "Tentar de novo" e contorno de foco visível; iframes com `title`.
- Segurança: sem dados pessoais; vídeos pelo modo de privacidade do YouTube.

**Definição de pronto.** `node scripts/verificar-conteudo.mjs` e `npm test` passam; CI verde nos dois PRs; `docs/MVP.md` e README atualizados.

### Plano de ação

**Este ciclo executa.**
1. Tela de erro da aula, com testes.
2. Títulos nos iframes e YouTube pelo modo de privacidade.
3. CI nos PRs para a `developer`.
4. `docs/MVP.md` com nível N1 e resumo; README com o estado do ciclo.

**Vira issue.** #16, #17, #21 (responsável); #18, #19, #20, #22 (agente).

## Ciclo de 10/11/2026 (faixa de 90%)

> Branch `feature/2026-11-10-b` → `developer/sprint-2026-11-12` → `main` (o PR para a `main` fica com o responsável). Decisões D1 a D7 em `engenharia/decisoes/2026-11-10-ciclo-faixa-90.md`.

**Produto.** Sem mudança de problema e público. A meta da hipótese passa a ser a do ciclo (D1). O teste com um aluno de fora vira validação (#17).

**Engenharia.** O teste de abrir aula simulava o conteúdo porque o CI não trazia as pastas das aulas. Agora o CI traz as pastas `modulo-*` sem mídia, e um teste faz a tarefa da #17 com a aula real.

**Plano de ação.**

| Item | Destino |
|---|---|
| Teste de ponta a ponta com a aula real, no CI | Este ciclo |
| Critérios 2, 3 e 10 pelas decisões D1 a D3 | Este ciclo |
| Validar os vídeos | Responsável (#21) |
| Validar com uma pessoa de fora | Responsável (#17) |

