import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from 'components/Index'
import Portfolio from 'components/Portfolio'
import Home from 'components/Home'

export default () => {
  return (
    <Route path="/" component={Index}>
      <IndexRoute component={Home} />
      <Route path="/portfolio" component={Portfolio} />
    </Route>
  );
}
