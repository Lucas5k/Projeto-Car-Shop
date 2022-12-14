import { Router } from 'express';
import ModelMotorcycle from '../models/modelMotorcycle';
import ServiceMotorcycle from '../services/serviceMotorcycle';
import ControllerMotorcycle from '../controllers/controllerMotorcycle';

const model = new ModelMotorcycle();
const service = new ServiceMotorcycle(model);
const controller = new ControllerMotorcycle(service);

const route = Router();

route.post('/motorcycles', (req, res) => controller.create(req, res));
route.get('/motorcycles', (req, res) => controller.read(req, res));
route.get('/motorcycles/:id', (req, res) => controller.readOne(req, res));
route.delete('/motorcycles/:id', (req, res) => controller.delete(req, res));

export default route;