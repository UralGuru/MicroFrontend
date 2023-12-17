import React from "react";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/router/admin";
import { shopRoutes } from "@packages/shared/src/router/shop";


export const App = () => {
  return (
    <div data-test-id={'App'}>
      <h1>Application Main Page</h1>

      <div>
          <Link to={adminRoutes.about}>Admin</Link>
          &#9;
          <Link to={shopRoutes.main}>Shop</Link>
        </div>

        <Outlet />

    </div>
  );
};

export default App;