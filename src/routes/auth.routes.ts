import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const authRouter = Router();
const createUser = new CreateUserService();

authRouter.post('/signup', async (request, response) => {
  const { username, email, password } = request.body;

  const user = await createUser.execute({ username, email, password });

  delete user.password;

  return response.json(user);
});

export default authRouter;
