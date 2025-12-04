# 🧾 Caso de Teste — CT-12 - Editar herói

**Aplicação:** Cypress Heroes
**Autor:** Thálik Andrade Parente
**Data:** 23/10/2025  

----

**Objetivo:** Verificar se o sistema exibe mensagens de validação ao deixar campos obrigatórios vazios durante a edição.
**Pré-condições:** Conta Admin e herói criados no sistema.
**Passos:**
1. Acessar a tela inicial.
2. Realizar login com perfil Admin.
6. Clicar no botão "Edit Hero".
7. Deixar um ou mais campos obrigatórios em branco.
8. Clicar no botão "Submit".
**Resultado esperado:** O sistema exibe mensagens de erro indicando os campos obrigatórios que precisam ser preenchidos.