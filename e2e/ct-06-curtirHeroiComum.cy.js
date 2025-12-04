import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";
import HireButtonPage from "../pages/hireButtonPage";

const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()
const hireButtonPage = new HireButtonPage()

describe('CT-06 - Curtir herói logado como Comum', () => {

    beforeEach(() => {
        loginPage.accessHomePage()
        loginPage.accessLoginPage()
        loginPage.login(userData.userDefault.username, userData.userDefault.password)
    })



    it('Clicar no botão curtir herói, com o perfil Comum logado', () => {
        likeButtonPage.clickLikeButton()
    })
})