# ⚡ Ementa da Aula 6: Consumo de APIs com Fetch | ByteClass

## 🎯 Visão Geral da Ementa
O aluno sai das esperas simuladas da Aula 5 para requisições reais: primeiro lê e renderiza dados de uma API, depois trata cada desfecho possível, e por fim monta URLs a partir de um formulário e envia dados com POST.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: fetch, JSON e Renderização de Dados Externos
* **Requisição e resposta:** o que o `fetch` devolve e por que o corpo é lido numa segunda etapa.
* **JSON na tela:** transformar a resposta em cards com `map` e template literals.
* **Paginação pela URL:** parâmetros `_start` e `_limit` para carregar dados aos poucos.

### 2. Bloco 2: Estados de Carregamento, Erro e Resposta Vazia
* **Os quatro estados:** carregando, sucesso, vazio e erro, cada um com mensagem própria.
* **response.ok e status:** por que o fetch não rejeita em 404 e quem precisa conferir.
* **Tempo limite:** cancelar requisições lentas com `AbortSignal.timeout`.

### 3. Bloco 3: Parâmetros na URL, Envio de Dados e Formulário de CEP
* **URL a partir do usuário:** limpar, validar e codificar o dado antes da requisição.
* **Regras da API:** o campo `erro` do ViaCEP e a importância de ler a documentação.
* **Enviando dados:** `method`, `headers` e `body` com `JSON.stringify` num POST.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Mural de Posts com fetch - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-6-consumo-apis-fetch/atividades/atividade-1.html)

* **Atividade 2 (Lista de Tarefas com Carregando, Sucesso, Vazio e Erro - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-6-consumo-apis-fetch/atividades/atividade-2.html)

* **Atividade 3 (Cadastro de Endereço com ViaCEP e POST - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-1-fundamentos/aula-6-consumo-apis-fetch/atividades/atividade-3.html)
