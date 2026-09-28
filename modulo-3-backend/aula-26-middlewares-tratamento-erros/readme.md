# ⚡ Ementa da Aula 26: Middlewares Globais e Tratamento de Erros | ByteClass

## 🎯 Visão Geral da Ementa
O percurso segue o caminho da requisição: primeiro a marca que a acompanha do início ao fim, depois o formato único de toda falha e, por fim, o esquema que barra dado inválido na porta.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: A Cadeia de Middlewares Globais
* **Ordem da cadeia:** por que o middleware registrado depois das rotas nunca roda.
* **Identificador por requisição:** X-Request-Id gerado ou reaproveitado para rastrear o caminho.
* **Log estruturado:** uma linha JSON com status e duração medidos no finish.

### 2. Bloco 2: Erros de Domínio e Resposta Padronizada
* **Classes de erro:** AppError e derivadas carregando o status HTTP.
* **Erro assíncrono no Express 5:** Promise rejeitada indo direto ao tratador.
* **Problem Details:** o formato da RFC 9457 e o que fica só no log.

### 3. Bloco 3: Validação de Entrada com Esquemas
* **Esquema como contrato:** tipos, limites e campos obrigatórios declarados num lugar.
* **Middleware validar:** safeParse antes do controlador e corpo substituído pelo dado limpo.
* **Erros por campo:** resposta 400 que aponta cada problema com o nome do campo.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Request ID, Tempo de Resposta e Log Estruturado):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-26-middlewares-tratamento-erros/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-26-middlewares-tratamento-erros/atividades/atividade-1.html)

* **Atividade 2 (Classes de Erro e Middleware no Formato Problem Details):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-26-middlewares-tratamento-erros/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-26-middlewares-tratamento-erros/atividades/atividade-2.html)

* **Atividade 3 (Middleware validar(esquema) com Zod):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-26-middlewares-tratamento-erros/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-26-middlewares-tratamento-erros/atividades/atividade-3.html)
