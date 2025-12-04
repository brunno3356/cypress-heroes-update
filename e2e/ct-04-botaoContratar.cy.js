import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";
import HireButtonPage from "../pages/hireButtonPage";

const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()
const hireButtonPage = new HireButtonPage()

describe('CT-04 - Clicar no botão contratar',() => {
it('Clicar no botão contratar, sem logar na ferramenta', () => {
    loginPage.accessHomePage()
    hireButtonPage.clickHireButton()
    hireButtonPage.checkLoginAlert()
    })
})