import LoginPage from "../pages/loginPage";
import LikeButtonPage from "../pages/likeButtonPage";

const loginPage = new LoginPage()
const likeButtonPage = new LikeButtonPage()

describe('CT-03 - Clicar no botão curtir',() => {
it('Clicar no botão curtir, sem logar na ferramenta', () => {
    loginPage.accessHomePage()
    likeButtonPage.clickLikeButton()
    likeButtonPage.checkLoginAlert()
    })
})