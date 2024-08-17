import type { Route } from "next";

const routes = {
  home: {
    dashboard: "/" as Route<string>,
    details: "/home" as Route<string>,
    complete: "/home/complete" as Route<string>,
  },
  assessment: {
    dashboard: "/assessment" as Route<string>,
  },
};

export default routes;
