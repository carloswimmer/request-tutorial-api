import { Router } from 'express';
import { uuid } from 'uuidv4';

const welcomeRouter = Router();

welcomeRouter.get('/', (request, response) => {
  return response.json({ message: 'Welcome to Hugo Pedro Application!' });
});

export default welcomeRouter;
