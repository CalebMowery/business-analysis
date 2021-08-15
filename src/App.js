import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home';
import MaterialsPage from './pages/Materials';
import TechniquesPage from './pages/Techniques';
import MainNavigation from './components/layout/MainNavigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <Switch>
          <Route path='/' exact='true'>
            <HomePage />
          </Route>
          <Route path='/materials'>
            <MaterialsPage />
          </Route>
          <Route path='/techniques'>
            <TechniquesPage />
          </Route>
          
        </Switch>
      </div>
      );
  }
}

export default App;
