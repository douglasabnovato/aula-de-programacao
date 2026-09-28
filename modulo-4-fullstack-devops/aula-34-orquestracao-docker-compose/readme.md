# ⚡ Ementa da Aula 34: Orquestração com Docker Compose | ByteClass

## 🎯 Visão Geral da Ementa
A aula parte de dois contêineres soltos e chega a uma aplicação descrita num único arquivo: rede entre serviços, dado que sobrevive ao contêiner, subida na ordem certa e configuração separada por ambiente.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: O compose.yaml: Serviços, Rede e a Aplicação Inteira num Arquivo
* **Serviços e projeto:** o que é um serviço, como o Compose nomeia contêineres e redes do projeto.
* **Nome do serviço como endereço:** por que a API acha o banco em `db` e não em `localhost`.
* **Comandos essenciais:** up, down, ps, logs e exec no fluxo de trabalho diário.

### 2. Bloco 2: Volumes, Healthcheck e a Ordem de Subida
* **Volume nomeado:** o dado vive fora do contêiner e sobrevive ao down.
* **Script de inicialização:** carga inicial que só roda com a pasta de dados vazia.
* **Healthcheck e depends_on:** esperar o banco aceitar conexão em vez de adivinhar tempo.

### 3. Bloco 3: Configuração por Ambiente: .env, Override, Perfis e Watch
* **Interpolação e .env:** senha fora do arquivo versionado e variável obrigatória que falha cedo.
* **Override e arquivos de produção:** um arquivo base e só as diferenças por ambiente.
* **Perfis e watch:** serviços opcionais e código refletido sem rebuild manual.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (API e PostgreSQL Subindo Juntos com um Comando):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose/atividades/atividade-1.html)

* **Atividade 2 (Banco Persistente com Healthcheck e Script de Carga Inicial):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose/atividades/atividade-2.html)

* **Atividade 3 (Um Arquivo Base, Dois Ambientes e Nenhuma Senha no Git):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-34-orquestracao-docker-compose/atividades/atividade-3.html)
