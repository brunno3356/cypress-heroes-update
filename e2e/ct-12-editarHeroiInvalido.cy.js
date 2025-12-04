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

describe('CT-12 - Editar herói com dados inválidos', () => {
    beforeEach(() => {
        loginPage.accessHomePage()
        loginPage.accessLoginPage()
        loginPage.login(userData.userAdmin.username, userData.userAdmin.password)
    })
    it('Logar como Admin e deixar o nome sem preenchimnento', () => {
        editHeroPage.editHeroAndClearField('name', chance.name(({ gender: 'male' })), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }))

    })

    it('Logar como Admin e deixar o preço sem preenchimnento', () => {
        editHeroPage.editHeroAndClearField('price', chance.name(({ gender: 'male' })), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }))
    })

    it('Logar como Admin e deixar o fãs sem preenchimnento', () => {
        editHeroPage.editHeroAndClearField('fans', chance.name(({ gender: 'male' })), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }))
    })

    it('Logar como Admin e deixar o salvamentos sem preenchimnento', () => {
        editHeroPage.editHeroAndClearField('saves', chance.name(({ gender: 'male' })), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }), chance.natural({ min: 1, max: 100 }))
    })
})