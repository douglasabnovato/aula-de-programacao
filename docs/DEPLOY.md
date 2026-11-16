# Publicação (GitHub Pages)

O site é estático: não tem build, banco nem API. O GitHub Pages publica a branch `main`, pasta raiz (`/`), no **modo legado** ("Deploy from a branch"). Não há `render.yaml` nem configuração de Vercel ou Netlify, porque nada roda no servidor.

**Endereço:** https://douglasabnovato.github.io/aula-de-programacao/

## Como a publicação acontece hoje

1. Um PR chega à `main`. O ruleset `principal-protegida` exige PR e o job `verificar` do CI verde.
2. O merge dispara o workflow automático do GitHub `pages-build-deployment`.
3. Em cerca de 1 minuto, o site mostra a `main` nova.

Conferido em 16/11/2026:
- `gh api repos/douglasabnovato/aula-de-programacao/pages`: `build_type` `legacy`, fonte `main` na raiz, `https_enforced` ligado.
- `curl` no endereço: HTTP 200, e o `index.html` publicado é igual ao da `main` (mesmo md5, sem `\r`).
- `gh api repos/douglasabnovato/aula-de-programacao/rules/branches/main`: `deletion`, `non_fast_forward`, `pull_request` e `required_status_checks` (`verificar`).

## Como conferir depois de um merge

```bash
gh run list --repo douglasabnovato/aula-de-programacao --branch main --limit 3
curl -s -o /dev/null -w "%{http_code}\n" https://douglasabnovato.github.io/aula-de-programacao/
curl -s https://douglasabnovato.github.io/aula-de-programacao/ | tr -d '\r' | md5sum
git show origin/main:index.html | tr -d '\r' | md5sum
```

Os dois `md5sum` devem ser iguais. O `git show` roda dentro de um clone do repositório, depois de `git fetch`. Um link direto de aula também deve abrir: https://douglasabnovato.github.io/aula-de-programacao/#aula-5

## Se o Pages for desligado (passo do responsável)

Mexer em Settings é do responsável. Para religar:

1. Abrir https://github.com/douglasabnovato/aula-de-programacao/settings/pages
2. Em **Build and deployment**, campo **Source**: escolher **Deploy from a branch**.
3. Em **Branch**: escolher `main` e a pasta `/ (root)`. Clicar em **Save**.
4. Esperar o run `pages-build-deployment` terminar (aba Actions) e conferir com os comandos acima.

## Rodar localmente

```bash
npm ci
npx http-server . -p 4173 -a 127.0.0.1 -s
```

Abrir http://127.0.0.1:4173. O painel carrega as aulas por iframe e o catálogo por `fetch`, por isso precisa de HTTP: abrir o `index.html` direto do disco não funciona.

Testes: `node scripts/verificar-conteudo.mjs` e `npm test` (depois de `npx playwright install chromium`).
