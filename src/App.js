import logo from './logo.svg'; import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import NoMatch from './Component/NoMatch';
import VehicleRoute from './Component/VehicleRoute/VehicleRoute';
import LogIn from './Component/LogIn/LogIn';
import FinalRide from './Component/FinalRide/FinalRide';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/vehicles/:id/final">
            <FinalRide />
          </PrivateRoute>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <PrivateRoute path="/vehicles/:id">
            <VehicleRoute />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
