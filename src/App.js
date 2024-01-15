import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

const App = () => {
  return (
    <Router>
      <MainNavigation></MainNavigation>
      <main>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/:placeId" exact>
            <UpdatePlace />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
