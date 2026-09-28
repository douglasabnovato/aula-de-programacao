# ⚡ Ementa da Aula 18: Context API e Gerenciamento Global | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa parte de uma prop repassada por quatro componentes e chega a uma loja com tema e carrinho globais, regras centralizadas num reducer, provedores separados e carrinho persistido no navegador.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Prop Drilling e a Context API
* **Prop drilling:** o custo de repassar props por componentes que não as usam.
* **`createContext`, Provider e `useContext`:** fornecer no alto e ler onde for preciso.
* **Hook de acesso:** `useTema` com erro claro fora do provedor.

### 2. Bloco 2: Estado Global com useReducer e Context
* **Reducer como função pura:** todas as regras do carrinho num `switch` testável.
* **Ações em vez de setters:** componentes descrevem o que aconteceu com `dispatch`.
* **Valores derivados:** quantidade e total calculados a partir dos itens.

### 3. Bloco 3: Organização, Persistência e Limites do Contexto
* **Um contexto, uma responsabilidade:** provedores separados e value memorizado com `useMemo`.
* **Local antes de global:** a busca volta para o componente que a usa.
* **Persistência:** `localStorage` na inicialização do reducer e num efeito de gravação.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Tema Claro e Escuro com createContext, Provider e useContext - Online):**  
  [Acessar Demonstração da Atividade 1](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-18-context-api-global/atividades/atividade-1.html)

* **Atividade 2 (Carrinho de Compras com Reducer e Contexto - Online):**  
  [Acessar Demonstração da Atividade 2](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-18-context-api-global/atividades/atividade-2.html)

* **Atividade 3 (Provedores Separados, Value Memorizado e Carrinho Persistido - Online):**  
  [Acessar Demonstração da Atividade 3](https://douglasabnovato.github.io/aula-de-programacao/modulo-2-frontend-moderno/aula-18-context-api-global/atividades/atividade-3.html)
