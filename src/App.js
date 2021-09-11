import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs'
import Home from './pages/Home';
import Second from './pages/Second';

function App() {
  return (
    <div>
      <Navs/>
   <Switch>
<Route exact path="/">
  <Home/>
</Route>

<Route exact path="/second">
  <Second/>
</Route>

<Route>
  <div> Page not found.</div>
</Route>

    </Switch>
    </div>
    );
    
}

export default App;
