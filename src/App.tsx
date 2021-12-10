import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import Layout from './components/global/Layout'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import routes from './routes'
import { isLogin } from './services/auth.service'

import { UserProvider } from './context/userContext'

function App () {
  return (
    <div className="overflow-y-hidden">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          {isLogin()
            ? ''
            : <Redirect to="login"/>}
          <UserProvider>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <Layout>
                      <div className="flex flex-col mx-6 mt-20">
                        <route.component
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
