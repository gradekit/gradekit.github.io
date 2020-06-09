import React from 'react';
import Policy from './controllers/policy';
import Terms from './controllers/terms';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path='/privacy' component={Policy}></Route>
      <Route path='/terms' component={Terms}></Route>
    </div>
  );
}

export default App;
