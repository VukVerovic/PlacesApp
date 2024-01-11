import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlaces from "./places/pages/NewPlaces";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/places/new">
          <NewPlaces />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
