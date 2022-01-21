import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom'
import Layout from './components/global/Layout'
import LoginPage from './components/LoginPage/LoginPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage'
import routes from './routes'

import { UserProvider } from './context/userContext'

function App () {
  return (
    <div className="overflow-y-hidden">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/registration" component={RegistrationPage} />
          <UserProvider>
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
