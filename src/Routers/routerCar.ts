import { Router } from 'express';
import ModelCar from '../models/modelCar';
import ServiceCar from '../services/serviceCar';
import ControllerCar from '../controllers/controllerCar';

const model = new ModelCar();
const service = new ServiceCar(model);
const controller = new ControllerCar(service);

const route = Router();

route.post('/cars', (req, res) => controller.create(req, res));
route.get('/cars', (req, res) => controller.read(req, res));
route.get('/cars/:id', (req, res) => controller.readOne(req, res));
route.put('/cars/:id', (req, res) => controller.update(req, res));
route.delete('/cars/:id', (req, res) => controller.delete(req, res));

export default route;