import { Router } from 'express';

import PostsRepository from '../repositories/PostsRepository';

const postsRouter = Router();
const postsRepository = new PostsRepository();

postsRouter.get('/', (request, response) => {
  const { userId } = request.query;

  const posts = userId
    ? postsRepository.findByUserId(Number(userId))
    : postsRepository.findAll();

  return response.json(posts);
});

postsRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const post = postsRepository.findById(Number(id));

  return response.json(post);
});

postsRouter.post('/', (request, response) => {
  const postRequest = request.body;

  const post = postsRepository.create(postRequest);

  return response.json(post);
});

postsRouter.post('/:id', (request, response) => {
  const { id } = request.params;
  const post = request.body;

  postsRepository.update(Number(id), post);

  return response.status(204).json({});
});

postsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const posts = postsRepository.delete(Number(id));

  return posts ? response.json(posts) : response.status(404).json({});
});

export default postsRouter;
