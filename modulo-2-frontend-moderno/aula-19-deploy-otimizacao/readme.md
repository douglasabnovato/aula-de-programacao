# ⚡ Ementa da Aula 19: Deploy e Otimização de Performance | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa parte de um projeto que só roda na máquina de quem escreveu e chega a uma aplicação publicada no GitHub Pages, medida com o Profiler e o Lighthouse e dividida em partes carregadas sob demanda.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Build de Produção, Variáveis de Ambiente e Deploy
* **Build e preview:** `npm run build` gera `dist/`; `npm run preview` testa o resultado localmente.
* **Variáveis `VITE_`:** configuração por modo e por que nada nelas é segredo.
* **GitHub Pages:** workflow de deploy gratuito, `base` do repositório e fallback de rotas da SPA.

### 2. Bloco 2: Renderizações, memo, useMemo e useCallback
* **Medir antes:** Profiler do React Developer Tools como ponto de partida.
* **`useMemo` e `memo`:** cálculo caro e componente que só rodam quando algo muda.
* **`useCallback`:** função estável para não anular o `memo` do filho.

### 3. Bloco 3: Code Splitting, Lazy Loading e Métricas
* **`lazy` e `import()`:** código separado em arquivos baixados sob demanda.
* **`Suspense`:** fallback enquanto o arquivo chega.
* **Imagens e métricas:** `loading="lazy"`, dimensões reservadas, Lighthouse e LCP.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Publicando a SPA com Configuração por Ambiente - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-19-deploy-otimizacao/atividades/atividade-1.html)

* **Atividade 2 (Medindo e Otimizando uma Lista de 2.000 Sessões - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-19-deploy-otimizacao/atividades/atividade-2.html)

* **Atividade 3 (Separando a Área Administrativa com lazy e Suspense - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-19-deploy-otimizacao/atividades/atividade-3.html)
