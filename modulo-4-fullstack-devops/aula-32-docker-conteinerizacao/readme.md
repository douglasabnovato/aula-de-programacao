# ⚡ Ementa da Aula 32: Docker e Conteinerização de Aplicações | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa resolve a frase mais cara do desenvolvimento de software — 'na minha máquina funciona' — empacotando a aplicação com tudo de que ela precisa para rodar igual em qualquer lugar.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Imagem, Contêiner e o Problema que Isso Resolve
* **Imagem × contêiner:** o molde e a instância em execução.
* **Camadas:** por que cada instrução do Dockerfile vira uma camada, e o que isso faz com o cache.
* **Isolamento:** o que o contêiner compartilha com o sistema e o que ele não vê.

### 2. Bloco 2: Escrevendo o Dockerfile da Sua API
* **Instruções essenciais:** FROM, WORKDIR, COPY, RUN, EXPOSE e CMD.
* **Cache de camada:** por que copiar o package.json antes do código-fonte.
* **`.dockerignore`:** o que nunca deve entrar na imagem.

### 3. Bloco 3: Volumes, Variáveis e o Contêiner que Não Perde Dado
* **Sistema de arquivos efêmero:** por que o dado sumiu quando o contêiner reiniciou.
* **Volumes e bind mounts:** persistir dado e montar o código para desenvolver com recarga.
* **Configuração em execução:** passar variáveis sem reconstruir a imagem.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Primeiro Contêiner e Exploração das Camadas — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-4-fullstack-devops/aula-32-docker-conteinerizacao/atividades/atividade-1.html)

* **Atividade 2 (Empacotando a API do Módulo 3 — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-4-fullstack-devops/aula-32-docker-conteinerizacao/atividades/atividade-2.html)

* **Atividade 3 (Persistência e Configuração sem Rebuild — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-4-fullstack-devops/aula-32-docker-conteinerizacao/atividades/atividade-3.html)
