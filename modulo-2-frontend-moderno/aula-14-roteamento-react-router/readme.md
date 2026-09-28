# ⚡ Ementa da Aula 14: Roteamento com React Router | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa parte de uma aplicação de telas alternadas por estado e chega a uma SPA com rotas declarativas, páginas dinâmicas por parâmetro e uma área do cliente protegida com layout compartilhado.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: SPAs e Rotas Declarativas
* **SPA e histórico do navegador:** por que a troca de tela não precisa pedir uma página nova ao servidor.
* **`BrowserRouter`, `Routes` e `Route`:** o mapa entre endereço e componente, incluindo a rota coringa `*`.
* **`Link` no lugar de `<a>`:** navegação sem recarregar e com voltar e avançar funcionando.

### 2. Bloco 2: Rotas Dinâmicas e Parâmetros de URL
* **Segmentos dinâmicos:** uma rota `/livros/:id` que atende qualquer item do catálogo.
* **`useParams` e tipos:** o parâmetro chega como texto e precisa de conversão antes da busca.
* **Query string como estado:** filtros compartilháveis com `useSearchParams`.

### 3. Bloco 3: Layouts Aninhados e Rotas Protegidas
* **Rotas aninhadas e `Outlet`:** um layout pai com as telas filhas renderizadas dentro dele.
* **`NavLink` e rota índice:** destaque da tela atual e conteúdo padrão da rota pai.
* **Guardião de rotas:** `Navigate` com `replace` para barrar acesso sem login.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Três Páginas com BrowserRouter, Routes e Link - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-14-roteamento-react-router/atividades/atividade-1.html)

* **Atividade 2 (Catálogo com Página de Detalhe e Filtro na URL - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-14-roteamento-react-router/atividades/atividade-2.html)

* **Atividade 3 (Área do Cliente com Layout Compartilhado e Rota Protegida - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-14-roteamento-react-router/atividades/atividade-3.html)
