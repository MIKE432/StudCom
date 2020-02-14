import MainPage from '../components/LandingPage/LandingPage';
import RegisterPage from '../components/RegisterPage/RegisterPage';

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
