/* catalog.js — catálogo de projetos práticos da ByteClass.
   Lê projects.json, monta os filtros por tecnologia, a busca e a grade.

   O visor em modal saiu. Antes o projeto abria num iframe dentro desta
   página, que por sua vez já roda dentro do iframe do painel — três níveis,
   e o botão Voltar do navegador ficava imprevisível porque cada navegação
   interna empilha entrada no histórico do topo. Agora o card avisa o painel,
   e quem troca de página é ele: a pilha para em dois níveis e o caminho de
   volta (o rastro "Projetos ›") mora fora do iframe, onde nada o alcança.
   Aberto fora do painel, o card navega normalmente. */

const ARQUIVO = "./projects.json";
const TODOS = "Todos";

/* Um ícone por tecnologia, desenhado aqui dentro. Antes eram 56 ícones
   diferentes vindos de um CDN: quando a rede falhava, os 59 cards viravam
   retângulos vazios, e 56 ícones distintos não classificavam nada. */
const ICONES = {
  "HTML & CSS": '<path d="M9 5 3 12l6 7M15 5l6 7-6 7"/>',
  "JavaScript & DOM":
    '<path d="M9 4H8a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h1M15 4h1a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1"/>',
  Jogos:
    '<rect x="2.5" y="6.5" width="19" height="11" rx="5"/><path d="M6.5 11h3.5M8.25 9.25v3.5M15 12.5h.01M17.5 10.5h.01"/>',
  "Lógica & Algoritmos":
    '<circle cx="6" cy="5.5" r="2.5"/><circle cx="18" cy="5.5" r="2.5"/><circle cx="12" cy="18.5" r="2.5"/><path d="M6 8v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M12 13v3"/>',
  "Landing Pages":
    '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 12.5h7M7 16h4"/>',
  "APIs & Dados":
    '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>',
  Formulários:
    '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
  "Multimídia": '<circle cx="12" cy="12" r="9"/><path d="M10.2 8.4 16 12l-5.8 3.6z"/>',
};

const Hub = {
  itens: [],
  filtro: TODOS,
  busca: "",
};

