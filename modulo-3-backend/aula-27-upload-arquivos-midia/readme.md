# ⚡ Ementa da Aula 27: Upload de Arquivos e Gestão de Mídia no Backend | ByteClass

## 🎯 Visão Geral da Ementa
O percurso começa em receber o arquivo, passa por desconfiar dele até provar que é o que diz ser e termina guardando-o fora do servidor, com acesso controlado por link temporário.

---

## 📋 Tópicos e Conteúdo Programático (O que o aluno vai ver)

### 1. Bloco 1: Recebendo Arquivos com multipart/form-data e Multer
* **multipart/form-data:** como o corpo com arquivo é montado e por que o JSON não serve.
* **Multer:** single, array, diskStorage e os campos de req.file.
* **Campos de texto junto:** req.body e req.file lidos na mesma requisição.

### 2. Bloco 2: Validando Tamanho, Tipo e Conteúdo do Arquivo
* **Limites:** fileSize e files contra consumo sem controle de recursos.
* **Tipo declarado e tipo real:** fileFilter e assinatura pelos primeiros bytes.
* **Nome pelo servidor:** UUID e extensão definidos a partir do conteúdo detectado.

### 3. Bloco 3: Armazenamento no Supabase Storage
* **Bucket privado:** por que foto de cliente não fica em link público.
* **Arquivo e metadados:** Storage guarda o binário, o banco guarda caminho, tipo e tamanho.
* **Link assinado e compensação:** acesso temporário e remoção do arquivo quando o registro falha.

---

## 🛠️ Aplicação Prática e Dinâmica
* **Desafio de abertura:** cada tema começa com um problema concreto que a teoria e a prática vão resolver.
* **Roadmap de 10 Passos:** execução guiada de laboratórios práticos para fixar cada conceito abordado na teoria.
* **Validação com o Instrutor:** fechamento do ciclo prático com checagem individualizada dos resultados obtidos.

---

## 🔗 Respostas das Atividades - Links de Demonstração e Repositórios

* **Atividade 1 (Rota de Anexo com Multer em Disco):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-27-upload-arquivos-midia/atividades/atividade-1.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-27-upload-arquivos-midia/atividades/atividade-1.html)

* **Atividade 2 (Upload Seguro com Limites e Checagem de Assinatura):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-27-upload-arquivos-midia/atividades/atividade-2.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-27-upload-arquivos-midia/atividades/atividade-2.html)

* **Atividade 3 (Enviando a Foto ao Bucket e Gerando Link Assinado):**  
  [Abrir a página da atividade](https://douglasabnovato.github.io/aula-de-programacao/modulo-3-backend/aula-27-upload-arquivos-midia/atividades/atividade-3.html) · [Ver o arquivo no repositório](https://github.com/douglasabnovato/aula-de-programacao/blob/main/modulo-3-backend/aula-27-upload-arquivos-midia/atividades/atividade-3.html)
