# ⚡ Aula de Programação | da ByteClass para o Aluno

## 📖 Descrição do Projeto

O **Aula de Programação** é o painel centralizador e o ecossistema de ensino oficial da **ByteClass** (integrado ao ecossistema learnTECH). É uma plataforma em formato de *dashboard* que organiza, gerencia e entrega trilhas de conhecimento em tecnologia e desenvolvimento de software de forma limpa, modular e estruturada.

## 🎯 Objetivo

Apresentar ao aluno um conteúdo de programação altamente organizado e ordenado — estruturado em módulos progressivos —, servindo como o guia definitivo da jornada, unindo teoria, prática, autonomia de estudo e mentoria direta.

🔗 **Painel em produção:** [douglasabnovato.github.io/aula-de-programacao](https://douglasabnovato.github.io/aula-de-programacao/)

---

## 📊 Estado da grade

| | |
| --- | --- |
| Módulos | 7 |
| Aulas na grade | 70 |
| **Aulas publicadas** | **6** — aulas 1 a 3 (Módulo 1) e 11 a 13 (Módulo 2) |
| Aulas em preparação | 64 |
| Trilha experimental | 6 vídeos (Playlist 1 — Hack Dev) |

A proporção aparece para o aluno logo na home do painel, com barra de progresso. A grade inteira é exibida de propósito: o aluno vê a jornada completa desde o primeiro acesso, e as aulas ainda não escritas abrem uma tela de aviso em vez de um link morto.

---

## 🧠 Estratégia pedagógica

1. **Granularidade por blocos** — cada aula é dividida em blocos temáticos, com curadoria de vídeo de apoio focado no assunto.
2. **Prática ativa em 10 passos** — cada bloco teórico vem com um roteiro prático passo a passo, da configuração do ambiente ao build.
3. **Validação humana** — o aluno conclui as etapas e busca validação técnica direta com o instrutor.
4. **Tratamento de expectativa** — módulos futuros aparecem na grade com tela de aviso, não escondidos.

A metodologia detalhada e o template oficial de roteiro estão em [`docs/roteiro-de-aula.md`](./docs/roteiro-de-aula.md). O plano de conteúdos por nível (Básico → Avançado) está em [`docs/plano-de-conteudos.md`](./docs/plano-de-conteudos.md).

---

## 💻 Tecnologias

- **HTML5 semântico** para estrutura
- **CSS3** com variáveis nativas (`:root`), flexbox e identidade dark com verde neon
- **JavaScript ES6+** para renderização do painel, navegação por iframe e controle de estado
- **Arquivos estáticos de configuração** (`cursos.js`) — sem framework, sem build

### Como rodar

Projeto estático. Como o painel carrega as aulas por iframe, sirva por HTTP:

```bash
npx serve .
# ou
python -m http.server 3000
```

---

## 🗂️ Como a grade funciona

`cursos.js` é a fonte única. Cada aula é um objeto:

```js
{
  numero: 2,
  titulo: "Card de Perfil, HTML Semântico e Box Model",
  pasta: "modulo-1-fundamentos/aula-2-card-perfil-html",
  status: "disponivel"   // "disponivel" | "construcao"
}
```

### A regra do `status`

| Valor | O que significa | O que o painel faz |
| --- | --- | --- |
| `disponivel` | a pasta tem `index.html` preenchido | carrega a aula no iframe |
| `construcao` | os arquivos da pasta existem, mas estão vazios | exibe a tela "Aula em Construção" |

**O `status` precisa refletir o disco.** Uma aula marcada `disponivel` com `index.html` vazio entrega uma tela em branco ao aluno; uma marcada `construcao` com conteúdo escrito esconde trabalho já feito. Hoje as 70 aulas batem uma a uma.

### Estrutura de uma aula

```text
modulo-N-nome/aula-N-slug/
├── index.html          a aula, autocontida (HTML + CSS + JS no mesmo arquivo)
├── readme.md           o roteiro
└── atividades/
    ├── atividade-1.html
    ├── atividade-2.html
    └── atividade-3.html
```

Cada aula é **autocontida de propósito**: o aluno abre um arquivo só e tem tudo ali, sem depender de CSS externo nem de servidor.

### Publicar uma aula

1. Escrever o `index.html`, o `readme.md` e as 3 atividades na pasta que já existe
2. Trocar o `status` da aula para `"disponivel"` em `cursos.js`
3. Pronto — o painel e o contador da home se atualizam sozinhos

---

## 📁 Estrutura do repositório

```text
aula-de-programacao/
├── index.html                    o painel
├── cursos.js                     a grade curricular (fonte única)
├── assets/                       banners, thumbnails e favicons
├── aula-experimental/            a trilha de vídeos de ambientação
├── docs/
│   ├── plano-de-conteudos.md     a formação por nível
│   └── roteiro-de-aula.md        metodologia e template de roteiro
└── modulo-1-fundamentos/ … modulo-7-avancado/
```

---

## 🗺️ Próximos passos

- [ ] Publicar as aulas 4 a 10 do Módulo 1
- [ ] Publicar as aulas 14 a 20 do Módulo 2
- [ ] Converter os 6 MB de banners em `assets/` para `.webp`
- [ ] Substituir os arquivos vazios das aulas em preparação por um `.gitkeep` por pasta — hoje são 332 arquivos de 0 byte versionados

---

@douglasabnovato — Desenvolvedor Fullstack
