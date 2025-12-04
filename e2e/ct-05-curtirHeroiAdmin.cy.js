import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";
import HireButtonPage from "../pages/hireButtonPage";

const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()
const hireButtonPage = new HireButtonPage()

describe('CT-05 - Curtir herói logado como Admin', () => {

    beforeEach(() => {
        loginPage.accessHomePage()
        loginPage.accessLoginPage()
        loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
})

it('Clicar no botão curtir herói, com o perfil Admin logado', () => {
    likeButtonPage.clickLikeButton()
})
})