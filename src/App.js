import './App.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/details'>
          <Details/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App
