import express, { Application, Request, Response, NextFunction } from 'express';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import priceRouter from './routes/priceRouter';

import 'dotenv/config';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.redirect('/price');
});
app.use('/price', priceRouter);

app.use(ErrorMiddleware);

app.listen(process.env.PORT || 4000, () => console.log(`Server is running at ${__dirname}`));