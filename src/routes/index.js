import React from "react";
import Home from "../pages/Home";
import Info from "../pages/Info";
import SurahPage from "../pages/Surah";
import { Switch, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/surah/:id" component={SurahPage} />
    </Switch>
  );
};
