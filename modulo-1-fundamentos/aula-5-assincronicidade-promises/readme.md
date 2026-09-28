# ⚡ Ementa da Aula 5: Assincronicidade e Promises | ByteClass

## 🎯 Visão Geral da Ementa
O aluno começa vendo a página congelar com uma espera bloqueante, passa por callbacks e Promises e termina escrevendo fluxos assíncronos legíveis com async/await. Nesta aula as esperas são simuladas; a rede de verdade entra na Aula 6.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Código Assíncrono, Callbacks e o Event Loop
* **Uma única linha de execução:** por que um laço demorado congela cliques e redesenho da página.
* **Callbacks:** entregar uma função para ser chamada quando o resultado ficar pronto.
* **Event loop:** pilha de chamadas, fila de tarefas e a ordem real de execução do `setTimeout`.

### 2. Bloco 2: Promises: then, catch e Promise.all
* **Estados de uma Promise:** pendente, cumprida e rejeitada, e o construtor com `resolve` e `reject`.
* **Encadeamento:** `then` que retorna a próxima etapa, um `catch` só e limpeza com `finally`.
* **Paralelismo:** `Promise.all` para esperar várias operações ao mesmo tempo.

### 3. Bloco 3: async/await e Tratamento de Falhas
* **async e await:** a mesma Promise escrita como código de cima para baixo.
* **try/catch/finally:** capturar rejeições e garantir que a interface volte ao normal.
* **Promise.allSettled:** receber o resultado de cada operação, inclusive das que falharam.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Simulador de Espera: Bloqueante x Callback - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-5-assincronicidade-promises/atividades/atividade-1.html)

* **Atividade 2 (Pedido com Promises Encadeadas e Promise.all - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-5-assincronicidade-promises/atividades/atividade-2.html)

* **Atividade 3 (Confirmação de Agendamento com async/await - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-5-assincronicidade-promises/atividades/atividade-3.html)
