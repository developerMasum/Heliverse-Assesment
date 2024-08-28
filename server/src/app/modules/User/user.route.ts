/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';

import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);

router.get('/', UserControllers.getAllUser);
router.get('/:id', UserControllers.getSingleUser);

router.delete(
  '/:id',

  UserControllers.deleteUser,
);
router.put(
  '/:id',

  UserControllers.updateUser,
);
router.get('/ids', UserControllers.getUsersByIds);

export const UserRoutes = router;
