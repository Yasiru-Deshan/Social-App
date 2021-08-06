import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/authcontext";



function App() {

  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Switch>
       <Route exact path='/'>
         {user ? <Home /> : <Register />}
         </Route> 

       <Route  path='/login'>
          {user ? <Redirect to="/" /> : <Login />}
         </Route>

       <Route path='/register' >
          {user ? <Redirect to="/" /> : <Register />}
         </Route>

         <Route path='/profile/:username' component={Profile}/>
    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
