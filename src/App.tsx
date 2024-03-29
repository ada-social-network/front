import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import 'dotenv/config'

import Layout from './components/global/Layout'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import routes from './routes'

import { UserProvider } from './context/userContext'
import AdminPage from './components/AdminPage/AdminPage'

function App () {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <UserProvider>
            <Route exact path="/admin" component={AdminPage} />
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <Layout>
                      <div className="flex flex-col w-5/6 ml-6 mt-20">
                        <route.component
                          key={index}
                          name={route.name}
                          {...props}
                          {...route.props}
                        />
                      </div>
                    </Layout>
                  )}
                />
              )
            })}
          </UserProvider>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
