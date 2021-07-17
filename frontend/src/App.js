import home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Switch>
       <Route path='/' component={home} exact/>
       <Route path='/profile' component={Profile} exact/>
    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
