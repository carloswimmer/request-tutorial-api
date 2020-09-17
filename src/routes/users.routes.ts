import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/all', (request, response) => {
  const users = usersRepository.findAll();

  return response.json(users);
});

usersRouter.get('/user', (request, response) => {
  const { token } = request.headers;

  const users = usersRepository.findAll();

  return response.json(users);
});

export default usersRouter;
