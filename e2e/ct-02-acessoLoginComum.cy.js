import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"

const loginPage = new LoginPage()

describe('CT-02 - Acesso com login Comum',() => {
it('Acesso com sucesso com login Comum', () => {
    loginPage.accessHomePage()
    loginPage.accessLoginPage()
    loginPage.login(userData.userDefault.username, userData.userDefault.password)
    })
})