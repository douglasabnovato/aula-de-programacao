# ⚡ Ementa da Aula 16: Gerenciamento de Formulários e Validação | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa parte de um formulário com um estado por campo e chega a um agendamento com estado único, validação acessível e envio protegido contra duplicidade.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Inputs Controlados e Estado do Formulário
* **Input controlado:** o valor na tela vem do estado e só muda pelo `onChange`.
* **Estado em objeto:** uma função `atualizar` genérica com `name`, `value` e `checked`.
* **Rótulos e agrupamentos:** `label` com `htmlFor`, `fieldset` e `legend` para radios.

### 2. Bloco 2: Validação e Mensagens de Erro
* **Validação como função pura:** `validar(valores)` devolve os erros sem efeitos colaterais.
* **Momento certo da mensagem:** campos visitados controlados pelo `onBlur`.
* **Erros acessíveis:** `aria-invalid` e `aria-describedby` ligando campo e mensagem.

### 3. Bloco 3: Envio, Estados de Submissão e Retorno ao Usuário
* **`onSubmit` e `preventDefault`:** o envio tratado pelo React sem recarregar a página.
* **Estados do envio:** parado, enviando, sucesso e erro, com o botão bloqueado durante o envio.
* **Retorno ao usuário:** mensagem em região `aria-live` e foco no primeiro campo inválido.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Formulário de Agendamento com Estado Único - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-16-formularios-validacao/atividades/atividade-1.html)

* **Atividade 2 (Validação por Campo com Mensagens Acessíveis - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-16-formularios-validacao/atividades/atividade-2.html)

* **Atividade 3 (Envio com Estados, Proteção contra Duplo Clique e Mensagem de Retorno - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-16-formularios-validacao/atividades/atividade-3.html)
