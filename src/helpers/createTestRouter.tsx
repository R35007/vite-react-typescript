// built-ins
import { Outlet, RootRoute, Route, Router, createMemoryHistory } from '@tanstack/router';

export default function createTestRouter(component: JSX.Element): Router {
  // Create a root route
  const rootRoute = new RootRoute({ component: Outlet });

  // Create a index route
  const indexRoute = new Route({ component: () => component, getParentRoute: () => rootRoute, path: '/' });

  // create route tree
  const routeTree = rootRoute.addChildren([indexRoute]);

  // Create the router using your route tree
  const router = new Router({ history: createMemoryHistory(), routeTree });

  return router;
}
