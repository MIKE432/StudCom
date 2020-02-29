import UnLoggedUserMainPage from '../components/unloggedUser/LandingPage/LandingPage';
import RegisterPage from '../components/unloggedUser/RegisterPage/RegisterPage';
import LoggedUserMainPage from '../components/loggedUser/MainPage/MainPage';


const routes: Record<string, any> = {
    unloggedUser: [  {
        path: '/',
        component: UnLoggedUserMainPage,
        isUserLoggedIn: false
    }, {
        path: '/register',
        component: RegisterPage,
        isUserLoggedIn: false
    }],
    loggedUser: [{
        path: '/',
        component: LoggedUserMainPage,
        isUserLoggedIn: true
      }]
};

export default routes;
