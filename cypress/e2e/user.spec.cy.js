import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import InfoPage from "../pages/myinfoPage"
import MyInfoPage from "../pages/myinfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {
   loginPage.acessLoginPage()
   loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

   dashboardPage.checkDashboard()

   menuPage.acessMyPerformance()
   menuPage.acessRecruitment()
   menuPage.acessMyTime()
   menuPage.acessLeaveButto()
   menuPage.acessPim()
   menuPage.acessAdmin()
   menuPage.acessMyInfo()

   myinfoPage.fillPersonalDetails("First Name", "Last Name")
   myinfoPage.fillEmployeeDetails("EmployeeId", "OtherId", "123467", "2025-07-29")
   myinfoPage.fillStatusDetails("1990-09-29")
   myinfoPage.customFields("Teste")
   myinfoPage.saveForm()

   })

})









 