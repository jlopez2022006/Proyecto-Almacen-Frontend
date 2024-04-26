import { AuthPage } from './pages/auth/authPage.jsx'
import { PrincipalPage } from './pages/principal/PrincipalPage.jsx';

const routes = [
    { path: '/auth', element: < AuthPage /> },
    { path: '/*', element: < PrincipalPage /> }
];

export default routes;
