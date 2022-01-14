import WelcomePage from './components/WelcomePage/WelcomePage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import CalendarPage from './components/CalendarPage/CalendarPage'
import FamilyPage from './components/FamilyPage/FamilyPage'
import ForumPage from './components/ForumPage/ForumPage'
import { useParams } from 'react-router'

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
    path: '/profile/:id',
    name: 'Profile Page',
    component: ProfilePage(useParams(id)),
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
  }
]

export default routes
