import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  AllMeetups,
  NewMeetup,
  Favorites,
  Layout,
  AuthPage,
  HomePage,
  ProfilePage,
} from "./index";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Layout>
  );
}



