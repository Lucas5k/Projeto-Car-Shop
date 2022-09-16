import 'express-async-errors';
import express from 'express';
import errorHandler from './middleware/Error';
import routeCar from './Routers/routerCar';

const app = express();
app.use(express.json());
app.use('/cars', routeCar);
app.use(errorHandler);

export default app;
