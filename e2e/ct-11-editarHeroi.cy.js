import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";
import HireButtonPage from "../pages/hireButtonPage"
import CreateHeroPage from "../pages/createHeroPage";
import DeleteHeroPage from "../pages/deleteHeroPage"
import EditHeroPage from "../pages/editHeroPage"

const Chance = require('chance');

const chance = new Chance();

const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()
const hireButtonPage = new HireButtonPage()
const createHeroPage = new CreateHeroPage()
const deleteHeroPage = new DeleteHeroPage()
const editHeroPage = new EditHeroPage()

describe('CT-11 - Editar herói', () => {

    beforeEach(() => {
        loginPage.accessHomePage()
        loginPage.accessLoginPage()
        loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
    })

    it('Logar como Admin e editar um herói na ferramenta', () => {
        editHeroPage.editHeroSucess(chance.name(({ gender: 'male' })), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }))
    })
})