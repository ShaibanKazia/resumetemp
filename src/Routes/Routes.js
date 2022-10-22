import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "../Components/Home/Home";

export const Router = () => {
  return (
    <>
    <Home />
      {/* <Switch>
        <Route path="/" exact element={<Home />} />
      </Switch> */}
    </>
  );
};
