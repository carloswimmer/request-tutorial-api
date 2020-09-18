import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';
import DecodeTokenService from '../services/DecodeTokenService';

const usersRouter = Router();
const usersRepository = new UsersRepository();
const decodeToken = new DecodeTokenService();

usersRouter.get('/user', async (request, response) => {
  const { authorization } = request.headers;

  const { id } = await decodeToken.execute({ authorization });

  const user = usersRepository.findById(id);

  return response.json(user);
});

usersRouter.get('/all', (request, response) => {
  const users = usersRepository.findAll();

  return response.json(users);
});

export default usersRouter;
