# ⚡ Ementa da Aula 28: WebSockets e Comunicação em Tempo Real | ByteClass

## 🎯 Visão Geral da Ementa
O percurso parte do custo do polling, mostra o protocolo WebSocket sem camadas, sobe para o Socket.IO com salas e fecha aplicando ao canal em tempo real as mesmas regras de acesso da API REST.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Do Polling ao WebSocket
* **Polling e seu custo:** por que perguntar a cada dois segundos não escala.
* **Handshake e upgrade:** a requisição HTTP que vira canal com status 101.
* **Difusão manual:** percorrer os clientes abertos e enviar a cada um.

### 2. Bloco 2: Socket.IO: Eventos, Difusão e Salas
* **Eventos com nome:** emit e on no lugar de mensagens genéricas.
* **Salas:** join e io.to para separar o tráfego por grupo.
* **Reconexão e confirmação:** reentrar na sala ao voltar e callback de recebimento.

### 3. Bloco 3: Autenticação e Limites na Conexão em Tempo Real
* **Autenticação no handshake:** io.use verificando o JWT enviado em auth.
* **Autorização por sala:** o token diz a quais unidades a conexão pode entrar.
* **Limites:** validação de payload e teto de eventos por conexão.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Servidor WebSocket com a Biblioteca ws):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-28-websockets-tempo-real/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-28-websockets-tempo-real/atividades/atividade-1.html)

* **Atividade 2 (Painel de Pedidos por Unidade com Socket.IO):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-28-websockets-tempo-real/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-28-websockets-tempo-real/atividades/atividade-2.html)

* **Atividade 3 (Handshake Autenticado com JWT e Salas por Permissão):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-28-websockets-tempo-real/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-28-websockets-tempo-real/atividades/atividade-3.html)
