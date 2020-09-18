import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';
import CreateSessionService from '../services/CreateSessionService';

const authRouter = Router();
const createUser = new CreateUserService();
const createSession = new CreateSessionService();

authRouter.post('/signin', async (request, response) => {
  const { username, password } = request.body;

  const token = await createSession.execute({ username, password });

  return response.json(token);
});

authRouter.post('/signup', async (request, response) => {
  const { username, email, password } = request.body;

  const user = await createUser.execute({ username, email, password });

  return response.json(user);
});

export default authRouter;
