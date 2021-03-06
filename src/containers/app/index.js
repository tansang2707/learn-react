import React from 'react'
import { Route } from 'react-router-dom'
import routes from '../../routes'
import Header from '../Header'
import './app.scss'

const renderRoutes = () => {
  return routes.map(({ path, component }) => (
    <Route key={path} path={path} component={component} exact />
  ))
}

const App = () => (
  <div>
    {/* <header>
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </header> */}
    <Header />

    <main>{renderRoutes()}</main>
  </div>
)

export default App
