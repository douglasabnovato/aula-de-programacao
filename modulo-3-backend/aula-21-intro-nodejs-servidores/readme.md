# ⚡ Ementa da Aula 21: Introdução ao Node.js e Arquitetura de Servidores | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa leva o aluno do primeiro servidor HTTP escrito à mão até uma API organizada em Express, entendendo o que acontece entre o clique do usuário e a resposta que volta do servidor.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: O que é Node.js e o Modelo de Execução
* **Runtime fora do navegador:** por que o mesmo JavaScript do front roda no servidor e o que muda no que está disponível.
* **Event Loop e I/O não bloqueante:** por que um processo único atende muitas conexões ao mesmo tempo.
* **Módulos e o `package.json`:** CommonJS, ES Modules, dependências e scripts de execução.

### 2. Bloco 2: Express, Rotas e o Ciclo Requisição-Resposta
* **Por que um framework:** o que o Express resolve que o módulo http nativo deixa na sua mão.
* **Rotas e parâmetros:** path params, query strings e corpo da requisição.
* **Status HTTP como contrato:** quando devolver 200, 201, 400, 404 e 500, e por que isso não é detalhe.

### 3. Bloco 3: Organização de Projeto e Variáveis de Ambiente
* **Separação por responsabilidade:** rotas, controladores e serviços em arquivos distintos.
* **Configuração fora do código:** variáveis de ambiente e por que segredo não entra no Git.
* **Middleware e erro centralizado:** o ponto único por onde toda falha passa antes de virar resposta.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Seu Primeiro Servidor HTTP Sem Framework — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-21-intro-nodejs-servidores/atividades/atividade-1.html)

* **Atividade 2 (API de Tarefas com Express e Rotas REST — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-21-intro-nodejs-servidores/atividades/atividade-2.html)

* **Atividade 3 (Refatorando a API em Camadas com Configuração Externa — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-21-intro-nodejs-servidores/atividades/atividade-3.html)
