import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Second from './pages/Second';


function App() {
  return (
    
   <Switch>
<Route exact path="/">
  <Home/>
</Route>

<Route exact path="/starred">
  <Second/>
</Route>



<Route>
  <div> Page not found.</div>
</Route>

    </Switch>
    
    );
    
}

export default App;
