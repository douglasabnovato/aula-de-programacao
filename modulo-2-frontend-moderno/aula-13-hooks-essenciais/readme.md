# ⚡ Ementa da Aula 13: Hooks Essenciais (useEffect e useRef) | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa leva o aluno a controlar o que acontece fora da renderização: efeitos com montagem, atualização e limpeza, sincronização do estado com o localStorage e acesso direto a elementos do DOM com useRef.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Entendendo o Ciclo de Vida e o Efeito Colateral no React
* **Efeito colateral:** tudo que sai do cálculo da tela: timers, storage, rede e DOM.
* **Array de dependências:** vazio roda na montagem; com valores, roda quando eles mudam.
* **Função de limpeza:** `clearInterval` e remoção de ouvintes quando o componente sai.

### 2. Bloco 2: Persistência Local e Sincronização com o localStorage via useEffect
* **Inicialização preguiçosa:** `useState(funcao)` lê o storage uma vez só.
* **Serialização:** `JSON.stringify` para gravar e `JSON.parse` para ler.
* **Resiliência:** `try/catch` contra storage indisponível e dado corrompido.

### 3. Bloco 3: Manipulando Referências Nativas do DOM com o Hook useRef
* **Refs para o DOM:** `ref={inputRef}` e `inputRef.current.focus()`.
* **Valores que não renderizam:** `.current` muda sem redesenhar a tela.
* **`useState` ou `useRef`:** estado para o que aparece na tela; ref para o que não aparece.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Monitorando o Ciclo de Vida com useEffect - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-13-hooks-essenciais/atividades/atividade-1.html)

* **Atividade 2 (Persistindo Dados de Tarefas com useEffect e Storage - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-13-hooks-essenciais/atividades/atividade-2.html)

* **Atividade 3 (Foco Automático e Rastreamento com useRef - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-13-hooks-essenciais/atividades/atividade-3.html)
