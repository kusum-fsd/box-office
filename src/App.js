import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Second from './pages/Second';
import Third from './pages/Third';

function App() {
  return (
    
   <Switch>
<Route exact path="/">
  <Home/>
</Route>

<Route exact path="/second">
  <Second/>
</Route>

<Route exact path="/third">
  <Third/>
</Route>


<Route>
  <div> Page not found.</div>
</Route>

    </Switch>
    
    );
    
}

export default App;
