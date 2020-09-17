import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(8080, () => {
  console.log('🚀 Server started on port 8080!');
});
