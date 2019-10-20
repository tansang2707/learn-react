import React from 'react'
import { Route, Link } from 'react-router-dom'
import routes from '../../routes'

const renderRoutes = () => {
  return routes.map(({ path, component }) => (
    <Route key={path} path={path} component={component} exact />
  ))
}

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>{renderRoutes()}</main>
  </div>
)

export default App
