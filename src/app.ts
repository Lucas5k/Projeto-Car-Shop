import 'express-async-errors';
import express from 'express';
import errorHandler from './middleware/Error';
import routeCar from './Routers/routerCar';
import routeMotorcycle from './Routers/routerMotocycle';

const app = express();
app.use(express.json());
app.use(routeCar);
app.use(routeMotorcycle);
app.use(errorHandler);

export default app;
