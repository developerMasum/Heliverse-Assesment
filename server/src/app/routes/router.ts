import { Router } from 'express';

const router = Router();
const moduleRoutes = [
  // {
  //   path: '/orders',
  //   route: orderRoute,
  // },
  // {
  //   path: '/customers',
  //   route: customerRoute,
  // },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
