import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import NewMeetupPage from './pages/NewMeetup';
import TechniquesPage from './pages/Techniques';
import MainNavigation from './components/layout/MainNavigation';

import HomeIcon from '@material-ui/icons/Home';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact='true'>
          <HomePage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/techniques'>
          <TechniquesPage />
        </Route>
        
      </Switch>
    </div>
    );
}

export default App;
