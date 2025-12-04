import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";
import HireButtonPage from "../pages/hireButtonPage"
import CreateHeroPage from "../pages/createHeroPage";
import DeleteHeroPage from "../pages/deleteHeroPage"

const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()
const hireButtonPage = new HireButtonPage()
const createHeroPage = new CreateHeroPage()
const deleteHeroPage = new DeleteHeroPage()

describe('CT-10 - Deletar herói', () => {

    beforeEach(() => {
        loginPage.accessHomePage()
        loginPage.accessLoginPage()
        loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
    })
    it('Logar como Admin e deletar um herói na ferramenta', () => {

        deleteHeroPage.deleteHero()
    })
})