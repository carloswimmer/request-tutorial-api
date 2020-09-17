import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const authRouter = Router();
const usersRepository = new UsersRepository();

authRouter.post('/signup', (request, response) => {
  const { username, email, password } = request.body;

  const user = usersRepository.create(username, email, password);

  delete user.password;

  return response.json(user);
});

export default authRouter;
