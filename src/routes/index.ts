import { Router } from 'express';

import authRouter from './auth.routes';
import welcomeRouter from './welcome.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/', welcomeRouter);
routes.use('/api/auth', authRouter);
routes.use('/api/test', usersRouter);

export default routes;
