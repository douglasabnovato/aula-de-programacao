# ⚡ Aula de Programação | da ByteClass para o Aluno

## 📖 Descrição do Projeto

O **Aula de Programação** é o painel de ensino da **ByteClass** (ecossistema learnTECH). Reúne, num só lugar, as duas metades da jornada do aluno: a **grade curricular** — teoria e prática guiada, módulo a módulo — e o **catálogo de projetos** — 59 projetos práticos organizados por tecnologia, para o aluno ver código de verdade funcionando.

## 🎯 Objetivo

Entregar ao aluno um conteúdo ordenado e uma referência viva de projetos, unindo teoria, prática, autonomia de estudo e mentoria direta — sem que ele precise sair do painel para achar exemplo.

🔗 **Em produção:** [douglasabnovato.github.io/aula-de-programacao](https://douglasabnovato.github.io/aula-de-programacao/)

---

## 📊 O que tem dentro

| | |
| --- | --- |
| Módulos da grade | 7 |
| Aulas na grade | 70 |
| **Aulas publicadas** | **6** — aulas 1 a 3 (Módulo 1) e 11 a 13 (Módulo 2) |
| Aulas em preparação | 64 |
| **Projetos no catálogo** | **59**, em 8 tecnologias |
| Trilha experimental | 6 vídeos (Playlist 1 — Hack Dev) |

---

## 🧭 Como o painel se organiza

O painel é uma aplicação de página única: um `index.html` com todas as telas, e uma função que apaga todas antes de acender a certa.

| Tela | O que mostra |
| --- | --- |
| Home | apresentação e barra de progresso da grade |
| 🎬 Aula Experimental | playlists de vídeo e player |
| **📁 Projetos** | **o catálogo, carregado de `projetos/`** |
| Módulos 1 a 7 | as aulas, carregadas no frame |
| Em Construção | aviso das aulas ainda não escritas |

### O rastro de navegação

Quando o aluno abre um projeto, aparece um rastro no topo: **Projetos › *nome do projeto***.

Esse rastro vive **no painel, fora do iframe** — e isso é de propósito. O projeto aberto é uma página independente, com navegação própria; cada clique dentro dele empilha entrada no histórico do topo, o que torna o botão Voltar do navegador imprevisível. Com o rastro do lado de fora, o caminho de volta não depende do histórico: é um botão que está sempre ali.

---

## 🗂️ O catálogo de projetos

Fica em `projetos/`, com fonte única em `projetos/projects.json`.

### As 8 tecnologias

| Tecnologia | Projetos |
| --- | ---: |
| HTML & CSS | 18 |
| JavaScript & DOM | 15 |
| Jogos | 7 |
| Lógica & Algoritmos | 5 |
| Landing Pages | 5 |
| APIs & Dados | 3 |
| Formulários | 3 |
| Multimídia | 3 |

> A taxonomia anterior tinha **24 categorias para 59 projetos, 14 delas com um item só** — e misturava tecnologia com origem ("Bootcamp", "Desafio", "Estudos"). O eixo agora é só tecnologia, que é o que o aluno procura quando quer ver um exemplo de uma coisa específica.

### Os ícones

Cada tecnologia tem **um ícone, desenhado em SVG dentro do `catalog.js`**.

Antes eram 56 ícones diferentes vindos do Font Awesome por CDN. Dois problemas: com a rede fora, os 59 cards viravam retângulos vazios, porque o ícone era o único elemento visual do card; e 56 ícones distintos em 59 projetos não classificam nada — o aluno nunca aprende que "carteira = finanças" se a carteira aparece uma vez. Agora o ícone repete por tecnologia, então ele ensina a taxonomia junto com a cor, e o catálogo não depende mais de rede externa.

### Adicionando um projeto

```json
{
  "id": 60,
  "slug": "nome-da-pasta",
  "title": "Nome de Exibição",
  "description": "Uma frase sobre o que o projeto pratica.",
  "category": "JavaScript & DOM",
  "path": "./projects/nome-da-pasta/index.html",
  "featured": false,
  "image": "./assets/thumbnails/nome.jpg"
}
```

| Campo | Regra |
| --- | --- |
| `slug` | minúsculas e hífen, batendo com o nome real da pasta em `projetos/projects/` |
| `category` | uma das 8 acima, escrita exatamente igual — o filtro e o ícone dependem disso |
| `path` | sempre `./projects/<slug>/index.html` |
| `featured` | `true` dá borda destacada e card maior; exige `image` |
| `image` | opcional; sem ela o card mostra só o ícone da tecnologia |

---

## 🧠 Estratégia pedagógica

1. **Granularidade por blocos** — cada aula é dividida em blocos temáticos, com vídeo de apoio focado no assunto.
2. **Prática ativa em 10 passos** — cada bloco teórico vem com roteiro passo a passo, da configuração do ambiente ao build.
3. **Exemplo à mão** — o catálogo de projetos fica a um clique da aula, filtrável pela tecnologia do módulo.
4. **Validação humana** — o aluno conclui as etapas e busca validação técnica com o instrutor.
5. **Tratamento de expectativa** — módulos futuros aparecem na grade com tela de aviso, não escondidos.

A metodologia e o template de roteiro estão em [`docs/roteiro-de-aula.md`](./docs/roteiro-de-aula.md). O plano de conteúdos por nível está em [`docs/plano-de-conteudos.md`](./docs/plano-de-conteudos.md).

---

## 💻 Tecnologias

- **HTML5 semântico**, **CSS3** com variáveis nativas, **JavaScript ES6+**
- Sem framework, sem build step
- **Inter** via Google Fonts (o painel declarava a fonte e não a carregava; agora carrega)
- Fonte de dados estática: `cursos.js` (grade) e `projetos/projects.json` (catálogo)

### Como rodar

Projeto estático. Como o painel carrega aulas e catálogo por iframe, e o catálogo usa `fetch`, sirva por HTTP:

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
| `construcao` | os arquivos existem, mas estão vazios | exibe a tela "Aula em Construção" |

**O `status` precisa refletir o disco.** Uma aula marcada `disponivel` com `index.html` vazio entrega tela em branco ao aluno. Hoje as 70 aulas batem uma a uma.

### Publicar uma aula

1. Escrever o `index.html`, o `readme.md` e as 3 atividades na pasta que já existe
2. Trocar o `status` para `"disponivel"` em `cursos.js`
3. O painel e o contador da home se atualizam sozinhos

---

## 📁 Estrutura do repositório

```text
aula-de-programacao/
├── index.html                    o painel (HTML + CSS + JS)
├── cursos.js                     a grade curricular
├── assets/                       banners, thumbnails, favicons, aula.css
├── aula-experimental/            a trilha de vídeos
├── docs/
│   ├── plano-de-conteudos.md
│   └── roteiro-de-aula.md
├── modulo-1-fundamentos/ … modulo-7-avancado/
└── projetos/                     o catálogo
    ├── index.html
    ├── catalog.js                filtros, busca, grade e os 8 ícones
    ├── style.css
    ├── projects.json             fonte única dos 59 projetos
    ├── assets/thumbnails/        as 6 imagens de card
    ├── public/                   favicons
    └── projects/                 os 59 projetos, um por pasta
```

---

## 🗺️ Próximos passos

- [ ] Publicar as aulas 4 a 10 do Módulo 1 e 14 a 20 do Módulo 2
- [ ] **Apagar `projetos/assets/logo/`** — 2,0 MB de logos do antigo cabeçalho do hub, que saiu
- [ ] **Apagar `projetos/readme.md`** — readme do repositório antigo, substituído por este
- [ ] **171 MB em `projetos/projects/`** — o maior peso é mídia sem compressão: 37,5 MB de `.mp3` em `devcast-player` e 21 MB de `.jpg` em `curso-em-video` (um deles com 5 MB)
- [ ] Converter os 6 MB de banners em `assets/` para `.webp`
- [ ] Substituir os arquivos vazios das aulas em preparação por um `.gitkeep` por pasta — hoje são 332 arquivos de 0 byte versionados
- [ ] Decidir o destino do repositório `escola-de-programacao`, de onde o catálogo veio: arquivar, redirecionar ou apagar

---

@douglasabnovato — Desenvolvedor Fullstack
