# ⚡ Ementa da Aula 17: Consumo de APIs REST no React | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa parte de uma lista que fica vazia sem explicação e chega a um painel que lê e escreve numa API REST, com estados de carregamento, tratamento de falhas e cancelamento de requisições antigas.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Buscando Dados com fetch e useEffect
* **Busca como efeito:** `fetch` dentro de `useEffect` com dependências controladas.
* **Três estados da tela:** carregando, erro e dados decidindo o que aparece.
* **Status HTTP:** por que `resposta.ok` precisa ser conferido à mão.

### 2. Bloco 2: Criando, Atualizando e Excluindo com POST, PATCH e DELETE
* **Métodos e intenção:** POST cria, PATCH altera parte e DELETE remove.
* **Corpo em JSON:** `JSON.stringify` e o cabeçalho `Content-Type`.
* **Estado sem mutação:** spread, `map` e `filter` com atualização por função.

### 3. Bloco 3: Camada de Serviço, Hook Personalizado e Cancelamento
* **Serviço de API:** URL base e checagem de status num só módulo.
* **Hook `useBusca`:** os três estados reaproveitados em qualquer tela.
* **`AbortController`:** cancelamento na limpeza do efeito contra respostas fora de ordem.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Painel de Tarefas com Carregando, Erro e Lista - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-17-consumo-apis-rest/atividades/atividade-1.html)

* **Atividade 2 (CRUD de Tarefas contra uma API REST - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-17-consumo-apis-rest/atividades/atividade-2.html)

* **Atividade 3 (Serviço de API, Hook useBusca e Troca de Usuário sem Condição de Corrida - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-17-consumo-apis-rest/atividades/atividade-3.html)
