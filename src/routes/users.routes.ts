import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', (request, response) => {
  const users = usersRepository.findAll();

  return response.json(users);
});

usersRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const user = usersRepository.findById(Number(id));

  return response.json(user);
});

usersRouter.post('/', (request, response) => {
  const userRequest = request.body;

  const user = usersRepository.create(userRequest);

  return response.json(user);
});

usersRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const user = request.body;

  usersRepository.update(Number(id), user);

  return response.status(204).json({});
});

usersRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const users = usersRepository.delete(Number(id));

  return users ? response.json(users) : response.status(404).json({});
});

export default usersRouter;
