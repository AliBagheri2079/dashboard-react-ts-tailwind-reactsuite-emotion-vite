import { useEffect } from 'react';
import { useDarkMode } from 'usehooks-ts';
import {
  RouterProvider,
  createRouteConfig,
  createReactRouter,
} from '@tanstack/react-router';

import Layout from '@/layouts';
import Products from '@/pages/Products';
import Crypto from '@/pages/Crypto';
import Register from '@/pages/Register';
import NotFound from '@/pages/NotFound';

/*
? I know routes folder created for routing in server but
? I think this way is possible.
*/

const rootRoute = createRouteConfig();

/*
 * layout root routes
 */
const layoutRootRoute = rootRoute.createRoute({
  id: 'layout',
  component: Layout,
});
const indexRoute = layoutRootRoute.createRoute({
  path: '/',
  component: Products,
});
const cryptoRoute = layoutRootRoute.createRoute({
  path: '/crypto',
  component: Crypto,
});

/*
 * other routes
 */
const registerRoute = rootRoute.createRoute({
  path: '/register',
  component: Register,
});
const notFoundRoute = rootRoute.createRoute({
  path: '*',
  component: NotFound,
});

/*
 * configuration all routes
 */
const routeConfig = rootRoute.addChildren([
  layoutRootRoute.addChildren([indexRoute, cryptoRoute]),
  registerRoute,
  notFoundRoute,
]);
const router = createReactRouter({ routeConfig });

const ManageRouting = () => {
  const { isDarkMode } = useDarkMode();
  const isDarkMediaMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    if (isDarkMediaMode && isDarkMode) {
      document.body.setAttribute('theme', 'dark');
    } else {
      document.body.setAttribute('theme', 'light');
    }
  }, [isDarkMediaMode, isDarkMode]);

  useEffect(() => {
    localStorage.setItem('logged', 'false');
  }, []);

  return <RouterProvider router={router} />;
};

export default ManageRouting;
