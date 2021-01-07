import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from './containers/Container'
import { WithErrors } from './hocs/WithErrors'

import 'bootstrap/dist/css/bootstrap.min.css'


export const App = () => (
  <Switch>
    <Route exact path="/" component={Container} />
  </Switch>
)

export default WithErrors(App)

