# ⚡ Ementa da Aula 35: Arquitetura de Microsserviços e Escalabilidade | ByteClass

## 🎯 Visão Geral da Ementa
A aula sai de uma API única e extrai o primeiro serviço com motivo claro, protege a chamada de rede nova contra falhas e termina com várias cópias da mesma API atendendo juntas sem guardar estado próprio.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Monolito, Microsserviços e Onde Cortar
* **Capacidade de negócio:** dividir pelo que muda e falha junto, não por camada técnica.
* **Monolito primeiro:** extrair serviço quando a fronteira está clara, não antes.
* **Custo da rede:** toda divisão troca uma chamada de função por uma chamada que pode falhar.

### 2. Bloco 2: Comunicação entre Serviços e Falhas Parciais
* **Tempo máximo de espera:** uma dependência lenta não pode prender o cliente.
* **Retry com intervalo crescente:** repetir só o que é transitório, sem sobrecarregar quem já está mal.
* **Disjuntor e degradação:** parar de chamar quem está fora e responder algo útil mesmo assim.

### 3. Bloco 3: Escalando na Horizontal sem Estado no Processo
* **Processo sem estado:** sessão, contador e carrinho fora da memória do processo.
* **Balanceamento de carga:** o Nginx distribuindo requisições entre réplicas.
* **Serviço de apoio compartilhado:** o Redis como estado único para todas as cópias.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Extraindo o Serviço de Notificações do Monolito):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade/atividades/atividade-1.html)

* **Atividade 2 (Pedidos que Sobrevivem à Queda das Notificações):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade/atividades/atividade-2.html)

* **Atividade 3 (Três Réplicas atrás do Nginx com Estado no Redis):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-35-microsservicos-escalabilidade/atividades/atividade-3.html)
