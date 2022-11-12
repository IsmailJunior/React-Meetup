import React from "react";
import { Route, Switch } from "react-router-dom";
import {AllMeetups, NewMeetup, Favorites, Layout} from './index'

export default function App ()
{
  return (

      <Layout>
        <Switch>
           <Route path='/' exact>
              <AllMeetups />
            </Route>
            <Route path='/new-meetup'>
              <NewMeetup />
            </Route>
            <Route path='/favorites'>
              <Favorites />
            </Route>
        </Switch>
      </Layout>
  );
}



