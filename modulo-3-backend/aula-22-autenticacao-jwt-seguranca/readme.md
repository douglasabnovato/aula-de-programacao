# ⚡ Ementa da Aula 22: Autenticação, JWT e Segurança de APIs | ByteClass

## 🎯 Visão Geral da Ementa
Esta ementa trata do que separa uma API de estudo de uma API que pode ir para produção: guardar senha do jeito certo, emitir e verificar token, e fechar as portas que ficam abertas por padrão.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Autenticação, Autorização e Senha em Repouso
* **Autenticação × autorização:** identidade e permissão são decisões separadas, em momentos separados.
* **Hash com salt:** por que senha nunca é guardada nem criptografada, e sim resumida com bcrypt ou argon2.
* **Fluxos comuns:** sessão com cookie, token stateless e quando cada um faz sentido.

### 2. Bloco 2: JSON Web Token: Emissão e Verificação
* **Anatomia do JWT:** header, payload e assinatura, e por que o payload é apenas codificado em Base64.
* **Emissão no login:** o que colocar como claim, tempo de expiração e onde guardar a chave.
* **Middleware de verificação:** proteger rotas lendo o cabeçalho Authorization.

### 3. Bloco 3: Superfície de Ataque: CORS, Injeção e Rate Limit
* **CORS:** o que o navegador bloqueia, o que não bloqueia, e por que liberar tudo é o caminho fácil e errado.
* **Injeção:** por que entrada do usuário nunca é concatenada em consulta ou comando.
* **Limite de tentativa e cabeçalhos:** rate limit no login e os cabeçalhos que o Helmet adiciona.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Cadastro e Login com Senha em Hash — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-22-autenticacao-jwt-seguranca/atividades/atividade-1.html)

* **Atividade 2 (Emitindo e Validando o Token de Acesso — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-22-autenticacao-jwt-seguranca/atividades/atividade-2.html)

* **Atividade 3 (Fechando as Portas Abertas da API — Código-Fonte):**
  *Esta atividade roda fora do navegador e exige o ambiente descrito no próprio material.*
  [Visualizar Código-Fonte no Repositório](https://github.com/douglasabnovato/aula-de-programacao/tree/main/modulo-3-backend/aula-22-autenticacao-jwt-seguranca/atividades/atividade-3.html)