/* Neutraliza marcação antes de interpolar dado do catálogo em HTML. */
function escapar(texto) {
  return String(texto ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}

/* Tira acento e caixa, para a busca achar "logica" quando o título diz "Lógica". */
function normalizar(texto) {
  return String(texto ?? "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

/* Devolve o SVG da tecnologia, ou um marcador neutro se a categoria for nova. */
function iconeDe(categoria) {
  const miolo = ICONES[categoria] || '<circle cx="12" cy="12" r="8"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${miolo}</svg>`;
}

/* Monta um card. É um button porque dispara ação, não navega por href:
   quem navega é o painel, quando existe. */
function montarCard(projeto) {
  const fundo =
    projeto.featured && projeto.image
      ? ` style="background-image:url('${escapar(projeto.image)}');"`
      : "";

  return `
    <button type="button" class="project-card${projeto.featured ? " featured" : ""}"
            data-slug="${escapar(projeto.slug)}"
            aria-label="Abrir ${escapar(projeto.title)}"${fundo}>
      <span class="project-card__topo">
        <span class="project-card__icone">${iconeDe(projeto.category)}</span>
        <span class="badge">${escapar(projeto.category)}</span>
      </span>
      <h3>${escapar(projeto.title)}</h3>
      <p>${escapar(projeto.description)}</p>
    </button>`;
}

/* Aplica filtro de tecnologia e busca textual, nessa ordem. */
function filtrar() {
  const termo = normalizar(Hub.busca);
  return Hub.itens.filter((p) => {
    if (Hub.filtro !== TODOS && p.category !== Hub.filtro) return false;
    if (!termo) return true;
    return normalizar(`${p.title} ${p.description} ${p.category}`).includes(termo);
  });
}

/* Desenha a grade e atualiza o contador. */
function renderizarGrade() {
  const grade = document.getElementById("main-grid");
  const contador = document.getElementById("contador");
  const lista = filtrar();

  if (lista.length === 0) {
    grade.innerHTML = `<p class="grade-vazia">Nenhum projeto encontrado para <strong>${escapar(
      Hub.busca
    )}</strong>.</p>`;
  } else {
    grade.innerHTML = lista.map(montarCard).join("");
  }

  const total = Hub.itens.length;
  contador.innerHTML =
    lista.length === total
      ? `Conheça nossos <strong>${total}</strong> projetos`
      : `<strong>${lista.length}</strong> de ${total} projetos`;
}

/* Desenha as pastilhas de tecnologia, com a contagem de cada uma. */
function renderizarFiltros() {
  const alvo = document.getElementById("filtros");
  const conta = new Map();
  Hub.itens.forEach((p) => conta.set(p.category, (conta.get(p.category) || 0) + 1));
  const ordenadas = [...conta.keys()].sort((a, b) => conta.get(b) - conta.get(a));

  const pastilha = (rotulo, n) =>
    `<button type="button" class="filtro${rotulo === Hub.filtro ? " is-ativo" : ""}"
             data-filtro="${escapar(rotulo)}" aria-pressed="${rotulo === Hub.filtro}">
       ${escapar(rotulo)} <span class="filtro__n">${n}</span>
     </button>`;

  alvo.innerHTML =
    pastilha(TODOS, Hub.itens.length) + ordenadas.map((c) => pastilha(c, conta.get(c))).join("");
}

/* Abre o projeto. Dentro do painel, pede a ele que troque de página;
   fora dele, navega esta própria janela. */
function abrirProjeto(slug) {
  const projeto = Hub.itens.find((p) => p.slug === slug);
  if (!projeto) return;

  const dentroDoPainel = window.parent && window.parent !== window;
  if (dentroDoPainel) {
    try {
      window.parent.postMessage(
        { tipo: "abrir-projeto", url: projeto.path, titulo: projeto.title },
        window.location.origin
      );
      return;
    } catch (e) {
      void e;
    }
  }
  window.location.href = projeto.path;
}

/* Liga os eventos da página num lugar só. */
function ligarEventos() {
  document.getElementById("filtros").addEventListener("click", (evento) => {
    const pastilha = evento.target.closest("[data-filtro]");
    if (!pastilha) return;
    Hub.filtro = pastilha.dataset.filtro;
    renderizarFiltros();
    renderizarGrade();
  });

  document.getElementById("main-grid").addEventListener("click", (evento) => {
    const card = evento.target.closest("[data-slug]");
    if (card) abrirProjeto(card.dataset.slug);
  });

  const campo = document.getElementById("campoBusca");
  campo.addEventListener("input", () => {
    Hub.busca = campo.value;
    renderizarGrade();
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "/" && document.activeElement !== campo) {
      evento.preventDefault();
      campo.focus();
      return;
    }
    if (evento.key === "Escape" && document.activeElement === campo) {
      campo.value = "";
      Hub.busca = "";
      renderizarGrade();
      campo.blur();
    }
  });
}

/* Ponto de partida. */
async function iniciar() {
  const grade = document.getElementById("main-grid");

  try {
    const resposta = await fetch(ARQUIVO);
    if (!resposta.ok) throw new Error("Falha ao buscar projects.json");
    Hub.itens = await resposta.json();
  } catch (erro) {
    console.error("Catálogo:", erro);
    document.getElementById("contador").textContent = "Não foi possível carregar o catálogo";
    grade.innerHTML =
      '<p class="grade-erro">Erro ao sincronizar os projetos. Recarregue a página.</p>';
    return;
  }

  renderizarFiltros();
  renderizarGrade();
  ligarEventos();
}

document.addEventListener("DOMContentLoaded", iniciar);

/* Fim de catalog.js */
