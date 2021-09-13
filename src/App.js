import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Second from './pages/Second';
import Show from './pages/Show';


function App() {
  return (
    
   <Switch>
<Route exact path="/">
  <Home/>
</Route>

<Route exact path="/starred">
  <Second/>
</Route>

<Route exact path="/show/:id">
  <Show/>
</Route>

<Route>
  <div> Page not found.</div>
</Route>

    </Switch>
    
    );
    
}

export default App;
