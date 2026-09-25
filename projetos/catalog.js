/* catalog.js — o Hub de Projetos.
   Lê projects.json, monta a grade de cards e controla o visor que abre
   cada projeto num iframe. Extraído do <script> embutido no index.html. */

const Hub = {
  caminhoJson: "./projects.json",
  grade: null,
  contador: null,
  visor: null,
  iframe: null,
  progresso: null,
  tituloVisor: null,
  projetos: [],
};

/* Busca os elementos uma vez, depois que o DOM existe. */
function mapearElementos() {
  Hub.grade = document.getElementById("main-grid");
  Hub.contador = document.getElementById("project-count-text");
  Hub.visor = document.getElementById("project-viewer");
  Hub.iframe = document.getElementById("project-iframe");
  Hub.progresso = document.getElementById("viewer-progress");
  Hub.tituloVisor = document.getElementById("project-title-display");
}

/* Carrega o catálogo e desenha a grade. */
async function iniciarHub() {
  mapearElementos();
  ligarEventos();

  try {
    const resposta = await fetch(Hub.caminhoJson);
    if (!resposta.ok) throw new Error("Falha ao buscar projects.json");

    Hub.projetos = await resposta.json();

    Hub.contador.innerHTML = `Conheça nossos <span class="contador-numero">${Hub.projetos.length}</span> projetos`;
    Hub.grade.innerHTML = Hub.projetos.map(montarCard).join("");

    restaurarEstado();
  } catch (erro) {
    console.error("Hub:", erro);
    Hub.contador.textContent = "Não foi possível carregar o catálogo";
    Hub.grade.innerHTML =
      '<p class="grade-erro">Erro ao sincronizar os projetos. Recarregue a página.</p>';
  }
}

/* Neutraliza marcação antes de interpolar dado do catálogo em HTML. */
function escapar(texto) {
  return String(texto ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
  );
}

/* Monta um card. O clique é tratado por delegação, via data-id. */
function montarCard(projeto) {
  const destaque = projeto.featured && projeto.image;
  const fundo = destaque ? ` style="background-image: url('${escapar(projeto.image)}');"` : "";

  return `
    <button type="button" class="project-card ${projeto.featured ? "featured" : ""}"
            data-id="${escapar(projeto.id)}"
            aria-label="Abrir ${escapar(projeto.title)}"${fundo}>
      <i class="${escapar(projeto.icon)} card-icon" aria-hidden="true"></i>
      <span class="badge">${escapar(projeto.category)}</span>
      <div class="card-content">
        <h3>${escapar(projeto.title)}</h3>
        <p>${escapar(projeto.description)}</p>
      </div>
    </button>
  `;
}

/* Abre o projeto no visor.
   O endereço é trocado com replaceState, não pushState: o projeto roda num
   iframe e as navegações internas dele já empilham entradas no histórico do
   topo. Empilhar mais uma nossa deixaria o botão Voltar imprevisível — o
   usuário teria de apertar várias vezes para sair. Com replaceState o
   endereço continua compartilhável e o Voltar se comporta como em qualquer
   página: sai do hub. Fechar o visor é papel do Esc e do botão. */
function abrirProjeto(titulo, url) {
  Hub.tituloVisor.textContent = titulo;
  Hub.iframe.src = url;
  Hub.visor.style.display = "flex";
  document.body.style.overflow = "hidden";

  Hub.progresso.style.width = "40%";
  Hub.iframe.onload = () => {
    Hub.progresso.style.width = "100%";
    setTimeout(() => (Hub.progresso.style.width = "0%"), 300);
  };

  gravar("hub_ultimo_projeto", JSON.stringify({ titulo, url }));
  history.replaceState({ projeto: titulo }, "", `#${encodeURIComponent(titulo)}`);
}

/* Fecha o visor e devolve a página ao estado normal. */
function fecharProjeto() {
  if (Hub.visor.style.display === "none" || !Hub.visor.style.display) return;

  Hub.visor.style.display = "none";
  Hub.iframe.src = "";
  document.body.style.overflow = "";
  remover("hub_ultimo_projeto");
  history.replaceState(null, "", location.pathname);
  document.querySelector(`[data-id]`)?.focus?.();
}

/* Reabre o último projeto visto, ou o que veio no endereço. */
function restaurarEstado() {
  const alvoHash = location.hash ? decodeURIComponent(location.hash.substring(1)) : null;
  if (alvoHash) {
    const achado = Hub.projetos.find((p) => p.title === alvoHash);
    if (achado) return abrirProjeto(achado.title, achado.path);
  }

  const salvo = ler("hub_ultimo_projeto");
  if (!salvo) return;
  try {
    const { titulo, url } = JSON.parse(salvo);
    abrirProjeto(titulo, url);
  } catch (e) {
    void e;
    remover("hub_ultimo_projeto");
  }
}

/* Liga os eventos da página: clique nos cards, fechar, Esc e botão Voltar. */
function ligarEventos() {
  Hub.grade.addEventListener("click", (evento) => {
    const card = evento.target.closest("[data-id]");
    if (!card) return;
    const projeto = Hub.projetos.find((p) => String(p.id) === card.dataset.id);
    if (projeto) abrirProjeto(projeto.title, projeto.path);
  });

  document.querySelector(".back-btn")?.addEventListener("click", () => fecharProjeto());

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") fecharProjeto();
  });

  window.addEventListener("popstate", () => fecharProjeto());
}

/* Acesso ao armazenamento local tolerante a bloqueio do navegador. */
function ler(chave) {
  try {
    return localStorage.getItem(chave);
  } catch (e) {
    void e;
    return null;
  }
}

function gravar(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (e) {
    void e;
  }
}

function remover(chave) {
  try {
    localStorage.removeItem(chave);
  } catch (e) {
    void e;
  }
}

document.addEventListener("DOMContentLoaded", iniciarHub);

/* Fim de catalog.js */
