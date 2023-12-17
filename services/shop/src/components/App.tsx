import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { shopRoutes } from "@packages/shared/src/router/shop";


export const App = () => {

  return (
    <div>
      <h1>SHOP MODULE</h1>
        <Link to={shopRoutes.orders}>OrdersPage</Link>
        <br />
      <Outlet />
    </div>
  );
};