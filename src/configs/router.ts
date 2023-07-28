// built-ins
import { Router } from '@tanstack/router';

// routes
import { rootRoute } from 'src/App';
import { aboutRoute } from '~pages/About';
import { homeRoute, notFoundRoute } from '~pages/Home';

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, notFoundRoute]);

// Create the router using your route tree
const router = new Router({ routeTree });

export default router;
