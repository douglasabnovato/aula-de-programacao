# ⚡ Ementa da Aula 67: Observabilidade, Métricas e Engenharia de Confiabilidade (SRE) | ByteClass

## 🎯 Visão Geral da Ementa
A aula transforma a coleta de métricas e logs da aula 36 em prática de SRE: meta acordada, investigação por trace e alerta que leva a ação.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: SLIs, SLOs e Orçamento de Erro
* **SLI centrado no usuário:** proporção de eventos bons na jornada que importa.
* **SLO e janela:** meta menor que 100% com período definido.
* **Política de orçamento:** o que o time faz, combinado antes, quando o orçamento acaba.

### 2. Bloco 2: Rastreamento Distribuído com OpenTelemetry
* **Trace e span:** a história de uma requisição dividida em trechos com tempo e atributos.
* **Propagação de contexto:** o cabeçalho traceparent liga os serviços.
* **Instrumentação automática e manual:** o SDK cobre HTTP e banco; o span manual cobre a regra de negócio.

### 3. Bloco 3: Alertas por Burn Rate, Plantão e Postmortem
* **Burn rate:** alertar pela velocidade de consumo do orçamento, com janela longa e curta.
* **Página ou ticket:** severidade de acordo com a urgência, com runbook no alerta.
* **Postmortem sem culpa:** impacto, linha do tempo, causa e ações com dono e prazo.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Script de SLO e política de orçamento):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-67-observabilidade-sre/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-67-observabilidade-sre/atividades/atividade-1.html)

* **Atividade 2 (Tracing distribuído com OpenTelemetry e Jaeger):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-67-observabilidade-sre/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-67-observabilidade-sre/atividades/atividade-2.html)

* **Atividade 3 (Alertas por burn rate e postmortem):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-67-observabilidade-sre/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-67-observabilidade-sre/atividades/atividade-3.html)
