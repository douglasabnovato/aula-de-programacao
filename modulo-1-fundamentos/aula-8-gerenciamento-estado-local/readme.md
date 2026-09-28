# ⚡ Ementa da Aula 8: Gerenciamento de Estado Local | ByteClass

## 🎯 Visão Geral da Ementa
O aluno troca o hábito de alterar o DOM em vários lugares por um estado único que redesenha a tela, depois concentra os eventos num ouvinte com ações nomeadas e termina persistindo o estado no navegador. É a base do que o Módulo 2 faz com React.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Estado Único e Renderização a partir dos Dados
* **Fonte única de verdade:** um objeto de estado decide tudo o que aparece na tela.
* **Dado derivado:** calcular contadores e listas filtradas em vez de guardá-los.
* **setEstado e render:** toda mudança passa por uma função que atualiza e redesenha.

### 2. Bloco 2: Ações, Delegação de Eventos e data-attributes
* **Bubbling e delegação:** um ouvinte no container atende todos os botões filhos.
* **data-attributes:** `data-acao` e `data-id` levando a intenção do clique para o JavaScript.
* **Ações e função de atualização:** mudanças descritas como objetos e aplicadas num lugar só.

### 3. Bloco 3: Persistência com localStorage
* **localStorage:** armazenamento por site que sobrevive ao recarregamento.
* **JSON como formato:** `stringify` para salvar e `parse` para restaurar.
* **Leitura defensiva:** chave com versão e `try/catch` contra dado corrompido ou bloqueado.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Quadro de Tarefas com Estado Único - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-8-gerenciamento-estado-local/atividades/atividade-1.html)

* **Atividade 2 (Lista de Compras com Delegação de Eventos - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-8-gerenciamento-estado-local/atividades/atividade-2.html)

* **Atividade 3 (Rastreador de Hábitos com localStorage - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-8-gerenciamento-estado-local/atividades/atividade-3.html)
