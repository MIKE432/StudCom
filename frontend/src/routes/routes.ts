import MainPage from '../components/unloggedUser/LandingPage/LandingPage';
import RegisterPage from '../components/unloggedUser/RegisterPage/RegisterPage';

const routes: Array<Record<string, any>> = [
  {
    path: '/',
    component: MainPage,
    isUserLoggedIn: false
  }, {
    path: '/register',
    component: RegisterPage,
    isUserLoggedIn: false
  }
];

export default routes;
