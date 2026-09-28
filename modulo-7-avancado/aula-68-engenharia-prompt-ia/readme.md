# ⚡ Ementa da Aula 68: Engenharia de Prompt e IA Generativa para Desenvolvedores | ByteClass

## 🎯 Visão Geral da Ementa
A aula trata o modelo de linguagem como uma dependência de software: primeiro a chamada e o prompt, depois a integração com sistemas por ferramentas, por fim o teste e a defesa.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Anatomia de um Prompt e a Chamada à API
* **Instrução de sistema:** papel, regras e categorias fora da mensagem do usuário.
* **Exemplos e formato:** pares de entrada e saída e JSON exigido e validado.
* **Custo e controle:** max_tokens, temperatura e registro de tokens por chamada.

### 2. Bloco 2: Uso de Ferramentas e Saída Estruturada
* **Esquema da ferramenta:** nome, descrição e input_schema que o modelo usa para pedir a chamada.
* **Laço de execução:** tool_use, execução no código, tool_result e limite de iterações.
* **Autorização na aplicação:** o modelo pede, a aplicação decide com os dados da sessão.

### 3. Bloco 3: Avaliação e Riscos: Evals e Prompt Injection
* **Conjunto de avaliação:** casos com resposta esperada, métrica e limite de aprovação.
* **Prompt injection:** instrução escondida no dado, tratada com defesas em camadas.
* **Eval no fluxo:** suíte rodando antes de publicar mudança de prompt ou de modelo.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Classificador de mensagens com LLM):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-68-engenharia-prompt-ia/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-68-engenharia-prompt-ia/atividades/atividade-1.html)

* **Atividade 2 (Laço de tool use com autorização):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-68-engenharia-prompt-ia/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-68-engenharia-prompt-ia/atividades/atividade-2.html)

* **Atividade 3 (Eval com casos adversariais):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-68-engenharia-prompt-ia/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-68-engenharia-prompt-ia/atividades/atividade-3.html)
