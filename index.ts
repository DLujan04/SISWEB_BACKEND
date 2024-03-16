import express, { Express } from "express";
import morgan from 'morgan';
import apiRouter from './src/routes';  // Importa apiRouter en lugar de productRoutes

const app: Express = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiRouter);  // Monta apiRouter en '/api'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
