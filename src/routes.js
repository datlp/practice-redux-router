import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

const routes = [
  {
    path: "*",
    // component: AuthLayout,
    routes: [
      {
        path: "/movies",
        exact: true,
        component: lazy(() => import("./views/Homepage")),
      },
      {
        path: "/movie/:ID",
        exact: true,
        component: lazy(() => import("./views/Movies")),
      },
      {
        component: () => <Redirect to="/" />,
      },
    ],
  },
];
export default routes;
