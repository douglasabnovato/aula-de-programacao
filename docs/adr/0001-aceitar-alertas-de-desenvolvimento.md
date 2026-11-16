# ADR-0001: Aceitar os alertas de desenvolvimento do Dependabot

- **Status:** Aceita
- **Data:** 16/11/2026
- **Origem:** ordem do responsável repassada pelo DG líder em 16/11/2026:

> "Regra geral por ADR. alertas que nao atrapalham a producao, pode passar. os que atrapalham, entender, escolher a melhor estrategia para manter a funcionalidade"

## Contexto

Em 16/11/2026, 14h45, `gh api "repos/douglasabnovato/aula-de-programacao/dependabot/alerts?state=open&per_page=100"` deu 8 alertas abertos, todos do `vite` em `modulo-1-fundamentos/aula-1-js-ordenacao-reactjs/atividades/atividade-3/package.json`, escopo de desenvolvimento. Esse arquivo pede `vite ^5.2.0`; as correções existem só na linha 6 (6.4.2 a 6.4.4).

Por que nada disso chega à produção:
- O site é estático e o GitHub Pages publica a `main` no modo legado, sem build (`docs/DEPLOY.md`). Nenhum `npm install` nem `vite build` roda na publicação.
- A pasta da atividade não tem `package-lock.json` nem `index.html`: são os componentes de exemplo da aula (`App.jsx`, `Header.jsx` etc.) e o `package.json` que o aluno usaria para rodar o projeto na própria máquina. O Pages serve esse `package.json` como texto, sem executá-lo.
- O CI instala só o `package.json` da raiz (`@playwright/test`, `@axe-core/playwright`, `http-server`). O `vite` não está no `package-lock.json` da raiz (`grep -c '"node_modules/vite"' package-lock.json` devolve 0).
- `npm audit --omit=dev` na raiz: 0 vulnerabilidades (não há dependência de produção).

## Decisão

Aceitar os alertas abaixo, porque não chegam à produção. O `vite` é o servidor de desenvolvimento e o empacotador da atividade; ele só rodaria na máquina de quem fizer a atividade.

| Alerta | Pacote | Severidade | Quem o puxa | Por que não chega à produção |
|---|---|---|---|---|
| #5 | vite (GHSA-587h-7wmj-h5pm) | alta | `devDependencies` da atividade 3 da aula 1 | Ferramenta de desenvolvimento de material de aula; sem lockfile, fora do CI e do build do Pages |
| #4 | vite (GHSA-698v-4r3x-3vcv) | média | idem | idem |
| #6 | vite (GHSA-r825-w8mm-5pxw) | média | idem | idem |
| #7 | vite (GHSA-rq7h-c2jc-7f22) | média | idem | idem |
| #3 | vite (GHSA-v6wh-96g9-6wx3) | média | idem | idem |
| #2 | vite (GHSA-fx2h-pf6j-xcff) | média | idem | idem |
| #1 | vite (GHSA-4w7w-66w2-5vf9) | média | idem | idem |
| #8 | vite (GHSA-9jrq-w75r-8gcw) | baixa | idem | idem |

Os alertas não são dispensados nem fechados pela API. Esta ADR só registra a decisão.

## Consequências

- O risco fica no ambiente de quem desenvolve ou faz a atividade (o servidor de desenvolvimento do `vite`), não no site publicado nem no CI.
- O texto da aula segue pedindo `vite ^5.2.0`. Quem instalar a atividade recebe a versão 5 mais nova, ainda com os avisos.

## Quando revisar

- Se a atividade passar a ser construída e publicada (por exemplo, um build do Vite no Pages ou no CI).
- Se surgir correção na linha 5 do `vite`, sem versão maior.
- Numa revisão da aula 1, quando valer migrar a atividade para `vite ^6.4.4` com o `@vitejs/plugin-react` compatível.
