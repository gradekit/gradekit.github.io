import React from 'react';
import Landing from './controllers/landing/landing';
import Policy from './controllers/policy';
import Terms from './controllers/terms';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Landing}></Route>
          <Route path='/privacy' component={Policy}></Route>
          <Route path='/terms' component={Terms}></Route>
        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
