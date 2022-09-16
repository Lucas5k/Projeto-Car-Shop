import { Router } from 'express';
import ModelCar from '../models/modelCar';
import ServiceCar from '../services/serviceCar';
import ControllerCar from '../controllers/controllerCar';

const model = new ModelCar();
const service = new ServiceCar(model);
const controller = new ControllerCar(service);

const route = Router();

route.post('/', (req, res) => controller.create(req, res));

export default route;