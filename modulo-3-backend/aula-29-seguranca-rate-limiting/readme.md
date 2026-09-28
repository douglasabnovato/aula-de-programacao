# ⚡ Ementa da Aula 29: Segurança Avançada, Rate Limiting e CORS | ByteClass

## 🎯 Visão Geral da Ementa
O percurso retoma as defesas da aula 22 e as ajusta ao cenário real: vários front-ends com cookie, usuários atrás do mesmo IP e uma checagem de segurança que roda sempre antes do deploy.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: CORS em Profundidade: Preflight, Credenciais e Lista de Origens
* **Preflight:** quando o navegador pergunta antes e como o cache reduz essas chamadas.
* **Credenciais e curinga:** por que cookie e origem * não funcionam juntos.
* **Lista por ambiente:** origens vindas do .env e o limite do que o CORS protege.

### 2. Bloco 2: Rate Limiting em Camadas e por Identidade
* **Camadas de limite:** global, rota cara e login com regras diferentes.
* **Chave por identidade:** keyGenerator com usuário autenticado e IP como reserva.
* **Comunicação do limite:** cabeçalhos RateLimit, status 429 e Retry-After.

### 3. Bloco 3: Auditoria de Segurança: Segredos, Dependências e Cabeçalhos
* **Dependências:** npm audit, gravidade e correção sem quebrar a aplicação.
* **Segredos e ambiente:** validação na subida, .env.example e rotação de chave vazada.
* **Cabeçalhos e log:** CSP para API JSON e log sem dado sensível.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (CORS com Lista de Origens por Ambiente e Cookie de Sessão):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-29-seguranca-rate-limiting/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-29-seguranca-rate-limiting/atividades/atividade-1.html)

* **Atividade 2 (Três Camadas de Limite com express-rate-limit):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-29-seguranca-rate-limiting/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-29-seguranca-rate-limiting/atividades/atividade-2.html)

* **Atividade 3 (Checklist Automatizado de Segurança Antes do Deploy):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-29-seguranca-rate-limiting/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-29-seguranca-rate-limiting/atividades/atividade-3.html)
