import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inventory from "../scenes/Inventory";
import Inventory2 from "../scenes/Inventory2";
import { Alert } from '../components/Alert';



export default function Routes() {
  

  return (
    <BrowserRouter>
     <>
     <Alert />
      <Switch>
        <Route path="/" exact component={Inventory} />
        <Route path="/page2"  component={Inventory2} />
      </Switch>
      </>
    </BrowserRouter>
  );
}
