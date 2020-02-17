import MainPage from '../components/unloggedUser/LandingPage/LandingPage';
import RegisterPage from '../components/unloggedUser/RegisterPage/RegisterPage';

const routes: Array<Record<string, any>> = [
  {
    path: '/',
    component: MainPage
  }, {
    path: '/register',
    component: RegisterPage
  }
];

export default routes;
