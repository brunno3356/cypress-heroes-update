import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";
import HireButtonPage from "../pages/hireButtonPage"
import CreateHeroPage from "../pages/createHeroPage";

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()
const hireButtonPage = new HireButtonPage()
const createHeroPage = new CreateHeroPage()

describe('CT-09 - Criar herói', () => {
    beforeEach(() => {
        loginPage.accessHomePage()
        loginPage.accessLoginPage()
        loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
    })
    it('Logar como Admin e criar um herói na ferramenta', () => {

        createHeroPage.createHero()
        createHeroPage.registerInformation(chance.name(), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }))

    })
})