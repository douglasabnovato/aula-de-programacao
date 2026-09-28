# ⚡ Ementa da Aula 36: Monitoramento, Logs e Observabilidade | ByteClass

## 🎯 Visão Geral da Ementa
A aula monta as três fontes de informação de um sistema em produção: logs para entender uma requisição, métricas para ver a saúde do todo e SLO com alertas para saber quando agir.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Logs Estruturados e o Rastro de Cada Requisição
* **Log em JSON:** cada linha com nível, horário, serviço e contexto, pronta para filtro.
* **Identificador de requisição:** um id que liga todas as linhas de um mesmo pedido.
* **O que não registrar:** senha, token e dado pessoal ocultados na origem.

### 2. Bloco 2: Métricas, Health Checks e os Quatro Sinais de Ouro
* **Quatro sinais de ouro:** tráfego, erros, latência e saturação como mínimo a medir.
* **Contador e histograma:** os tipos de métrica que cobrem volume e tempo de resposta.
* **Vivo e pronto:** dois health checks com perguntas diferentes para o orquestrador.

### 3. Bloco 3: SLO, Alertas e a Resposta ao Incidente
* **SLI, SLO e orçamento de erro:** o número combinado e quanto de falha ele permite.
* **Alerta sobre sintoma:** avisar quando o usuário é afetado, não a cada pico de CPU.
* **Runbook:** o primeiro passo escrito antes do incidente acontecer.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Logs em JSON com Identificador de Requisição):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-36-monitoramento-logs/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-36-monitoramento-logs/atividades/atividade-1.html)

* **Atividade 2 (Endpoint de Métricas e Prometheus no Compose):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-36-monitoramento-logs/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-36-monitoramento-logs/atividades/atividade-2.html)

* **Atividade 3 (SLO da API, Regras de Alerta e Runbook):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-4-fullstack-devops/aula-36-monitoramento-logs/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-4-fullstack-devops/aula-36-monitoramento-logs/atividades/atividade-3.html)
