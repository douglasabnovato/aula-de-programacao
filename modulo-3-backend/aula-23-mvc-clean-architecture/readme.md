# ⚡ Ementa da Aula 23: Arquitetura MVC e Clean Architecture no Backend | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa mostra por que separar o código em camadas não é preciosismo: é o que permite trocar o banco, testar a regra de negócio sem subir servidor e deixar cada arquivo com um motivo só para mudar.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: MVC: a Separação que Todo Framework Assume
* **As três responsabilidades:** o que cada camada pode e não pode saber sobre as outras.
* **Controlador magro:** por que regra de negócio dentro do controlador é o cheiro mais frequente.
* **MVC numa API sem view:** o que ocupa o lugar da View quando a resposta é JSON.

### 2. Bloco 2: Clean Architecture: a Regra de Dependência
* **A regra de dependência:** o que pode importar o quê, e por que a seta nunca aponta para fora.
* **Entidade e caso de uso:** o coração do sistema, que sobrevive à troca de framework.
* **Adaptadores:** HTTP, banco e fila como detalhes plugados na borda.

### 3. Bloco 3: Quando Não Vale a Pena: o Custo da Camada
* **Custo de indireção:** cada camada é um arquivo a mais para abrir quando algo quebra.
* **Sinais de que falta camada:** o mesmo trecho repetido, teste que exige subir servidor, medo de trocar o banco.
* **Sinais de que sobra camada:** arquivo que só repassa chamada, abstração com uma implementação só.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Diagnosticando e Separando um Controlador Inchado — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-23-mvc-clean-architecture/atividades/atividade-1.html)

* **Atividade 2 (Invertendo a Dependência do Repositório — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-23-mvc-clean-architecture/atividades/atividade-2.html)

* **Atividade 3 (Avaliando a Arquitetura do Próprio Projeto — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-23-mvc-clean-architecture/atividades/atividade-3.html)
