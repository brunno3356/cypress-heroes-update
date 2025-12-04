# 🧩 Testes End-to-End com Cypress

## Projeto baseado na aplicação Cypress Heroes

Este repositório faz parte do meu processo de estudos e prática em automação de testes com **Cypress**, utilizando a aplicação **Cypress Heroes**, um projeto oficial da equipe do Cypress criado para praticar automação de testes em um ambiente realista.

O foco deste projeto é desenvolver habilidades práticas de QA com base em um sistema real, aplicando boas práticas de automação e documentação de testes.

---

## 🎯 Objetivo é colocar em prática

O objetivo deste projeto é colocar em prática os aprendizados sobre:

- Identificação e documentação de cenários de teste;
- Escrita de casos de teste manuais;
- Automação end-to-end com boas práticas;
- Estruturação de Page Objects e reutilização de código.

---

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário ter:

- **Node.js** instalado (versão 18 ou superior)
- **Git** instalado e configurado
- **Cypress** instalado localmente no projeto (ou como dependência)

---

## 🚀 Como executar o projeto

 🔹 Clonar o repositório oficial da aplicação (base da automação)
   ```bash
   git clone https://github.com/cypress-io/cypress-heroes.git
   ```

🔹 Clonar este repositório com os testes automatizados
   ```bash
   git clone https://github.com/ThalikParente/qa-projeto-cypress-heroes.git
   ```

🔹 Acessar o diretório da aplicação
   ```bash
   cd cypress-heroes
   ```

🔹 Instalar as dependências
   ```bash
   npm install
   ```

🔹 Executar o servidor local (da aplicação base)
  ```bash
 npm start
  ```
O servidor roda em http://localhost:3000

🔹 Em outra janela do terminal, acessar o diretório dos testes automatizados

```bash
cd ../my-cypress-heroes
```
🔹 Abrir o Cypress para rodar os testes

   ```bash
   npx cypress open
   ```
---

## 🧩 Estrutura de Testes

Os testes deste projeto foram desenvolvidos utilizando o padrão **Page Object Model (POM)** para garantir organização, reutilização e facilidade de manutenção.

---

## 🧾 Casos de Teste Documentados

Os casos de teste manuais foram elaborados previamente e serviram de base para a automação. Cada funcionalidade da aplicação foi testada com foco em validação de fluxos críticos, mensagens de erro e comportamento esperado do sistema.

### Exemplos de Casos de teste

| ID                                                           | Nome                             | Descrição                                                                         |
| -------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------- |
| [CT-01](./casosDeTeste/ct-01-login-admin.md)                   | Login Admin                      | Verifica se o login é realizado corretamente com usuário administrador.         |
| [CT-02](./casosDeTeste/ct-02-login-comum.md)                   | Login Comum                      | Garante o acesso com credenciais de usuário padrão.                             |
| [CT-03](./casosDeTeste/ct-03-curtir-sem-login.md)              | Botão Curtir (não logado)        | Verifica se o sistema solicita login ao tentar curtir sem estar autenticado.    |
| [CT-04](./casosDeTeste/ct-04-contratar-sem-login.md)           | Botão Contratar (não logado)     | Verifica se o sistema exige login para contratar um herói.                      |
| [CT-05](./casosDeTeste/ct-05-curtir-heroi-login-admin.md)      | Curtir Herói (Admin)             | Valida o funcionamento do botão curtir com conta Admin.                         |
| [CT-06](./casosDeTeste/ct-06-curtir-heroi-login-comum.md)      | Curtir Herói (Comum)             | Valida o funcionamento do botão curtir com conta comum.                         |
| [CT-07](./casosDeTeste/ct-07-contratar-heroi-login-admin.md)   | Contratar Herói (Admin)          | Verifica a ação de contratar quando logado como Admin.                          |
| [CT-08](./casosDeTeste/ct-08-contratar-heroi-login-comum.md)   | Contratar Herói (Comum)          | Verifica a ação de contratar quando logado como usuário comum.                  |
| [CT-09](./casosDeTeste/ct-09-criar-novo-heroi.md)              | Criar Novo Herói                 | Garante que é possível criar um herói com dados válidos.                        |
| [CT-10](./casosDeTeste/ct-10-deletar-heroi.md)                 | Deletar Herói                    | Verifica se o herói pode ser removido corretamente.                             |
| [CT-11](./casosDeTeste/ct-11-editar-heroi.md)                  | Editar Herói                     | Valida a edição bem-sucedida de um herói existente.                             |
| [CT-12](./casosDeTeste/ct-12-editar-heroi-invalido.md)         | Editar Herói com Dados Inválidos | Garante que o sistema exibe alerta ao tentar salvar campos obrigatórios vazios. |


---

## 🧠 Aprendizados Gerais

✅ Aplicação de boas práticas na estruturação de testes com Cypress;  
✅ Criação de Page Objects para separar responsabilidades;  
✅ Uso de comandos reutilizáveis para melhor manutenção;  
✅ Validação de mensagens de erro e fluxos alternativos;  
✅ Compreensão da importância da cultura de qualidade dentro do time de desenvolvimento.

---

## 🧰 Recursos

📘 **Documentação do Cypress:** [https://docs.cypress.io](https://docs.cypress.io)  
🧩 **Repositório oficial do projeto base:** [https://github.com/cypress-io/cypress-heroes](https://github.com/cypress-io/cypress-heroes)  
💻 **Repositório deste projeto:** [https://github.com/thalikandrade/my-cypress-heroes](https://github.com/thalikandrade/my-cypress-heroes)  
🧩 **Projeto anterior (RWA):** [https://github.com/ThalikParente/qa-projeto-cypress](https://github.com/ThalikParente/qa-projeto-cypress)

---

📅 **Última atualização:** 27/10/2025  
👤 **Autor:** Thálik Andrade Parente  
💬 *“Qualidade não é uma fase, é uma cultura dentro do time.”*

[![Linkedin](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thálik-parente/) 
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thalik.aparente@gmail.com)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/thalik6)
