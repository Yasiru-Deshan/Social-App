import home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Switch>
       <Route path='/' component={home} exact/>
       <Route path='/profile/:username' component={Profile} exact/>
       <Route path='/login' component={Login} exact/>
       <Route path='/register' component={Register} exact/>

    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
