# ⚡ Ementa da Aula 39: Projeto Final Fullstack — Parte 3 (Deploy e Produção) | ByteClass

## 🎯 Visão Geral da Ementa
A terceira parte do projeto final leva a aplicação do Compose local para três serviços gratuitos na internet, com o código preparado para produção e um plano escrito para quando algo quebrar.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Preparando o Projeto para Produção
* **Configuração pelo ambiente:** porta, banco, origem e segredo vindos de variáveis.
* **Segurança mínima:** Helmet, CORS restrito e erro sem pilha para o usuário.
* **Scripts de produção:** start e migração separados das ferramentas de desenvolvimento.

### 2. Bloco 2: Deploy em Hospedagem Gratuita: Banco, API e Frontend
* **Ordem de publicação:** banco, depois API, depois frontend, cada um com o endereço do anterior.
* **Planos gratuitos:** Neon ou Supabase, Render free e Vercel, Netlify ou GitHub Pages, com seus limites.
* **Variável no build:** a URL da API entra no frontend na hora do build, não na execução.

### 3. Bloco 3: Pós-Deploy: Verificação, Monitoramento e Plano de Volta
* **Teste de fumaça:** três chamadas que dizem em segundos se o deploy deu certo.
* **Checagem agendada:** o GitHub Actions avisando antes do usuário ligar.
* **Runbook e pós-incidente:** o caminho de volta escrito e o aprendizado registrado sem culpados.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Checklist de Prontidão para Produção):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-39-projeto-final-deploy/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-39-projeto-final-deploy/atividades/atividade-1.html)

* **Atividade 2 (Publicando as Três Partes em Planos Gratuitos):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-39-projeto-final-deploy/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-39-projeto-final-deploy/atividades/atividade-2.html)

* **Atividade 3 (Teste de Fumaça, Checagem Agendada e Runbook de Reversão):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-39-projeto-final-deploy/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-39-projeto-final-deploy/atividades/atividade-3.html)
