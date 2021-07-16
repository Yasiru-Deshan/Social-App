import home from "./pages/home/home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div>
      <Router>
        <Switch>
       <Route path='/' component={home} exact/>
    
        </Switch>
      </Router>
    </div>
  );
}

export default App;
