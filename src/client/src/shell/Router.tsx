import React, { SFC, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { PlatformAdapter, withPlatform } from 'rt-components'

const OpenFinRoute = lazy(() => import('./routes/OpenFinRoute'))
const ShellRoute = lazy(() => import('./routes/ShellRoute'))
const AnalyticsRoute = lazy(() => import('./routes/AnalyticsRoute'))
const BlotterRoute = lazy(() => import('./routes/BlotterRoute'))
const SpotRoute = lazy(() => import('./routes/SpotRoute'))

const ShellSwitchRoute = ({ header, platform }: { header: React.ReactChild; platform: PlatformAdapter }) =>
  platform.name === 'openfin' ? <OpenFinRoute /> : <ShellRoute header={header} />

const ShellSwitchRouteWithPlatform = withPlatform(ShellSwitchRoute)

export const Router: SFC = () => (
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/" component={ShellSwitchRouteWithPlatform} />
        <Route path="/analytics" component={AnalyticsRoute} />
        <Route path="/blotter" component={BlotterRoute} />
        <Route path="/spot/:symbol" component={SpotRoute} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)
