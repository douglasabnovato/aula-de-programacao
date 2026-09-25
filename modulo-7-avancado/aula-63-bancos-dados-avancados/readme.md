# ⚡ Ementa da Aula 63: Bancos de Dados Avançados: Performance e NoSQL | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa ensina a diagnosticar consulta lenta com o plano de execução em vez de palpite, a decidir índice pelo que a aplicação realmente consulta, e a escolher entre relacional e NoSQL pelo formato de acesso ao dado.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Diagnóstico: o Plano de Execução
* **EXPLAIN e EXPLAIN ANALYZE:** a diferença entre o plano previsto e o executado.
* **Varredura sequencial × por índice:** quando cada uma é a escolha certa do planejador.
* **O problema N+1:** a causa mais comum de lentidão em aplicação, e como identificá-la.

### 2. Bloco 2: Índices: o que Ganha e o que Custa
* **Estrutura B-tree:** por que a ordem das colunas no índice composto muda tudo.
* **Custo de escrita e espaço:** cada índice é atualizado em todo INSERT, UPDATE e DELETE.
* **Índice parcial e de cobertura:** duas otimizações que resolvem casos específicos.

### 3. Bloco 3: Relacional ou NoSQL: o Critério é o Acesso
* **Modelagem por acesso:** no NoSQL o dado se modela pela consulta, não pela normalização.
* **Documento, chave-valor e outros:** o que cada família resolve bem.
* **Consistência e transação:** o que se ganha e o que se abre mão em cada modelo.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Encontrando e Corrigindo a Consulta Lenta — Online):**
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-63-bancos-dados-avancados/atividades/atividade-1.html)

* **Atividade 2 (Medindo o Custo Real de Cada Índice — Online):**
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-63-bancos-dados-avancados/atividades/atividade-2.html)

* **Atividade 3 (Modelando o Mesmo Domínio nos Dois Paradigmas — Online):**
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-63-bancos-dados-avancados/atividades/atividade-3.html)
