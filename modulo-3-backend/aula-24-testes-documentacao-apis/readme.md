# ⚡ Ementa da Aula 24: Testes Automatizados e Documentação de APIs | ByteClass

## 🎯 Visão Geral da Ementa
O percurso vai do teste mais rápido, que isola a regra de negócio, ao teste que passa pelo HTTP, e termina no contrato OpenAPI que documenta o que os testes garantem.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Testes Unitários da Regra de Negócio
* **Pirâmide de testes:** por que ter muitos testes unitários rápidos e poucos testes lentos.
* **Dublês com jest.fn:** substituir o repositório real para testar só o caso de uso.
* **Cobertura:** o que o relatório mostra e o que ele não garante.

### 2. Bloco 2: Testes de Integração das Rotas HTTP
* **App separado do servidor:** a fábrica criarApp que permite testar sem abrir porta.
* **Supertest:** requisições reais com asserções de status, cabeçalho e corpo.
* **Estado isolado:** beforeEach para que um teste não dependa da ordem do outro.

### 3. Bloco 3: Documentação da API com OpenAPI e Swagger UI
* **OpenAPI:** o formato padrão que descreve rotas, corpos e respostas.
* **Esquemas reutilizáveis:** components e $ref para não repetir definição.
* **Swagger UI:** a página que lê o contrato e permite testar cada rota.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Testando o Caso de Uso CriarTarefa com Jest):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-24-testes-documentacao-apis/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-24-testes-documentacao-apis/atividades/atividade-1.html)

* **Atividade 2 (Testando a API de Tarefas com Supertest):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-24-testes-documentacao-apis/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-24-testes-documentacao-apis/atividades/atividade-2.html)

* **Atividade 3 (Contrato OpenAPI da API de Tarefas Servido pelo Swagger UI):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-24-testes-documentacao-apis/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-24-testes-documentacao-apis/atividades/atividade-3.html)
