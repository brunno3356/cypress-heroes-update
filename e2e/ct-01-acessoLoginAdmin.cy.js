import LoginPage from "../pages/loginPage";
import userData from "../fixtures/userData.json"

const loginPage = new LoginPage()

describe('CT-01 - Acesso com login Admin',() => {
it('Acesso com sucesso com login Admin', () => {
    loginPage.accessHomePage()
    loginPage.accessLoginPage()
    loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
    })
})