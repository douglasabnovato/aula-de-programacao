# ⚡ Ementa da Aula 66: Segurança Ofensiva e Defensiva (SecOps) | ByteClass

## 🎯 Visão Geral da Ementa
A aula vai do desenho (onde o sistema pode ser atacado), ao ataque controlado (provar e corrigir a falha) e à defesa automatizada (impedir que ela volte).

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Modelagem de Ameaças: Pensar como Quem Ataca
* **Fronteiras de confiança:** os pontos em que o dado passa de um dono para outro são onde as ameaças aparecem.
* **STRIDE:** seis categorias para não esquecer nenhum tipo de ameaça em cada fluxo.
* **Risco com dono:** probabilidade, impacto, mitigação e responsável registrados como issue.

### 2. Bloco 2: Ofensiva Controlada: Explorando e Corrigindo IDOR e Injeção
* **Ética de laboratório:** ataque só em ambiente próprio e autorizado.
* **IDOR:** autenticação não é autorização: todo acesso filtra pelo dono do recurso.
* **Injeção:** consulta parametrizada separa dado de comando, e o teste impede a regressão.

### 3. Bloco 3: DevSecOps: Segurança Automatizada no Pipeline
* **Segredos:** varredura do histórico e revogação da chave vazada.
* **Dependências:** auditoria no PR, agendamento semanal e atualização automática.
* **Pipeline com menor privilégio:** cada job recebe só a permissão que precisa.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Modelo de ameaças com STRIDE):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-66-seguranca-secops/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-66-seguranca-secops/atividades/atividade-1.html)

* **Atividade 2 (Laboratório de IDOR e injeção de SQL):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-66-seguranca-secops/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-66-seguranca-secops/atividades/atividade-2.html)

* **Atividade 3 (Workflow SecOps e Dependabot):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-7-avancado/aula-66-seguranca-secops/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-7-avancado/aula-66-seguranca-secops/atividades/atividade-3.html)
