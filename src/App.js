import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Sobre from './pages/Sobre'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/sobre" component={Sobre} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
