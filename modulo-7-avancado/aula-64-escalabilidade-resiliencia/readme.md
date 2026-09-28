# ⚡ Ementa da Aula 64: Escalabilidade, Alta Disponibilidade e Resiliência | ByteClass

## 🎯 Visão Geral da Ementa
A aula parte da medição (onde o sistema quebra), passa pela proteção contra dependências instáveis e termina com réplicas que se isolam e se desligam de forma controlada.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Capacidade Medida: Teste de Carga e Gargalos
* **Meta antes do teste:** latência no percentil 95 e taxa de erro definidas em número antes de gerar carga.
* **Rampa e ponto de quebra:** subir usuários em etapas mostra onde a curva de latência dobra.
* **Recurso saturado:** identificar se o limite é CPU, conexão de banco ou fila antes de comprar mais servidor.

### 2. Bloco 2: Padrões de Resiliência: Timeout, Retry e Circuit Breaker
* **Timeout como padrão:** nenhuma chamada de rede sem prazo máximo de espera.
* **Retry com backoff e jitter:** tentar de novo só em erro transitório, espalhando as tentativas no tempo.
* **Circuit breaker e alternativa:** parar de chamar quem está fora do ar e devolver uma resposta degradada.

### 3. Bloco 3: Alta Disponibilidade: Health Checks, Bulkhead e Falha em Cascata
* **Vivo e pronto:** dois health checks com propósitos diferentes para o orquestrador e o balanceador.
* **Bulkhead:** limitar concorrência e separar pools para que o trabalho pesado não esgote o leve.
* **Desligamento gracioso:** sair do balanceamento, terminar o que está em andamento e só então encerrar o processo.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Script de carga com rampa e metas):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-64-escalabilidade-resiliencia/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-64-escalabilidade-resiliencia/atividades/atividade-1.html)

* **Atividade 2 (Cliente resiliente para serviço externo):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-64-escalabilidade-resiliencia/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-64-escalabilidade-resiliencia/atividades/atividade-2.html)

* **Atividade 3 (API com saúde, compartimentos e shutdown):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-64-escalabilidade-resiliencia/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-64-escalabilidade-resiliencia/atividades/atividade-3.html)
