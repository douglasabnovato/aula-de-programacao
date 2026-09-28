# ⚡ Ementa da Aula 25: Conexão Avançada com Supabase e SQL | ByteClass

## 🎯 Visão Geral da Ementa
O percurso começa no desenho das tabelas, passa pela troca do adaptador de dados sem mexer no núcleo e termina nas políticas que decidem, linha por linha, quem vê o quê.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Modelagem Relacional e SQL no Postgres do Supabase
* **Tabelas e tipos:** CREATE TABLE, identity e timestamptz no Postgres.
* **Restrições:** NOT NULL, CHECK, UNIQUE e chave estrangeira com ON DELETE CASCADE.
* **Junção e índice:** JOIN entre tabelas e índice na coluna mais filtrada.

### 2. Bloco 2: Repositório Supabase na API Node
* **Cliente supabase-js:** uma instância única criada com URL e chave do projeto.
* **Repositório como adaptador:** o mesmo contrato da aula 23, agora falando com o banco.
* **Tratamento de retorno:** o par data e error e a diferença entre single e maybeSingle.

### 3. Bloco 3: Row Level Security e o Uso Correto das Chaves
* **Chave publicável e chave secreta:** o que pode ir ao navegador e o que só vive no servidor.
* **Row Level Security:** negar por padrão e liberar por política.
* **Políticas por dono:** using para leitura e with check para escrita com auth.uid().

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Criando as Tabelas projetos e tarefas no SQL Editor):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-25-conexao-supabase-sql/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-25-conexao-supabase-sql/atividades/atividade-1.html)

* **Atividade 2 (Trocando o Adaptador em Memória pelo TarefaSupabaseRepository):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-25-conexao-supabase-sql/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-25-conexao-supabase-sql/atividades/atividade-2.html)

* **Atividade 3 (Políticas de Acesso por Dono na Tabela tarefas):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-25-conexao-supabase-sql/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-25-conexao-supabase-sql/atividades/atividade-3.html)
