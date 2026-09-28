# ⚡ Ementa da Aula 38: Projeto Final Fullstack — Parte 2 (Desenvolvimento e API) | ByteClass

## 🎯 Visão Geral da Ementa
A segunda parte do projeto final constrói o núcleo do sistema a partir do contrato, protege as rotas e liga o frontend à API real, com testes e revisão em dupla segurando a qualidade.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Modelo de Dados e Rotas do Núcleo
* **Migrações versionadas:** o esquema do banco evolui em arquivos numerados, iguais para todo o time.
* **Contrato como referência:** cada rota devolve exatamente o formato combinado na aula 37.
* **Regra no banco e índice:** restrição que não deixa o dado errado entrar e consulta que continua rápida.

### 2. Bloco 2: Autenticação e Integração com o Frontend
* **Senha como hash:** bcrypt com custo configurado e nenhuma senha em texto em lugar algum.
* **Token com prazo:** JWT assinado, validado por middleware em cada rota protegida.
* **Integração real:** CORS restrito e frontend tratando carregando, erro, vazio e 401.

### 3. Bloco 3: Testes, Pull Requests e Revisão em Dupla
* **Critério de aceite como teste:** o que foi combinado no escopo verificado a cada push.
* **Pull request pequeno e descrito:** o revisor entende o que mudou e como testar.
* **Revisão com roteiro:** comentário sobre comportamento e clareza, não só sobre estilo.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Implementando as Rotas do MVP a partir do Contrato):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento/atividades/atividade-1.html)

* **Atividade 2 (Login, Rotas Protegidas e Tela Ligada à API):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento/atividades/atividade-2.html)

* **Atividade 3 (Critérios de Aceite como Testes e Revisão Cruzada):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-38-projeto-final-desenvolvimento/atividades/atividade-3.html)
