import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from './routes';
import AppError from './error/AppError';

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.use((request: Request, response: Response, next: NextFunction) => {
  const err = new AppError('Recurso não encontrado', 404);
  next(err);
});

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 500,
    message: 'Erro interno do servidor.',
  });
});

app.listen(8080, () => {
  console.log('🚀 Server started on port 8080!');
});
