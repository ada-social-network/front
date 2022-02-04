import WelcomePage from './components/WelcomePage/WelcomePage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import CalendarPage from './components/CalendarPage/CalendarPage'
import FamilyPage from './components/FamilyPage/FamilyPage'
import ForumPage from './components/ForumPage/ForumPage'
import TopicPage from './components/ForumPage/TopicPage'
import PostPage from './components/ForumPage/PostPage'
import ParamPage from './components/ParamPage/ParamPage'
import AdminPage from './components/AdminPage/AdminPage'

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
    component: ProfilePage,
    exact: true
  },
  {
    path: '/params',
    name: 'Params Page',
    component: ParamPage,
    exact: true
  },
  {
    path: '/admin',
    name: 'Admin Page',
    component: AdminPage,
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
    path: '/forum/categories/:id',
    name: 'Topic Page',
    component: TopicPage,
    exact: true
  },
  {
    path: '/forum/topics/:id',
    name: 'Post Page',
    component: PostPage,
    exact: true
  }
]

export default routes
