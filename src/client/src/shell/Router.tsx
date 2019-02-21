import React, { SFC, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { PlatformContext } from 'rt-components'
import { AnalyticsRoute, BlotterRoute, OpenFinRoute, ShellRoute, SpotRoute } from './routes'

const ShellSwitchRoute = ({ header }: { header: React.ReactChild }) => {
  const platform = useContext(PlatformContext)
  return platform.name === 'openfin' ? <OpenFinRoute /> : <ShellRoute header={header} />
}

export const Router: SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ShellSwitchRoute} />
      <Route path="/analytics" component={AnalyticsRoute} />
      <Route path="/blotter" component={BlotterRoute} />
      <Route path="/spot/:symbol" component={SpotRoute} />
    </Switch>
  </BrowserRouter>
)
