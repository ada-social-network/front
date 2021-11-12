import WelcomePage from "./components/WelcomePage/WelcomePage"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import CalendarPage from "./components/CalendarPage/CalendarPage";
import FamilyPage from "./components/FamilyPage/FamilyPage";
import ForumPage from "./components/ForumPage/ForumPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage"

interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    component: any;
    props?: any;
}

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Welcome Page',
        component: WelcomePage,
        exact: true
    },
    {
        path: '/profile',
        name: 'Profile Page',
        component: ProfilePage,
        exact: true
    },
    {
        path: '/calendar',
        name: 'Calendar Page',
        component: CalendarPage,
        exact: true
    },
    {
        path: '/family',
        name: 'Family Page',
        component: FamilyPage,
        exact: true
    },
    {
        path: '/forum',
        name: 'Forum Page',
        component: ForumPage,
        exact: true
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage,
        exact: true
    },
    {
        path: '/registration',
        name: 'Registration Page',
        component: RegistrationPage,
        exact: true
    },

]

export default routes;