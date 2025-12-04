const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'support/e2e.ts', // Caminho corrigido
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const db = require('./cypress/plugins/db');
      on('task', {
        createHero: db.createHero,
        deleteHero: db.deleteHero,
      });
    },
  },
  component: {
    supportFile: false, // Desabilita o suporte a componentes
  }
})
